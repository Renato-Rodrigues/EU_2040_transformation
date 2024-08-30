
const infoText = {
  scenario:"Results for the 192 sensitivity scenarios of cost-efficient pathways to achieve climate neutrality in the EU.",
  sensitivity_2030: "2030 emissions reduction target",
  sensitivity_2030_55: "55% emissions reductions by 2030 relative to 1990 emissions including Land-use and Land-use change and Forestry (LULUCF) and intra-EU aviation",
  sensitivity_2030_57: "57% emissions reductions by 2030 relative to 1990 emissions including Land-use and Land-use change and Forestry (LULUCF) and intra-EU aviation",
  sensitivity_2030_59: "59% emissions reductions by 2030 relative to 1990 emissions including Land-use and Land-use change and Forestry (LULUCF) and intra-EU aviation",
  sensitivity_efficiency: "Final energy consumption levels and targets.",
  sensitivity_efficiency_EED: "846 Mtoe final energy by 2030.\nFinal energy consumption compatible with 2018 Energy Efficiency Directive targets.",
  sensitivity_efficiency_FitFor55: "787 Mtoe final energy by 2030.\n9% reduction by 2030 compared to the 2020 EU reference scenario projections15 as defined in the Energy Efficiency Directive.",
  sensitivity_efficiency_RePowerEU: "750 Mtoe final energy by 2030.\n13% reduction by 2030 compared to the 2020 reference scenario projections as defined in the REPowerEU Plan.",
  sensitivity_efficiency_REMIND: "Final energy consumption based on current trends and policies in place.",
  sensitivity_biomass: "Available sustainable primary energy biomass levels",
  sensitivity_biomass_4: "EU-27 biomass availability limited to 4 EJ/yr by 2050 (6 EJ/yr by 2035).",
  sensitivity_biomass_7p5: "EU-27 biomass availability limited to 7.5 EJ/yr from 20235 onward.",
  sensitivity_biomass_12: "EU-27 biomass availability limited to 12 EJ/yr from 2035 onward.",
  sensitivity_biomass_20: "EU-27 biomass availability limited to 20 EJ/yr by 2050:\n12 EJ/yr internally produced and, the equivalent of, 8 EJ/yr imported by 2050.\nImports are mainly sourced from Latin America and Sub-Saharan African countries16,17 with an exponential yearly increase.",
  sensitivity_CCS: "Annual maximal geological injection rate based on country potentials.",
  sensitivity_CCS_REMIND: "Annual maximal geological injection rate limited to 0.5% of the total estimated regional storage potential (556 Mt CO2/yr as upper bound)",
  sensitivity_CCS_limited: "Annual maximal geological injection rate limited to 0.25% of the total estimated regional storage potential (278 MtCO2/yr as upper bound)",
  sensitivity_H2: "Availability of hydrogen and synthetic fuels.",
  sensitivity_H2_trade: "Availability of hydrogen and synthetic fuels EU-27 imports, equivalent to 0.6 EJ/yr and 1.75 EJ/yr by 2050 respectively.",
  sensitivity_H2_limited: "Lack of internationally traded hydrogen and synthetic fuels availability and reduced hydrogen tax incentives inside the EU.",
  sensitivity_VRE: "Solar and wind power deployment",
  sensitivity_VRE_REMIND: "Solar and wind future deployment follow techno-economics parameters and least-cost power generation decision.",
  sensitivity_VRE_limited: "Expansion of variable renewables (wind and solar) is constrained to the linear extrapolation of 2021-2022 growth of generation capacity.",
};

chartTraces = {};

$(function () {
  
  var timeout;
  // change info text
  $(".scen").hover(
    function () {
      selected = $(this).data("info");
      currText = infoText[selected];
      timeout = setTimeout(function () {
        $('.infoText').text(currText);
      }, 500); //0.5 seconds
    },
    function () {
      clearTimeout(timeout);
    }
  );

  // add highlight color
  $(".scen").hover(
    function () {
      $(this).addClass("highlight");
    },
    function () {
      $(this).removeClass("highlight");
    }
  );

  // add highlight color cliked
  $(".scen").click(function (e) {
    // console.log($(this));
    //console.log(e);
    //console.log(e.ctrlKey);
    if (e.ctrlKey) {
      //ctrl was held down during the click
      //console.log('ctrl was held down during the click');
      //if clicked scenario is selected, remove its selection
      if($(this).hasClass('highlight_stay'))
        $(this).removeClass('highlight_stay');
      else
        $(this).addClass("highlight_stay");
      if (($(this).parent().find('.highlight_stay')).length == 0)
        $(this).parent().find('.default').addClass("highlight_stay");
    } else {
      // check if you clicked a limited scenario. In this case we reset the other limited scenarios because there is no combined limited scenarios. 
      if($(this).hasClass('lim')){
        $('.lim').removeClass("highlight_stay");
        $('.lim_alt').addClass("highlight_stay");
      }
      $(this).parent(this).children("li").removeClass("highlight_stay");
      $(this).addClass("highlight_stay");
    }
    updateScenario();
  });

  // set default scenarios selection
  $(".reset").click(function () {
    $(this).button("toggle");
    if ($(this).hasClass("active")) {
      $(".scen").removeClass("highlight_stay");
      $(".default").addClass("highlight_stay");
      $(this).button("toggle");
    }
    updateScenario();
  });

  // set all scenarios selection
  $(".all").click(function () {
    $(".scen").addClass("highlight_stay");
    updateScenario();
  });

  // set collapse list
  /*
  $(".collapseTree").click(function () {

    var dir = $(this).data('dir');
    
    if (dir === "down"){
      $(this).children().addClass('fa-caret-square-up').removeClass('fa-caret-square-down');
      $(this).data('dir','up');
    } else {
      $(this).children().addClass('fa-caret-square-down').removeClass('fa-caret-square-up');
      $(this).data('dir','down');
    } 
  });
  */

  // get current scenario selected
  function getScenario() {
    selected = [];
    $('.scenariosList > li').each( function(i){
      selected[i] = [];
      $(this).find(".highlight_stay").each( function(){ return selected[i].push($(this).data('scen')) } )
    });
    function combos(list, n = 0, result = [], current = []){
      if (n === list.length) result.push(current)
      else list[n].forEach(item => combos(list, n+1, result, [...current, item]))
     
      return result
    }
    selectedScenarios = combos(selected).map( function(a){
      return('Nzero' + a.join(''))
    })	
    
    /*
    var scen = $('.highlight_stay').map( function(){
      return $(this).data('scen');        
    }).get().join('');
    return('Nzero' + scen)
    */
    return selectedScenarios
  }

  // update current scenario
  function updateScenario() {
    currentScenario = getScenario();
    //console.log(currentScenario);
    var currId = $(".tab-pane:visible").attr("id");
    chartOpacity(currId,currentScenario);
    /*
    chartOpacity('emissions',currentScenario);
    chartOpacity('carbonPrice',currentScenario);
    chartOpacity('sectorEmi',currentScenario);
    chartOpacity('primaryEnergy',currentScenario);
    chartOpacity('electricityShare',currentScenario);
    chartOpacity('generation',currentScenario);
    chartOpacity('finalEnergy',currentScenario);
    chartOpacity('hydrogen',currentScenario);
    chartOpacity('beccs',currentScenario);
    chartOpacity('dac',currentScenario);
    */
  }

  function chartOpacity(id,currScenario) {

    if(chartTraces[id] === undefined){
      // console.log("creating information about chartTraces");
      chartTraces[id] = {};
      chartTraces[id].chartId = document.getElementById(id);
      // Get all traces in chart
      chartTraces[id].allTraces = chartTraces[id].chartId.data; 
      // Find index of all selected scenario traces
      chartTraces[id].allLines = [];
      chartTraces[id].allMarkers = [];
      chartTraces[id].allTraces.reduce(function(a, e, i) {
        if(e.mode == "lines")
          chartTraces[id].allLines.push(i);
        else if(e.mode == "markers")
          chartTraces[id].allMarkers.push(i);
      }, [])
      // Find index of exception traces
      chartTraces[id].exceptionTraces = chartTraces[id].allTraces.reduce(function(a, e, i) {
        if (((e.text instanceof Array) && ((e.text[0].includes('ETS price') || e.text[0].includes('historical')))) || typeof e.text == 'string')
            a.push(i);
        return a;
      }, []);
    }

    //current selected scenarios lines and markers
    currScenarioLines = [];
    currScenarioMarkers = [];

    currScenario.forEach(function(sc){
      curr = 'scenario: ' + sc + '<'
      curr = curr.toLowerCase();
      chartTraces[id].allTraces.reduce(function(a, e, i) {
          if((e.name == sc) || ((e.text instanceof Array) && (e.text[0].toLowerCase().includes(curr))))
            if(e.mode == "lines")
              currScenarioLines.push(i);
            else if(e.mode == "markers")
              currScenarioMarkers.push(i);
        }, [])
      })

    //current lines and markers to be faded
    fadeLineTraces = chartTraces[id].allLines.filter( function( el ) {
      return currScenarioLines.concat(chartTraces[id].exceptionTraces).indexOf( el ) < 0;
    } );

    fadeMarkersTraces = chartTraces[id].allMarkers.filter( function( el ) {
      return currScenarioMarkers.concat(chartTraces[id].exceptionTraces).indexOf( el ) < 0;
    } );

    // Make only specified trace visible to user:
    Plotly.restyle(chartTraces[id].chartId, {opacity: 0}, fadeMarkersTraces);
    Plotly.restyle(chartTraces[id].chartId, {opacity: 0.1}, fadeLineTraces);
    Plotly.restyle(chartTraces[id].chartId, {opacity: 1}, currScenarioLines.concat(currScenarioMarkers));

  }

  //set default scenario
  $(".default").addClass("highlight_stay");
  updateScenario();

  //set intial infoText
  $('.infoText').text(infoText["scenario"]);
  
  $(".nav-item").click(function () {
    var currId = $(".tab-pane:visible").attr("id");
    // console.log(currId);
    Plotly.Plots.resize(currId);
    updateScenario();
  });

});

/*
$(document).ready(function(){
  Plotly.Plots.resize(document.getElementById('emissions'));
  Plotly.Plots.resize(document.getElementById('carbonPrice'));
  Plotly.Plots.resize(document.getElementById('electricityShare'));
});
*/



