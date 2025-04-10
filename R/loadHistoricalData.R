
loadAdditionalHistoricalData <- function(path){
  if(! file.exists(paste0(path,"/addHist.rds"))){
    # additional historical data
    addHist <- list()
    #renewables shares historical data - eurostat
    #https://ec.europa.eu/eurostat/web/energy/database > Sustainable Development indicators Goal 7 - Affordable and clean energy > Share of renewable energy in gross final energy consumption by sector
    #https://ec.europa.eu/eurostat/cache/metadata/en/sdg_07_40_esmsip2.htm
    addHist$res <- read.csv2("./hist/renewablesShares.csv", stringsAsFactors = FALSE,check.names=FALSE) %>%
      pivot_longer(-type,names_to = "period", values_to = "value") %>%
      mutate(period = as.numeric(period),
             value = as.numeric(value))

    addHist$ETS_price <- read.csv("./hist/Carbon Emissions Futures Historical Data.csv") %>% #downloaded from https://www.investing.com/commodities/carbon-emissions-historical-data
      mutate(Date = as.Date(Date,format="%m/%d/%Y"),
             Price = as.numeric(Price),
             variable = "ETS price")

    #https://ec.europa.eu/eurostat/databrowser/view/NRG_BAL_C__custom_6123838/default/table?lang=en
    #Dataset: 	Complete energy balances [NRG_BAL_C__custom_6124583]
    #Energy balance		Final energy consumption (Europe 2020-2030)
    #Standard international energy product classification (SIEC)		Total
    #Unit of measure		Terajoule
    addHist$FE_consumption <- data.frame(period = c(1990:2022),
                                         value  = c(39872769.14, 39884283.38, 38793652.46, 38838315.81, 38591654.06, 39373233.31, 41059096.04, 40692888.88, 40922960.92, 40820057.93,
                                                    41024326.68, 41987629.93, 41709757.85, 42962908.94, 43386870.54, 43595062.82, 43787162.83, 43061606.56, 43404792.31, 41065315.12,
                                                    42923730.71, 41251193.45, 41164990.35, 41074138.59, 39320940.69, 40136464.77, 40931954.98, 41443151.18, 41545190.01, 41299901.69,
                                                    37945230.19, 40510096.32, 39360263.65))
    addHist$FE_consumption <- addHist$FE_consumption %>% #TJ
      mutate(value = value/1000000) #EJ
    
    #https://www.eea.europa.eu/en/datahub/datahubitem-view/3b7fe76c-524a-439a-bfd2-a6e4046302a2
    #addHist$eeaEmissions <- read.csv("./hist/UNFCCC_v26.csv", stringsAsFactors=FALSE, fileEncoding="latin1") %>%
    addHist$eeaEmissions <- read.csv("./hist/UNFCCC_v27.csv", stringsAsFactors=FALSE, fileEncoding="latin1") %>%
      mutate(emissions = replace_na(emissions, 0)) %>%
      mutate(Country = ifelse(Country == "EU-27","EU27",Country),
             emissions = suppressWarnings(as.numeric(emissions / 1000)),
             Year = suppressWarnings(as.numeric(Year))) %>%
      filter(!is.na(Year)) %>%
      arrange(Country,Year,Sector_name)
    #adding intra-eu aviation estimation
    addHist$eeaEmissions <- rbind(addHist$eeaEmissions,
                                  addHist$eeaEmissions %>% filter(Sector_name == "1.D.1 - International Bunkers") %>% mutate(emissions = emissions*0.35, Sector_name = "Intra-EU International Aviation", Sector_code = "-", Parent_sector_code = "-"))

    addHist$FE_eurostat <- read.csv2("./hist/nrg_bal_c_page_spreadsheet.csv", stringsAsFactors = FALSE,check.names=FALSE) %>%
      mutate(period = as.numeric(period),
             value = as.numeric(value))
      
    saveRDS(addHist,paste0(path,"/addHist.rds"))
  } else {
    addHist <- readRDS(paste0(path,"/addHist.rds"))
  }
  return(addHist)
}


print("Loading REMIND historical data")
if(! file.exists(paste0(dataFolder,"/hist.rds"))){
  hist <- read.quitte("./hist/historical.mif") # historical mif with EU27 (including Ireland)
  saveRDS(hist,paste0(dataFolder,"/hist.rds"))
} else {
  hist <- readRDS(paste0(dataFolder,"/hist.rds"))
}
print("Loading additional historical data")
addHist <- loadAdditionalHistoricalData(dataFolder)



