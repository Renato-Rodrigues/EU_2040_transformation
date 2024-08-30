

# preprocess: prepare and load the data for use in the charts and markdown

# load data
source("./R/loadData.R")

# load historical data
if(loadHist){
  source("./R/loadHistoricalData.R")
}

#loading reference emissions -->
source("./R/loadReferenceEmissions.R")
#correctedTgt #to be used in the scenario config to adjust the targets according the historical harmonization based on 2020 NPi run values
#scaleFactor

#harmonizing data (scale emissions to match historical values)
source("./R/harmonizeData.R")
df_beforeFilter <- df
df <- df %>%
  filter(!grepl("limVRE", scenario)) # filter VRE scenario out of main charts

#loading efficiency targets
source("./R/efficiencyTarget.R")

