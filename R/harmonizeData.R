
#harmonizing data
harmonizeData <- function(data,scaleFactor){ #,nzero=NULL
  
  # scaling emission variables by 95% to match historical values
  # Total net emissions with international transport (EEA) (https://www.eea.europa.eu/data-and-maps/data/data-viewers/eea-greenhouse-gas-projections-data-viewer)
  # 2005	  2010	  2015	  2020
  # 4485.2	4072.8	3777.4	3527.5
  #data[data$variable == "Emi|GHG|w/ Bunkers|LULUCF national accounting" & data$region == "EU27" & data$scenario == "06_NZero"  & data$period %in% c("2005","2010","2015","2020"),]$value*0.95
  data[data$variable %in% grep("Emi\\|", unique(data$variable), value = TRUE),]$value <- data[data$variable %in% grep("Emi\\|", unique(data$variable), value = TRUE),]$value / scaleFactor
  data[data$variable %in% grep("Carbon Management\\|", unique(data$variable), value = TRUE),]$value <- data[data$variable %in% grep("Carbon Management\\|", unique(data$variable), value = TRUE),]$value / scaleFactor
  
  # #copying prices from NZero_bioLim7p5 to other scenarios
  # if (is.null(nzero)){
  #   nzero <- data 
  # }
  # 
  # #lapply(unique(data$scenario), function(scen){
  # for(scen in unique(data$scenario)){
  #   if(grepl("flex",scen)){
  #     data[data$variable == "Price|Carbon" & data$scenario == scen & data$period %in% c(2005,2010,2015,2020),]$value <- nzero[nzero$variable == "Price|Carbon" & nzero$scenario == "NZero_bioLim7p5" & nzero$period %in% c(2005,2010,2015,2020),]$value
  #   } else if(grepl("def",scen)){
  #     data[data$variable == "Price|Carbon" & data$scenario == scen & data$period %in% c(2005,2010,2015,2020,2025),]$value <- nzero[nzero$variable == "Price|Carbon" & nzero$scenario  == "NZero_bioLim7p5" & nzero$period %in% c(2005,2010,2015,2020,2025),]$value
  #   } else if(grepl("rigid",scen)){
  #     data[data$variable == "Price|Carbon" & data$scenario == scen & data$period %in% c(2005,2010,2015,2020,2025,2030),]$value <- nzero[nzero$variable == "Price|Carbon" & nzero$scenario  == "NZero_bioLim7p5" & nzero$period %in% c(2005,2010,2015,2020,2025,2030),]$value
  #   }
  # }
  # #})
  
  
  #Adjust gas trade to real world magnitudes
  #https://ec.europa.eu/eurostat/databrowser/bookmark/ff60b17b-792b-4a89-b352-fe04bcf2dbac?lang=en
  prodPeGas <- left_join(
    data %>% filter(region == "EU27")  %>% calc_addVariable("`Prod|PE|Gas`" = "`PE|Gas` - `Trade|Imports|Gas` + `Trade|Exports|Gas`", units = "EJ/yr", only.new=T)
    ,
    data.frame(period = seq(2005,2060,5),
               max = c(4.53, 4.53, 3.70, 1.44, 1.22, 1, 0.75, 0.50, 0.50, 0.50, 0.50, 0.50))
    ,
    by = join_by(period == period)
  ) %>% rowwise() %>% mutate(value = min(value, max)) %>% select(-max) 
  
  ExportsAdj <- data %>% filter(variable %in% "Trade|Exports|Gas", region == "EU27") %>% mutate(value = value + ifelse(period <= 2010, 1, 8), variable = "Trade|Exports|Gas|Adj")
  
  data <- rbind(data,
              prodPeGas,
              ExportsAdj)
  
  data <- rbind(data,
              data %>% filter(region == "EU27")  %>% calc_addVariable("`Trade|Imports|Gas|Adj`" = "`PE|Gas` - `Prod|PE|Gas` + `Trade|Exports|Gas|Adj`", units = "EJ/yr", only.new=T)
  )
  
  return(data)
}

if((forceUpdateData) || ! file.exists(paste0(dataFolder,"/data_harmonized_EU27andDEU.rds"))){
  
  df <- harmonizeData(dfraw,scaleFactor)
  saveRDS(df,paste0(dataFolder,"/data_harmonized_EU27andDEU.rds"))
  
} else {
  
  df <- readRDS(paste0(dataFolder,"/data_harmonized_EU27andDEU.rds"))
  
}