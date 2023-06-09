# EU_2040_transformation

Data and visualizations created for the paper: 
```
Rodrigues, R., Pietzcker, R., Luderer, G., Sitarz, J., Merfort, A., Hasse, R., Hoppe, J., Pehl, M., Ershad, A. M., Baumstark, L. 2040 greenhouse gas reduction targets and energy transitions in line with the EU Green Deal. in preparation (2023). 
```

# Model version

- Results were created using REMIND version 3.2 with 21 regions (REMIND-EU).
- The runs can be found a: `/p/projects/ecemf/REMIND/2040_scenarios/v04_2023_06_02` 
- Paper results include an ex-post correction applied to emissions and Carbon management variables to reflect more closely EU-27 historical numbers.   

# Results used in the paper

- The results used in the paper can be found at the R data file named `data_harmonized_EU27andDEU.rds`.
- Historical results used in the paper can be found at the R data file named `hist.rds` and `addHist.rds`.

# Charts used in the paper

- Charts created for the paper can be created by runing the R markdown `paperCharts.Rmd`.
- Use knit `rmarkdown::render("paperCHarts.Rmd")`.
- The script will try to install all required libraries. In case you need to install them manually, all packages can be installed via `install.packages`

```R
pkgs <- c("quitte","dplyr","ggplot2","geomtextpath","tidyr","grid","stringr","gridExtra","ggrepel","kableExtra")
install.packages(pkgs)
```

- Raster image files, pngs, and vectorial image files, svgs, will be saved to the output folder.
- Additionaly, An html report file will be derated containing all charts used in the paper.

