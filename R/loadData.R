

# commands to modify input data
modifyData <- function(data){
  
  # #removing edge-t duplicates
  # data <- data[!data$variable %in% c("ES|Transport|Freight", "ES|Transport|Pass", "FE|Transport", "FE|Transport|Electricity", "FE|Transport|Gases", "FE|Transport|Hydrogen", "FE|Transport|Liquids", "FE|Transport|Freight", "FE|Transport|Freight|Electricity", "FE|Transport|Freight|Gases", "FE|Transport|Freight|Hydrogen", "FE|Transport|Freight|Liquids", "FE|Transport|Pass", "FE|Transport|Pass|Electricity", "FE|Transport|Pass|Gases", "FE|Transport|Pass|Hydrogen", "FE|Transport|Pass|Liquids", "FE|Transport|w/o Bunkers", "FE|Transport|w/o Bunkers|Electricity", "FE|Transport|w/o Bunkers|Gases", "FE|Transport|w/o Bunkers|Hydrogen", "FE|Transport|w/o Bunkers|Liquids", "ES|Transport|Road", "ES|Transport|Road", "ES|Transport|Pass", "ES|Transport|Freight", "FE|Transport|Pass", "FE|Transport|Freight", "FE|Transport", "FE|Transport|w/o bunkers", "FE|Transport|Pass|Liquids", "FE|Transport|Pass|Hydrogen", "FE|Transport|Pass|Gases", "FE|Transport|Pass|Electricity", "FE|Transport|Freight|Liquids", "FE|Transport|Freight|Hydrogen", "FE|Transport|Freight|Gases", "FE|Transport|Freight|Electricity", "FE|Transport|Liquids", "FE|Transport|Hydrogen", "FE|Transport|Gases", "FE|Transport|Electricity", "FE|Transport|w/o bunkers|Liquids", "FE|Transport|w/o bunkers|Hydrogen", "FE|Transport|w/o bunkers|Gases", "FE|Transport|w/o bunkers|Electricity"),]
  
  #remove pluses
  data <- remind2::deletePlus(data)
  
  #remove number at the beginning of the scenario name
  data$scenario <- gsub("^\\d\\d\\_*","",data$scenario)
  #remove "0b" at the beginning of the scenario name
  data$scenario <- gsub("^0b_","",data$scenario)
  data$scenario <- gsub("^0c_","",data$scenario)
  #remove suffix EU27
  data$scenario <- gsub("_EU27","",data$scenario)
  
  #scenario dimensions
  tgt2050List <- c(
    "Npi",
    "Nzero"
  )
  tgt2030List <- c(
    "55","57","59","61","63","65"
  )
  effList <- c(
    #"" = "reference"
    "ff55Eff" = "FitFor55 eff",
    "ff55Effrev" = "FitFor55 eff",
    "pEUEff"  = "RePowerEU eff",
    "RpEUEff"  = "RePowerEU eff"
  )
  bioLimList <- c(
    "bio7p5" = "BioLim7.5",
    "bio12"  = "BioLim12"
  )
  CCSList <- c(
    "limCC" = "limCCS" #,
    #"bio12"  = "BioLim12"
  )
  data <- data %>%
    mutate(
      tgt2050 = str_extract(scenario,"(Npi|Nzero)"),
      tgt2030 = str_extract(scenario,"(55|57|59|61|63|65)"),
      efficiency = effList[str_extract(scenario,"(ff55Eff|ff55Effrev|pEUEff|RpEUEff)")],
      bioLim = bioLimList[str_extract(scenario,"(bio7p5|bio12)")],
      limCCS = CCSList[str_extract(scenario,"(limCC)")]) %>%
    replace_na(
      list(bioLim = "HiBio", efficiency = "reference", limCCS="CCS", tgt2030 = "none"))
  
  #order
  data$tgt2050 <- factor(data$tgt2050, levels=c("Npi","Nzero"))
  data$tgt2030 <- factor(data$tgt2030, levels=c("none",55,57,59,61,63,65))
  data$efficiency <- factor(data$efficiency, levels=c("reference","FitFor55 eff","FitFor55 rev eff","RePowerEU eff"))
  data$bioLim <- factor(data$bioLim, levels=c("BioLim7.5","BioLim12","HiBio"))
  
  return(data)
}

addVariables <- function(data){
  
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|CDR|Other CDR`" = "`Emi|CO2|CDR|DACCS` + `Emi|CO2|CDR|EW` + `Emi|CO2|CDR|Industry CCS|Synthetic Fuels`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Electricity Share`" = "`FE|Electricity` / `FE`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Transport|Electricity Share`" = "`FE|Transport|Electricity` / `FE|Transport`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Industry|Electricity Share`"  = "`FE|Industry|Electricity`  / `FE|Industry`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Buildings|Electricity Share`" = "`FE|Buildings|Electricity` / `FE|Buildings`", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Transport|Liquids Fossil Share`" = "`FE|Transport|Liquids|Fossil` / `FE|Transport`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Transport|Gases Fossil Share`" = "`FE|Transport|Gases|Fossil` / `FE|Transport`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Transport|Fossil Share`" = "`FE|Transport|Liquids|Fossil` + `FE|Transport|Gases|Fossil`", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Industry|Liquids Fossil Share`" = "`FE|Industry|Liquids|Fossil` / `FE|Industry`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Industry|Gases Fossil Share`" = "`FE|Industry|Gases|Fossil` / `FE|Industry`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Industry|Solids Fossil Share`" = "`FE|Industry|Solids|Fossil` / `FE|Industry`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Industry|Fossil Share`" = "`FE|Industry|Liquids|Fossil` + `FE|Industry|Gases|Fossil` + `FE|Industry|Solids|Fossil`", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Buildings|Liquids Fossil Share`" = "`FE|Buildings|Liquids|Fossil` / `FE|Buildings`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Buildings|Gases Fossil Share`" = "`FE|Buildings|Gases|Fossil` / `FE|Buildings`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Buildings|Solids Fossil Share`" = "`FE|Buildings|Solids|Fossil` / `FE|Buildings`", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Buildings|Fossil Share`" = "`FE|Buildings|Liquids|Fossil` + `FE|Buildings|Gases|Fossil` + `FE|Buildings|Solids|Fossil`", units = "%", only.new=T))
  
  #data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|Renewables Share`" = " 1 - ( (`SE|Electricity|Coal` + `SE|Electricity|Gas` + `SE|Electricity|Oil` + `SE|Electricity|Nuclear`) / `SE|Electricity`)", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|Renewables Share`" = "( (`SE|Electricity|Geothermal` + `SE|Electricity|Hydro` + `SE|Electricity|Wind` + `SE|Electricity|Solar` + `SE|Electricity|Biomass`) / `SE|Electricity`)", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|carbon-free`" = "( (`SE|Electricity` - `SE|Electricity|Coal|w/o CC` - `SE|Electricity|Gas|w/o CC` - `SE|Electricity|Oil|w/o CC`) / `SE|Electricity`)", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Renewables Share`" = " ( ( (`FE|Electricity` * `SE|Electricity|Renewables Share`) + `FE|Gases|Biomass` + `FE|Liquids|Biomass` + `FE|Solids|Biomass`) / `FE`)", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Final Energy|Share of renewables in gross demand|Rough estimation (Percent)`" = " ( (`PE|Non-Biomass Renewables` + `PE|Biomass`) / `FE`)", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`SE|Renewables Share`" = "( (`SE|Electricity|Geothermal` + `SE|Electricity|Hydro` + `SE|Electricity|Wind` + `SE|Electricity|Solar` + `SE|Electricity|Biomass` + `SE|Hydrogen|Biomass` + `SE|Gases|Biomass` + `SE|Heat|Geothermal` + `SE|Heat|Solar` + `SE|Heat|Biomass` + `SE|Liquids|Biomass` + `SE|Solids|Biomass`) / `SE`)", units = "%", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|Residual Fossil|Demand|Industry`" = "`Emi|GHG|Gross|Energy|Demand|Industry` + `Carbon Management|Storage|Industry Energy|Fossil`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|Residual Fossil|Industrial Processes`" = "`Emi|GHG|Industrial Processes` + `Carbon Management|Storage|Industry Process`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|Residual Fossil|Energy|Supply|Electricity`" = "`Emi|GHG|Gross|Energy|Supply|Electricity` + `Carbon Management|Storage|Fossil|Pe2Se|Electricity w/ couple prod`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|Residual Fossil|Energy|Supply|Non-electric`" = "`Emi|GHG|Gross|Energy|Supply|Non-electric` + `Carbon Management|Storage|Fossil|Pe2Se|Hydrogen w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Liquids w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Gases w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Solids w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Heat w/ couple prod`", units = "Mt CO2/yr", only.new=T)) 
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|Residual Fossil`" = "`Emi|GHG|Residual Fossil|Energy|Supply|Electricity` + `Emi|GHG|Residual Fossil|Energy|Supply|Non-electric` + `Emi|CO2|Energy|Demand|Transport|International Bunkers` + `Emi|GHG|Energy|Demand|Transport` + `Emi|GHG|Energy|Demand|Buildings` + `Emi|GHG|Residual Fossil|Demand|Industry` + `Emi|GHG|Residual Fossil|Industrial Processes` + `Emi|GHG|Agriculture` + `Emi|GHG|Waste`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|Residual Fossil|Demand|Industry`" = "`Emi|CO2|Gross|Energy|Demand|Industry` + `Carbon Management|Storage|Industry Energy|Fossil`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|Residual Fossil|Industrial Processes`" = "`Emi|CO2|Industrial Processes` + `Carbon Management|Storage|Industry Process`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|Residual Fossil|Energy|Supply|Electricity`" = "`Emi|CO2|Gross|Energy|Supply|Electricity` + `Carbon Management|Storage|Fossil|Pe2Se|Electricity w/ couple prod`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|Residual Fossil|Energy|Supply|Non-electric`" = "`Emi|CO2|Gross|Energy|Supply|Non-electric` + `Carbon Management|Storage|Fossil|Pe2Se|Hydrogen w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Liquids w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Gases w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Solids w/ couple prod` + `Carbon Management|Storage|Fossil|Pe2Se|Heat w/ couple prod`", units = "Mt CO2/yr", only.new=T)) 
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|Residual Fossil`" = "`Emi|CO2|Residual Fossil|Energy|Supply|Electricity` + `Emi|CO2|Residual Fossil|Energy|Supply|Non-electric` + `Emi|CO2|Energy|Demand|Transport|International Bunkers` + `Emi|CO2|Energy|Demand|Transport` + `Emi|CO2|Energy|Demand|Buildings` + `Emi|CO2|Residual Fossil|Demand|Industry` + `Emi|CO2|Residual Fossil|Industrial Processes`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|CDR|Other CDR`" = "`Emi|CO2|CDR|DACCS` + `Emi|CO2|CDR|EW` + `Emi|CO2|CDR|Industry CCS|Synthetic Fuels`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|Storage|Industry CCS`" = "`Carbon Management|Storage|Industry Energy` + `Carbon Management|Storage|Industry Process`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Share of atmosferic CO2`" = " -1 * ( `Emi|CO2|CDR|BECCS` + `Emi|CO2|CDR|DACCS` + `Emi|CO2|CDR|Industry CCS|Synthetic Fuels` ) / `Carbon Management|Storage` ", units = "%", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|CCS of fossil origin`" = " ( 1- `Share of atmosferic CO2` ) * `Carbon Management|Storage`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|atmospheric/biogenic CO2 - CDR`" = " `Share of atmosferic CO2` * `Carbon Management|Storage`", units = "Mt CO2/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|Non-Fossil`" = "`SE|Electricity|Biomass` + `SE|Electricity|Geothermal` + `SE|Electricity|Hydro` + `SE|Electricity|Hydrogen` + `SE|Electricity|Nuclear` + `SE|Electricity|Solar` + `SE|Electricity|Wind`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|Fossil`" = "`SE|Electricity|Coal` + `SE|Electricity|Gas` + `SE|Electricity|Oil`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|share Non-Fossil`" = "`SE|Electricity|Non-Fossil` / `SE|Electricity`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`SE|Electricity|share Fossil`" = "`SE|Electricity|Fossil` / `SE|Electricity`", units = "EJ/yr", only.new=T))
  
  data <- rbind(data,data %>% calc_addVariable("`FE|Transport|Electricity|Non-Fossil`" = "`SE|Electricity|share Non-Fossil` * `FE|Transport|Electricity`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`FE|Buildings|Electricity|Non-Fossil`" = "`SE|Electricity|share Non-Fossil` * `FE|Buildings|Electricity`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`FE|Industry|Electricity|Non-Fossil`" = "`SE|Electricity|share Non-Fossil` * `FE|Industry|Electricity`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`FE|Transport|Electricity|Fossil`" = "`SE|Electricity|share Fossil` * `FE|Transport|Electricity`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`FE|Buildings|Electricity|Fossil`" = "`SE|Electricity|share Fossil` * `FE|Buildings|Electricity`", units = "EJ/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`FE|Industry|Electricity|Fossil`" = "`SE|Electricity|share Fossil` * `FE|Industry|Electricity`", units = "EJ/yr", only.new=T))
  
  # Intra-region bunkers
  if(!("Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region" %in% unique(data$variable))){
    data <- rbind(data,data %>% filter(region %in% c("DEU","ECE","ECS","ENC","ESC","ESW","EWN","FRA","EU27")) %>% calc_addVariable( "`Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region`"  = "`Emi|CO2|Energy|Demand|Transport|International Bunkers` * 0.35", units = "Mt CO2/yr", only.new=T))
  }
  
  return(data)
}

#loading data

# data and output folders
folders <- file.info(list.files(path="./data", full.names = T))
dataFolder <- rownames(folders)[which.max(folders$mtime)] 
outFolder <- paste0("./output/",gsub("./data/","",dataFolder))
dir.create(outFolder, recursive = TRUE, showWarnings = FALSE)

outFolder_conference <- paste0("./output/",gsub("./data/","",dataFolder), "/conference")
dir.create(outFolder_conference, recursive = TRUE, showWarnings = FALSE)

if((forceUpdateData) || ! file.exists(paste0(dataFolder,"/data_EU27andDEU.rds"))){
  
  ### Load data 
  
  if(! file.exists(paste0(dataFolder,"/data.rds"))){
    # Reading all mif files and adding to a single df
    mifFiles <- list.files(path=dataFolder, pattern="*.mif", full.names=TRUE, recursive=FALSE)
    dfFull <- read.quitte(mifFiles)
    
    saveRDS(dfFull,paste0(dataFolder,"/data.rds"))
  } else {
    dfFull <- readRDS(paste0(dataFolder,"/data.rds"))
  }
  
  #reduced EU27 and DEU core data
  dfraw <- dfFull[dfFull$region %in% c("EU27","DEU") & dfFull$period <= 2060,]
  dfraw <- modifyData(dfraw)
  dfraw <- addVariables(dfraw)
  saveRDS(dfraw,paste0(dataFolder,"/data_EU27andDEU.rds"))
  
  if(! file.exists(paste0(dataFolder,"/hist.rds"))){
    hist <- read.quitte("./hist/historical.mif") # historical mif with EU27 (including Ireland)
    saveRDS(hist,paste0(dataFolder,"/hist.rds"))
  } else {
    hist <- readRDS(paste0(dataFolder,"/hist.rds"))
  }
  
  if(! file.exists(paste0(dataFolder,"/addHist.rds"))){
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
             Variable = "ETS price")
    
    #https://ec.europa.eu/eurostat/databrowser/view/NRG_BAL_C__custom_6123838/default/table?lang=en
    #Dataset: 	Complete energy balances [NRG_BAL_C__custom_6124583]	
    #Energy balance		Final energy consumption (Europe 2020-2030)
    #Standard international energy product classification (SIEC)		Total
    #Unit of measure		Terajoule
    addHist$FE_consumption <- data.frame(period = c(1990:2021),
                                         value  = c(39872768.950, 39884282.349, 38793650.620, 38838313.120, 38591650.292, 39373228.680, 41059090.674, 40692882.848, 40922953.323, 40820049.074, 41024315.462, 41987927.236, 41709727.739, 42962889.414, 43386902.160, 43595363.527, 43787484.148, 43061938.264, 43405077.534, 41065386.721, 42893897.325, 41223290.963, 41137929.696, 41045252.664, 39305081.961, 40104102.926, 40900176.188, 41407462.780, 41514773.205, 41280508.826, 37943008.147, 40546073.771))
    
    #https://www.eea.europa.eu/en/datahub/datahubitem-view/3b7fe76c-524a-439a-bfd2-a6e4046302a2
    addHist$eeaEmissions <- read.csv("./hist/UNFCCC_v26.csv", stringsAsFactors=FALSE, fileEncoding="latin1") %>% 
      mutate(emissions = replace_na(emissions, 0)) %>%
      mutate(Country = ifelse(Country == "EU-27","EU27",Country),
             emissions = suppressWarnings(as.numeric(emissions / 1000)),
             Year = suppressWarnings(as.numeric(Year))) %>%
      filter(!is.na(Year)) %>%
      arrange(Country,Year,Sector_name)
    #adding intra-eu aviation estimation
    addHist$eeaEmissions <- rbind(addHist$eeaEmissions,
                                  addHist$eeaEmissions %>% filter(Sector_name == "1.D.1 - International Bunkers") %>% mutate(emissions = emissions*0.35, Sector_name = "Intra-EU International Aviation", Sector_code = "-", Parent_sector_code = "-"))
    
    saveRDS(addHist,paste0(dataFolder,"/addHist.rds"))
  } else {
    addHist <- readRDS(paste0(dataFolder,"/addHist.rds"))
  }
  
} else {
  
  #dfFull <- readRDS(paste0(dataFolder,"/data.rds"))
  
  dfraw <- readRDS(paste0(dataFolder,"/data_EU27andDEU.rds"))
  
  hist <- readRDS(paste0(dataFolder,"/hist.rds"))
  
  addHist <- readRDS(paste0(dataFolder,"/addHist.rds"))
  
}



