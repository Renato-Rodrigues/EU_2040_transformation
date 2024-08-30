# EU_2040_transformation

Data and visualizations created for the paper: 

Rodrigues, R., Pietzcker, R., Sitarz, J., Merfort, A., Hasse, R., Hoppe, J., Pehl, M., Ershad, A. M., Baumstark, L., Luderer, G. 2040 greenhouse gas reduction targets and energy transitions in line with the EU Green Deal. in preparation (2023). 

# Model version and results

- Results were created using REMIND version 3.3.1 with 21 regions (REMIND-EU).
- The run files can be provided by request and are internally located at the PIK cluster infrastructure under: `/p/projects/ecemf/REMIND/2040_scenarios/v08_2024_06_14_REMIND_3.3.1` 

# License

- Model runs and scenario data for this study are provided under a CC-BY-4.0 licence.  

# Results used in the paper

- The results used in the paper can be found at the R data file named `data_harmonized_EU27andDEU.rds`.
- Historical results used in the paper can be found at the R data file named `hist.rds` and `addHist.rds`.

## Results post-processing:

- Paper results include an ex-post correction applied to emissions and carbon management variables to reflect EU-27 historical numbers. 
- Renewables share results are post-processed to fit historical data found at Eurostat.   

# Charts used in the paper

- Charts created for the paper can be recreated by running the R markdown `report_paperCharts.Rmd` or the R script `createReports.R`.
- Use knit `rmarkdown::render("report_paperCharts.Rmd")`.
- The script will try to install all required libraries. In case you need to install them manually, all packages can be installed via `install.packages`.

```R
pkgs <- c("quitte","ggplot2","geomtextpath","ggpattern","tidyr","grid","stringr","gridExtra","ggrepel","kableExtra","dplyr","remind2","rsvg","ggsvg")
install.packages(pkgs)
```
- Raster image files, pngs, and vectorial image files, svgs, will be saved to the output folder.
- Additionally, an html report file will be created containing all charts used in the paper.
- You can access the paper results report at: https://renato-rodrigues.github.io/paper_results

# Iteractive sensitivity results explorer 

- You can access a iteractive explorer of the sensitivity analysis results of the paper at: https://renato-rodrigues.github.io/sensitivity_explorer
