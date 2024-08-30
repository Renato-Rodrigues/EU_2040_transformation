
## Reference emissions

# Emission Reduction targets
#https://www.dehst.de/EN/european-emissions-trading/aircraft-operators/emissions-trading-in-aviation/emissions-trading-in-aviation_node.html

#Miles intra-eu numbers
#EC_CTP Table 39 MIX scenario, Intra-EU share in bunkers memo item (%), Intra-EU share in projected bunkers (MtCO2)	assume 2015 intra-extra split maintained to 2050
intraEUCheck <- data.frame(
  period = 1990:2050,
  Miles = c(57.3, 56.3, 58.2, 59.5, 60.6, 61.7, 65.3, 69.7, 73.0, 74.2, 78.1, 79.5, 80.7, 83.0, 87.8, 91.3, 96.2, 99.6, 98.6, 88.0, 87.7, 88.0, 83.0, 79.7, 78.5, 79.7, 83.2, 86.9, 89.9, 90.4, 59.6, 89.4, 88.4, 87.5, 86.5, 84.5, 83.7, 82.9, 82.0, 81.2, 80.4, 77.3, 74.2, 71.2, 68.1, 65.1, 62.0, 59.0, 55.9, 52.8, 49.8, 46.7, 43.7, 40.6, 37.6, 34.5, 31.4, 28.4, 25.3, 22.3, 19.2),
  ourEstimation = c(round(addHist$eeaEmissions %>% filter(Sector_name == "Intra-EU International Aviation", Pollutant_name == "All greenhouse gases - (CO2 equivalent)", Country == "EU27") %>% pull(emissions), 1), rep(NA,2050-2023+1))
) %>%
  mutate(diff_MtCO2eq = ourEstimation - Miles,
         pctg = round(diff_MtCO2eq/Miles * 100,1))

eeaTotalsList <- list (
  "Total net emissions (UNFCCC)" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "4 - Land Use, Land-Use Change and Forestry",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2"
  ),
  "Total emissions (UNFCCC)" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2"
  ),
  "Total net emissions with international transport (EEA)" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "4 - Land Use, Land-Use Change and Forestry",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "1.D.1 - International Bunkers"
  ),
  "Total emissions with international transport (EEA)" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "1.D.1 - International Bunkers"
  ),
  "Total net emissions with international aviation (EU NDC)" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "4 - Land Use, Land-Use Change and Forestry",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "1.D.1.a - International Aviation"
  ),
  "Total emissions with international aviation (EU 2020)" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "1.D.1.a - International Aviation"
  )
)

refEmiList <- list(
  "Emissions with LULUCF and with intra-EU aviation" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "4 - Land Use, Land-Use Change and Forestry",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "Intra-EU International Aviation"
  ),
  "Emissions with LULUCF and with international transport" = c( #"Total net emissions with international transport (EEA)"
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "4 - Land Use, Land-Use Change and Forestry",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "1.D.1 - International Bunkers"
  ),
  "Emissions without LULUCF and with intra-EU aviation" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "Intra-EU International Aviation"
  ),
  "Emissions without LULUCF and with international transport" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2",
    "1.D.1 - International Bunkers"
  ),
  "Emissions with LULUCF and without international transport" = c(
    "1 - Energy",
    "2 - Industrial Processes and Product Use",
    "3 - Agriculture",
    "4 - Land Use, Land-Use Change and Forestry",
    "5 - Waste management",
    "6 - Other Sector",
    "ind_CO2 - Indirect CO2"
  )
)

refEmi <- c()
for(ref in names(refEmiList)){
  refEmi <- rbind(
    refEmi,
    addHist$eeaEmissions %>%
      filter(Sector_name %in% refEmiList[[ref]]) %>%
      group_by(Country, Pollutant_name, Unit, Year) %>%
      summarize(emissions = sum(emissions), .groups = "keep") %>%
      mutate(variable = ref) %>%
      rename(region = Country, pollutant = Pollutant_name, unit = Unit, period = Year, value = emissions) %>%
      relocate(region,pollutant,variable,unit,period,value)
  )
}

refEmi1990 <- refEmi %>% filter(period == 1990, pollutant == "All greenhouse gases - (CO2 equivalent)")

avrg2020 <- refEmi %>% filter(period %in% 2018:2022, pollutant == "All greenhouse gases - (CO2 equivalent)") %>%
  group_by(region,pollutant,variable) %>%
  summarize(average=mean(value),.groups = "keep")



#remind NPi emissions (for target and post-process rescaling)
npi <- dfFull %>% filter(grepl("*Npi",scenario))
if(nrow(npi)==0){
  folders <- file.info(list.files(path="./data", full.names = T))
  dataFolder <- folders %>% tibble::rownames_to_column(var = "path") %>% arrange(desc(path)) %>% slice(1) %>% pull(path)
  npi <- suppressWarnings(remind2::deletePlus(read.quitte(list.files(path=dataFolder, pattern="*Npi.mif", full.names=TRUE, recursive=FALSE)[1])))
}
npi$scenario <- gsub("^\\d\\d\\_*","",npi$scenario)
remindRefEmi <- rbind(
  npi %>% calc_addVariable( "`Emissions with LULUCF and with intra-EU aviation`"        = "`Emi|GHG|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region`"                                     , units = "Mt CO2/yr", only.new=T),
  npi %>% calc_addVariable( "`Emissions with LULUCF and with international transport`"  = "`Emi|GHG|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`", units = "Mt CO2/yr", only.new=T),
  npi %>% calc_addVariable( "`Emissions without LULUCF and with intra-EU aviation`"        = "`Emi|GHG|LULUCF national accounting` - `Emi|GHG|Land-Use Change|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region`"                                     , units = "Mt CO2/yr", only.new=T),
  npi %>% calc_addVariable( "`Emissions without LULUCF and with international transport`"  = "`Emi|GHG|LULUCF national accounting` - `Emi|GHG|Land-Use Change|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`", units = "Mt CO2/yr", only.new=T),
  npi %>% calc_addVariable( "`Emissions with LULUCF and without international transport`"  = "`Emi|GHG|LULUCF national accounting`", units = "Mt CO2/yr", only.new=T),
  npi %>% calc_addVariable( "`Gross Emissions without LULUCF and with international transport`"  = "`Emi|GHG|LULUCF national accounting` - `Carbon Management|Storage|Biomass|Pe2Se` - `Carbon Management|Storage|Industry Energy|Biomass` - `Carbon Management|Storage|Industry Energy|Synfuel`                                                                                                      - `Emi|GHG|Land-Use Change|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`", units = "Mt CO2/yr", only.new=T)
)

tgt <- data.frame(
  target = c("Emissions with LULUCF and with intra-EU aviation","Emissions with LULUCF and with international transport","Emissions without LULUCF and with intra-EU aviation","Emissions without LULUCF and with international transport","Emissions with LULUCF and without international transport", "Gross Emissions without LULUCF and with international transport"),
  reference = c(refEmi1990 %>% filter(variable == "Emissions with LULUCF and with intra-EU aviation", region == "EU27") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions with LULUCF and with international transport", region == "EU27") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions without LULUCF and with intra-EU aviation", region == "EU27") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "EU27") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions with LULUCF and without international transport", region == "EU27") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "EU27") %>% pull(value)),
  avrg2018to2022 = c(avrg2020 %>% filter(variable == "Emissions with LULUCF and with intra-EU aviation", region == "EU27") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions with LULUCF and with international transport", region == "EU27") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions without LULUCF and with intra-EU aviation", region == "EU27") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "EU27") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions with LULUCF and without international transport", region == "EU27") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "EU27") %>% pull(average)),
  remind2020 = c(remindRefEmi %>% filter(variable == "Emissions with LULUCF and with intra-EU aviation", region == "EU27", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions with LULUCF and with international transport", region == "EU27", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions without LULUCF and with intra-EU aviation", region == "EU27", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions without LULUCF and with international transport", region == "EU27", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions with LULUCF and without international transport", region == "EU27", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Gross Emissions without LULUCF and with international transport", region == "EU27", scenario == "Npi", period == 2020) %>% pull(value)
  )
) %>%
  mutate(scaleFactor = round(remind2020/avrg2018to2022,3),
         tgt55 = round((1-0.55)*reference),
         tgt57 = round((1-0.57)*reference),
         tgt59 = round((1-0.59)*reference),
         tgt61 = round((1-0.61)*reference),
         tgt63 = round((1-0.63)*reference),
         tgt65 = round((1-0.65)*reference),
         tgt85 = round((1-0.85)*reference),
         tgt87 = round((1-0.87)*reference),
         tgt92 = round((1-0.92)*reference),
         tgt95 = round((1-0.95)*reference),
         reference = round(reference))



# German target exclude international bunkers https://climateactiontracker.org/countries/germany/net-zero-targets/
tgtDEU <- data.frame(
  target = c("Emissions with LULUCF and with intra-EU aviation","Emissions with LULUCF and with international transport","Emissions without LULUCF and with intra-EU aviation","Emissions without LULUCF and with international transport","Emissions with LULUCF and without international transport","Gross Emissions without LULUCF and with international transport"),
  reference = c(refEmi1990 %>% filter(variable == "Emissions with LULUCF and with intra-EU aviation", region == "Germany") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions with LULUCF and with international transport", region == "Germany") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions without LULUCF and with intra-EU aviation", region == "Germany") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "Germany") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions with LULUCF and without international transport", region == "Germany") %>% pull(value),
                refEmi1990 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "Germany") %>% pull(value)
  ),
  avrg2018to2022 = c(avrg2020 %>% filter(variable == "Emissions with LULUCF and with intra-EU aviation", region == "Germany") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions with LULUCF and with international transport", region == "Germany") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions without LULUCF and with intra-EU aviation", region == "Germany") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "Germany") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions with LULUCF and without international transport", region == "Germany") %>% pull(average),
                     avrg2020 %>% filter(variable == "Emissions without LULUCF and with international transport", region == "Germany") %>% pull(average)),
  remind2020 = c(remindRefEmi %>% filter(variable == "Emissions with LULUCF and with intra-EU aviation", region == "DEU", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions with LULUCF and with international transport", region == "DEU", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions without LULUCF and with intra-EU aviation", region == "DEU", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions without LULUCF and with international transport", region == "DEU", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Emissions with LULUCF and without international transport", region == "DEU", scenario == "Npi", period == 2020) %>% pull(value),
                 remindRefEmi %>% filter(variable == "Gross Emissions without LULUCF and with international transport", region == "DEU", scenario == "Npi", period == 2020) %>% pull(value))
) %>%
  mutate(scaleFactor = round(remind2020/avrg2018to2022,3),
         tgt65 = round((1-0.65)*reference),
         reference = round(reference))


# selected target
selectedTgt <- bind_rows(
  tgt %>% filter(target == "Emissions with LULUCF and with intra-EU aviation") %>% mutate(region = "EU-27", period = "2030") %>% relocate(region, period, .after=target) ,
  tgtDEU %>% filter(target == "Emissions with LULUCF and without international transport") %>% mutate(region = "Germany", period = "2030") %>% relocate(region, period, .after=target)
)

#re-scaling targets to take into account resizing of emissions due to 2020 REMIND emissions deviation from historical values
scaleFactor <- selectedTgt %>% filter(region == "EU-27", period == "2030") %>% pull(scaleFactor)

#target to be set in the model to account for ex-post scaling
correctedTgt <- selectedTgt  %>%
  mutate(tgt55 = round(tgt55*scaleFactor),
         tgt57 = round(tgt57*scaleFactor),
         tgt59 = round(tgt59*scaleFactor),
         tgt61 = round(tgt61*scaleFactor),
         tgt63 = round(tgt63*scaleFactor),
         tgt65 = round(tgt65*scaleFactor))  %>%
  select(target,region,period,tgt55,tgt57,tgt59,tgt61,tgt63,tgt65,tgt85,tgt87,tgt92,tgt95)


#ECEMF 2040 target
ecemfTarget <- tgt %>%
  mutate(region = "EU-27", period = "2030") %>%
  relocate(region, period, .after=target) %>%
  mutate(tgt85 = round(tgt85*scaleFactor),
         tgt87 = round(tgt87*scaleFactor),
         tgt92 = round(tgt92*scaleFactor),
         tgt95 = round(tgt95*scaleFactor))  %>%
  mutate(avg85_87 = round((tgt85 - tgt87)/2 + tgt87),
         avg92_95 = round((tgt92 - tgt95)/2) + tgt95)  %>%
  select(target,region,period,avg85_87,tgt85,tgt87,avg92_95,tgt92,tgt95)
