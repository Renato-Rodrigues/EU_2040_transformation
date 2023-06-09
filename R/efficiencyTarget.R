
# Efficiency targets
# REPOWER EU ACTION PLAN
# https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52022SC0230&from=EN 
# PRIMES modelling results - Energy consumption in final demand sectors
# RePowerEU = 712 Mtoe 
# Fit-for-55 = 748 Mtoe

# Old legislation
# https://www.europarl.europa.eu/legislative-train/package-fit-for-55/file-revision-of-the-energy-efficiency-directive
# 'fit for 55' legislative package
# final (-36 %) energy consumption by 2030
# 787 Mtoe in final energy consumption (compared to 846 Mtoe under the 2018 EED, EU energy efficiency directive (EED))

# conversion factor
Mtoe2TWa <- 41.868 * 0.001 * (1/31.526) # GJ/toe * (Mtoe/toe*EJ/GJ = 1e6/1e9) * EJ/TWa

effTgt <- data.frame(target = c("reference","FitFor55 eff","RePowerEU eff"), #,"FitFor55 rev eff","RePowerEU rev eff"
                     Final_Energy_Mtoe = c(846, 787, 750)) %>% #, round(748), round(712))) %>%
  mutate(Final_Energy_Twa = c(round(Final_Energy_Mtoe*Mtoe2TWa,4)))

#846*Mtoe2TWa