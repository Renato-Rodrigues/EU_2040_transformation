(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('beccs') 

        var resizeDebounce = null; 


        function resizePlot() { 

          var bb = gd.getBoundingClientRect(); 

          Plotly.relayout(gd, { 

            width: bb.width, 

              height: bb.height 

            }); 

          } 


          Plotly.plot(gd,  

              {
  "data": [
    {
      "x": [2018.5, 2051.5],
      "y": [0, 0],
      "text": "yintercept: 0",
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 7.559055118110237,
        "color": "rgba(0,0,0,0.5)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2020],
      "y": [-391.10400000000004, 18.624000000000002],
      "text": "xintercept: 2020",
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 5.6692913385826778,
        "color": "rgba(0,0,0,0.5)",
        "dash": "dash"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -13.25, -61.579999999999998, -139, -222.38999999999999, -280.64999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -13.25<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -61.58<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2040<br />value: -139.00<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2045<br />value: -222.39<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2050<br />value: -280.65<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -13.23, -60.450000000000003, -125.77, -171.05000000000001, -199.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -13.23<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -60.45<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: -125.77<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: -171.05<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: -199.21<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -12.85, -72.200000000000003, -174.34, -287.41000000000003, -366.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -12.85<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -72.20<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: -174.34<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: -287.41<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: -366.31<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -12.9, -59.890000000000001, -135.15000000000001, -215.02000000000001, -269.52999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -12.90<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -59.89<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: -135.15<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: -215.02<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: -269.53<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.4800000000000004, -34.359999999999999, -78.079999999999998, -133.09, -192.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2030<br />value:   -8.48<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -34.36<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -78.08<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2045<br />value: -133.09<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2050<br />value: -192.74<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.3200000000000003, -30.379999999999999, -65.799999999999997, -106.15000000000001, -145.46000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:   -8.32<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -30.38<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -65.80<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value: -106.15<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: -145.46<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -8.0700000000000003, -38.149999999999999, -93.170000000000002, -164.37, -238.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:   -8.07<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -38.15<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:  -93.17<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: -164.37<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: -238.74<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -8.4900000000000002, -35.729999999999997, -80.409999999999997, -136.00999999999999, -197.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:   -8.49<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -35.73<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:  -80.41<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: -136.01<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: -197.53<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -8.0600000000000005, -36.479999999999997, -81.849999999999994, -119.06, -135.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -8.06<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -36.48<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -81.85<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2045<br />value: -119.06<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -135.91<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.2799999999999994, -35.439999999999998, -78.840000000000003, -112.14, -128.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -8.28<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -35.44<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -78.84<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value: -112.14<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value: -128.75<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -6.0899999999999999, -41.719999999999999, -105.29000000000001, -151.88999999999999, -156.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -6.09<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -41.72<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: -105.29<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -151.89<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -156.84<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -8.0800000000000001, -36.68, -82.469999999999999, -119.01000000000001, -135.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -8.08<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -36.68<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -82.47<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: -119.01<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -135.26<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -11.58, -53.329999999999998, -124, -203.33000000000001, -264.54000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -11.58<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -53.33<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: -124.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: -203.33<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: -264.54<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -11.699999999999999, -51.369999999999997, -112.69, -161.65000000000001, -188.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -11.70<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -51.37<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: -112.69<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: -161.65<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: -188.16<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -11.27, -62.82, -154.78, -250.84, -314.32999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -11.27<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -62.82<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: -154.78<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: -250.84<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: -314.33<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -11.81, -54.43, -126.22, -207.25999999999999, -268.52999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:  -11.81<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -54.43<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: -126.22<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: -207.26<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: -268.53<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -12.960000000000001, -59.520000000000003, -134.94, -217.05000000000001, -273.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -0.65<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -12.96<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -59.52<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: -134.94<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: -217.05<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: -273.32<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -13.15, -58.869999999999997, -122.45999999999999, -167.56999999999999, -197.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -13.15<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -58.87<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: -122.46<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: -167.57<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: -197.03<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -12.699999999999999, -67.409999999999997, -162.34999999999999, -271.38999999999999, -350.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -0.60<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -12.70<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -67.41<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: -162.35<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: -271.39<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: -350.68<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -13.06, -60.350000000000001, -136.55000000000001, -219.38, -276.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -13.06<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -60.35<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: -136.55<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: -219.38<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: -276.51<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.4000000000000004, -34.030000000000001, -76.049999999999997, -127.16, -179.34],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:   -8.40<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -34.03<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -76.05<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: -127.16<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: -179.34<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -7.4400000000000004, -27.27, -59.5, -96.739999999999995, -132.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:   -7.44<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -27.27<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -59.50<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -96.74<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: -132.53<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -7.6200000000000001, -34.280000000000001, -84.019999999999996, -149.38999999999999, -216.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:   -7.62<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -34.28<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -84.02<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: -149.39<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: -216.60<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -8.3900000000000006, -33.280000000000001, -74.310000000000002, -124.97, -178.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.39<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -33.28<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:  -74.31<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: -124.97<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: -178.24<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -7.8200000000000003, -35.75, -82.280000000000001, -119.70999999999999, -136.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -7.82<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -35.75<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -82.28<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value: -119.71<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -136.26<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -9.3599999999999994, -39.119999999999997, -84.560000000000002, -113.93000000000001, -123.58],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -9.36<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -39.12<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -84.56<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value: -113.93<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value: -123.58<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -6.9299999999999997, -44.100000000000001, -109.03, -150.24000000000001, -152.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -0.30<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -6.93<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -44.10<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: -109.03<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -150.24<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -152.36<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.8300000000000001, -36.960000000000001, -82, -115.93000000000001, -131.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.83<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -36.96<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -82.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: -115.93<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -131.39<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -12.01, -52.420000000000002, -119.8, -195.94999999999999, -255.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -12.01<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -52.42<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: -119.80<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: -195.95<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: -255.73<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -12.050000000000001, -52.210000000000001, -113.14, -163.47999999999999, -193.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -12.05<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -52.21<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: -113.14<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: -163.48<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: -193.05<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -11.460000000000001, -62.93, -153.94, -246.15000000000001, -309.82999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.46<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -62.93<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: -153.94<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: -246.15<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: -309.83<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -12.119999999999999, -53.399999999999999, -122.45999999999999, -200.05000000000001, -260.27999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -12.12<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -53.40<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: -122.46<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: -200.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: -260.28<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.220000000000001, -45.759999999999998, -103.69, -170.46000000000001, -220.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:  -10.22<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -45.76<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: -103.69<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: -170.46<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: -220.31<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -10.49, -46.130000000000003, -98.719999999999999, -142.11000000000001, -171.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:  -10.49<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -46.13<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:  -98.72<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: -142.11<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: -171.03<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -10.26, -53.93, -130.46000000000001, -217.16, -278.73000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:  -10.26<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -53.93<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: -130.46<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: -217.16<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: -278.73<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -9.9700000000000006, -45.939999999999998, -104.72, -172.06999999999999, -222.34],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.97<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -45.94<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value: -104.72<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: -172.07<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: -222.34<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -5.0999999999999996, -23.420000000000002, -54.390000000000001, -88.260000000000005, -118.64],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -5.10<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -23.42<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -54.39<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -88.26<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: -118.64<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -4.8899999999999997, -20.09, -45.810000000000002, -73.950000000000003, -100.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.34<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -4.89<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -20.09<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -45.81<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -73.95<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value: -100.03<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -4.3799999999999999, -22.199999999999999, -56.210000000000001, -97.390000000000001, -133.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.27<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -4.38<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -22.20<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -56.21<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -97.39<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: -133.79<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -5.54, -24.399999999999999, -56.509999999999998, -95.739999999999995, -136.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.37<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -5.54<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -24.40<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -56.51<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -95.74<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: -136.68<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -7.7000000000000002, -33.100000000000001, -72.25, -106.2, -126.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -7.70<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -33.10<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -72.25<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value: -106.20<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value: -126.90<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -7.4500000000000002, -30.460000000000001, -65.709999999999994, -97.260000000000005, -117.04000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.45<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -30.46<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -65.71<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -97.26<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value: -117.04<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -6.9900000000000002, -41.259999999999998, -100.27, -137.12, -141.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.99<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -41.26<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value: -100.27<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: -137.12<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -141.02<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -7.5199999999999996, -32.880000000000003, -72.400000000000006, -106.90000000000001, -127.64],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.49<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.52<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -32.88<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -72.40<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value: -106.90<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: -127.64<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.51, -46.039999999999999, -105.51000000000001, -174.46000000000001, -229.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:  -10.51<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -46.04<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value: -105.51<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: -174.46<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: -229.71<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -10.23, -43.439999999999998, -96.280000000000001, -145.33000000000001, -178],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -10.23<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -43.44<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -96.28<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -145.33<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -178.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -10.31, -54.950000000000003, -135.12, -224.31999999999999, -289.26999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.31<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -54.95<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -135.12<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -224.32<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -289.27<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -10.56, -46.520000000000003, -106.76000000000001, -176.94, -233.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -10.56<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -46.52<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -106.76<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -176.94<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -233.03<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.9299999999999997, -42.590000000000003, -97.310000000000002, -160.15000000000001, -206.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:   -8.93<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -42.59<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -97.31<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: -160.15<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: -206.53<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.5700000000000003, -40.030000000000001, -85.859999999999999, -125.86, -151.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:   -8.57<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -40.03<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -85.86<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: -125.86<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: -151.32<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -9.1699999999999999, -47.770000000000003, -116.14, -196.84, -257.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.37<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:   -9.17<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -47.77<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: -116.14<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: -196.84<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: -257.61<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -8.5999999999999996, -41.009999999999998, -94.349999999999994, -155.69, -200.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.60<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -41.01<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -94.35<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: -155.69<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: -200.60<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -4.5800000000000001, -20.039999999999999, -46.469999999999999, -75.659999999999997, -100.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.31<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -4.58<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -20.04<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -46.47<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -75.66<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: -100.16<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -4.9800000000000004, -20.57, -45.710000000000001, -71.450000000000003, -91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.32<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -4.98<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -20.57<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -45.71<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -71.45<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -91.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -4, -20.039999999999999, -50.810000000000002, -87.209999999999994, -117.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -20.04<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -50.81<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -87.21<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: -117.40<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -4.9900000000000002, -21.940000000000001, -51.060000000000002, -84.159999999999997, -114.58],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.30<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -4.99<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -21.94<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -51.06<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -84.16<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: -114.58<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -6.4299999999999997, -29.350000000000001, -65.709999999999994, -99.340000000000003, -121.23],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -6.43<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -29.35<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -65.71<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -99.34<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value: -121.23<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -6.5899999999999999, -27.300000000000001, -60.469999999999999, -93.090000000000003, -114.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.59<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -27.30<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -60.47<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -93.09<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value: -114.60<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -7.2400000000000002, -42.850000000000001, -102.76000000000001, -142.31999999999999, -151.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.24<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -42.85<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value: -102.76<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value: -142.32<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: -151.39<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.39000000000000001, -6.5700000000000003, -29.210000000000001, -65.049999999999997, -98.900000000000006, -121.26000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.39<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.57<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -29.21<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -65.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -98.90<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value: -121.26<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -8.6600000000000001, -39.850000000000001, -90.359999999999999, -149.34999999999999, -197.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:   -8.66<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -39.85<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -90.36<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: -149.35<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: -197.29<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -8.6600000000000001, -39.539999999999999, -86.349999999999994, -130.16999999999999, -159.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -8.66<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -39.54<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -86.35<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -130.17<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -159.17<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -9.1500000000000004, -47.869999999999997, -116.68000000000001, -196.47, -258.48000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.36<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -9.15<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -47.87<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -116.68<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -196.47<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -258.48<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.4600000000000009, -40.07, -92.180000000000007, -153.19999999999999, -201.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.46<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -40.07<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -92.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -153.20<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -201.84<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -13.699999999999999, -64.180000000000007, -142.33000000000001, -221.87, -273.26999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -13.70<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -64.18<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2040<br />value: -142.33<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2045<br />value: -221.87<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2050<br />value: -273.27<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -13.800000000000001, -64.150000000000006, -131.49000000000001, -175.72999999999999, -200.53999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -13.80<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -64.15<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: -131.49<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: -175.73<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: -200.54<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -13.33, -73.280000000000001, -173.84999999999999, -280.60000000000002, -352.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -0.66<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -13.33<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -73.28<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: -173.85<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: -280.60<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: -352.88<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -13.779999999999999, -65.120000000000005, -144.61000000000001, -226.37, -279.48000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -13.78<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:  -65.12<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: -144.61<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: -226.37<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: -279.48<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -9.2200000000000006, -38.420000000000002, -84.099999999999994, -138.19999999999999, -195.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -0.58<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2030<br />value:   -9.22<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -38.42<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2040<br />value:  -84.10<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2045<br />value: -138.20<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2050<br />value: -195.71<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.8300000000000001, -32.859999999999999, -69.260000000000005, -108.59, -145.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:   -8.83<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -32.86<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -69.26<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: -108.59<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: -145.35<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -8.5, -40.479999999999997, -96.650000000000006, -166.75, -238.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:   -8.50<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -40.48<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:  -96.65<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: -166.75<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: -238.24<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -9.2400000000000002, -38.890000000000001, -85.670000000000002, -141.25999999999999, -199.97999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -0.58<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:   -9.24<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -38.89<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:  -85.67<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: -141.26<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: -199.98<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -9.3100000000000005, -39.420000000000002, -87.379999999999995, -123.64, -139.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -9.31<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -39.42<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -87.38<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2045<br />value: -123.64<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -139.55<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.7799999999999994, -37.579999999999998, -82.269999999999996, -114.61, -128.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -8.78<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -37.58<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -82.27<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value: -114.61<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value: -128.24<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -6.2300000000000004, -44.109999999999999, -108.39, -152.13999999999999, -155.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -0.27<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -6.23<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -44.11<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: -108.39<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -152.14<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -155.19<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.8800000000000008, -39.039999999999999, -87.519999999999996, -123.94, -138.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -8.88<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -39.04<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -87.52<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: -123.94<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -138.91<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -12.43, -57.210000000000001, -130.69999999999999, -212.06999999999999, -272.30000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -0.73<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -12.43<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -57.21<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: -130.70<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: -212.07<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: -272.30<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -12.17, -53.439999999999998, -115.58, -164.11000000000001, -188.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -12.17<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -53.44<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: -115.58<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: -164.11<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: -188.57<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -11.92, -67.579999999999998, -162.47, -256.47000000000003, -318.94999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -11.92<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -67.58<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: -162.47<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: -256.47<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: -318.95<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -12.220000000000001, -56.369999999999997, -129.15000000000001, -210.28, -270.45999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -12.22<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -56.37<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: -129.15<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: -210.28<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: -270.46<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -12.970000000000001, -59.649999999999999, -133.22999999999999, -211.69, -263.83999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -0.65<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -12.97<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -59.65<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: -133.23<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: -211.69<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: -263.84<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -13.25, -61.119999999999997, -126.31, -170.27000000000001, -196.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -13.25<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -61.12<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: -126.31<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: -170.27<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: -196.76<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -12.859999999999999, -70.239999999999995, -167.59999999999999, -274.70999999999998, -349.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -0.60<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -12.86<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -70.24<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: -167.60<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: -274.71<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: -349.64<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -12.9, -59.210000000000001, -132.08000000000001, -209.25, -261.23000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -12.90<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -59.21<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: -132.08<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: -209.25<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: -261.23<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.4900000000000002, -36.409999999999997, -81.209999999999994, -134.72999999999999, -188.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:   -8.49<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -36.41<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -81.21<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: -134.73<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: -188.38<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -7.7300000000000004, -29.210000000000001, -63.200000000000003, -101.91, -139.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:   -7.73<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -29.21<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -63.20<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value: -101.91<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: -139.03<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -7.7599999999999998, -37.030000000000001, -90.090000000000003, -158.24000000000001, -228.22999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:   -7.76<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -37.03<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -90.09<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: -158.24<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: -228.23<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.1899999999999995, -35.899999999999999, -80.629999999999995, -134.27000000000001, -188.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.19<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -35.90<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:  -80.63<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: -134.27<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: -188.32<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.6199999999999992, -36.390000000000001, -82.609999999999999, -119.54000000000001, -138.09],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -8.62<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -36.39<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -82.61<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: -119.54<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -138.09<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -8.1600000000000001, -36.390000000000001, -80.420000000000002, -111.22, -126.02],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -0.50<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -8.16<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -36.39<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -80.42<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value: -111.22<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value: -126.02<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -6.4800000000000004, -42.729999999999997, -107.02, -152.49000000000001, -159.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -0.27<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -6.48<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -42.73<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: -107.02<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -152.49<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -159.05<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.6799999999999997, -37.310000000000002, -83.75, -120.48999999999999, -138.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.68<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -37.31<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -83.75<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value: -120.49<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -138.14<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -11.960000000000001, -54.100000000000001, -124.48, -203.19, -262.91000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -11.96<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -54.10<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: -124.48<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: -203.19<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: -262.91<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -11.85, -51.899999999999999, -113.03, -162.61000000000001, -188.41999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -11.85<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -51.90<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: -113.03<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: -162.61<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: -188.42<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -11.51, -64.370000000000005, -156.75999999999999, -250.11000000000001, -312.32999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.51<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -64.37<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: -156.76<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: -250.11<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: -312.33<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -11.65, -52.520000000000003, -121.52, -200.19999999999999, -260.39999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -11.65<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -52.52<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: -121.52<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: -200.20<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: -260.40<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.91, -46.700000000000003, -105.45, -173.06, -222.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:  -10.91<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -46.70<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value: -105.45<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: -173.06<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: -222.87<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -10.960000000000001, -47.380000000000003, -100.92, -143.88999999999999, -171.30000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:  -10.96<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -47.38<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value: -100.92<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: -143.89<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: -171.30<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -10.869999999999999, -57.479999999999997, -138.61000000000001, -229.83000000000001, -295.35000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.47<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:  -10.87<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -57.48<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: -138.61<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: -229.83<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: -295.35<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -9.7100000000000009, -45.700000000000003, -105.81, -174.50999999999999, -223.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.71<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -45.70<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: -105.81<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: -174.51<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: -223.88<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.39000000000000001, -6.1799999999999997, -26.02, -57.43, -94.060000000000002, -129.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -0.39<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -6.18<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -26.02<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -57.43<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -94.06<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: -129.25<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40000000000000002, -6.2199999999999998, -23.219999999999999, -49.869999999999997, -80.670000000000002, -109.02],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.40<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.22<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -23.22<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -49.87<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -80.67<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value: -109.02<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -5.9699999999999998, -25.690000000000001, -61.310000000000002, -106.98999999999999, -150.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -5.97<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -25.69<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -61.31<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value: -106.99<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: -150.53<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -6.9000000000000004, -28.41, -62.130000000000003, -101.62, -139.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -6.90<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -28.41<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -62.13<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value: -101.62<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: -139.17<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -8.5, -34.789999999999999, -75.379999999999995, -109.70999999999999, -129.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -8.50<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -34.79<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -75.38<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value: -109.71<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value: -129.61<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.2699999999999996, -31.73, -66.480000000000004, -96.359999999999999, -113.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -8.27<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -31.73<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -66.48<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -96.36<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value: -113.62<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -6.9299999999999997, -42.07, -103.56, -140.63999999999999, -146.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.93<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -42.07<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value: -103.56<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: -140.64<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -146.41<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -8.1899999999999995, -33.350000000000001, -72.599999999999994, -106.95, -127.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -8.19<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -33.35<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -72.60<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value: -106.95<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: -127.12<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -10.76, -46.329999999999998, -106.72, -177.19999999999999, -233.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -0.62<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:  -10.76<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -46.33<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value: -106.72<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: -177.20<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: -233.79<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.77, -45.200000000000003, -99.950000000000003, -149.81999999999999, -181.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -10.77<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -45.20<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -99.95<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -149.82<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -181.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -10.5, -56.100000000000001, -136.78999999999999, -224.88999999999999, -288.79000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.50<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -56.10<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -136.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -224.89<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -288.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -10.789999999999999, -47.060000000000002, -108.05, -177.78999999999999, -233.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -10.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -47.06<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -108.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -177.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -233.31<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -8.6799999999999997, -41.07, -93.680000000000007, -154.65000000000001, -199.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:   -8.68<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -41.07<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -93.68<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: -154.65<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: -199.45<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.7100000000000009, -40.640000000000001, -87.189999999999998, -127.59, -153.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:   -8.71<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -40.64<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -87.19<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: -127.59<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: -153.55<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -9.1400000000000006, -49.289999999999999, -120.55, -204.77000000000001, -267.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.37<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:   -9.14<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -49.29<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: -120.55<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: -204.77<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: -267.74<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.8100000000000005, -42.07, -96.219999999999999, -158.56999999999999, -204.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.81<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -42.07<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -96.22<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: -158.57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: -204.16<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -4.7300000000000004, -20.77, -48.329999999999998, -78.980000000000004, -105.2],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.30<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -4.73<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -20.77<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -48.33<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -78.98<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value: -105.20<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -4.4000000000000004, -18.670000000000002, -42.159999999999997, -67.239999999999995, -86.680000000000007],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -4.40<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -18.67<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -42.16<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -67.24<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -86.68<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -3.6899999999999999, -18.670000000000002, -47.609999999999999, -82.329999999999998, -111.23999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -3.69<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -18.67<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -47.61<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -82.33<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: -111.24<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -4.8399999999999999, -21.100000000000001, -48.460000000000001, -79.010000000000005, -105.05],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -4.84<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -21.10<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -48.46<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -79.01<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: -105.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.39000000000000001, -7.0300000000000002, -30.93, -67.739999999999995, -100.59, -121.67],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -0.39<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -7.03<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -30.93<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -67.74<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value: -100.59<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value: -121.67<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -6.7800000000000002, -27.780000000000001, -60.75, -92.420000000000002, -112.52],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.78<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -27.78<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -60.75<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -92.42<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value: -112.52<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -7.21, -42.710000000000001, -102.72, -142.37, -151.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.21<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -42.71<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value: -102.72<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value: -142.37<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: -151.47<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -6.7800000000000002, -30.23, -66.599999999999994, -99.5, -120.39],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.36<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.78<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -30.23<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -66.60<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -99.50<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value: -120.39<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -8.7300000000000004, -40.420000000000002, -92.450000000000003, -153.08000000000001, -200.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:   -8.73<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -40.42<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -92.45<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: -153.08<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: -200.88<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -8.7100000000000009, -39.700000000000003, -86.849999999999994, -130.78999999999999, -159.52000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -8.71<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -39.70<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -86.85<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -130.79<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -159.52<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -9.0999999999999996, -49.219999999999999, -120.18000000000001, -201.90000000000001, -264.73000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -9.10<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -49.22<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -120.18<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -201.90<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -264.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -8.4299999999999997, -39.039999999999999, -89.590000000000003, -148.86000000000001, -196.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -39.04<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -89.59<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -148.86<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -196.62<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -11.449999999999999, -65.280000000000001, -147.53, -228.33000000000001, -277.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -0.66<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -11.45<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -65.28<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2040<br />value: -147.53<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2045<br />value: -228.33<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2050<br />value: -277.55<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -12.289999999999999, -65.620000000000005, -135.90000000000001, -179.68000000000001, -200.18000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -12.29<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -65.62<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: -135.90<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: -179.68<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: -200.18<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -12.16, -79.609999999999999, -191.59, -304.57999999999998, -372.48000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -0.56<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -12.16<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:  -79.61<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: -191.59<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: -304.58<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: -372.48<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -11.17, -66.700000000000003, -151.12, -233.59999999999999, -281.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -11.17<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:  -66.70<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: -151.12<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: -233.60<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: -281.62<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.0899999999999999, -41.859999999999999, -91.609999999999999, -148.75, -201.33000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2030<br />value:   -8.09<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -41.86<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2040<br />value:  -91.61<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2045<br />value: -148.75<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2050<br />value: -201.33<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -7.8600000000000003, -35.579999999999998, -75.150000000000006, -117.62, -151.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:   -7.86<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -35.58<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -75.15<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: -117.62<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: -151.41<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -7.8099999999999996, -44.700000000000003, -104.94, -178.5, -245.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:   -7.81<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -44.70<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: -104.94<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: -178.50<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: -245.71<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.1400000000000006, -42.890000000000001, -93.829999999999998, -152.24000000000001, -206.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:   -8.14<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -42.89<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:  -93.83<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: -152.24<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: -206.26<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -6.7000000000000002, -38.119999999999997, -89.060000000000002, -127, -141.41999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -6.70<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -38.12<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -89.06<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2045<br />value: -127.00<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -141.42<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -7.0199999999999996, -36.57, -82.859999999999999, -115.89, -128.27000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -7.02<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -36.57<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -82.86<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value: -115.89<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value: -128.27<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.12, -4.8600000000000003, -45.93, -115.25, -159.97, -159.52000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -0.12<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -4.86<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -45.93<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: -115.25<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -159.97<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -159.52<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -6.71, -39.310000000000002, -92.140000000000001, -130, -143.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -0.38<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -6.71<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -39.31<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -92.14<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: -130.00<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -143.05<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -10.18, -58.729999999999997, -136.50999999999999, -216.75999999999999, -274.33999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -0.58<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -10.18<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -58.73<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: -136.51<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: -216.76<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: -274.34<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -9.9900000000000002, -54.140000000000001, -119.06, -168.63, -189.94999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:   -9.99<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -54.14<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: -119.06<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: -168.63<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: -189.95<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -9.9000000000000004, -67.890000000000001, -166.75, -260.56999999999999, -318.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:   -9.90<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -67.89<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: -166.75<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: -260.57<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: -318.76<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -9.9600000000000009, -57.359999999999999, -134.69999999999999, -216.69, -272.89999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:   -9.96<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -57.36<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: -134.70<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: -216.69<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: -272.90<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -11.06, -62.240000000000002, -140.47999999999999, -218.00999999999999, -265.69],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -11.06<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -62.24<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: -140.48<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: -218.01<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: -265.69<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -11.94, -63.210000000000001, -131.13999999999999, -174.19, -196.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -11.94<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -63.21<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: -131.14<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: -174.19<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: -196.28<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -11.6, -74.819999999999993, -181.09999999999999, -291.57999999999998, -361.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -11.60<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:  -74.82<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: -181.10<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: -291.58<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: -361.31<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -11.35, -64.530000000000001, -146.16, -227.03999999999999, -275.67000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.61<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -11.35<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:  -64.53<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: -146.16<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: -227.04<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: -275.67<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -7.9500000000000002, -39.32, -86.230000000000004, -140.22999999999999, -189.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:   -7.95<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -39.32<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:  -86.23<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: -140.23<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: -189.53<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -7.0499999999999998, -31.949999999999999, -68.840000000000003, -108.92, -141.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:   -7.05<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -31.95<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -68.84<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: -108.92<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: -141.55<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -7.2800000000000002, -41.719999999999999, -99.269999999999996, -169.65000000000001, -234.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:   -7.28<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -41.72<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:  -99.27<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: -169.65<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: -234.51<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -7.9400000000000004, -40.609999999999999, -89.319999999999993, -144.99000000000001, -195.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:   -7.94<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -40.61<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:  -89.32<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: -144.99<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: -195.20<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.2300000000000004, -38.030000000000001, -87.469999999999999, -122.01000000000001, -135.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -7.23<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -38.03<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -87.47<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: -122.01<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -135.76<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.2000000000000002, -37.5, -84.379999999999995, -116.65000000000001, -129.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -7.20<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -37.50<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -84.38<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value: -116.65<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value: -129.06<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.20000000000000001, -5.25, -46.990000000000002, -117.65000000000001, -161.19999999999999, -161.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -0.20<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -5.25<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -46.99<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: -117.65<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -161.20<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -161.29<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.3099999999999996, -40.590000000000003, -93.370000000000005, -129.74000000000001, -141.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -7.31<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -40.59<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -93.37<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: -129.74<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -141.35<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -9.9100000000000001, -54.600000000000001, -127.77, -207.13, -264.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -0.60<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:   -9.91<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -54.60<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: -127.77<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: -207.13<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: -264.36<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -10.029999999999999, -52.780000000000001, -116.26000000000001, -166.08000000000001, -188.52000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.67<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -10.03<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -52.78<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: -116.26<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: -166.08<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: -188.52<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -9.8300000000000001, -64.920000000000002, -160, -254.68000000000001, -313.66000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:   -9.83<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -64.92<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: -160.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: -254.68<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: -313.66<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -9.8000000000000007, -54.039999999999999, -127.02, -206.30000000000001, -263.67000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.60<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -9.80<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -54.04<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: -127.02<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: -206.30<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: -263.67<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.63, -10.970000000000001, -49.609999999999999, -109.53, -174.41, -219.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -10.97<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -49.61<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: -109.53<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: -174.41<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: -219.39<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -11.81, -52.960000000000001, -110.13, -152.43000000000001, -177.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -11.81<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -52.96<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: -110.13<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: -152.43<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: -177.07<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -11.630000000000001, -62.789999999999999, -148.44999999999999, -239.33000000000001, -299.26999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -11.63<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -62.79<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: -148.45<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: -239.33<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: -299.27<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -11.18, -49.509999999999998, -108.98999999999999, -173.88, -220.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.65<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -11.18<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -49.51<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: -108.99<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: -173.88<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: -220.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -6.9100000000000001, -27.93, -60.590000000000003, -97.469999999999999, -129.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -6.91<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -27.93<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -60.59<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:  -97.47<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: -129.67<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -6.5599999999999996, -23.789999999999999, -49.960000000000001, -78.060000000000002, -102.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.56<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -23.79<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -49.96<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -78.06<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value: -102.57<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -6.4000000000000004, -28.350000000000001, -66.219999999999999, -112.75, -153.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:   -6.40<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -28.35<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -66.22<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value: -112.75<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: -153.82<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -6.9900000000000002, -28.170000000000002, -61.259999999999998, -99.230000000000004, -131.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -6.99<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -28.17<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -61.26<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -99.23<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: -131.76<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.4900000000000002, -35.189999999999998, -75.700000000000003, -111, -131.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -8.49<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -35.19<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -75.70<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value: -111.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value: -131.28<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -7.9900000000000002, -32.060000000000002, -69.689999999999998, -103.06999999999999, -121.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.99<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -32.06<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -69.69<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value: -103.07<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value: -121.50<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -7.1100000000000003, -44.079999999999998, -109.04000000000001, -150.71000000000001, -155.78],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.11<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -44.08<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value: -109.04<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: -150.71<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -155.78<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -8.9100000000000001, -36.149999999999999, -79.870000000000005, -116.61, -136.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.51<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -8.91<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -36.15<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -79.87<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value: -116.61<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: -136.41<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -10.82, -47.689999999999998, -108.13, -176.69999999999999, -232.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -0.65<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:  -10.82<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -47.69<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value: -108.13<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: -176.70<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: -232.21<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -11.02, -47.049999999999997, -102.95, -152.40000000000001, -181.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.66<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -11.02<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -47.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value: -102.95<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -152.40<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -181.29<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.99, -59.539999999999999, -143.75999999999999, -234.06, -297.47000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.56<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.99<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -59.54<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -143.76<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -234.06<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -297.47<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -11.279999999999999, -50.07, -114.15000000000001, -186.47, -242.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -11.28<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -50.07<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -114.15<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -186.47<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -242.58<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -9.7899999999999991, -44.100000000000001, -98.920000000000002, -160.21000000000001, -203.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:   -9.79<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -44.10<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -98.92<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: -160.21<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: -203.50<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -10.26, -44.219999999999999, -93.459999999999994, -134.25, -159.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:  -10.26<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -44.22<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -93.46<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: -134.25<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: -159.17<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40000000000000002, -9.8300000000000001, -51.329999999999998, -122.97, -204.44999999999999, -264.14999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:   -9.83<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -51.33<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: -122.97<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: -204.45<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: -264.15<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -9.6999999999999993, -43.060000000000002, -96.549999999999997, -156.34999999999999, -198.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -9.70<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -43.06<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -96.55<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: -156.35<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: -198.75<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -5.9800000000000004, -23.579999999999998, -50.700000000000003, -81.609999999999999, -107.01000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -5.98<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -23.58<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -50.70<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -81.61<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: -107.01<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -5.8499999999999996, -21.329999999999998, -45.200000000000003, -72.680000000000007, -94.310000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.85<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -21.33<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -45.20<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -72.68<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -94.31<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -5.1500000000000004, -23.530000000000001, -55.299999999999997, -94.469999999999999, -128.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.29<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -5.15<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -23.53<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -55.30<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -94.47<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: -128.08<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -6.1200000000000001, -24.25, -52.710000000000001, -85.299999999999997, -111.55],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -6.12<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -24.25<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -52.71<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -85.30<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: -111.55<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -6.9800000000000004, -30.149999999999999, -66.469999999999999, -100.54000000000001, -120.79000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -6.98<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -30.15<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -66.47<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value: -100.54<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value: -120.79<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -7.54, -28.309999999999999, -61.149999999999999, -92.150000000000006, -110.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -7.54<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -28.31<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -61.15<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -92.15<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value: -110.66<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.2000000000000002, -42.25, -101.59, -141.84, -151.03999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.20<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -42.25<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value: -101.59<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value: -141.84<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: -151.04<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40000000000000002, -7.7300000000000004, -32.890000000000001, -71.739999999999995, -106.31, -126.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -7.73<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -32.89<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -71.74<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value: -106.31<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value: -126.90<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -9.5199999999999996, -40.950000000000003, -94.060000000000002, -155.34, -202.99000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:   -9.52<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -40.95<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -94.06<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: -155.34<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: -202.99<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -9.8699999999999992, -40.840000000000003, -89.620000000000005, -135.16, -163.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -9.87<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -40.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -89.62<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -135.16<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -163.19<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -9.75, -50.5, -123.05, -205.00999999999999, -266.91000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -9.75<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -50.50<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -123.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -205.01<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -266.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -8.6300000000000008, -40.359999999999999, -93.390000000000001, -155.02000000000001, -201.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.63<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -40.36<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -93.39<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -155.02<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -201.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -13.25, -61.579999999999998, -139, -222.38999999999999, -280.64999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -13.25<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -61.58<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2040<br />value: -139.00<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2045<br />value: -222.39<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2050<br />value: -280.65<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -13.23, -60.450000000000003, -125.77, -171.05000000000001, -199.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -13.23<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -60.45<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: -125.77<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: -171.05<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: -199.21<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -12.85, -72.200000000000003, -174.34, -287.41000000000003, -366.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -12.85<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -72.20<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: -174.34<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: -287.41<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: -366.31<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -12.9, -59.890000000000001, -135.15000000000001, -215.02000000000001, -269.52999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -12.90<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -59.89<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: -135.15<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: -215.02<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: -269.53<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.4800000000000004, -34.359999999999999, -78.079999999999998, -133.09, -192.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2030<br />value:   -8.48<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -34.36<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -78.08<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2045<br />value: -133.09<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2050<br />value: -192.74<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.3200000000000003, -30.379999999999999, -65.799999999999997, -106.15000000000001, -145.46000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:   -8.32<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -30.38<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -65.80<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value: -106.15<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: -145.46<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -8.0700000000000003, -38.149999999999999, -93.170000000000002, -164.37, -238.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:   -8.07<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -38.15<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:  -93.17<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: -164.37<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: -238.74<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -8.4900000000000002, -35.729999999999997, -80.409999999999997, -136.00999999999999, -197.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:   -8.49<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -35.73<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:  -80.41<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: -136.01<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: -197.53<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -8.0600000000000005, -36.479999999999997, -81.849999999999994, -119.06, -135.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -8.06<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -36.48<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -81.85<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2045<br />value: -119.06<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -135.91<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.2799999999999994, -35.439999999999998, -78.840000000000003, -112.14, -128.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -8.28<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -35.44<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -78.84<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value: -112.14<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value: -128.75<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -6.0899999999999999, -41.719999999999999, -105.29000000000001, -151.88999999999999, -156.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -6.09<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -41.72<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: -105.29<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -151.89<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -156.84<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -8.0800000000000001, -36.68, -82.469999999999999, -119.01000000000001, -135.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -8.08<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -36.68<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -82.47<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: -119.01<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -135.26<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -11.58, -53.329999999999998, -124, -203.33000000000001, -264.54000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -11.58<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -53.33<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: -124.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: -203.33<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: -264.54<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -11.699999999999999, -51.369999999999997, -112.69, -161.65000000000001, -188.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -11.70<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -51.37<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: -112.69<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: -161.65<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: -188.16<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -11.27, -62.82, -154.78, -250.84, -314.32999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -11.27<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -62.82<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: -154.78<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: -250.84<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: -314.33<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -11.81, -54.43, -126.22, -207.25999999999999, -268.52999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:  -11.81<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -54.43<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: -126.22<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: -207.26<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: -268.53<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -12.960000000000001, -59.520000000000003, -134.94, -217.05000000000001, -273.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -0.65<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -12.96<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -59.52<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: -134.94<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: -217.05<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: -273.32<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -13.15, -58.869999999999997, -122.45999999999999, -167.56999999999999, -197.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -13.15<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -58.87<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: -122.46<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: -167.57<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: -197.03<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -12.699999999999999, -67.409999999999997, -162.34999999999999, -271.38999999999999, -350.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -0.60<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -12.70<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -67.41<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: -162.35<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: -271.39<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: -350.68<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -13.06, -60.350000000000001, -136.55000000000001, -219.38, -276.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -13.06<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -60.35<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: -136.55<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: -219.38<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: -276.51<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.4000000000000004, -34.030000000000001, -76.049999999999997, -127.16, -179.34],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:   -8.40<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -34.03<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -76.05<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: -127.16<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: -179.34<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -7.4400000000000004, -27.27, -59.5, -96.739999999999995, -132.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:   -7.44<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -27.27<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -59.50<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -96.74<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: -132.53<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -7.6200000000000001, -34.280000000000001, -84.019999999999996, -149.38999999999999, -216.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:   -7.62<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -34.28<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -84.02<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: -149.39<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: -216.60<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -8.3900000000000006, -33.280000000000001, -74.310000000000002, -124.97, -178.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.39<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -33.28<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:  -74.31<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: -124.97<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: -178.24<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -7.8200000000000003, -35.75, -82.280000000000001, -119.70999999999999, -136.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -7.82<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -35.75<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -82.28<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value: -119.71<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -136.26<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -9.3599999999999994, -39.119999999999997, -84.560000000000002, -113.93000000000001, -123.58],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -9.36<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -39.12<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -84.56<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value: -113.93<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value: -123.58<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -6.9299999999999997, -44.100000000000001, -109.03, -150.24000000000001, -152.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -0.30<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -6.93<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -44.10<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: -109.03<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -150.24<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -152.36<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.8300000000000001, -36.960000000000001, -82, -115.93000000000001, -131.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.83<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -36.96<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -82.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: -115.93<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -131.39<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -12.01, -52.420000000000002, -119.8, -195.94999999999999, -255.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -12.01<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -52.42<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: -119.80<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: -195.95<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: -255.73<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -12.050000000000001, -52.210000000000001, -113.14, -163.47999999999999, -193.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -12.05<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -52.21<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: -113.14<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: -163.48<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: -193.05<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -11.460000000000001, -62.93, -153.94, -246.15000000000001, -309.82999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.46<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -62.93<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: -153.94<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: -246.15<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: -309.83<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -12.119999999999999, -53.399999999999999, -122.45999999999999, -200.05000000000001, -260.27999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -12.12<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -53.40<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: -122.46<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: -200.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: -260.28<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.220000000000001, -45.759999999999998, -103.69, -170.46000000000001, -220.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:  -10.22<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -45.76<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: -103.69<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: -170.46<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: -220.31<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -10.49, -46.130000000000003, -98.719999999999999, -142.11000000000001, -171.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:  -10.49<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -46.13<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:  -98.72<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: -142.11<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: -171.03<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -10.26, -53.93, -130.46000000000001, -217.16, -278.73000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:  -10.26<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -53.93<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: -130.46<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: -217.16<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: -278.73<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -9.9700000000000006, -45.939999999999998, -104.72, -172.06999999999999, -222.34],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.97<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -45.94<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value: -104.72<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: -172.07<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: -222.34<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -5.0999999999999996, -23.420000000000002, -54.390000000000001, -88.260000000000005, -118.64],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -5.10<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -23.42<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -54.39<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -88.26<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: -118.64<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -4.8899999999999997, -20.09, -45.810000000000002, -73.950000000000003, -100.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.34<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -4.89<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -20.09<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -45.81<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -73.95<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value: -100.03<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -4.3799999999999999, -22.199999999999999, -56.210000000000001, -97.390000000000001, -133.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.27<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -4.38<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -22.20<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -56.21<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -97.39<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: -133.79<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -5.54, -24.399999999999999, -56.509999999999998, -95.739999999999995, -136.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.37<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -5.54<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -24.40<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -56.51<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -95.74<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: -136.68<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -7.7000000000000002, -33.100000000000001, -72.25, -106.2, -126.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -7.70<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -33.10<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -72.25<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value: -106.20<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value: -126.90<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -7.4500000000000002, -30.460000000000001, -65.709999999999994, -97.260000000000005, -117.04000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.45<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -30.46<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -65.71<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -97.26<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value: -117.04<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -6.9900000000000002, -41.259999999999998, -100.27, -137.12, -141.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.99<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -41.26<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value: -100.27<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: -137.12<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -141.02<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -7.5199999999999996, -32.880000000000003, -72.400000000000006, -106.90000000000001, -127.64],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.49<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.52<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -32.88<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -72.40<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value: -106.90<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: -127.64<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.51, -46.039999999999999, -105.51000000000001, -174.46000000000001, -229.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:  -10.51<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -46.04<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value: -105.51<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: -174.46<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: -229.71<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -10.23, -43.439999999999998, -96.280000000000001, -145.33000000000001, -178],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -10.23<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -43.44<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -96.28<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -145.33<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -178.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -10.31, -54.950000000000003, -135.12, -224.31999999999999, -289.26999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.31<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -54.95<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -135.12<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -224.32<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -289.27<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -10.56, -46.520000000000003, -106.76000000000001, -176.94, -233.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -10.56<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -46.52<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -106.76<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -176.94<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -233.03<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.9299999999999997, -42.590000000000003, -97.310000000000002, -160.15000000000001, -206.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:   -8.93<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -42.59<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -97.31<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: -160.15<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: -206.53<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.5700000000000003, -40.030000000000001, -85.859999999999999, -125.86, -151.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:   -8.57<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -40.03<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -85.86<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: -125.86<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: -151.32<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -9.1699999999999999, -47.770000000000003, -116.14, -196.84, -257.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.37<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:   -9.17<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -47.77<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: -116.14<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: -196.84<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: -257.61<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -8.5999999999999996, -41.009999999999998, -94.349999999999994, -155.69, -200.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.60<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -41.01<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -94.35<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: -155.69<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: -200.60<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -4.5800000000000001, -20.039999999999999, -46.469999999999999, -75.659999999999997, -100.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.31<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -4.58<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -20.04<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -46.47<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -75.66<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: -100.16<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -4.9800000000000004, -20.57, -45.710000000000001, -71.450000000000003, -91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.32<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -4.98<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -20.57<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -45.71<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -71.45<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -91.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -4, -20.039999999999999, -50.810000000000002, -87.209999999999994, -117.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -20.04<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -50.81<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -87.21<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: -117.40<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -4.9900000000000002, -21.940000000000001, -51.060000000000002, -84.159999999999997, -114.58],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.30<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -4.99<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -21.94<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -51.06<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -84.16<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: -114.58<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -6.4299999999999997, -29.350000000000001, -65.709999999999994, -99.340000000000003, -121.23],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -6.43<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -29.35<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -65.71<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -99.34<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value: -121.23<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -6.5899999999999999, -27.300000000000001, -60.469999999999999, -93.090000000000003, -114.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.59<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -27.30<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -60.47<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -93.09<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value: -114.60<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -7.2400000000000002, -42.850000000000001, -102.76000000000001, -142.31999999999999, -151.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.24<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -42.85<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value: -102.76<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value: -142.32<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: -151.39<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.39000000000000001, -6.5700000000000003, -29.210000000000001, -65.049999999999997, -98.900000000000006, -121.26000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.39<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.57<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -29.21<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -65.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -98.90<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value: -121.26<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -8.6600000000000001, -39.850000000000001, -90.359999999999999, -149.34999999999999, -197.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:   -8.66<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -39.85<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -90.36<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: -149.35<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: -197.29<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -8.6600000000000001, -39.539999999999999, -86.349999999999994, -130.16999999999999, -159.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -8.66<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -39.54<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -86.35<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -130.17<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -159.17<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -9.1500000000000004, -47.869999999999997, -116.68000000000001, -196.47, -258.48000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.36<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -9.15<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -47.87<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -116.68<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -196.47<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -258.48<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.4600000000000009, -40.07, -92.180000000000007, -153.19999999999999, -201.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.46<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -40.07<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -92.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -153.20<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -201.84<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -13.699999999999999, -64.180000000000007, -142.33000000000001, -221.87, -273.26999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -13.70<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -64.18<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2040<br />value: -142.33<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2045<br />value: -221.87<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2050<br />value: -273.27<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -13.800000000000001, -64.150000000000006, -131.49000000000001, -175.72999999999999, -200.53999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -13.80<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -64.15<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: -131.49<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: -175.73<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: -200.54<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -13.33, -73.280000000000001, -173.84999999999999, -280.60000000000002, -352.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -0.66<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -13.33<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -73.28<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: -173.85<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: -280.60<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: -352.88<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -13.779999999999999, -65.120000000000005, -144.61000000000001, -226.37, -279.48000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -13.78<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:  -65.12<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: -144.61<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: -226.37<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: -279.48<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -9.2200000000000006, -38.420000000000002, -84.099999999999994, -138.19999999999999, -195.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -0.58<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2030<br />value:   -9.22<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -38.42<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2040<br />value:  -84.10<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2045<br />value: -138.20<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2050<br />value: -195.71<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.8300000000000001, -32.859999999999999, -69.260000000000005, -108.59, -145.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:   -8.83<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -32.86<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -69.26<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: -108.59<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: -145.35<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -8.5, -40.479999999999997, -96.650000000000006, -166.75, -238.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:   -8.50<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -40.48<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:  -96.65<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: -166.75<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: -238.24<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -9.2400000000000002, -38.890000000000001, -85.670000000000002, -141.25999999999999, -199.97999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -0.58<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:   -9.24<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -38.89<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:  -85.67<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: -141.26<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: -199.98<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -9.3100000000000005, -39.420000000000002, -87.379999999999995, -123.64, -139.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -9.31<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -39.42<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -87.38<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2045<br />value: -123.64<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -139.55<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.7799999999999994, -37.579999999999998, -82.269999999999996, -114.61, -128.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -8.78<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -37.58<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -82.27<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value: -114.61<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value: -128.24<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -6.2300000000000004, -44.109999999999999, -108.39, -152.13999999999999, -155.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -0.27<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -6.23<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -44.11<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: -108.39<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -152.14<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -155.19<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.8800000000000008, -39.039999999999999, -87.519999999999996, -123.94, -138.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -8.88<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -39.04<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -87.52<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: -123.94<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -138.91<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -12.43, -57.210000000000001, -130.69999999999999, -212.06999999999999, -272.30000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -0.73<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -12.43<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -57.21<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: -130.70<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: -212.07<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: -272.30<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -12.17, -53.439999999999998, -115.58, -164.11000000000001, -188.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -12.17<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -53.44<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: -115.58<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: -164.11<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: -188.57<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -11.92, -67.579999999999998, -162.47, -256.47000000000003, -318.94999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -11.92<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -67.58<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: -162.47<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: -256.47<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: -318.95<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -12.220000000000001, -56.369999999999997, -129.15000000000001, -210.28, -270.45999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -12.22<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -56.37<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: -129.15<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: -210.28<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: -270.46<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -12.970000000000001, -59.649999999999999, -133.22999999999999, -211.69, -263.83999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -0.65<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -12.97<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -59.65<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: -133.23<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: -211.69<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: -263.84<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -13.25, -61.119999999999997, -126.31, -170.27000000000001, -196.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -13.25<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -61.12<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: -126.31<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: -170.27<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: -196.76<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -12.859999999999999, -70.239999999999995, -167.59999999999999, -274.70999999999998, -349.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -0.60<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -12.86<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -70.24<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: -167.60<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: -274.71<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: -349.64<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -12.9, -59.210000000000001, -132.08000000000001, -209.25, -261.23000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -12.90<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -59.21<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: -132.08<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: -209.25<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: -261.23<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -8.4900000000000002, -36.409999999999997, -81.209999999999994, -134.72999999999999, -188.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:   -8.49<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -36.41<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -81.21<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: -134.73<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: -188.38<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -7.7300000000000004, -29.210000000000001, -63.200000000000003, -101.91, -139.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:   -7.73<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -29.21<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -63.20<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value: -101.91<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: -139.03<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -7.7599999999999998, -37.030000000000001, -90.090000000000003, -158.24000000000001, -228.22999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:   -7.76<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -37.03<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -90.09<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: -158.24<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: -228.23<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -8.1899999999999995, -35.899999999999999, -80.629999999999995, -134.27000000000001, -188.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.19<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -35.90<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:  -80.63<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: -134.27<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: -188.32<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.6199999999999992, -36.390000000000001, -82.609999999999999, -119.54000000000001, -138.09],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -8.62<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -36.39<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -82.61<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: -119.54<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -138.09<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -8.1600000000000001, -36.390000000000001, -80.420000000000002, -111.22, -126.02],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -0.50<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -8.16<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -36.39<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -80.42<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value: -111.22<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value: -126.02<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -6.4800000000000004, -42.729999999999997, -107.02, -152.49000000000001, -159.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -0.27<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -6.48<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -42.73<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: -107.02<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -152.49<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -159.05<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.6799999999999997, -37.310000000000002, -83.75, -120.48999999999999, -138.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.68<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -37.31<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -83.75<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value: -120.49<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -138.14<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -11.960000000000001, -54.100000000000001, -124.48, -203.19, -262.91000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -11.96<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -54.10<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: -124.48<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: -203.19<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: -262.91<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -11.85, -51.899999999999999, -113.03, -162.61000000000001, -188.41999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -11.85<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -51.90<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: -113.03<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: -162.61<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: -188.42<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -11.51, -64.370000000000005, -156.75999999999999, -250.11000000000001, -312.32999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.51<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -64.37<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: -156.76<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: -250.11<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: -312.33<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -11.65, -52.520000000000003, -121.52, -200.19999999999999, -260.39999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -11.65<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -52.52<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: -121.52<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: -200.20<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: -260.40<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.91, -46.700000000000003, -105.45, -173.06, -222.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:  -10.91<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -46.70<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value: -105.45<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: -173.06<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: -222.87<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -10.960000000000001, -47.380000000000003, -100.92, -143.88999999999999, -171.30000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:  -10.96<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -47.38<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value: -100.92<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: -143.89<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: -171.30<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -10.869999999999999, -57.479999999999997, -138.61000000000001, -229.83000000000001, -295.35000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.47<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:  -10.87<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -57.48<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: -138.61<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: -229.83<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: -295.35<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -9.7100000000000009, -45.700000000000003, -105.81, -174.50999999999999, -223.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.71<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -45.70<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: -105.81<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: -174.51<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: -223.88<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.39000000000000001, -6.1799999999999997, -26.02, -57.43, -94.060000000000002, -129.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -0.39<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -6.18<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -26.02<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -57.43<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -94.06<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: -129.25<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40000000000000002, -6.2199999999999998, -23.219999999999999, -49.869999999999997, -80.670000000000002, -109.02],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.40<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.22<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -23.22<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -49.87<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -80.67<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value: -109.02<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -5.9699999999999998, -25.690000000000001, -61.310000000000002, -106.98999999999999, -150.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -5.97<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -25.69<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -61.31<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value: -106.99<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: -150.53<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -6.9000000000000004, -28.41, -62.130000000000003, -101.62, -139.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -6.90<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -28.41<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -62.13<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value: -101.62<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: -139.17<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -8.5, -34.789999999999999, -75.379999999999995, -109.70999999999999, -129.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -8.50<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -34.79<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -75.38<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value: -109.71<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value: -129.61<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.2699999999999996, -31.73, -66.480000000000004, -96.359999999999999, -113.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -8.27<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -31.73<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -66.48<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -96.36<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value: -113.62<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -6.9299999999999997, -42.07, -103.56, -140.63999999999999, -146.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.93<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -42.07<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value: -103.56<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: -140.64<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -146.41<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -8.1899999999999995, -33.350000000000001, -72.599999999999994, -106.95, -127.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -8.19<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -33.35<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -72.60<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value: -106.95<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: -127.12<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -10.76, -46.329999999999998, -106.72, -177.19999999999999, -233.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -0.62<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:  -10.76<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -46.33<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value: -106.72<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: -177.20<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: -233.79<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.77, -45.200000000000003, -99.950000000000003, -149.81999999999999, -181.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -10.77<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -45.20<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -99.95<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -149.82<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -181.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -10.5, -56.100000000000001, -136.78999999999999, -224.88999999999999, -288.79000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.50<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -56.10<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -136.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -224.89<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -288.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -10.789999999999999, -47.060000000000002, -108.05, -177.78999999999999, -233.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -10.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -47.06<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -108.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -177.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -233.31<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -8.6799999999999997, -41.07, -93.680000000000007, -154.65000000000001, -199.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:   -8.68<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -41.07<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -93.68<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: -154.65<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: -199.45<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.7100000000000009, -40.640000000000001, -87.189999999999998, -127.59, -153.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:   -8.71<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -40.64<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -87.19<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: -127.59<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: -153.55<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -9.1400000000000006, -49.289999999999999, -120.55, -204.77000000000001, -267.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.37<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:   -9.14<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -49.29<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: -120.55<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: -204.77<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: -267.74<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -8.8100000000000005, -42.07, -96.219999999999999, -158.56999999999999, -204.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.81<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -42.07<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -96.22<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: -158.57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: -204.16<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -4.7300000000000004, -20.77, -48.329999999999998, -78.980000000000004, -105.2],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.30<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -4.73<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -20.77<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -48.33<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -78.98<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value: -105.20<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -4.4000000000000004, -18.670000000000002, -42.159999999999997, -67.239999999999995, -86.680000000000007],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -4.40<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -18.67<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -42.16<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -67.24<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -86.68<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -3.6899999999999999, -18.670000000000002, -47.609999999999999, -82.329999999999998, -111.23999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -3.69<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -18.67<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -47.61<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -82.33<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: -111.24<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -4.8399999999999999, -21.100000000000001, -48.460000000000001, -79.010000000000005, -105.05],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -4.84<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -21.10<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -48.46<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -79.01<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: -105.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.39000000000000001, -7.0300000000000002, -30.93, -67.739999999999995, -100.59, -121.67],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -0.39<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -7.03<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -30.93<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -67.74<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value: -100.59<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value: -121.67<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -6.7800000000000002, -27.780000000000001, -60.75, -92.420000000000002, -112.52],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.78<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -27.78<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -60.75<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -92.42<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value: -112.52<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -7.21, -42.710000000000001, -102.72, -142.37, -151.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.21<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -42.71<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value: -102.72<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value: -142.37<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: -151.47<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -6.7800000000000002, -30.23, -66.599999999999994, -99.5, -120.39],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.36<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.78<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -30.23<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -66.60<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -99.50<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value: -120.39<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -8.7300000000000004, -40.420000000000002, -92.450000000000003, -153.08000000000001, -200.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:   -8.73<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -40.42<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -92.45<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: -153.08<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: -200.88<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -8.7100000000000009, -39.700000000000003, -86.849999999999994, -130.78999999999999, -159.52000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -8.71<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -39.70<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -86.85<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -130.79<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -159.52<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -9.0999999999999996, -49.219999999999999, -120.18000000000001, -201.90000000000001, -264.73000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -9.10<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -49.22<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -120.18<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -201.90<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -264.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -8.4299999999999997, -39.039999999999999, -89.590000000000003, -148.86000000000001, -196.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -39.04<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -89.59<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -148.86<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -196.62<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -11.449999999999999, -65.280000000000001, -147.53, -228.33000000000001, -277.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -0.66<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -11.45<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -65.28<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2040<br />value: -147.53<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2045<br />value: -228.33<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2050<br />value: -277.55<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -12.289999999999999, -65.620000000000005, -135.90000000000001, -179.68000000000001, -200.18000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -12.29<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -65.62<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: -135.90<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: -179.68<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: -200.18<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -12.16, -79.609999999999999, -191.59, -304.57999999999998, -372.48000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -0.56<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -12.16<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:  -79.61<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: -191.59<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: -304.58<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: -372.48<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -11.17, -66.700000000000003, -151.12, -233.59999999999999, -281.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -11.17<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:  -66.70<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: -151.12<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: -233.60<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: -281.62<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.0899999999999999, -41.859999999999999, -91.609999999999999, -148.75, -201.33000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2030<br />value:   -8.09<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -41.86<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2040<br />value:  -91.61<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2045<br />value: -148.75<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2050<br />value: -201.33<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -7.8600000000000003, -35.579999999999998, -75.150000000000006, -117.62, -151.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:   -7.86<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -35.58<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -75.15<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: -117.62<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: -151.41<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -7.8099999999999996, -44.700000000000003, -104.94, -178.5, -245.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:   -7.81<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -44.70<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: -104.94<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: -178.50<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: -245.71<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -8.1400000000000006, -42.890000000000001, -93.829999999999998, -152.24000000000001, -206.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:   -8.14<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -42.89<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:  -93.83<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: -152.24<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: -206.26<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -6.7000000000000002, -38.119999999999997, -89.060000000000002, -127, -141.41999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -6.70<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -38.12<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -89.06<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2045<br />value: -127.00<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -141.42<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.42999999999999999, -7.0199999999999996, -36.57, -82.859999999999999, -115.89, -128.27000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -7.02<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -36.57<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -82.86<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value: -115.89<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value: -128.27<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.12, -4.8600000000000003, -45.93, -115.25, -159.97, -159.52000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -0.12<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -4.86<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -45.93<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: -115.25<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -159.97<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -159.52<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -6.71, -39.310000000000002, -92.140000000000001, -130, -143.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -0.38<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -6.71<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -39.31<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -92.14<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: -130.00<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -143.05<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -10.18, -58.729999999999997, -136.50999999999999, -216.75999999999999, -274.33999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -0.58<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -10.18<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -58.73<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: -136.51<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: -216.76<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: -274.34<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -9.9900000000000002, -54.140000000000001, -119.06, -168.63, -189.94999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:   -9.99<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -54.14<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: -119.06<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: -168.63<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: -189.95<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -9.9000000000000004, -67.890000000000001, -166.75, -260.56999999999999, -318.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:   -9.90<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -67.89<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: -166.75<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: -260.57<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: -318.76<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -9.9600000000000009, -57.359999999999999, -134.69999999999999, -216.69, -272.89999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:   -9.96<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -57.36<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: -134.70<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: -216.69<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: -272.90<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -11.06, -62.240000000000002, -140.47999999999999, -218.00999999999999, -265.69],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -11.06<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -62.24<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: -140.48<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: -218.01<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: -265.69<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -11.94, -63.210000000000001, -131.13999999999999, -174.19, -196.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -11.94<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -63.21<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: -131.14<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: -174.19<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: -196.28<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -11.6, -74.819999999999993, -181.09999999999999, -291.57999999999998, -361.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -11.60<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:  -74.82<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: -181.10<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: -291.58<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: -361.31<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -11.35, -64.530000000000001, -146.16, -227.03999999999999, -275.67000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.61<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -11.35<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:  -64.53<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: -146.16<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: -227.04<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: -275.67<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -7.9500000000000002, -39.32, -86.230000000000004, -140.22999999999999, -189.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:   -7.95<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -39.32<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:  -86.23<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: -140.23<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: -189.53<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -7.0499999999999998, -31.949999999999999, -68.840000000000003, -108.92, -141.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:   -7.05<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -31.95<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -68.84<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: -108.92<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: -141.55<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -7.2800000000000002, -41.719999999999999, -99.269999999999996, -169.65000000000001, -234.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:   -7.28<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -41.72<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:  -99.27<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: -169.65<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: -234.51<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -7.9400000000000004, -40.609999999999999, -89.319999999999993, -144.99000000000001, -195.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:   -7.94<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -40.61<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:  -89.32<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: -144.99<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: -195.20<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.2300000000000004, -38.030000000000001, -87.469999999999999, -122.01000000000001, -135.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -7.23<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -38.03<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -87.47<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: -122.01<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -135.76<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.2000000000000002, -37.5, -84.379999999999995, -116.65000000000001, -129.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -7.20<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -37.50<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -84.38<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value: -116.65<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value: -129.06<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.20000000000000001, -5.25, -46.990000000000002, -117.65000000000001, -161.19999999999999, -161.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -0.20<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -5.25<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -46.99<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: -117.65<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -161.20<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -161.29<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.3099999999999996, -40.590000000000003, -93.370000000000005, -129.74000000000001, -141.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -7.31<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -40.59<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -93.37<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: -129.74<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -141.35<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -9.9100000000000001, -54.600000000000001, -127.77, -207.13, -264.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -0.60<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:   -9.91<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -54.60<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: -127.77<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: -207.13<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: -264.36<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -10.029999999999999, -52.780000000000001, -116.26000000000001, -166.08000000000001, -188.52000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.67<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -10.03<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -52.78<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: -116.26<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: -166.08<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: -188.52<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -9.8300000000000001, -64.920000000000002, -160, -254.68000000000001, -313.66000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:   -9.83<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -64.92<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: -160.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: -254.68<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: -313.66<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -9.8000000000000007, -54.039999999999999, -127.02, -206.30000000000001, -263.67000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.60<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -9.80<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -54.04<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: -127.02<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: -206.30<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: -263.67<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.63, -10.970000000000001, -49.609999999999999, -109.53, -174.41, -219.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -10.97<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -49.61<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: -109.53<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: -174.41<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: -219.39<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -11.81, -52.960000000000001, -110.13, -152.43000000000001, -177.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -11.81<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -52.96<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: -110.13<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: -152.43<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: -177.07<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -11.630000000000001, -62.789999999999999, -148.44999999999999, -239.33000000000001, -299.26999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -11.63<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -62.79<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: -148.45<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: -239.33<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: -299.27<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -11.18, -49.509999999999998, -108.98999999999999, -173.88, -220.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.65<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -11.18<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -49.51<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: -108.99<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: -173.88<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: -220.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -6.9100000000000001, -27.93, -60.590000000000003, -97.469999999999999, -129.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -6.91<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -27.93<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -60.59<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:  -97.47<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: -129.67<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -6.5599999999999996, -23.789999999999999, -49.960000000000001, -78.060000000000002, -102.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.56<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -23.79<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -49.96<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -78.06<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value: -102.57<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -6.4000000000000004, -28.350000000000001, -66.219999999999999, -112.75, -153.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:   -6.40<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -28.35<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -66.22<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value: -112.75<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: -153.82<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -6.9900000000000002, -28.170000000000002, -61.259999999999998, -99.230000000000004, -131.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -6.99<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -28.17<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -61.26<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -99.23<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: -131.76<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -8.4900000000000002, -35.189999999999998, -75.700000000000003, -111, -131.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -8.49<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -35.19<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -75.70<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value: -111.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value: -131.28<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -7.9900000000000002, -32.060000000000002, -69.689999999999998, -103.06999999999999, -121.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.99<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -32.06<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -69.69<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value: -103.07<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value: -121.50<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -7.1100000000000003, -44.079999999999998, -109.04000000000001, -150.71000000000001, -155.78],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.11<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -44.08<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value: -109.04<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: -150.71<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -155.78<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.51000000000000001, -8.9100000000000001, -36.149999999999999, -79.870000000000005, -116.61, -136.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.51<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -8.91<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -36.15<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -79.87<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value: -116.61<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: -136.41<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -10.82, -47.689999999999998, -108.13, -176.69999999999999, -232.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -0.65<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:  -10.82<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -47.69<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value: -108.13<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: -176.70<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: -232.21<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -11.02, -47.049999999999997, -102.95, -152.40000000000001, -181.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.66<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -11.02<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -47.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value: -102.95<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -152.40<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -181.29<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56000000000000005, -10.99, -59.539999999999999, -143.75999999999999, -234.06, -297.47000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.56<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.99<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -59.54<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -143.76<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -234.06<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -297.47<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -11.279999999999999, -50.07, -114.15000000000001, -186.47, -242.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -11.28<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -50.07<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -114.15<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -186.47<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -242.58<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46000000000000002, -9.7899999999999991, -44.100000000000001, -98.920000000000002, -160.21000000000001, -203.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:   -9.79<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -44.10<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -98.92<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: -160.21<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: -203.50<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -10.26, -44.219999999999999, -93.459999999999994, -134.25, -159.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:  -10.26<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -44.22<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -93.46<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: -134.25<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: -159.17<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40000000000000002, -9.8300000000000001, -51.329999999999998, -122.97, -204.44999999999999, -264.14999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:   -9.83<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -51.33<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: -122.97<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: -204.45<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: -264.15<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -9.6999999999999993, -43.060000000000002, -96.549999999999997, -156.34999999999999, -198.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -9.70<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -43.06<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -96.55<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: -156.35<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: -198.75<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -5.9800000000000004, -23.579999999999998, -50.700000000000003, -81.609999999999999, -107.01000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -5.98<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -23.58<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -50.70<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -81.61<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: -107.01<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -5.8499999999999996, -21.329999999999998, -45.200000000000003, -72.680000000000007, -94.310000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.85<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -21.33<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -45.20<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -72.68<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -94.31<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -5.1500000000000004, -23.530000000000001, -55.299999999999997, -94.469999999999999, -128.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.29<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -5.15<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -23.53<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -55.30<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -94.47<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: -128.08<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -6.1200000000000001, -24.25, -52.710000000000001, -85.299999999999997, -111.55],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -6.12<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -24.25<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -52.71<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -85.30<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: -111.55<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -6.9800000000000004, -30.149999999999999, -66.469999999999999, -100.54000000000001, -120.79000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -6.98<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -30.15<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -66.47<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value: -100.54<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value: -120.79<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.46999999999999997, -7.54, -28.309999999999999, -61.149999999999999, -92.150000000000006, -110.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -7.54<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -28.31<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -61.15<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -92.15<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value: -110.66<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -7.2000000000000002, -42.25, -101.59, -141.84, -151.03999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.20<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -42.25<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value: -101.59<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value: -141.84<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: -151.04<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40000000000000002, -7.7300000000000004, -32.890000000000001, -71.739999999999995, -106.31, -126.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -7.73<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -32.89<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -71.74<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value: -106.31<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value: -126.90<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -9.5199999999999996, -40.950000000000003, -94.060000000000002, -155.34, -202.99000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:   -9.52<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -40.95<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -94.06<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: -155.34<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: -202.99<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.47999999999999998, -9.8699999999999992, -40.840000000000003, -89.620000000000005, -135.16, -163.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -9.87<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -40.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -89.62<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -135.16<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -163.19<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -9.75, -50.5, -123.05, -205.00999999999999, -266.91000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -9.75<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -50.50<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -123.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -205.01<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -266.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -8.6300000000000008, -40.359999999999999, -93.390000000000001, -155.02000000000001, -201.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.63<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -40.36<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -93.39<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -155.02<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -201.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    }
  ],
  "layout": {
    "margin": {
      "t": 42.567040265670414,
      "r": 13.283520132835205,
      "b": 75.716064757160652,
      "l": 62.432544624325445
    },
    "plot_bgcolor": "rgba(255,255,255,1)",
    "paper_bgcolor": "rgba(255,255,255,1)",
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 26.567040265670411
    },
    "xaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [2018.5, 2051.5],
      "tickmode": "array",
      "ticktext": ["2020", "2030", "2040", "2050"],
      "tickvals": [2020, 2030, 2040, 2050],
      "categoryorder": "array",
      "categoryarray": ["2020", "2030", "2040", "2050"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 6.6417600664176026,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 21.253632212536321
      },
      "tickangle": -90,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 1.2075927393486547,
      "zeroline": false,
      "anchor": "y",
      "title": {
        "text": "",
        "font": {
          "color": null,
          "family": null,
          "size": 0
        }
      },
      "hoverformat": ".2f"
    },
    "yaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [-391.10400000000004, 18.624000000000002],
      "tickmode": "array",
      "ticktext": ["-300", "-200", "-100", "0"],
      "tickvals": [-300, -200, -100, 0],
      "categoryorder": "array",
      "categoryarray": ["-300", "-200", "-100", "0"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 6.6417600664176026,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 21.253632212536321
      },
      "tickangle": -0,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 1.2075927393486547,
      "zeroline": false,
      "anchor": "x",
      "title": {
        "text": "",
        "font": {
          "color": null,
          "family": null,
          "size": 0
        }
      },
      "hoverformat": ".2f"
    },
    "shapes": [
      {
        "type": "rect",
        "fillcolor": null,
        "line": {
          "color": null,
          "width": 0,
          "linetype": []
        },
        "yref": "paper",
        "xref": "paper",
        "x0": 0,
        "x1": 1,
        "y0": 0,
        "y1": 1
      }
    ],
    "showlegend": false,
    "legend": {
      "bgcolor": null,
      "bordercolor": null,
      "borderwidth": 0,
      "font": {
        "color": "rgba(0,0,0,1)",
        "family": "",
        "size": 26.567040265670411
      }
    },
    "hovermode": "closest",
    "barmode": "relative",
    "autosize": true
  },
  "config": {
    "doubleClick": "reset",
    "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"],
    "showSendToCloud": false
  },
  "source": "A",
  "attrs": {
    "60741bf01670": {
      "yintercept": {},
      "type": "scatter"
    },
    "60746ff35993": {
      "xintercept": {}
    },
    "607443e751ec": {
      "x": {},
      "y": {},
      "linetype": {},
      "colour": {}
    },
    "607442dc50af": {
      "x": {},
      "y": {},
      "shape": {},
      "fill": {}
    }
  },
  "cur_data": "60741bf01670",
  "visdat": {
    "60741bf01670": ["function (y) ", "x"],
    "60746ff35993": ["function (y) ", "x"],
    "607443e751ec": ["function (y) ", "x"],
    "607442dc50af": ["function (y) ", "x"]
  },
  "highlight": {
    "on": "plotly_click",
    "persistent": false,
    "dynamic": false,
    "selectize": false,
    "opacityDim": 0.20000000000000001,
    "selected": {
      "opacity": 1
    },
    "debounce": 0
  },
  "shinyEvents": ["plotly_hover", "plotly_click", "plotly_selected", "plotly_relayout", "plotly_brushed", "plotly_brushing", "plotly_clickannotation", "plotly_doubleclick", "plotly_deselect", "plotly_afterplot", "plotly_sunburstclick"],
  "base_url": "https://plot.ly"
}
           

                  ); 

           }()); 

  
