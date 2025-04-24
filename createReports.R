
library(rmarkdown)
library(dplyr)

#Check latest results folder and create output folder for reports
folders <- file.info(list.files(path="./data", full.names = T))
dataFolder <- folders %>% tibble::rownames_to_column(var = "path") %>% arrange(desc(path)) %>% slice(1) %>% pull(path)
outFolder <- paste0("./output/",gsub("./data/","",dataFolder))
dir.create(outFolder, recursive = TRUE, showWarnings = FALSE)

# Create paper charts in EJ
#rmarkdown::render("./report_paperCharts.Rmd", output_file = paste0(outFolder, "/report_paperCharts-EJ.html"), params = list(forceUpdateData = FALSE, loadHist = TRUE, energyInMtoe = FALSE, chartsFolder = "report_paperCharts_EJ"))

# Create paper charts in Mtoe and MtH2
rmarkdown::render("./report_paperCharts.Rmd", output_file = paste0(outFolder, "/report_paperCharts-Mtoe_and_MtH2.html"), params = list(forceUpdateData = FALSE, loadHist = TRUE, energyInMtoe = TRUE, chartsFolder = "report_paperCharts_Mtoe"))

# Create plotly charts for the Sensitivity Iterative Explorer
rmarkdown::render("./report_plotlyCharts.Rmd", output_file = paste0(outFolder, "/report_plotlyCharts.html"))

## Create plotly charts for the Sensitivity Iterative Explorer
#rmarkdown::render("./report_plotlyCharts_darkTheme.Rmd", output_file = paste0(outFolder, "/report_plotlyCharts_darkTheme.html"))

# Copy html, js and css files to the Sensitivity Iterative Explorer output folder 
file.copy(list("./publish/report_sensitivityExplorer/index.html","./publish/report_sensitivityExplorer/script.js","./publish/report_sensitivityExplorer/style.css"), paste0(outFolder, "/report_sensitivityExplorer"), overwrite = TRUE)

#Create additional charts
rmarkdown::render("./report_additionalCharts.Rmd", output_file = paste0(outFolder, "/report_additionalCharts.html"))

# Publish the latest paper results
dir.create("./publish/paper_results", recursive = TRUE, showWarnings = FALSE)
file.copy(paste0(outFolder, "/report_paperCharts-Mtoe_and_MtH2.html"), "./publish/paper_results/index.html", overwrite = TRUE)

# Publish the latest sensitivity iterative explorer results
jsFiles <- list.files(path=paste0(outFolder, "/report_sensitivityExplorer/charts"), pattern="*.js", full.names=TRUE, recursive=TRUE)
dir.create("./publish/sensitivity_explorer/charts", recursive = TRUE, showWarnings = FALSE)
file.copy(jsFiles, "./publish/sensitivity_explorer/charts", overwrite = TRUE)
