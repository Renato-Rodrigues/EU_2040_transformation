
library(remind2)
library(tidyr)
library(dplyr)
library(quitte)

#Check latest results folder and create output folder for reports
folders <- file.info(list.files(path="./data", full.names = T))
dataFolder <- folders %>% tibble::rownames_to_column(var = "path") %>% arrange(desc(path)) %>% slice(1) %>% pull(path)

#dataFolder

# load npi mif
npiMifFile <- list.files(path=dataFolder, pattern="*Npi.mif", full.names=TRUE, recursive=FALSE)

tmpdf <- suppressWarnings(read.quitte(npiMifFile))

tmpdf <- tmpdf %>%
  filter(!(variable %in% unique(reportDuplicates(remind2::deletePlus(tmpdf)) %>% pull(variable)))) %>% #remove duplicates
  deletePlus() # remove plus

#remove number at the beginning of the scenario name
tmpdf$scenario <- gsub("^\\d\\d\\_*","",tmpdf$scenario)
#remove "0b" at the beginning of the scenario name
tmpdf$scenario <- gsub("^0b_","",tmpdf$scenario)
tmpdf$scenario <- gsub("^0c_","",tmpdf$scenario)
#remove suffix EU27
tmpdf$scenario <- gsub("_EU27","",tmpdf$scenario)

dfFull <- tmpdf

source("./R/loadHistoricalData.R")

source("./R/loadReferenceEmissions.R")

#to be used in the scenario config to adjust the targets according the historical harmonization based on 2020 NPi run values
correctedTgt 

#scaleFactor

