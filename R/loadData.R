

# commands to modify input data
modifyData <- function(data){

  # #removing edge-t duplicates
  # data <- data[!data$variable %in% c("ES|Transport|Freight", "ES|Transport|Pass", "FE|Transport", "FE|Transport|Electricity", "FE|Transport|Gases", "FE|Transport|Hydrogen", "FE|Transport|Liquids", "FE|Transport|Freight", "FE|Transport|Freight|Electricity", "FE|Transport|Freight|Gases", "FE|Transport|Freight|Hydrogen", "FE|Transport|Freight|Liquids", "FE|Transport|Pass", "FE|Transport|Pass|Electricity", "FE|Transport|Pass|Gases", "FE|Transport|Pass|Hydrogen", "FE|Transport|Pass|Liquids", "FE|Transport|w/o Bunkers", "FE|Transport|w/o Bunkers|Electricity", "FE|Transport|w/o Bunkers|Gases", "FE|Transport|w/o Bunkers|Hydrogen", "FE|Transport|w/o Bunkers|Liquids", "ES|Transport|Road", "ES|Transport|Road", "ES|Transport|Pass", "ES|Transport|Freight", "FE|Transport|Pass", "FE|Transport|Freight", "FE|Transport", "FE|Transport|w/o bunkers", "FE|Transport|Pass|Liquids", "FE|Transport|Pass|Hydrogen", "FE|Transport|Pass|Gases", "FE|Transport|Pass|Electricity", "FE|Transport|Freight|Liquids", "FE|Transport|Freight|Hydrogen", "FE|Transport|Freight|Gases", "FE|Transport|Freight|Electricity", "FE|Transport|Liquids", "FE|Transport|Hydrogen", "FE|Transport|Gases", "FE|Transport|Electricity", "FE|Transport|w/o bunkers|Liquids", "FE|Transport|w/o bunkers|Hydrogen", "FE|Transport|w/o bunkers|Gases", "FE|Transport|w/o bunkers|Electricity"),]

  #remove pluses
  #data <- remind2::deletePlus(data)

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
    "55","57","59"
  )
  effList <- c(
    #"" = "reference"
    "eedEff" = "EED 2018 Eff",
    "ff55Eff" = "FitFor55 eff",
    "RpEUEff"  = "RePowerEU eff"
  )

  bioLimList <- c(
    "bio4" = "BioLim4",
    "bio7p5" = "BioLim7.5",
    "bio12"  = "BioLim12",
    "bio20" = "BioLim20"
  )

  limList <- c(
    "limCC" = "limCCS",
    "limH2" = "limH2",
    "limVRE" = "limVRE"
  )

  data <- data %>%
    mutate(
      tgt2050 = str_extract(scenario,"(Npi|Nzero)"),
      tgt2030 = str_extract(scenario,"(55|57|59)"),
      efficiency = effList[str_extract(scenario,"(eedEff|ff55Eff|RpEUEff)")],
      bioLim = bioLimList[str_extract(scenario,"(bio4|bio7p5|bio12|bio20)")],
      lim = limList[str_extract(scenario,"(limCC|limH2|limVRE)")]) %>%
    replace_na(
      list(bioLim = "HiBio", efficiency = "reference", tgt2030 = "none", lim = "default")
      )

  #order
  data$tgt2050 <- factor(data$tgt2050, levels=c("Npi","Nzero"))
  data$tgt2030 <- factor(data$tgt2030, levels=c("none",55,57,59))
  data$efficiency <- factor(data$efficiency, levels=c("reference","EED 2018 Eff","FitFor55 eff","RePowerEU eff"))
  data$bioLim <- factor(data$bioLim, levels=c("BioLim4","BioLim7.5","BioLim12","BioLim20","HiBio"))

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
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|Carbon Capture|Industry`" = "`Carbon Management|Carbon Capture|Industry Energy` + `Carbon Management|Carbon Capture|Industry Process`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|Carbon Capture|Industry and Waste`" = "`Carbon Management|Carbon Capture|Industry` + `Carbon Management|Carbon Capture|Waste|Plastics Incineration`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|Carbon Capture|fossil origin`" = " ( 1- `Share of atmosferic CO2` ) * `Carbon Management|Carbon Capture`", units = "Mt CO2/yr", only.new=T))
  data <- rbind(data,data %>% calc_addVariable("`Carbon Management|Carbon Capture|atmospheric/biogenic CO2`" = " `Share of atmosferic CO2` * `Carbon Management|Carbon Capture`", units = "Mt CO2/yr", only.new=T))

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

  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|with LULUCF and with intra-EU aviation`" = "`Emi|GHG|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region`", units = "Mt CO2/yr", only.new=T)) # Emissions with LULUCF and with intra-EU aviation
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|with LULUCF and with international transport`" = "`Emi|GHG|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`", units = "Mt CO2/yr", only.new=T)) # Emissions with LULUCF and with international transport
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|without LULUCF and with intra-EU aviation`" = "`Emi|GHG|LULUCF national accounting` - `Emi|GHG|Land-Use Change|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region`", units = "Mt CO2/yr", only.new=T)) # Emissions without LULUCF and with intra-EU aviation
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|without LULUCF and with international transport`" = "`Emi|GHG|LULUCF national accounting` - `Emi|GHG|Land-Use Change|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`", units = "Mt CO2/yr", only.new=T)) # Emissions without LULUCF and with international transport
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|with LULUCF and without international transport`" = "`Emi|GHG|LULUCF national accounting`", units = "Mt CO2/yr", only.new=T)) # Emissions with LULUCF and without international transport
  data <- rbind(data,data %>% calc_addVariable("`Emi|GHG|Gross|without LULUCF and with international transport`" = "`Emi|GHG|LULUCF national accounting` - `Carbon Management|Storage|Biomass|Pe2Se` - `Carbon Management|Storage|Industry Energy|Biomass` - `Carbon Management|Storage|Industry Energy|Synfuel` - `Emi|GHG|Land-Use Change|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`", units = "Mt CO2/yr", only.new=T)) #

  data <- rbind(data,data %>% calc_addVariable("`Emi|CO2|Gross|Other Energy Conversion`" = "`Emi|CO2|Gross|Energy|Supply|Hydrogen` + `Emi|CO2|Gross|Energy|Supply|Liquids` + `Emi|CO2|Gross|Energy|Supply|Liquids` + `Emi|CO2|Gross|Energy|Supply|Solids`", units = "Mt CO2/yr", only.new=T))

  return(data)
}

loadMifFiles <- function(path,filterVars,forceUpdate){
  if((forceUpdate) || ! file.exists(paste0(path,"/data.rds"))){
    print("Preparing data - loading mif files")
    # mif files
    mifFiles <- list.files(path=path, pattern="*.mif", full.names=TRUE, recursive=FALSE)
    # creating filtered data
    #dir.create(paste0("./data_filtered/",basename(outFolder)), recursive = TRUE, showWarnings = FALSE)
    out <- NULL
    for (file in mifFiles) {
      print(paste0("Loading data in file: ",file))
      tmpdf <- suppressWarnings(read.quitte(file))
      tmpdf <- tmpdf %>%
        filter(!(variable %in% unique(reportDuplicates(remind2::deletePlus(tmpdf)) %>% pull(variable)))) %>% #remove duplicates
        deletePlus() %>% # remove plus
        filter(variable %in% filterVars,
               region %in% c("EU27","DEU","FRA"),
               period <= 2060)
      #write.mif(tmpdf,paste0("./data_filtered/", basename(outFolder), "/", basename(file)))
      out <- rbind(out,tmpdf)
    }
    # Saving all filtered data to a single file
    #mifFilteredFiles <- list.files(path=path, pattern="*.mif", full.names=TRUE, recursive=FALSE)
    #out <- read.quitte(mifFilteredFiles)
    saveRDS(out,paste0(path,"/data.rds"))
  } else {
    print("Preparing data - reading mif file data")
    out <- readRDS(paste0(path,"/data.rds"))
  }
  return(out)
}

if((forceUpdateData) || ! file.exists(paste0(dataFolder,"/data_EU27andDEU.rds"))){

  print("Preparing data")

  ### Load data
  dfFull <- loadMifFiles(dataFolder,read.csv2("./map/filterVars.csv")$variable,forceUpdateData)

  #modify data
  print("Preparing data - caculating additional variables")
  dfraw <- modifyData(dfFull)
  dfraw <- addVariables(dfraw)
  saveRDS(dfraw,paste0(dataFolder,"/data_EU27andDEU.rds"))

} else {

  print("Loading data")
  dfFull <- readRDS(paste0(dataFolder,"/data.rds"))
  dfraw <- readRDS(paste0(dataFolder,"/data_EU27andDEU.rds"))

}
