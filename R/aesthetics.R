
# Aestethics

baseTextSize <- 3

options <- list()
options$aesthetics <- list(
  "text" = list(
    "size" = list(
      "text" = 30*baseTextSize,
      "axis.title" = 30*baseTextSize,
      "legend.text" = 20*baseTextSize
    )
  )
  ,
  "line" = list(
    "size" = 1.5
  ),
  "legend" = list (
    "color" = c(
      #sector
      "Industry" = "#5f6769",
      "Residential and Commercial" = "#5edfff",
      "Buildings" = "#5edfff",
      "Transportation" = "#a1dd70",
      "Carbon Dioxide Removal" = "#f7be16",
      "Other Sector" = "#e9e5dd",
      
      "Energy" = "#3D4849",
      
      "Energy Supply - Electricity" = "#ffb200",
      "Energy Supply - Gases"       = "#999959",
      "Energy Supply - Heat"        = "#cc0000",
      "Energy Supply - Hydrogen"    = "#5ed5b0",
      "Energy Supply - Liquids"     = "#0000cc",
      "Energy Supply - Solids"      = "#0c0c0c",
      "Energy Supply - Other"       = "#79a6d2",
      
      "Electricity" = "#ffb200",
      "Gases"       = "#999959",
      "Gases - Fossil"  = "#999959", # #a1a161",
      "Gases - Biomass" = "#999959", # "#999959",
      "Gases - Efuel"   = "#999959", # "#caca8a",
      "Syngas"   = "#fef3da", # "#caca8a",
      "Biogas" = "#00cc00", # "#999959",
      "Natural gas"  = "#999959", # #a1a161",
      
      "Heat"        = "#cc0000",
      "Hydrogen"    = "#5ed5b0",
      "Liquids"     = "#0000cc",
      "Liquids - Fossil"  = "#0000cc", #"#000068",
      "Liquids - Biomass" = "#0000cc", #"#0000cc",
      "Liquids - Efuel"   = "#0000cc", #"#5050ff",
      "Solids"      = "#0c0c0c",
      "Solids - Fossil"  = "#0c0c0c", # "#0c0c0c",
      "Solids - Biomass" = "#0c0c0c", # "#353535",
      "Other Carrier" = "#79a6d2",
      
      "Biomass"     = "#005900",
      "Coal"         = "#000000",
      "Gas"       = "#999959",
      
      "Industrial Processes" = "#b2b2b2",
      "Energy use - Buildings"   = "#5edfff",
      "Energy use - Transport"   = "#a1dd70",
      "Energy use - Industry"    = "#5f6769",
      "Energy use - Agriculture" = "#005900",
      "Energy use - Other"       = "#999959",
      
      "Buildings"          = "#5edfff",
      "Transport"          = "#a1dd70",
      "Industry"           = "#5f6769",
      "Agriculture"        = "#005900",
      "Other Sector"       = "#999959",
      
      "Land-use"             = "#4DAF4A",
      "BECCS"                = "#377EB8",
      "DACCS"                = "#CC6666",
      "Other"                = "#5b0d8f",
      
      "Enhanced Weathering" = "#5b0d8f",
      "Industry CCS" = "#79a6d2",
      
      "CCS"                  = "#79a6d2",
      
      #tech
      "Net Import"          = "#dbd6d0",
      "Gas w/o CCS"         = "#999959",
      "Biomass w/o CCS"     = "#005900",
      "Nuclear"             = "#ff33ff",
      "Coal w/o CCS"        = "#0c0c0c",
      "Hard Coal w/o CCS"   = "#0c0c0c",
      "Lignite w/o CCS"     = "#660000", #4d2600",
      "Gas w/o CC"         = "#999959",
      "Biomass w/o CC"     = "#005900",
      "Coal w/o CC"        = "#0c0c0c",
      "Hard Coal w/o CC"   = "#0c0c0c",
      "Lignite w/o CC"     = "#660000", #4d2600",
      "Coal w/ CC"         = "#b2b2b2",
      "Gas CC w/o CC"      = "#bebe8f", #999959",
      "Gas OC"              = "#b79e38",
      "Hydrogen"            = "#5ed5b0", #66cccc",
      "Wind"                = "#337fff",
      "Wind Onshore"        = "#337fff",
      "Hydro"               = "#191999",
      "Oil"                 = "#b30000",
      "Oil w/o CCS"         = "#b30000",
      "Oil w/o CC"         = "#b30000",
      "Storage"             = "#9900cc",
      "Solar"               = "#ffcc00",
      "Solar CSP"           = "#ffcc00",
      "Solar PV"            = "#ffe600",
      "Geothermal"          = "#e51900",
      "Transmission Losses" = "#79577c",
      "Gas w/ CCS"          = "#b79e38",
      "Biomass w/ CCS"      = "#33ff00",
      "Gas w/ CC"          = "#b79e38",
      "Biomass w/ CC"      = "#33ff00",
      "Waste"               = "#333300",
      
      "Natural Gas"         = "#999959",
      "Solids|Biomass"      = "#00b219",
      "Solids|Coal"         = "#191919",
      
      "Fossil"              = "#b30000",
      
      "VRE Storage Electrolysis" = "#ffb200",
      "Standard Electrolysis" =  "#191999", 
      "Electrolysis" = "#191999",
      
      #
      "CCU"                 = "#5f6769", #"#CC6666", #"#102537",
      "Underground Storage" = "#0c0c0c",
      "Land Use"            = "#4DAF4A",
      
      #"DACCS"                = "#CC6666",
      "CC - Electricity"  = "#377EB8",
      "CC - Other energy" = "#2c6493",
      "CC - Industrial Processes" = "#214b6e",
      "CC - BECCS"        = "#377EB8",
      "CC - Fossil"       = "#2c6493",
      
      "Fossil Capture"       = "#2c6493",
      "Industry Capture"     = "#214b6e",
      "CCU Capture" = "#102537",
      
      #"Other"               = "#79a6d2",
      "Net Imports"         = "#472b62",
      #"Other Carrier"       = "#79a6d2",
      #other
      "Cumulated"           = "#E41A1C",
      #"Electricity"         = "#ffb200",
      "Total"               = "#ff0000",
      "Energy"         	    = "#ffb200",
      "Share" = "#ffb200",
      #scenarios
      "New Players"         = "#4c656d", #"#7ea4b0",
      "Incumbents"          = "#f1c27d",
      "Efficient"           = "#80B145",
      "NewPl"         = "#4c656d",
      "Incumb"          = "#f1c27d",
      "Efficient"           = "#80B145",
      
      
      "Def_Weak"            = "#D9D9D9",   #f8986b",
      "Incumb_Weak"         = "#f1c27d", #00c297",
      "Efficient_Weak"      = "#80B145", #a67aff",
      "Def_min80"           = "#7F7F7F", #f8756b",
      "NewPl_Weak"          = "#7ea4b0", #a6ae00",
      "NewPl_min80"         = "#4c6394", #7aae00",
      "NewPl_1p5"           = "#2f3774",
      "Incumb_min80"        = "#c68642", #00bdc2",
      "Efficient_min80"     = "#005600", #c77aff",
      "Def_1p5"             = "#f86b84",
      "Incumb_1p5"          = "#8d5524",
      "Efficient_1p5"       = "#009688",
      
      "REMIND 2.0"="#4c656d",
      "REMIND-EU"="#4c656d",
      "ETM-UCL"="#f1c27d",
      "PRIMES"="#80B145",
      
      "Weak" = "#BBBBBB",
      "min80" = "#BBBBBB",
      "1p5" = "#82DD9E",
      
      "CO2" = "#3CAEA3"
      
    )
  )
)


# Theme

text_size <- 20 #15

theme.single.text.size = text_size
geom.text.single.size = theme.single.text.size/.pt
defaultText_singleColumn <- theme_minimal(base_size = text_size*2)[["text"]] 
textSize.double = text_size
geomText.size = textSize.double/.pt

theme_doubleColumn <- function(){
  theme_minimal(base_size = textSize.double) +
    theme(
      plot.title = element_text(size=textSize.double),
      legend.position="bottom",
      legend.direction = "vertical",
      legend.title = element_blank(),
      axis.title.x=element_blank(),
      axis.ticks.x=element_blank(),
      axis.text.x = element_text(angle = 90, hjust = 1, vjust = 0.5),
      axis.title.y=element_blank(),
      legend.key.height = unit(0.7, "cm"),
      legend.key.width = unit(0.7,"cm"),
      legend.spacing.y = unit(0.1, 'cm'),
      panel.background = element_rect(fill="#FFFFFF", color = NA),
      plot.background = element_rect(fill="#FFFFFF", color = NA)#,
    )
}

theme_doubleColumn_alt <- function(){
  theme_minimal(base_size = textSize.double) +
    theme(
      plot.title = element_text(size=textSize.double),
      legend.position="bottom",
      legend.direction = "vertical",
      axis.title.x=element_blank(),
      axis.ticks.x=element_blank(),
      axis.text.x = element_text(angle = 90, hjust = 1, vjust = 0.5),
      axis.title.y=element_blank(),
      legend.key.height = unit(0.7, "cm"),
      legend.key.width = unit(0.7,"cm"),
      legend.spacing.y = unit(0.1, 'cm'),
      panel.background = element_rect(fill="#FFFFFF", color = NA),
      plot.background = element_rect(fill="#FFFFFF", color = NA)#,
    )
}
  

# theme_set(
#   theme_minimal(base_size = 20) +
#     theme(
#       legend.position="bottom",
#       legend.title = element_blank(),
#       axis.title.x=element_blank(),
#       axis.ticks.x=element_blank(),
#       axis.text.x = element_text(angle = 90, hjust = 1, vjust = 0.5),
#       axis.title.y = element_text(margin = margin(t = 0, r = 10, b = 0, l = 10)),
#       legend.key.height = unit(1, "cm"),
#       legend.key.width = unit(1,"cm"),
#       panel.spacing = unit(3, "lines"),
#       plot.title = element_text(size = 15*baseTextSize, face = "plain")
#     )
#   )

# update geom default 
update_geom_defaults("line", list(size = 1))

# save file options
options$image <- list(
  "png" = list(
    device = NULL, # set the output image file format # NULL="png", "eps", "ps", "tex" (pictex), "pdf", "jpeg", "tiff", "png", "bmp", "svg" or "wmf"
    fileFormat = "png",
    dpi=300, 
    width = 1920, 
    height = 1080,
    units = "in"
  ),
  "svg" = list(
    device = "svg", # set the output image file format # NULL="png", "eps", "ps", "tex" (pictex), "pdf", "jpeg", "tiff", "png", "bmp", "svg" or "wmf"
    fileFormat = "svg",
    dpi=300, 
    width = 16*100, 
    #height = 9*100,
    height = 7.5*100,
    units = "in"
  )
)

