

# Emission Reductions


emiReduction <- rbind(
  df %>% 
    filter(region == "EU27", period == 2040, tgt2030 %in% tgt2030Scen) %>%
    calc_addVariable( "`Emissions with LULUCF and with intra-EU aviation`" = "`Emi|GHG|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers|Intra-region`" , units = "Mt CO2/yr", only.new=T) %>% 
    mutate(reduction = 1-round(value / tgt %>% filter(target == "Emissions with LULUCF and with intra-EU aviation") %>% pull(reference) ,2),
           variable = "Emissions with LULUCF and with intra-EU aviation") %>% 
    filter(tgt2050 != "Npi") %>% 
    select(variable, scenario, reduction)
  ,
  df %>% 
    filter(region == "EU27", period == 2040, tgt2030 %in% tgt2030Scen) %>%
    calc_addVariable( "`Emissions with LULUCF and with international transport`" = "`Emi|GHG|LULUCF national accounting` + `Emi|CO2|Energy|Demand|Transport|International Bunkers`" , units = "Mt CO2/yr", only.new=T) %>% 
    mutate(reduction = 1-round(value / tgt %>% filter(target == "Emissions with LULUCF and with international transport") %>% pull(reference) ,2),
           variable = "Emissions with LULUCF and with international transport") %>%
    filter(tgt2050 != "Npi") %>% 
    select(variable, scenario, reduction)
)

reductions2040 <- left_join(
  emiReduction %>%
    filter(scenario == mainScen) %>%
    mutate(mainScenario = paste0(round(reduction*100), "%")) %>%
    select(variable,mainScenario)
  ,
  emiReduction %>% 
    group_by(variable) %>%
    summarize(minTarget = min(reduction), maxTarget=max(reduction),.groups = "keep") %>%
    mutate(minTarget = paste0(round(minTarget*100), "%"),
           maxTarget = paste0(round(maxTarget*100), "%"))
  , by = join_by(variable == variable)
)

# reductions2040 <- rbind(
#   df %>% 
#     filter(variable == "Emi|GHG|with LULUCF and with international transport", region == "EU27", period == 2040, tgt2050 != "Npi") %>% 
#     mutate(value = 1-(value / tgt %>% filter(target == "Emissions with LULUCF and with international transport") %>% pull(reference)))
#   ,
#   df %>% 
#     filter(variable == "Emi|GHG|without LULUCF and with international transport", region == "EU27", period == 2040, tgt2050 != "Npi") %>% 
#     mutate(value = 1-(value / tgt %>% filter(target == "Emissions without LULUCF and with international transport") %>% pull(reference)))
#   ,
#   df %>% 
#     filter(variable == "Emi|GHG|with LULUCF and with intra-EU aviation", region == "EU27", period == 2040, tgt2050 != "Npi") %>% 
#     mutate(value = 1-(value / tgt %>% filter(target == "Emissions with LULUCF and with intra-EU aviation") %>% pull(reference)))
#   ,
#   df %>% 
#     filter(variable == "Emi|GHG|without LULUCF and with intra-EU aviation", region == "EU27", period == 2040, tgt2050 != "Npi") %>% 
#     mutate(value = 1-(value / tgt %>% filter(target == "Emissions with LULUCF and with intra-EU aviation") %>% pull(reference)))
#   ,
#   df %>% 
#     filter(variable == "Emi|GHG|Gross|without LULUCF and with international transport", region == "EU27", period == 2040, tgt2050 != "Npi") %>% 
#     mutate(value = 1-(value / tgt %>% filter(target == "Gross Emissions without LULUCF and with international transport") %>% pull(reference)))
# )

# reductions2040 %>% 
#   filter(tgt2030 %in% tgt2030Scen) %>% 
#   group_by(variable) %>%
#   summarize(minTarget = min(value), maxTarget=max(value),.groups = "keep") %>%
#   mutate(minTarget = paste0(round(minTarget*100), "%"),
#          maxTarget = paste0(round(maxTarget*100), "%"),
#          period = 2040) %>% 
#   rename(TargetReference = variable) %>%
#   relocate(period, .after=TargetReference) %>%
#   kbl() %>%
#   kable_styling(bootstrap_options = c("striped", "hover", "condensed")) 
# 
# bdgt <- df %>% 
#   filter(region == "EU27", period %in% c(2020:2050), tgt2030 %in% tgt2030Scen) %>%
#   mutate(weight = ifelse(period %in% c(2020,2050),2.5,5),
#          budget = value*weight) %>%
#   group_by(model,scenario,region,variable,tgt2050,tgt2030,efficiency,bioLim,lim) %>%
#   summarize(budget=round(sum(budget)/1000,2),.groups = "keep")
# 
# budget <- data.frame(
#   Budget=c("Emissions with LULUCF and with international transport","Emissions without LULUCF and with international transport","Emissions with LULUCF and with intra-EU aviation","Emissions without LULUCF and with intra-EU aviation","Gross Emissions without LULUCF and with international transport"),
#   reference_value=c(round(bdgt %>% filter(variable == "Emi|GHG|with LULUCF and with international transport", scenario == mainScen) %>% pull(budget)),
#                     round(bdgt %>% filter(variable == "Emi|GHG|without LULUCF and with international transport", scenario == mainScen) %>% pull(budget)),
#                     round(bdgt %>% filter(variable == "Emi|GHG|with LULUCF and with intra-EU aviation", scenario == mainScen) %>% pull(budget)),
#                     round(bdgt %>% filter(variable == "Emi|GHG|without LULUCF and with intra-EU aviation", scenario == mainScen) %>% pull(budget)),
#                     round(bdgt %>% filter(variable == "Emi|GHG|Gross|without LULUCF and with international transport", scenario == mainScen) %>% pull(budget))),
#   min = c(round(min(bdgt %>% filter(variable == "Emi|GHG|with LULUCF and with international transport") %>% pull(budget))),
#           round(min(bdgt %>% filter(variable == "Emi|GHG|without LULUCF and with international transport") %>% pull(budget))),
#           round(min(bdgt %>% filter(variable == "Emi|GHG|with LULUCF and with intra-EU aviation") %>% pull(budget))),
#           round(min(bdgt %>% filter(variable == "Emi|GHG|without LULUCF and with intra-EU aviation") %>% pull(budget))),
#           round(min(bdgt %>% filter(variable == "Emi|GHG|Gross|without LULUCF and with international transport") %>% pull(budget)))),
#   max = c(round(max(bdgt %>% filter(variable == "Emi|GHG|with LULUCF and with international transport") %>% pull(budget))),
#           round(max(bdgt %>% filter(variable == "Emi|GHG|without LULUCF and with international transport") %>% pull(budget))),
#           round(max(bdgt %>% filter(variable == "Emi|GHG|with LULUCF and with intra-EU aviation") %>% pull(budget))),
#           round(max(bdgt %>% filter(variable == "Emi|GHG|without LULUCF and with intra-EU aviation") %>% pull(budget))),
#           round(max(bdgt %>% filter(variable == "Emi|GHG|Gross|without LULUCF and with international transport") %>% pull(budget))))
# )

direct_electrification <- data.frame(
  direct_electrification = c("total","buildings","transport","industry"),
  reference_value_EJ=c(
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Electricity"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Electricity"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Electricity"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Electricity"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1)
  ),
  min_EJ=c(
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1)
  ),
  max_EJ=c(
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Electricity"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1)
  )
) %>%
  mutate(
    reference_value_Mtoe = round(reference_value_EJ * EJ2Mtoe,1),
    min_Mtoe = round(min_EJ * EJ2Mtoe,1),
    max_Mtoe = round(max_EJ * EJ2Mtoe,1))


indirect_electrification <- data.frame(
  indirect_electrification = c("total","buildings","transport","industry"),
  reference_value_EJ=c(
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Hydrogen","FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Hydrogen","FE|Buildings|Gases|Hydrogen","FE|Buildings|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Hydrogen","FE|Transport|Gases|Hydrogen","FE|Transport|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Hydrogen","FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1)
  ),
  min_EJ=c(
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Hydrogen","FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Hydrogen","FE|Buildings|Gases|Hydrogen","FE|Buildings|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Hydrogen","FE|Transport|Gases|Hydrogen","FE|Transport|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Hydrogen","FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1)
  ),
  max_EJ=c(
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Hydrogen","FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Hydrogen","FE|Buildings|Gases|Hydrogen","FE|Buildings|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Hydrogen","FE|Transport|Gases|Hydrogen","FE|Transport|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Hydrogen","FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1)
  )
) %>%
  mutate(
    reference_value_Mtoe = round(reference_value_EJ * EJ2Mtoe,1),
    min_Mtoe = round(min_EJ * EJ2Mtoe,1),
    max_Mtoe = round(max_EJ * EJ2Mtoe,1))

indirect_electrification_detail <- data.frame(
  indirect_electrification_detail = c("total_H2_2050","total_efuels_2050","total_H2_2040","total_efuels_2040","buildings_H2_2040","buildings_efuels_2040","transport_H2_2040","transport_efuels_2040","industry_H2_2040","industry_efuels_2040"),
  reference_value_EJ=c(
    round(df %>% filter(region == "EU27", period == 2050, variable %in% c("FE|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2050, variable %in% c("FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Gases|Hydrogen","FE|Buildings|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Gases|Hydrogen","FE|Transport|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Hydrogen"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value),1)
  ),
  min_EJ=c(
    round(min(df %>% filter(region == "EU27", period == 2050, variable %in% c("FE|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2050, variable %in% c("FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Gases|Hydrogen","FE|Buildings|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Gases|Hydrogen","FE|Transport|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1)
  ),
  max_EJ=c(
    round(max(df %>% filter(region == "EU27", period == 2050, variable %in% c("FE|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2050, variable %in% c("FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Gases|Hydrogen","FE|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Buildings|Gases|Hydrogen","FE|Buildings|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Gases|Hydrogen","FE|Transport|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)),1)
  )
) %>%
  mutate(
    reference_value_Mtoe = round(reference_value_EJ * EJ2Mtoe,1),
    min_Mtoe = round(min_EJ * EJ2Mtoe,1),
    max_Mtoe = round(max_EJ * EJ2Mtoe,1))


########

# indstcleanSources <- c("FE|Industry|Hydrogen", "FE|Industry|Gases|Biomass", "FE|Industry|Gases|Hydrogen", "FE|Industry|Liquids|Biomass", "FE|Industry|Liquids|Hydrogen", "FE|Industry|Solids|Biomass") 
# 
# indstcleanSourcesFE <- df %>% filter(region == "EU27", variable %in% indstcleanSources) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep")
# 
# indstFE <- data.frame(
#   industry_clean_fuels = c("2040_EJ", "2040_%"),
#   reference_value=c(
#     round(indstcleanSourcesFE %>% filter(region == "EU27", period == 2040, scenario == mainScen) %>% pull(value),1),
#     round(indstcleanSourcesFE %>% filter(region == "EU27", period == 2040, scenario == mainScen) %>% pull(value),1 / df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry"), scenario == mainScen) %>% pull(value))),
#   min=c(
#     round(min(indstcleanSourcesFE %>% filter(region == "EU27", period == 2040) %>% pull(value)),1),
#     round(min(indstcleanSourcesFE %>% filter(region == "EU27", period == 2040) %>% pull(value) / df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry")) %>% pull(value)),2)),
#   max=c(
#     round(max(indstcleanSourcesFE %>% filter(region == "EU27", period == 2040) %>% pull(value)),1),
#     round(max(indstcleanSourcesFE %>% filter(region == "EU27", period == 2040) %>% pull(value) / df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry")) %>% pull(value)),2))
# )


# FE|Industry|Electricity
# FE|Industry|Gases
# FE|Industry|Heat
# FE|Industry|Hydrogen
# FE|Industry|Liquids
# FE|Industry|Solids
# FE|Industry|Electricity|Share
# FE|Industry|Fuels
# FE|Industry|Fuels|Share
# FE|Industry|Gases|Biomass
# FE|Industry|Gases|Fossil
# FE|Industry|Gases|Hydrogen
# FE|Industry|Liquids|Biomass
# FE|Industry|Liquids|Fossil
# FE|Industry|Liquids|Hydrogen
# FE|Industry|Solids|Biomass
# FE|Industry|Solids|Fossil
#df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Electricity","FE|Industry|Heat","FE|Industry|Hydrogen","FE|Industry|Gases|Biomass","FE|Industry|Gases|Hydrogen","FE|Industry|Liquids|Biomass","FE|Industry|Liquids|Hydrogen","FE|Industry|Solids|Biomass"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value) / df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)
#df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry|Gases|Fossil","FE|Industry|Liquids|Fossil","FE|Industry|Solids|Fossil"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value) / df %>% filter(region == "EU27", period == 2040, variable %in% c("FE|Industry"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)

#df %>% filter(region == "EU27", period == 2040, variable %in% c("Emi|CO2|Energy|Demand|Industry"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value) / df %>% filter(region == "EU27", period == 2020, variable %in% c("Emi|CO2|Energy|Demand|Industry"), scenario == mainScen) %>% group_by(scenario,tgt2030) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)

electricity_demand_increase <- left_join(
  df %>%
    filter(region == "EU27", period %in% c(2030,2040), variable %in% c("FE|Electricity"), tgt2050 != "Npi")
  ,
  df %>%
    filter(region == "EU27", period == 2020, variable %in% c("FE|Electricity"), tgt2050 != "Npi") %>%
    mutate(base = value,.groups = "keep") %>%
    select(scenario,base)
  , by = join_by(scenario == scenario)
) %>%
  mutate(upscale = value/base)

electricity_demand_upscale <- data.frame(
  electricity_demand_upscale=c("2030","2040"),
  reference_value=c(
    round(electricity_demand_increase %>% filter(scenario == mainScen, period == "2030") %>% pull(upscale)*100),
    round(electricity_demand_increase %>% filter(scenario == mainScen, period == "2040") %>% pull(upscale)*100)
  ),
  min = c(
    round(min(electricity_demand_increase %>% filter(tgt2030 %in% tgt2030Scen, period == "2030") %>% pull(upscale)*100)),
    round(min(electricity_demand_increase %>% filter(tgt2030 %in% tgt2030Scen, period == "2040") %>% pull(upscale)*100))
  ),
  max = c(
    round(max(electricity_demand_increase %>% filter(tgt2030 %in% tgt2030Scen, period == "2030") %>% pull(upscale)*100)),
    round(max(electricity_demand_increase %>% filter(tgt2030 %in% tgt2030Scen, period == "2040") %>% pull(upscale)*100))
  )
)

electricity_share_in_FE <- data.frame(
  electricity_share_in_FE = c("2030","2040"),
  reference_value=c(
    round(df %>% filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), scenario == mainScen) %>% pull(value)*100),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), scenario == mainScen) %>% pull(value)*100)
  ),
  min=c(
    round(min(df %>% filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen, tgt2050 != "Npi") %>% pull(value)*100)),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen, tgt2050 != "Npi") %>% pull(value)*100))
  ),
  max=c(
    round(max(df %>% filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen, tgt2050 != "Npi") %>% pull(value)*100)),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen, tgt2050 != "Npi") %>% pull(value)*100))
  )
)

wind_and_Solar_gen_upscale <- left_join(
  df %>%
    filter(region == "EU27", period %in% c(2030,2040), variable %in% c("SE|Electricity|Wind|Offshore", "SE|Electricity|Wind|Onshore", "SE|Electricity|Solar|PV", "SE|Electricity|Solar|CSP"), tgt2050 != "Npi") %>%
    group_by(scenario,tgt2030,period) %>%
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>%
    filter(region == "EU27", period == 2020, variable %in% c("SE|Electricity|Wind|Offshore", "SE|Electricity|Wind|Onshore", "SE|Electricity|Solar|PV", "SE|Electricity|Solar|CSP"), tgt2050 != "Npi") %>%
    group_by(scenario,tgt2030) %>%
    summarize(base = sum(value),.groups = "keep")
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(upscale = value/base)

gen_upscale <- data.frame(
  wind_and_Solar_gen_upscale=c("2030","2040"),
  reference_value=c(
    round(wind_and_Solar_gen_upscale %>% filter(scenario == mainScen, period == "2030") %>% pull(upscale),1),
    round(wind_and_Solar_gen_upscale %>% filter(scenario == mainScen, period == "2040") %>% pull(upscale),1)
  ),
  min = c(
    round(min(wind_and_Solar_gen_upscale %>% filter(tgt2030 %in% tgt2030Scen, period == "2030") %>% pull(upscale)),1),
    round(min(wind_and_Solar_gen_upscale %>% filter(tgt2030 %in% tgt2030Scen, period == "2040") %>% pull(upscale)),1)
  ),
  max = c(
    round(max(wind_and_Solar_gen_upscale %>% filter(tgt2030 %in% tgt2030Scen, period == "2030") %>% pull(upscale)),1),
    round(max(wind_and_Solar_gen_upscale %>% filter(tgt2030 %in% tgt2030Scen, period == "2040") %>% pull(upscale)),1)
  )
)

wind_and_Solar_participation <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity|Wind|Offshore", "SE|Electricity|Wind|Onshore", "SE|Electricity|Solar|PV", "SE|Electricity|Solar|CSP"), tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario,period) %>%
    summarize(value = sum(value),.groups = "keep") %>%
    select(scenario,period,value)
  ,
  df %>%
    filter(region == "EU27", period == 2040, variable == "SE|Electricity", tgt2030 %in% tgt2030Scen) %>%
    mutate(total = value) %>%  
    select(scenario,period,total)
  , by = join_by(scenario == scenario,period == period)
) %>%
  mutate(pctg = value/total)

wind_and_Solar_participation <- data.frame(
  result=c("Wind_and_Solar_participation_2040_%"),
  reference_value=c(
    round((wind_and_Solar_participation %>% filter(scenario == mainScen) %>% pull(pctg))*100)
  ),
  min = c(
    round((min(wind_and_Solar_participation %>% pull(pctg)))*100)
  ),
  max = c(
    round((max(wind_and_Solar_participation %>% pull(pctg)))*100)
  )
)

coal_in_generation <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity|Coal")) %>%  
    select(scenario,tgt2030,value)
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity")) %>%
    mutate(total = value) %>%  
    select(scenario,tgt2030,total)
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = value/total)

gas_in_generation <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity|Gas|w/o CC","SE|Electricity|Gas|w/ CC")) %>%
    group_by(scenario,tgt2030) %>%
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity")) %>%
    mutate(total = value) %>%  
    select(scenario,tgt2030,total)
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = value/total)

wind_and_Solar_gen <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity|Wind|Offshore", "SE|Electricity|Wind|Onshore", "SE|Electricity|Solar|PV", "SE|Electricity|Solar|CSP")) %>%
    group_by(scenario,tgt2030) %>%
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity")) %>%
    mutate(total = value) %>%  
    select(scenario,tgt2030,total)
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = value/total)

wind_and_Solar_cap <- df %>%
  filter(region == "EU27", period == 2040, variable %in% c("Cap|Electricity|Wind|Offshore", "Cap|Electricity|Wind|Onshore", "Cap|Electricity|Solar|PV", "Cap|Electricity|Solar|CSP")) %>%
  group_by(scenario,tgt2030) %>%
  summarize(value = sum(value),.groups = "keep")

nuclear_in_generation <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity|Nuclear")) %>%  
    select(scenario,tgt2030,value)
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% c("SE|Electricity")) %>%
    mutate(total = value) %>%  
    select(scenario,tgt2030,total)
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = value/total)

Generation <- data.frame(
  Electricity_Generation=c("coal_in_generation_(%)","gas_in_generation_(%)","nuclear_in_generation_(%)","wind_and_Solar_gen_(%)","wind_and_Solar_cap_(TW)"), #,"Solar_gen_(TWh)_2030","Solar_gen_(TWh)_2040"
  reference_value=c(
    round(coal_in_generation %>% filter(scenario == mainScen) %>% pull(percentage)*100,2),
    round(gas_in_generation %>% filter(scenario == mainScen) %>% pull(percentage)*100,2),
    round(nuclear_in_generation %>% filter(scenario == mainScen) %>% pull(percentage)*100,2),
    round(wind_and_Solar_gen %>% filter(scenario == mainScen) %>% pull(percentage)*100,2),
    round(wind_and_Solar_cap %>% filter(scenario == mainScen) %>% pull(value)/ 1000,2)#,
#    round(df %>% filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Solar|PV", scenario == mainScen) %>% mutate(value = round(value * 1/0.0036)) %>% pull(value)/1000,2),
#    round(df %>% filter(region == "EU27", period == 2045, variable == "Cap|Electricity|Solar|PV", scenario == mainScen) %>% mutate(value = round(value * 1/0.0036)) %>% pull(value)/1000,2)
  ),
  min = c(
    round(min(coal_in_generation %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(min(gas_in_generation %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(min(nuclear_in_generation %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(min(wind_and_Solar_gen %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(min(wind_and_Solar_cap %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(value)/ 1000),2)#,
#    round(min(df %>% filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Solar|PV") %>% mutate(value = round(value * 1/0.0036)) %>% pull(value)/1000,2)),
#    round(min(df %>% filter(region == "EU27", period == 2045, variable == "Cap|Electricity|Solar|PV") %>% mutate(value = round(value * 1/0.0036)) %>% pull(value)/1000,2))
  ),
  max = c(
    round(max(coal_in_generation %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(max(gas_in_generation %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(max(nuclear_in_generation %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(max(wind_and_Solar_gen %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),2),
    round(max(wind_and_Solar_cap %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(value)/ 1000),2)#,
#    round(max(df %>% filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Solar|PV") %>% mutate(value = round(value * 1/0.0036)) %>% pull(value)/1000,2)),
#    round(max(df %>% filter(region == "EU27", period == 2045, variable == "Cap|Electricity|Solar|PV") %>% mutate(value = round(value * 1/0.0036)) %>% pull(value)/1000,2))
  )
)


share_of_fossil_in_electricity <- data.frame(
  FE=c("share_of_fossil_without_CCS_in_electricity_(%)"),
  reference_value_2020=c(
    round((1-df %>% filter(region == "EU27", period == 2020, variable == "SE|Electricity|carbon-free", tgt2030 %in% tgt2030Scen, scenario == mainScen) %>% pull(value))*100 )),
  reference_value_2040=c(
    round((1-df %>% filter(region == "EU27", period == 2040, variable == "SE|Electricity|carbon-free", tgt2030 %in% tgt2030Scen, scenario == mainScen) %>% pull(value))*100 )),
  min = c(round(min((1-df %>% filter(region == "EU27", period == 2040, variable == "SE|Electricity|carbon-free", tgt2030 %in% tgt2030Scen) %>% pull(value))*100))),
  max = c(round(max((1-df %>% filter(region == "EU27", period == 2040, variable == "SE|Electricity|carbon-free", tgt2030 %in% tgt2030Scen) %>% pull(value))*100)))
)


pe <- df %>% 
  filter(region == "EU27", period %in% c(2020:2060), tgt2030 %in% tgt2030Scen, variable %in% c("PE|Biomass","PE|Coal","PE|Gas","PE|Oil"))

pe_relative_to_2020 <-  left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("PE|Biomass","PE|Coal","PE|Gas","PE|Oil")) %>%  
    select(scenario,variable,value)
  ,
  df %>% 
    filter(region == "EU27", period == 2020, variable %in% c("PE|Biomass","PE|Coal","PE|Gas","PE|Oil")) %>%  
    mutate(base = value) %>%  
    select(scenario,variable,base)
  , by = join_by(scenario == scenario, variable == variable)
) %>%
  mutate(percentage = value/base)

primaryEnergy <- data.frame(
  Primary_Energy=c("Biomass","Coal","Gas","Oil"),
  relative_to_2020=c(
    round((pe %>% filter(period == 2040, scenario == mainScen, variable == "PE|Biomass") %>% mutate(value = value / (pe %>% filter(period == 2020, scenario == mainScen, variable == "PE|Biomass") %>% pull(value)))%>% pull(value))*100, 1),
    round((pe %>% filter(period == 2040, scenario == mainScen, variable == "PE|Coal") %>% mutate(value = value / (pe %>% filter(period == 2020, scenario == mainScen, variable == "PE|Coal") %>% pull(value)))%>% pull(value))*100, 1),
    round((pe %>% filter(period == 2040, scenario == mainScen, variable == "PE|Gas") %>% mutate(value = value / (pe %>% filter(period == 2020, scenario == mainScen, variable == "PE|Gas") %>% pull(value)))%>% pull(value))*100, 1),
    round((pe %>% filter(period == 2040, scenario == mainScen, variable == "PE|Oil") %>% mutate(value = value / (pe %>% filter(period == 2020, scenario == mainScen, variable == "PE|Oil") %>% pull(value)))%>% pull(value))*100, 1)),
  min = c(round(min(pe_relative_to_2020 %>% filter(variable == "PE|Biomass") %>% pull(percentage))*100, 1),
          round(min(pe_relative_to_2020 %>% filter(variable == "PE|Coal") %>% pull(percentage))*100, 1),
          round(min(pe_relative_to_2020 %>% filter(variable == "PE|Gas") %>% pull(percentage))*100, 1),
          round(min(pe_relative_to_2020 %>% filter(variable == "PE|Oil") %>% pull(percentage))*100, 1)),
  max = c(round(max(pe_relative_to_2020 %>% filter(variable == "PE|Biomass") %>% pull(percentage))*100, 1),
          round(max(pe_relative_to_2020 %>% filter(variable == "PE|Coal") %>% pull(percentage))*100, 1),
          round(max(pe_relative_to_2020 %>% filter(variable == "PE|Gas") %>% pull(percentage))*100, 1),
          round(max(pe_relative_to_2020 %>% filter(variable == "PE|Oil") %>% pull(percentage))*100, 1))
)
# net imports hydrogen and e-fuels
vars <- c(
  "Hydrogen" = "SE|Hydrogen|Net Imports",
  "efuel - liquids" = "SE|Liquids|Hydrogen|Net Imports",
  "efuel - gases" = "SE|Gases|Hydrogen|Net Imports"
)

hydrogenAndEfuelsImports <- data.frame(
  Imports=c("Hydrogen","efuel - liquids","efuel - gases","Total"),
  "2040_mainScenario"=c(
    round(df %>% filter(period == 2040, region == "EU27", scenario == mainScen, variable == "SE|Hydrogen|Net Imports") %>% pull(value) * EJ2Mtoe,2),
    round(df %>% filter(period == 2040, region == "EU27", scenario == mainScen, variable == "SE|Liquids|Hydrogen|Net Imports") %>% pull(value) * EJ2Mtoe,2),
    round(df %>% filter(period == 2040, region == "EU27", scenario == mainScen, variable == "SE|Gases|Hydrogen|Net Imports") %>% pull(value) * EJ2Mtoe,2),
    round(df %>% filter(period == 2040, region == "EU27", scenario == mainScen, variable %in% c("SE|Hydrogen|Net Imports","SE|Liquids|Hydrogen|Net Imports","SE|Gases|Hydrogen|Net Imports")) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value) * EJ2Mtoe,2)
  ),
  "2040_min"=c(
    round(min(df %>% filter(period == 2040, region == "EU27", variable == "SE|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(min(df %>% filter(period == 2040, region == "EU27", variable == "SE|Liquids|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(min(df %>% filter(period == 2040, region == "EU27", variable == "SE|Gases|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(min(df %>% filter(period == 2040, region == "EU27", variable %in% c("SE|Hydrogen|Net Imports","SE|Liquids|Hydrogen|Net Imports","SE|Gases|Hydrogen|Net Imports")) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)) * EJ2Mtoe,2)
  ), 
  "2040_max"=c(
    round(max(df %>% filter(period == 2040, region == "EU27", variable == "SE|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(max(df %>% filter(period == 2040, region == "EU27", variable == "SE|Liquids|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(max(df %>% filter(period == 2040, region == "EU27", variable == "SE|Gases|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(max(df %>% filter(period == 2040, region == "EU27", variable %in% c("SE|Hydrogen|Net Imports","SE|Liquids|Hydrogen|Net Imports","SE|Gases|Hydrogen|Net Imports")) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)) * EJ2Mtoe,2)
  ),
  "2050_mainScenario"=c(
    round(df %>% filter(period == 2050, region == "EU27", scenario == mainScen, variable == "SE|Hydrogen|Net Imports") %>% pull(value) * EJ2Mtoe,2),
    round(df %>% filter(period == 2050, region == "EU27", scenario == mainScen, variable == "SE|Liquids|Hydrogen|Net Imports") %>% pull(value) * EJ2Mtoe,2),
    round(df %>% filter(period == 2050, region == "EU27", scenario == mainScen, variable == "SE|Gases|Hydrogen|Net Imports") %>% pull(value) * EJ2Mtoe,2),
    round(df %>% filter(period == 2050, region == "EU27", scenario == mainScen, variable %in% c("SE|Hydrogen|Net Imports","SE|Liquids|Hydrogen|Net Imports","SE|Gases|Hydrogen|Net Imports")) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value) * EJ2Mtoe,2)
  ),
  "2050_min"=c(
    round(min(df %>% filter(period == 2050, region == "EU27", variable == "SE|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(min(df %>% filter(period == 2050, region == "EU27", variable == "SE|Liquids|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(min(df %>% filter(period == 2050, region == "EU27", variable == "SE|Gases|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(min(df %>% filter(period == 2050, region == "EU27", variable %in% c("SE|Hydrogen|Net Imports","SE|Liquids|Hydrogen|Net Imports","SE|Gases|Hydrogen|Net Imports")) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)) * EJ2Mtoe,2)
  ), 
  "2050_max"=c(
    round(max(df %>% filter(period == 2050, region == "EU27", variable == "SE|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(max(df %>% filter(period == 2050, region == "EU27", variable == "SE|Liquids|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(max(df %>% filter(period == 2050, region == "EU27", variable == "SE|Gases|Hydrogen|Net Imports") %>% pull(value)) * EJ2Mtoe,2),
    round(max(df %>% filter(period == 2050, region == "EU27", variable %in% c("SE|Hydrogen|Net Imports","SE|Liquids|Hydrogen|Net Imports","SE|Gases|Hydrogen|Net Imports")) %>% group_by(model,scenario,region,unit,period) %>% summarize(value = sum(value),.groups = "keep") %>% pull(value)) * EJ2Mtoe,2)
  )
  )

# net imports
vars <- list(
  "Oil" = c("Trade|Imports|Oil","Trade|Exports|Oil"),
  "Gas" = c("Trade|Imports|Gas|Adj","Trade|Exports|Gas|Adj"),
  "Coal" = c("Trade|Imports|Coal","Trade|Exports|Coal"),
  "Biomass" = c("Trade|Imports|Biomass","Trade|Exports|Biomass")
)

carrier <- c()
for(c in names(vars)){
  for(var in vars[[c]]){
    v <- c
    names(v) <- var
    carrier <- c(carrier,v)
  }
}

pe_netImports <- df %>% 
  filter(region == "EU27", period %in% c(2020:2060), tgt2030 %in% tgt2030Scen, variable %in% unlist(vars)) %>%
  mutate(type = ifelse(grepl("Imports",variable),"Imports","Exports"),
         carrier = carrier[as.character(variable)]) %>%
  mutate(value = ifelse(type == "Exports", -value,value)) %>%
  group_by(model,scenario,region,unit,period,carrier) %>%
  summarize(value=sum(value),.groups = "keep") %>%
  mutate(type="EU-27 Net-trade")

primaryEnergyImports <- data.frame(
  Primary_Energy_Imports=c("Biomass","Coal","Gas","Oil"),
  relative_to_2020=c(
    round((pe_netImports %>% filter(period == 2040, scenario == mainScen, carrier == "Biomass") %>% mutate(value = value / (pe_netImports %>% filter(period == 2020, scenario == mainScen, carrier == "Biomass") %>% pull(value)))%>% pull(value))*100, 1),
    round((pe_netImports %>% filter(period == 2040, scenario == mainScen, carrier == "Coal") %>% mutate(value = value / (pe_netImports %>% filter(period == 2020, scenario == mainScen, carrier == "Coal") %>% pull(value)))%>% pull(value))*100, 1),
    round((pe_netImports %>% filter(period == 2040, scenario == mainScen, carrier == "Gas") %>% mutate(value = value / (pe_netImports %>% filter(period == 2020, scenario == mainScen, carrier == "Gas") %>% pull(value)))%>% pull(value))*100, 1),
    round((pe_netImports %>% filter(period == 2040, scenario == mainScen, carrier == "Oil") %>% mutate(value = value / (pe_netImports %>% filter(period == 2020, scenario == mainScen, carrier == "Oil") %>% pull(value)))%>% pull(value))*100, 1))
)


fe_gasandhydrogen <- df %>% 
  filter(region == "EU27", period %in% c(2020:2060), tgt2030 %in% tgt2030Scen, variable %in% c("FE|Hydrogen","FE|Gases")) %>%
  group_by(model,scenario,region,unit,period) %>%
  summarize(value=sum(value),.groups = "keep")

fe_gas_and_hydrogen <- data.frame(
  FE=c("Gas_and_hydrogen_(%)"),
  relative_to_2020=c(
    round((fe_gasandhydrogen %>% filter(period == 2040, scenario == mainScen) %>% mutate(value = value / (fe_gasandhydrogen %>% filter(period == 2020, scenario == mainScen) %>% pull(value)))%>% pull(value))*100, 1)))



fe_electricity <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("FE|Electricity")) %>%  
    select(scenario,tgt2030,value)
  ,
  df %>% 
    filter(region == "EU27", period == 2020, variable %in% c("FE|Electricity")) %>%
    mutate(base = value) %>%  
    select(scenario,tgt2030,base)
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = value/base)

FE_electricity <- data.frame(
  FE=c("fe_electricity_relative_to_2020_(%)", "fe_electricity_2040(Mtoe)"),
  reference_value=c(round(fe_electricity %>% filter(scenario == mainScen) %>% pull(percentage)*100,1),
                    round(fe_electricity %>% filter(scenario == mainScen) %>% pull(value)*EJ2Mtoe,0)),
  min = c(round(min(fe_electricity %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1),
          round(min(fe_electricity %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(value)*EJ2Mtoe),0)),
  max = c(round(max(fe_electricity %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1),
          round(max(fe_electricity %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(value)*EJ2Mtoe),0))
)


fe_transport_electricity <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("FE|Transport|Electricity")) %>%  
    select(scenario,tgt2030,value)
  ,
  df %>% 
    filter(region == "EU27", period == 2030, variable %in% c("FE|Transport|Electricity")) %>%
    mutate(base = value) %>%  
    select(scenario,tgt2030,base)
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = value/base)

FE <- data.frame(
  FE=c("transport_electricity_(%)"),
  reference_value=c(round(fe_transport_electricity %>% filter(scenario == mainScen) %>% pull(percentage)*100,1)),
  min = c(round(min(fe_transport_electricity %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1)),
  max = c(round(max(fe_transport_electricity %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1))
)


if("FE|Transport|Bunkers|Pass|International Aviation" %in% unique(df$variable)){
  Bunkers <- list(
    "Aviation" = c(
      "FE|Transport|Bunkers|Pass|International Aviation|Electricity" = "Electricity",
      #     "FE|Transport|Bunkers|Pass|International Aviation|Gases" = "Gases",
      "FE|Transport|Bunkers|Pass|International Aviation|Gases|Fossil" = "Gases - Fossil",
      "FE|Transport|Bunkers|Pass|International Aviation|Gases|Biomass" = "Gases - Biomass",
      "FE|Transport|Bunkers|Pass|International Aviation|Gases|Hydrogen" = "Gases - Synthetic",
      "FE|Transport|Bunkers|Pass|International Aviation|Hydrogen" = "Hydrogen",
      #     "FE|Transport|Bunkers|Pass|International Aviation|Liquids" = "Liquids"
      "FE|Transport|Bunkers|Pass|International Aviation|Liquids|Fossil" = "Liquids - Fossil",
      "FE|Transport|Bunkers|Pass|International Aviation|Liquids|Biomass" = "Liquids - Biomass",
      "FE|Transport|Bunkers|Pass|International Aviation|Liquids|Hydrogen" = "Liquids - Synthetic"
    ),
    "Shipping" = c(
      "FE|Transport|Bunkers|Freight|International Shipping|Electricity" = "Electricity",
      #    "FE|Transport|Bunkers|Freight|International Shipping|Gases" = "Gases",
      "FE|Transport|Bunkers|Freight|International Shipping|Gases|Fossil" = "Gases - Fossil",
      "FE|Transport|Bunkers|Freight|International Shipping|Gases|Biomass" = "Gases - Biomass",
      "FE|Transport|Bunkers|Freight|International Shipping|Gases|Hydrogen" = "Gases - Synthetic",
      "FE|Transport|Bunkers|Freight|International Shipping|Hydrogen" = "Hydrogen",
      #     "FE|Transport|Bunkers|Freight|International Shipping|Liquids" = "Liquids"
      "FE|Transport|Bunkers|Freight|International Shipping|Liquids|Fossil" = "Liquids - Fossil",
      "FE|Transport|Bunkers|Freight|International Shipping|Liquids|Biomass" = "Liquids - Biomass",
      "FE|Transport|Bunkers|Freight|International Shipping|Liquids|Hydrogen" = "Liquids - Synthetic"
    )
  )
  
  cleanAviation <- c("FE|Transport|Bunkers|Pass|International Aviation|Electricity", "FE|Transport|Bunkers|Pass|International Aviation|Gases|Biomass", "FE|Transport|Bunkers|Pass|International Aviation|Gases|Hydrogen", "FE|Transport|Bunkers|Pass|International Aviation|Hydrogen", "FE|Transport|Bunkers|Pass|International Aviation|Liquids|Biomass", "FE|Transport|Bunkers|Pass|International Aviation|Liquids|Hydrogen")
  dirtyAviation <- c("FE|Transport|Bunkers|Pass|International Aviation|Gases|Fossil", "FE|Transport|Bunkers|Pass|International Aviation|Liquids|Fossil")
  totalAviation <- c("FE|Transport|Bunkers|Pass|International Aviation")
  
  cleanShipping <- c("FE|Transport|Bunkers|Freight|International Shipping|Electricity", "FE|Transport|Bunkers|Freight|International Shipping|Gases|Biomass", "FE|Transport|Bunkers|Freight|International Shipping|Gases|Hydrogen", "FE|Transport|Bunkers|Freight|International Shipping|Hydrogen", "FE|Transport|Bunkers|Freight|International Shipping|Liquids|Biomass", "FE|Transport|Bunkers|Freight|International Shipping|Liquids|Hydrogen")
  dirtyShipping <- c("FE|Transport|Bunkers|Freight|International Shipping|Gases|Fossil", "FE|Transport|Bunkers|Freight|International Shipping|Liquids|Fossil")
  totalShipping <- c("FE|Transport|Bunkers|Freight|International Shipping")
  
}

if("FE|Transport|Pass|Aviation|International" %in% unique(df$variable)){
    
  Bunkers <- list(
    "Aviation" = c(
      "FE|Transport|Pass|Aviation|International|Electricity" = "Electricity",
      #     "FE|Transport|Pass|Aviation|International|Gases" = "Gases",
      "FE|Transport|Pass|Aviation|International|Gases|Fossil" = "Gases - Fossil",
      "FE|Transport|Pass|Aviation|International|Gases|Biomass" = "Gases - Biomass",
      "FE|Transport|Pass|Aviation|International|Gases|Hydrogen" = "Gases - Synthetic",
      "FE|Transport|Pass|Aviation|International|Hydrogen" = "Hydrogen",
      #     "FE|Transport|Pass|Aviation|International|Liquids" = "Liquids"
      "FE|Transport|Pass|Aviation|International|Liquids|Fossil" = "Liquids - Fossil",
      "FE|Transport|Pass|Aviation|International|Liquids|Biomass" = "Liquids - Biomass",
      "FE|Transport|Pass|Aviation|International|Liquids|Hydrogen" = "Liquids - Synthetic"
    ),
    "Shipping" = c(
      "FE|Transport|Freight|Navigation|Electricity" = "Electricity",
      #     "FE|Transport|Freight|Navigation|Gases" = "Gases",
      "FE|Transport|Freight|Navigation|Gases|Fossil" = "Gases - Fossil",
      "FE|Transport|Freight|Navigation|Gases|Biomass" = "Gases - Biomass",
      "FE|Transport|Freight|Navigation|Gases|Hydrogen" = "Gases - Synthetic",
      "FE|Transport|Freight|Navigation|Hydrogen" = "Hydrogen",
      #     "FE|Transport|Freight|Navigation|Liquids" = "Liquids",
      "FE|Transport|Freight|Navigation|Liquids|Fossil" = "Liquids - Fossil",
      "FE|Transport|Freight|Navigation|Liquids|Biomass" = "Liquids - Biomass",
      "FE|Transport|Freight|Navigation|Liquids|Hydrogen" = "Liquids - Synthetic",
      "FE|Transport|Freight|International Shipping|Electricity" = "Electricity",
      #     "FE|Transport|Freight|International Shipping|Gases" = "Gases",
      "FE|Transport|Freight|International Shipping|Gases|Fossil" = "Gases - Fossil",
      "FE|Transport|Freight|International Shipping|Gases|Biomass" = "Gases - Biomass",
      "FE|Transport|Freight|International Shipping|Gases|Hydrogen" = "Gases - Synthetic",
      "FE|Transport|Freight|International Shipping|Hydrogen" = "Hydrogen",
      #     "FE|Transport|Freight|International Shipping|Liquids" = "Liquids"
      "FE|Transport|Freight|International Shipping|Liquids|Fossil" = "Liquids - Fossil",
      "FE|Transport|Freight|International Shipping|Liquids|Biomass" = "Liquids - Biomass",
      "FE|Transport|Freight|International Shipping|Liquids|Hydrogen" = "Liquids - Synthetic"
    )
  )
  
  cleanAviation <- c("FE|Transport|Pass|Aviation|International|Electricity", "FE|Transport|Pass|Aviation|International|Gases|Biomass", "FE|Transport|Pass|Aviation|International|Gases|Hydrogen", "FE|Transport|Pass|Aviation|International|Hydrogen", "FE|Transport|Pass|Aviation|International|Liquids|Biomass", "FE|Transport|Pass|Aviation|International|Liquids|Hydrogen")
  dirtyAviation <- c("FE|Transport|Pass|Aviation|International|Gases|Fossil", "FE|Transport|Pass|Aviation|International|Liquids|Fossil")
  totalAviation <- c("FE|Transport|Pass|Aviation|International")
  
  cleanShipping <- c("FE|Transport|Freight|Navigation|Electricity", "FE|Transport|Freight|Navigation|Gases|Biomass", "FE|Transport|Freight|Navigation|Gases|Hydrogen", "FE|Transport|Freight|Navigation|Hydrogen", "FE|Transport|Freight|Navigation|Liquids|Biomass", "FE|Transport|Freight|Navigation|Liquids|Hydrogen",
                     "FE|Transport|Freight|International Shipping|Electricity", "FE|Transport|Freight|International Shipping|Gases|Biomass", "FE|Transport|Freight|International Shipping|Gases|Hydrogen", "FE|Transport|Freight|International Shipping|Hydrogen", "FE|Transport|Freight|International Shipping|Liquids|Biomass", "FE|Transport|Freight|International Shipping|Liquids|Hydrogen")
  dirtyShipping <- c("FE|Transport|Freight|Navigation|Gases|Fossil", "FE|Transport|Freight|Navigation|Liquids|Fossil",
                     "FE|Transport|Freight|International Shipping|Gases|Fossil", "FE|Transport|Freight|International Shipping|Liquids|Fossil")
  totalShipping <- c("FE|Transport|Freight|Navigation","FE|Transport|Freight|International Shipping")
}


AviationData <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% dirtyAviation) %>%
    group_by(scenario,tgt2030) %>%
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% totalAviation) %>%
    group_by(scenario,tgt2030) %>%
    summarize(total = sum(value),.groups = "keep")
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = (total - value)/total)


ShippingData <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% dirtyShipping) %>%
    group_by(scenario,tgt2030) %>%
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% totalShipping) %>%
    group_by(scenario,tgt2030) %>%
    summarize(total = sum(value),.groups = "keep")
  , by = join_by(scenario == scenario, tgt2030 == tgt2030)
) %>%
  mutate(percentage = (total - value)/total)

share_of_sustainable_fuel <- data.frame(
  FE=c("share_of_sustainable_fuel_in_aviation_(%)","share_of_sustainable_fuel_in_shipping_(%)"),
  reference_value=c(round(AviationData %>% filter(scenario == mainScen) %>% pull(percentage)*100,1),
                    round(ShippingData %>% filter(scenario == mainScen) %>% pull(percentage)*100,1)),
  min = c(round(min(AviationData %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1),
          round(min(ShippingData %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1)),
  max = c(round(max(AviationData %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1),
          round(max(ShippingData %>% filter(tgt2030 %in% tgt2030Scen) %>% pull(percentage)*100),1))
)


build_UE_heat <- c(
  "Heat pump" = "UE|Buildings|Heating|Electricity|Heat pump",
  "District Heating" = "UE|Buildings|Heating|District Heating",
  "Resistance" = "UE|Buildings|Heating|Electricity|Resistance",
  "Hydrogen" = "UE|Buildings|Heating|Hydrogen",
  "Gases" = "UE|Buildings|Heating|Gases",
  "Liquids" = "UE|Buildings|Heating|Liquids",
  "Solids" = "UE|Buildings|Heating|Solids"#,
  #  "non-Heating Electricity" = "UE|Buildings|non-Heating|Electricity|Conventional"
)


build_UE_heating_data <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% build_UE_heat[c("Heat pump","District Heating","Resistance")], tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% build_UE_heat, tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%  
    summarize(total = sum(value)) %>% 
    select(scenario,total)  
  ,
  by = join_by(scenario == scenario)
) %>% 
  mutate(pctg = value/total)

build_UE_liq_gas_data <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% build_UE_heat[c("Gases","Hydrogen","Liquids")], tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% build_UE_heat, tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%  
    summarize(total = sum(value)) %>% 
    select(scenario,total)  
  ,
  by = join_by(scenario == scenario)
) %>% 
  mutate(pctg = value/total)

build_UE_solids_data <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% build_UE_heat[c("Solids")], tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% build_UE_heat, tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%  
    summarize(total = sum(value)) %>% 
    select(scenario,total)  
  ,
  by = join_by(scenario == scenario)
) %>% 
  mutate(pctg = value/total)

build_UE_liq_gas_data_2020 <- left_join(
  df %>% 
    filter(region == "EU27", period == 2020, variable %in% build_UE_heat[c("Gases","Hydrogen","Liquids")], tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2020, variable %in% build_UE_heat, tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%  
    summarize(total = sum(value)) %>% 
    select(scenario,total)  
  ,
  by = join_by(scenario == scenario)
) %>% 
  mutate(pctg = value/total)

share_of_build_UE_heating <- data.frame(
  FE=c("share_of_electric_and_district_buildings_heating_useful energy_(%)","share_of_liquids_and_gases_buildings_heating_useful_energy_(%)","share_of_solids_buildings_heating_useful energy_(%)", "share_of_liquids_and_gases_buildings_heating_useful_energy_2020_(%)"),
  reference_value=c(round(build_UE_heating_data %>% filter(scenario == mainScen) %>% summarize(total = sum(pctg),.groups = "keep") %>% pull(total)*100 ),
                    round(build_UE_liq_gas_data %>% filter(scenario == mainScen) %>% summarize(total = sum(pctg),.groups = "keep") %>% pull(total)*100 ),
                    round(build_UE_solids_data %>% filter(scenario == mainScen) %>% summarize(total = sum(pctg),.groups = "keep") %>% pull(total)*100 ),
                    round(build_UE_liq_gas_data_2020 %>% filter(scenario == mainScen) %>% summarize(total = sum(pctg),.groups = "keep") %>% pull(total)*100 )),
  min = c(round(min(build_UE_heating_data %>% pull(pctg) *100)),
          round(min(build_UE_liq_gas_data %>% pull(pctg) *100)),
          round(min(build_UE_solids_data %>% pull(pctg) *100)),
          round(min(build_UE_liq_gas_data_2020 %>% pull(pctg) *100))),
  max = c(round(max(build_UE_heating_data %>% pull(pctg) *100)),
          round(max(build_UE_liq_gas_data %>% pull(pctg) *100)),
          round(max(build_UE_solids_data %>% pull(pctg) *100)),
          round(max(build_UE_liq_gas_data_2020 %>% pull(pctg) *100)))
)



build_FE_data <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable == "FE|Buildings|Heating", tgt2030 %in% tgt2030Scen) %>% 
    select(scenario,value)  
  ,
  df %>% 
    filter(region == "EU27", period == 2020, variable == "FE|Buildings|Heating", tgt2030 %in% tgt2030Scen) %>%
    mutate(base = value) %>% 
    select(scenario,base)  
  ,
  by = join_by(scenario == scenario)
) %>% 
  mutate(pctg = value/base)

share_of_build_FE_in_relation_to_2020 <- data.frame(
  FE=c("share_of_build_FE_in_relation_to_2020_(%)"),
  reference_value=c(round((1-build_FE_data %>% filter(scenario == mainScen) %>% pull(pctg))*100 )),
  min = c(round(min((1-build_FE_data %>% pull(pctg)) *100))),
  max = c(round(max((1-build_FE_data %>% pull(pctg)) *100)))
)

if("Stock|Transport|LDV" %in% unique(df$variable)){
  bevLDV <- c("Stock|Transport|LDV|BEV")
  allLDV <- c("Stock|Transport|LDV|BEV","Stock|Transport|LDV|FCEV","Stock|Transport|LDV|Hybrid Electric","Stock|Transport|LDV|Liquids","Stock|Transport|LDV|NG")
} else {
  bevLDV <- c("Stock|Transport|Pass|Road|LDV")
  allLDV <- c("Stock|Transport|Pass|Road|LDV|BEV","Stock|Transport|Pass|Road|LDV|FCEV","Stock|Transport|Pass|Road|LDV|Gases","Stock|Transport|Pass|Road|LDV|Hybrid electric","Stock|Transport|Pass|Road|LDV|Liquids")
}

BEVs_in_LDV_data <- left_join(
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% bevLDV, tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period == 2040, variable %in% allLDV, tgt2030 %in% tgt2030Scen) %>%
    group_by(scenario) %>%  
    summarize(total = sum(value)) %>% 
    select(scenario,total)  
  ,
  by = join_by(scenario == scenario)
) %>% 
  mutate(pctg = value/total)

BEVs_in_LDV <- data.frame(
  FE=c("share_of_EVs_in_LDVs_(%)"),
  reference_value=c(round(BEVs_in_LDV_data %>% filter(scenario == mainScen) %>% pull(pctg)*100 )),
  min = c(round(min((BEVs_in_LDV_data %>% pull(pctg)) *100))),
  max = c(round(max((BEVs_in_LDV_data %>% pull(pctg)) *100)))
)

chemicals <- left_join(
  df %>% 
    filter(region == "EU27", period %in% c(2020,2030,2040), variable %in% c("FE|Industry|Chemicals|Hydrogen", "FE|Industry|Chemicals|Gases|Biomass", "FE|Industry|Chemicals|Gases|Hydrogen", "FE|Industry|Chemicals|Liquids|Biomass", "FE|Industry|Chemicals|Liquids|Hydrogen", "FE|Industry|Chemicals|Solids|Biomass"), tgt2030 %in% tgt2030Scen) %>%
    group_by(period,scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period %in% c(2020,2030,2040), variable == "FE|Industry|Chemicals", tgt2030 %in% tgt2030Scen) %>%
    mutate(base=value) %>%
    select(scenario,period,base)
  , by = join_by(scenario == scenario, period == period)
) %>%
  mutate(percentage = value/base)

chemicals_df <- data.frame(
  FE_chemicals_energy_and_proccesses = c("biomass_hydrogen_efuels_2020 (%)", "biomass_hydrogen_efuels_2030 (%)", "biomass_hydrogen_efuels_2040 (%)"),
  reference_value = c(round(chemicals %>% filter(scenario == mainScen, period == 2020) %>% pull(percentage)*100 ),
                      round(chemicals %>% filter(scenario == mainScen, period == 2030) %>% pull(percentage)*100 ),
                      round(chemicals %>% filter(scenario == mainScen, period == 2040) %>% pull(percentage)*100 )),
  min = c(round(min(chemicals %>% filter(period == 2020) %>% pull(percentage) *100)),
          round(min(chemicals %>% filter(period == 2030) %>% pull(percentage) *100)),
          round(min(chemicals %>% filter(period == 2040) %>% pull(percentage) *100))),
  max = c(round(max(chemicals %>% filter(period == 2020) %>% pull(percentage) *100)),
          round(max(chemicals %>% filter(period == 2030) %>% pull(percentage) *100)),
          round(max(chemicals %>% filter(period == 2040) %>% pull(percentage) *100)))
)

steel <- left_join(
   df %>% 
    filter(region == "EU27", period %in% c(2020,2030,2040), variable %in% c("FE|Industry|Steel|Secondary|Electricity", "FE|Industry|Steel|Hydrogen", "FE|Industry|Steel|Gases|Hydrogen", "FE|Industry|Steel|Liquids|Hydrogen"), tgt2030 %in% tgt2030Scen) %>%
    select(scenario,period,variable,value)
  ,
  df %>%
    filter(region == "EU27", period %in% c(2020,2030,2040), variable == "FE|Industry|Steel", tgt2030 %in% tgt2030Scen) %>%
    mutate(base=value) %>%
    select(scenario,period,base)
  , by = join_by(scenario == scenario, period == period)
) %>%
  mutate(percentage = value/base)

steel_df <- data.frame(
  FE_steel = c("secondary_steel_2040 (%)", "hydrogen_based_steel_2040 (%)", "efuel_gases_steel_2040 (%)", "efuel_liquids_steel_2040 (%)"),
  reference_value = c(round(steel %>% filter(scenario == mainScen, variable =="FE|Industry|Steel|Secondary|Electricity", period == 2040) %>% pull(percentage)*100 ),
                      round(steel %>% filter(scenario == mainScen, variable =="FE|Industry|Steel|Hydrogen", period == 2040) %>% pull(percentage)*100 ),
                      round(steel %>% filter(scenario == mainScen, variable =="FE|Industry|Steel|Gases|Hydrogen", period == 2040) %>% pull(percentage)*100 ),
                      round(steel %>% filter(scenario == mainScen, variable =="FE|Industry|Steel|Liquids|Hydrogen", period == 2040) %>% pull(percentage)*100 )),
  min = c(round(min(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Secondary|Electricity") %>% pull(percentage) *100)),
          round(min(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Hydrogen") %>% pull(percentage) *100)),
          round(min(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Gases|Hydrogen") %>% pull(percentage) *100)),
          round(min(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Liquids|Hydrogen") %>% pull(percentage) *100))),
  max = c(round(max(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Secondary|Electricity") %>% pull(percentage) *100)),
          round(max(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Hydrogen") %>% pull(percentage) *100)),
          round(max(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Gases|Hydrogen") %>% pull(percentage) *100)),
          round(max(steel %>% filter(period == 2040, variable =="FE|Industry|Steel|Liquids|Hydrogen") %>% pull(percentage) *100)))
)

other_industry <- left_join(
  df %>% 
    filter(region == "EU27", period %in% c(2020,2030,2040), variable %in% c("FE|Industry|Other Industry|Gases|Fossil", "FE|Industry|Other Industry|Liquids|Fossil", "FE|Industry|Other Industry|Solids|Fossil"), tgt2030 %in% tgt2030Scen) %>%
    group_by(period,scenario) %>%    
    summarize(value = sum(value),.groups = "keep")
  ,
  df %>% 
    filter(region == "EU27", period %in% c(2020,2030,2040), variable == "FE|Industry|Other Industry", tgt2030 %in% tgt2030Scen) %>%
    mutate(base=value) %>%
    select(scenario,period,base)
  , by = join_by(scenario == scenario, period == period)
) %>%
  mutate(percentage = value/base)

other_industry_df <- data.frame(
  FE_other_industry = c("hydrocarbons_2020 (%)", "hydrocarbons_2030 (%)", "hydrocarbons_2040 (%)"),
  reference_value = c(round(other_industry %>% filter(scenario == mainScen, period == 2020) %>% pull(percentage)*100 ),
                      round(other_industry %>% filter(scenario == mainScen, period == 2030) %>% pull(percentage)*100 ),
                      round(other_industry %>% filter(scenario == mainScen, period == 2040) %>% pull(percentage)*100 )),
  min = c(round(min(other_industry %>% filter(period == 2020) %>% pull(percentage) *100)),
          round(min(other_industry %>% filter(period == 2030) %>% pull(percentage) *100)),
          round(min(other_industry %>% filter(period == 2040) %>% pull(percentage) *100))),
  max = c(round(max(other_industry %>% filter(period == 2020) %>% pull(percentage) *100)),
          round(max(other_industry %>% filter(period == 2030) %>% pull(percentage) *100)),
          round(max(other_industry %>% filter(period == 2040) %>% pull(percentage) *100)))
)


#Carbon Management|Storage in 2030 (Minimum and Maximum of your scenario range)

#Carbon Management|Storage in 2040 (Minimum and Maximum of your scenario range)

#tenth root (because the period is 10 years) and then the division of 2040 CCS to 2030 CCS, i.e.:
#10√(Carbon Management|Storage in 2040 / Carbon Management|Storage in 2030)
#(here also minimum and maximum value across your scenario range)

#Here again we need the tenth (because 10 years) root of the ratio of CDR in 2040 divided by CDR in 2030
#For CDR quantity calculation see next comment :)

#Total CDR = (Emi|CO2|CDR|BECCS + Emi|CO2|CDR|DACCS + Emi|CO2|CDR|Industry CCS|Synthetic Fuels) in 2040
#(and then span the scenario range)

totalCDR <- df %>% filter(region == "EU27", period %in% c(2030,2040), variable %in% c("Emi|CO2|CDR|BECCS","Emi|CO2|CDR|DACCS","Emi|CO2|CDR|Industry CCS|Synthetic Fuels"), tgt2030 %in% tgt2030Scen) %>% group_by(period,scenario) %>% summarize(value = sum(-value),.groups = "keep")


rateCCS <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable == "Carbon Management|Storage", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable == "Carbon Management|Storage", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

rateCDR <- left_join(
  totalCDR %>%
    filter(period == 2040) %>%
    mutate(numerator=value) %>%
    ungroup() %>%
    select(scenario,numerator)
  ,
  totalCDR %>%
    filter(period == 2030) %>%
    mutate(denominator=value) %>%
    ungroup() %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))


CDR <- data.frame(
  result=c("CCS_deployment_in_2030_MtCO2","CCS_deployment_in_2040_MtCO2","CCS_upscaling_rates_2030_2040_%","novel_CDR_upscaling_rates_2030_2040_%","novel_CDR_deployment_in_2040_MtCO2"),
  reference_value=c(
    round(df %>% filter(region == "EU27", period == 2030, variable == "Carbon Management|Storage", scenario == mainScen) %>% pull(value)),
    round(df %>% filter(region == "EU27", period == 2040, variable == "Carbon Management|Storage", scenario == mainScen) %>% pull(value)),
    round((rateCCS %>% filter(scenario == mainScen) %>% pull(rate)-1)*100),
    round((rateCDR %>% filter(scenario == mainScen) %>% pull(rate)-1)*100),
    round(totalCDR %>% filter(period == 2040, scenario == mainScen) %>% pull(value))
  ),
  min = c(
    round(min(df %>% filter(region == "EU27", period == 2030, variable == "Carbon Management|Storage", tgt2030 %in% tgt2030Scen) %>% pull(value))),
    round(min(df %>% filter(region == "EU27", period == 2040, variable == "Carbon Management|Storage", tgt2030 %in% tgt2030Scen) %>% pull(value))),
    round((min(rateCCS %>% pull(rate))-1)*100),
    round((min(rateCDR %>% pull(rate))-1)*100),
    round(min(totalCDR %>% filter(period == 2040) %>% pull(value)))
  ),
  max = c(
    round(max(df %>% filter(region == "EU27", period == 2030, variable == "Carbon Management|Storage", tgt2030 %in% tgt2030Scen) %>% pull(value))),
    round(max(df %>% filter(region == "EU27", period == 2040, variable == "Carbon Management|Storage", tgt2030 %in% tgt2030Scen) %>% pull(value))),
    round((max(rateCCS %>% pull(rate))-1)*100),
    round((max(rateCDR %>% pull(rate))-1)*100),
    round(max(totalCDR %>% filter(period == 2040) %>% pull(value)))
  )
)

## Milestones upscaling rates

# Final Energy
FEbySector <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("FE|Transport","FE|Buildings","FE|Industry"), tgt2030 %in% tgt2030Scen) %>%
    mutate(end=value) %>%
    select(variable,scenario,end)
  ,
  df %>%
    filter(region == "EU27", period == 2020, variable %in% c("FE|Transport","FE|Buildings","FE|Industry"), tgt2030 %in% tgt2030Scen) %>%
    mutate(base=value) %>%
    select(variable,scenario,base)
  , by = join_by(scenario == scenario, variable == variable)
) %>%
  mutate(percentage = (end-base)/base)

FEbySector_change <- data.frame(
  result=c("FE_Transport_change_%","FE_Buildings_change_%","FE_Industry_change_%"),
  reference_value=c(
    round((FEbySector %>% filter(scenario == mainScen, variable == "FE|Transport") %>% pull(percentage))*100),
    round((FEbySector %>% filter(scenario == mainScen, variable == "FE|Buildings") %>% pull(percentage))*100),
    round((FEbySector %>% filter(scenario == mainScen, variable == "FE|Industry") %>% pull(percentage))*100)
  ),
  min = c(
    round((min(FEbySector %>% filter(variable == "FE|Transport") %>% pull(percentage)))*100),
    round((min(FEbySector %>% filter(variable == "FE|Buildings") %>% pull(percentage)))*100),
    round((min(FEbySector %>% filter(variable == "FE|Industry") %>% pull(percentage)))*100)
  ),
  max = c(
    round((max(FEbySector %>% filter(variable == "FE|Transport") %>% pull(percentage)))*100),
    round((max(FEbySector %>% filter(variable == "FE|Buildings") %>% pull(percentage)))*100),
    round((max(FEbySector %>% filter(variable == "FE|Industry") %>% pull(percentage)))*100)
  )
)


# Renewables Share in Final Energy
rate2030_2040RenewablesShare <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable == "SE|Renewables Share", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable == "SE|Renewables Share", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

rate2022_2030RenewablesShare <- 
  df %>%
  filter(region == "EU27", period == 2030, variable == "SE|Renewables Share", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator=value) %>%
  select(scenario,numerator) %>%
  mutate(denominator=addHist$res %>% filter(type == "RES", period == 2022) %>% pull(value)) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/9))

renewablesShare <- data.frame(
  result=c("Renewables_Share_upscaling_rates_2022_to_2030_%","Renewables_Share_upscaling_rates_2030_to_2040_%"),
  reference_value=c(
    round((rate2022_2030RenewablesShare %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2030_2040RenewablesShare %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1)
  ),
  min = c(
    round((min(rate2022_2030RenewablesShare %>% pull(rate))-1)*100,1),
    round((min(rate2030_2040RenewablesShare %>% pull(rate))-1)*100,1)
  ),
  max = c(
    round((max(rate2022_2030RenewablesShare %>% pull(rate))-1)*100,1),
    round((max(rate2030_2040RenewablesShare %>% pull(rate))-1)*100,1)
  )
)


# share of electricity in final energy
electShare <- data.frame(
  "share_of_electricity_in_final_energy"=c("2030","2040"),
  reference_value=c(
    round(df %>% filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), scenario == mainScen) %>% pull(value)*100,1),
    round(df %>% filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), scenario == mainScen) %>% pull(value)*100,1)
  ),
  min = c(
    round(min(df %>% filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen) %>% pull(value))*100,1),
    round(min(df %>% filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen) %>% pull(value))*100,1)
  ),
  max = c(
    round(max(df %>% filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen) %>% pull(value))*100,1),
    round(max(df %>% filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share"), tgt2030 %in% tgt2030Scen) %>% pull(value))*100,1)
  )
)


# Electricity Share in Final Energy
rate2030_2040ElectricityShare <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share","Final Energy|w/o Bunkers|w/o Non-energy Use|Transport|Electricity Share","Final Energy|w/o Bunkers|w/o Non-energy Use|Industry|Electricity Share","Final Energy|w/o Bunkers|w/o Non-energy Use|Buildings|Electricity Share"), tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(variable,scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable %in% c("Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share","Final Energy|w/o Bunkers|w/o Non-energy Use|Transport|Electricity Share","Final Energy|w/o Bunkers|w/o Non-energy Use|Industry|Electricity Share","Final Energy|w/o Bunkers|w/o Non-energy Use|Buildings|Electricity Share"), tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(variable,scenario,denominator)
  , by = join_by(scenario == scenario, variable == variable)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

#estimation of historical share in 2022 for FE electricity / FE with non-energy use and with bunkers
h <- (
  2550461.10 *1000 / 8.76E+09 * 31.536  # https://ec.europa.eu/eurostat/databrowser/bookmark/12d54df4-7c35-47eb-a103-dd8994d26b80?lang=en
) / (
  addHist$FE_consumption %>% mutate(value = value/1000000) %>% filter(period==2022) %>% pull(value) + # FE|w/o Non-energy Use w/o Bunkers - EJ
    df %>% filter(region == "EU27", period == 2020, scenario == "Npi", variable == "FE|Transport|Bunkers") %>% pull(value) +
    df %>% filter(region == "EU27", period == 2020, scenario == "Npi", variable == "FE|Non-energy Use|Industry") %>% pull(value)
)

rate2022_2030ElectricityShare <- 
  df %>%
  filter(region == "EU27", period == 2030, variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator=value) %>%
  select(scenario,numerator) %>%
  mutate(denominator=h) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/9))

ElectricityShare <- data.frame(
  result=c("Electricity_Share_upscaling_rates_2022_to_2030_%","Electricity_Share_upscaling_rates_2030_to_2040_%","Transport_Electricity_Share_upscaling_rates_2030_to_2040_%","Buildings_Electricity_Share_upscaling_rates_2030_to_2040_%","Industry_Electricity_Share_upscaling_rates_2030_to_2040_%"),
  reference_value=c(
    round((rate2022_2030ElectricityShare %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2030_2040ElectricityShare %>% filter(scenario == mainScen, variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share") %>% pull(rate)-1)*100,1),
    round((rate2030_2040ElectricityShare %>% filter(scenario == mainScen, variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Transport|Electricity Share") %>% pull(rate)-1)*100,1),
    round((rate2030_2040ElectricityShare %>% filter(scenario == mainScen, variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Buildings|Electricity Share") %>% pull(rate)-1)*100,1),
    round((rate2030_2040ElectricityShare %>% filter(scenario == mainScen, variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Industry|Electricity Share") %>% pull(rate)-1)*100,1)
  ),
  min = c(
    round((min(rate2022_2030ElectricityShare %>% pull(rate))-1)*100,1),
    round((min(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share") %>% pull(rate))-1)*100,1),
    round((min(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Transport|Electricity Share") %>% pull(rate))-1)*100,1),
    round((min(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Buildings|Electricity Share") %>% pull(rate))-1)*100,1),
    round((min(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Industry|Electricity Share") %>% pull(rate))-1)*100,1)
  ),
  max = c(
    round((max(rate2022_2030ElectricityShare %>% pull(rate))-1)*100,1),
    round((max(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Electricity Share") %>% pull(rate))-1)*100,1),
    round((max(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Transport|Electricity Share") %>% pull(rate))-1)*100,1),
    round((max(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Buildings|Electricity Share") %>% pull(rate))-1)*100,1),
    round((max(rate2030_2040ElectricityShare %>% filter(variable == "Final Energy|w/o Bunkers|w/o Non-energy Use|Industry|Electricity Share") %>% pull(rate))-1)*100,1)
  )
)

# Hydrogen production
rate2030_2040hydrogenProduction <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable == "SE|Hydrogen", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable == "SE|Hydrogen", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

rate2040_2050hydrogenProduction <- left_join(
  df %>%
    filter(region == "EU27", period == 2050, variable == "SE|Hydrogen", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2040, variable == "SE|Hydrogen", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

hydrogenProduction <- data.frame(
  result=c("Hydrogen_upscaling_rates_2030_to_2040_%","Hydrogen_upscaling_rates_2040_to_2050_%"),
  reference_value=c(
    round((rate2030_2040hydrogenProduction %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2040_2050hydrogenProduction %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1)
  ),
  min = c(
    round((min(rate2030_2040hydrogenProduction %>% pull(rate))-1)*100,1),
    round((min(rate2040_2050hydrogenProduction %>% pull(rate))-1)*100,1)
  ),
  max = c(
    round((max(rate2030_2040hydrogenProduction %>% pull(rate))-1)*100,1),
    round((max(rate2040_2050hydrogenProduction %>% pull(rate))-1)*100,1)
  )
)

# Electricity Demand
rate2030_2040ElectricityDemand <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable == "FE|Electricity", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator = value * 1/0.0036) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable == "FE|Electricity", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator = value * 1/0.0036) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(diff = (numerator - denominator)/10,
         percentage = numerator/denominator,
         rate = percentage ^ (1/10))

#2022 = 2469471.42 GWh = 2469471.42 *1000 / 8.76E+09 * 31.536 EJ - FE electricity - https://ec.europa.eu/eurostat/databrowser/bookmark/d19a01c7-6099-4b88-8ccd-c6bcc01c3ddc?lang=en
h <- 2469471.42 /1000

rate2022_2030ElectricityDemand <- 
  df %>%
  filter(region == "EU27", period == 2030, variable == "FE|Electricity", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator = value * 1/0.0036) %>%
  select(scenario,numerator) %>%
  mutate(denominator=h) %>%
  mutate(diff = (numerator - denominator)/8,
         percentage = numerator/denominator,
         rate = percentage ^ (1/8))

rate2020_2030ElectricityDemand <- left_join(
  df %>%
    filter(region == "EU27", period == 2030, variable == "FE|Electricity", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator = value * 1/0.0036) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2020, variable == "FE|Electricity", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator = value * 1/0.0036) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(diff = (numerator - denominator)/10,
         percentage = numerator/denominator,
         rate = percentage ^ (1/10))

rate2022_2040ElectricityDemand <- 
  df %>%
  filter(region == "EU27", period == 2040, variable == "FE|Electricity", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator = value * 1/0.0036) %>%
  select(scenario,numerator) %>%
  mutate(denominator=h) %>%
  mutate(diff = (numerator - denominator)/8,
         percentage = numerator/denominator,
         rate = percentage ^ (1/8))

ElectricityDemand <- data.frame(
  result=c("Electricity_Demand_increase_2020_to_2040_(%)","Electricity_Demand_yearly_install_2022_to_2030_(Twh)","Electricity_Demand_yearly_install_2030_to_2040_(Twh)","Electricity_Demand_upscaling_rates_2022_to_2030_%","Electricity_Demand_upscaling_rates_2020_to_2030_%","Electricity_Demand_upscaling_rates_2030_to_2040_%"),
  reference_value=c(
    round((rate2022_2040ElectricityDemand %>% filter(scenario == mainScen) %>% pull(percentage)-1)*100,1),
    round(rate2022_2030ElectricityDemand %>% filter(scenario == mainScen) %>% pull(diff)),
    round(rate2030_2040ElectricityDemand %>% filter(scenario == mainScen) %>% pull(diff)),
    round((rate2022_2030ElectricityDemand %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2020_2030ElectricityDemand %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2030_2040ElectricityDemand %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1)
  ),
  min = c(
    round(((min(rate2022_2040ElectricityDemand %>% pull(percentage)))-1)*100,1),
    round((min(rate2022_2030ElectricityDemand %>% pull(diff)))),
    round((min(rate2030_2040ElectricityDemand %>% pull(diff)))),
    round((min(rate2022_2030ElectricityDemand %>% pull(rate))-1)*100,1),
    round((min(rate2020_2030ElectricityDemand %>% pull(rate))-1)*100,1),
    round((min(rate2030_2040ElectricityDemand %>% pull(rate))-1)*100,1)
  ),
  max = c(
    round(((max(rate2022_2040ElectricityDemand %>% pull(percentage)))-1)*100,1),
    round((max(rate2022_2030ElectricityDemand %>% pull(diff)))),
    round((max(rate2030_2040ElectricityDemand %>% pull(diff)))),
    round((max(rate2022_2030ElectricityDemand %>% pull(rate))-1)*100,1),
    round((max(rate2020_2030ElectricityDemand %>% pull(rate))-1)*100,1),
    round((max(rate2030_2040ElectricityDemand %>% pull(rate))-1)*100,1)
  )
)

# # Electricity Supply
# rate2030_2040ElectricitySupply <- left_join(
#   df %>%
#     filter(region == "EU27", period == 2040, variable == "SE|Electricity", tgt2030 %in% tgt2030Scen) %>%
#     mutate(numerator = value * 1/0.0036) %>%
#     select(scenario,numerator)
#   ,
#   df %>%
#     filter(region == "EU27", period == 2030, variable == "SE|Electricity", tgt2030 %in% tgt2030Scen) %>%
#     mutate(denominator = value * 1/0.0036) %>%
#     select(scenario,denominator)
#   , by = join_by(scenario == scenario)
# ) %>%
#   mutate(percentage = numerator/denominator,
#          rate = percentage ^ (1/10))
# 
# rate2020_2030ElectricitySupply <- left_join(
#   df %>%
#     filter(region == "EU27", period == 2030, variable == "SE|Electricity", tgt2030 %in% tgt2030Scen) %>%
#     mutate(numerator = value * 1/0.0036) %>%
#     select(scenario,numerator)
#   ,
#   df %>%
#     filter(region == "EU27", period == 2020, variable == "SE|Electricity", tgt2030 %in% tgt2030Scen) %>%
#     mutate(denominator = value * 1/0.0036) %>%
#     select(scenario,denominator)
#   , by = join_by(scenario == scenario)
# ) %>%
#   mutate(percentage = numerator/denominator,
#          rate = percentage ^ (1/10))
# 
# # #2022 = 2469471.42 GWh = 2469471.42 *1000 / 8.76E+09 * 31.536 EJ - FE electricity - https://ec.europa.eu/eurostat/databrowser/bookmark/d19a01c7-6099-4b88-8ccd-c6bcc01c3ddc?lang=en
# # h <- 2469471.42 /1000
# # 
# # rate2022_2030ElectricitySupply <- 
# #   df %>%
# #     filter(region == "EU27", period == 2030, variable == "SE|Electricity", tgt2030 %in% tgt2030Scen) %>%
# #     mutate(numerator = value * 1/0.0036) %>%
# #     select(scenario,numerator) %>%
# #     mutate(denominator=h) %>%
# #     mutate(percentage = numerator/denominator,
# #            rate = percentage ^ (1/8))
# 
# ElectricitySupply <- data.frame(
#   result=c("Electricity_Supply_upscaling_rates_2022_to_2030_%","Electricity_Supply_upscaling_rates_2030_to_2040_%"),
#   reference_value=c(
#     round((rate2022_2030ElectricitySupply %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
#     round((rate2030_2040ElectricitySupply %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1)
#   ),
#   min = c(
#     round((min(rate2022_2030ElectricitySupply %>% pull(rate))-1)*100,1),
#     round((min(rate2030_2040ElectricitySupply %>% pull(rate))-1)*100,1)
#   ),
#   max = c(
#     round((max(rate2022_2030ElectricitySupply %>% pull(rate))-1)*100,1),
#     round((max(rate2030_2040ElectricitySupply %>% pull(rate))-1)*100,1)
#   )
# )

# Solar Photovoltaics
rate2030_2040SolarPV <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable == "Cap|Electricity|Solar|PV", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Solar|PV", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

rate2022_2030SolarPV <- 
  df %>%
  filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Solar|PV", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator=value) %>%
  select(scenario,numerator) %>%
  mutate(denominator=208.9) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/8))

rate2022_2040SolarPV <- 
  df %>%
  filter(region == "EU27", period == 2040, variable == "Cap|Electricity|Solar|PV", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator=value) %>%
  select(scenario,numerator) %>%
  mutate(denominator=208.9) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/18))

SolarPV <- data.frame(
  result=c("SolarPV_2022_vs_2040_X", "SolarPV_upscaling_rates_2030_to_2040_%","SolarPV_upscaling_rates_2022_to_2040_%","SolarPV_upscaling_rates_2022_to_2030_%"),
  reference_value=c(
    round((rate2022_2040SolarPV %>% filter(scenario == mainScen) %>% pull(percentage)),1),
    round((rate2030_2040SolarPV %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2022_2040SolarPV %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2022_2030SolarPV %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1)
  ),
  min = c(
    round((min(rate2022_2040SolarPV %>% pull(percentage))),1),
    round((min(rate2030_2040SolarPV %>% pull(rate))-1)*100,1),
    round((min(rate2022_2040SolarPV %>% pull(rate))-1)*100,1),
    round((min(rate2022_2030SolarPV %>% pull(rate))-1)*100,1)
  ),
  max = c(
    round((max(rate2022_2040SolarPV %>% pull(percentage))),1),
    round((max(rate2030_2040SolarPV %>% pull(rate))-1)*100,1),
    round((max(rate2022_2040SolarPV %>% pull(rate))-1)*100,1),
    round((max(rate2022_2030SolarPV %>% pull(rate))-1)*100,1)
  )
)

# Wind
rate2030_2040Wind <- left_join(
  df %>%
    filter(region == "EU27", period == 2040, variable == "Cap|Electricity|Wind", tgt2030 %in% tgt2030Scen) %>%
    mutate(numerator=value) %>%
    select(scenario,numerator)
  ,
  df %>%
    filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Wind", tgt2030 %in% tgt2030Scen) %>%
    mutate(denominator=value) %>%
    select(scenario,denominator)
  , by = join_by(scenario == scenario)
) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/10))

rate2022_2030Wind <- 
  df %>%
  filter(region == "EU27", period == 2030, variable == "Cap|Electricity|Wind", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator=value) %>%
  select(scenario,numerator) %>%
  mutate(denominator=255) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/8))

rate2022_2040Wind <- 
  df %>%
  filter(region == "EU27", period == 2040, variable == "Cap|Electricity|Wind", tgt2030 %in% tgt2030Scen) %>%
  mutate(numerator=value) %>%
  select(scenario,numerator) %>%
  mutate(denominator=255) %>%
  mutate(percentage = numerator/denominator,
         rate = percentage ^ (1/18))

Wind <- data.frame(
  result=c("wind_2022_vs_2040_X","Wind_upscaling_rates_2030_to_2040_%","Wind_upscaling_rates_2022_to_2040_%","Wind_upscaling_rates_2022_to_2030_%"),
  reference_value=c(
    round((rate2022_2040Wind %>% filter(scenario == mainScen) %>% pull(percentage)),1),
    round((rate2030_2040Wind %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2022_2040Wind %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1),
    round((rate2022_2030Wind %>% filter(scenario == mainScen) %>% pull(rate)-1)*100,1)
  ),
  min = c(
    round((min(rate2022_2040Wind %>% pull(percentage))),1),
    round((min(rate2030_2040Wind %>% pull(rate))-1)*100,1),
    round((min(rate2022_2040Wind %>% pull(rate))-1)*100,1),
    round((min(rate2022_2030Wind %>% pull(rate))-1)*100,1)
  ),
  max = c(
    round((max(rate2022_2040Wind %>% pull(percentage))),1),
    round((max(rate2030_2040Wind %>% pull(rate))-1)*100,1),
    round((max(rate2022_2040Wind %>% pull(rate))-1)*100,1),
    round((max(rate2022_2030Wind %>% pull(rate))-1)*100,1)
  )
)


#residual fossils
residualFossils <- data.frame(
  result=c("residual_fossil_MtCO2_2030","residual_fossil_MtCO2_2040","residual_fossil_MtCO2_2050"),
  reference_value=c(
    round((df %>% filter(region == "EU27", period == 2030, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% filter(scenario == mainScen) %>% pull(value))),
    round((df %>% filter(region == "EU27", period == 2040, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% filter(scenario == mainScen) %>% pull(value))),
    round((df %>% filter(region == "EU27", period == 2050, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% filter(scenario == mainScen) %>% pull(value)))
  ),
  min = c(
    round((min(df %>% filter(region == "EU27", period == 2030, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% pull(value)))),
    round((min(df %>% filter(region == "EU27", period == 2040, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% pull(value)))),
    round((min(df %>% filter(region == "EU27", period == 2050, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% pull(value))))
  ),
  max = c(
    round((max(df %>% filter(region == "EU27", period == 2030, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% pull(value)))),
    round((max(df %>% filter(region == "EU27", period == 2040, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% pull(value)))),
    round((max(df %>% filter(region == "EU27", period == 2050, tgt2030 %in% tgt2030Scen, variable == "Emi|CO2|Residual Fossil") %>% pull(value))))
  )
)



