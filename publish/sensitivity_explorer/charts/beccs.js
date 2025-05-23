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
      "y": [-390.67349999999999, 18.6035],
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
      "y": [0, -0.72999999999999998, -13.18, -60.130000000000003, -135.06999999999999, -215.96000000000001, -272.51999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -13.18<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -60.13<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2040<br />value: -135.07<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2045<br />value: -215.96<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2050<br />value: -272.52<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12"],
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
      "y": [0, -0.68999999999999995, -13.24, -59.729999999999997, -124.20999999999999, -168.87, -197.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -13.24<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -59.73<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: -124.21<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: -168.87<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: -197.14<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [0, -0.60999999999999999, -12.92, -69.569999999999993, -167.00999999999999, -274.24000000000001, -349.86000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -12.92<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -69.57<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: -167.01<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: -274.24<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: -349.86<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [0, -0.79000000000000004, -13.42, -61.829999999999998, -139.08000000000001, -223.59, -283.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -0.79<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -13.42<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -61.83<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: -139.08<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: -223.59<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: -283.44<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [0, -0.56999999999999995, -8.5500000000000007, -34.630000000000003, -78.450000000000003, -133.25999999999999, -192.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2030<br />value:   -8.55<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -34.63<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -78.45<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2045<br />value: -133.26<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2050<br />value: -192.66<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20"],
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
      "y": [0, -0.54000000000000004, -8.3300000000000001, -30.5, -65.879999999999995, -105.2, -143.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:   -8.33<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -30.50<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -65.88<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value: -105.20<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: -143.58<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [0, -0.42999999999999999, -7.9699999999999998, -37.789999999999999, -92.489999999999995, -163.28, -237.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:   -7.97<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -37.79<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:  -92.49<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: -163.28<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: -237.45<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [0, -0.58999999999999997, -8.5500000000000007, -36.890000000000001, -83.030000000000001, -139.69, -201.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:   -8.55<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -36.89<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:  -83.03<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: -139.69<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: -201.08<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [0, -0.54000000000000004, -8.1500000000000004, -36.350000000000001, -82.810000000000002, -120.38, -137.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -8.15<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -36.35<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -82.81<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2045<br />value: -120.38<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -137.11<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4"],
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
      "y": [0, -0.51000000000000001, -7.9500000000000002, -36.530000000000001, -80.599999999999994, -110.89, -125.01000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -7.95<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -36.53<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -80.60<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value: -110.89<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value: -125.01<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [0, -0.26000000000000001, -6.1799999999999997, -42.950000000000003, -107.22, -152, -154.83000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -0.26<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -6.18<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -42.95<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: -107.22<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -152.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -154.83<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [0, -0.56000000000000005, -8.5800000000000001, -37.770000000000003, -86.170000000000002, -124.11, -140.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -8.58<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -37.77<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -86.17<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: -124.11<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -140.62<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [0, -0.69999999999999996, -11.69, -52.850000000000001, -122.65000000000001, -201.83000000000001, -262.91000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -11.69<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -52.85<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: -122.65<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: -201.83<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: -262.91<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5"],
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
      "y": [0, -0.75, -11.68, -50.600000000000001, -111.15000000000001, -160.22999999999999, -187.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -11.68<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -50.60<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: -111.15<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: -160.23<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: -187.26<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [0, -0.52000000000000002, -11.640000000000001, -65.299999999999997, -158.55000000000001, -252.84999999999999, -317.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -11.64<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -65.30<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: -158.55<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: -252.85<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: -317.31<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [0, -0.69999999999999996, -11.75, -54.549999999999997, -126.97, -207.11000000000001, -268.92000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:  -11.75<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -54.55<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: -126.97<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: -207.11<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: -268.92<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [0, -0.70999999999999996, -12.81, -57.109999999999999, -128.53999999999999, -206.44, -260.58999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -12.81<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -57.11<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: -128.54<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: -206.44<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: -260.59<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [0, -0.66000000000000003, -12.81, -55.880000000000003, -117.09, -161.99000000000001, -191.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -12.81<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -55.88<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: -117.09<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: -161.99<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: -191.87<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [0, -0.56999999999999995, -12.220000000000001, -64.040000000000006, -154.52000000000001, -257.92000000000002, -332.85000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -12.22<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -64.04<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: -154.52<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: -257.92<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: -332.85<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [0, -0.67000000000000004, -12.800000000000001, -57.530000000000001, -129.80000000000001, -208.44999999999999, -262.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -12.80<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -57.53<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: -129.80<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: -208.45<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: -262.82<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [0, -0.55000000000000004, -8.0099999999999998, -32.439999999999998, -72.409999999999997, -121.31, -170.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:   -8.01<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -32.44<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -72.41<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: -121.31<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: -170.50<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [0, -0.44, -7.0199999999999996, -26.309999999999999, -57.240000000000002, -93.700000000000003, -128.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:   -7.02<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -26.31<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -57.24<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -93.70<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: -128.74<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [0, -0.45000000000000001, -7.5499999999999998, -32.789999999999999, -79.799999999999997, -142.41, -206.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -0.45<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:   -7.55<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -32.79<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -79.80<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: -142.41<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: -206.02<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [0, -0.56000000000000005, -8.0099999999999998, -31.960000000000001, -71.379999999999995, -120.45999999999999, -170.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.01<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -31.96<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:  -71.38<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: -120.46<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: -170.55<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [0, -0.51000000000000001, -8.5700000000000003, -36.079999999999998, -80.739999999999995, -115.7, -133.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -8.57<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -36.08<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -80.74<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value: -115.70<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -133.49<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [0, -0.51000000000000001, -8.7899999999999991, -38.210000000000001, -83.560000000000002, -112.93000000000001, -123.79000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -8.79<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -38.21<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -83.56<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value: -112.93<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value: -123.79<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [0, -0.34999999999999998, -7.1900000000000004, -43.729999999999997, -107.48999999999999, -146.88999999999999, -151.97],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -7.19<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -43.73<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: -107.49<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -146.89<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -151.97<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [0, -0.47999999999999998, -8.5600000000000005, -36.43, -81.299999999999997, -116.19, -133.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.48<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.56<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -36.43<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -81.30<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: -116.19<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -133.25<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [0, -0.66000000000000003, -11.779999999999999, -51.68, -119.05, -195.78999999999999, -256.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -11.78<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -51.68<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: -119.05<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: -195.79<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: -256.88<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [0, -0.68999999999999995, -11.720000000000001, -49.969999999999999, -108.98999999999999, -159.52000000000001, -190.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -11.72<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -49.97<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: -108.99<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: -159.52<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: -190.45<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.54000000000000004, -11.34, -61.259999999999998, -151.19999999999999, -245.47, -309.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.34<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -61.26<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: -151.20<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: -245.47<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: -309.38<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.73999999999999999, -12.119999999999999, -52.659999999999997, -120.86, -197.99000000000001, -257.92000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -12.12<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -52.66<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: -120.86<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: -197.99<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: -257.92<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.46999999999999997, -9.4700000000000006, -43.82, -100.16, -165.30000000000001, -213.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:   -9.47<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -43.82<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: -100.16<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: -165.30<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: -213.37<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [0, -0.42999999999999999, -9.3300000000000001, -41.829999999999998, -90.640000000000001, -133.59, -161.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:   -9.33<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -41.83<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:  -90.64<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: -133.59<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: -161.87<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.40999999999999998, -9.7599999999999998, -50.549999999999997, -123.02, -207.83000000000001, -269.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:   -9.76<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -50.55<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: -123.02<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: -207.83<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: -269.94<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.46000000000000002, -9.2699999999999996, -43.359999999999999, -99.280000000000001, -163.74000000000001, -211.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.27<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -43.36<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -99.28<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: -163.74<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: -211.44<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.33000000000000002, -4.7400000000000002, -20.23, -46.939999999999998, -77.650000000000006, -104.56],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -4.74<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -20.23<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -46.94<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -77.65<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: -104.56<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [0, -0.32000000000000001, -4.4800000000000004, -19.109999999999999, -43.630000000000003, -69.849999999999994, -90.390000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.32<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -4.48<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -19.11<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -43.63<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -69.85<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value:  -90.39<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.23999999999999999, -3.8799999999999999, -19.260000000000002, -49.950000000000003, -87.379999999999995, -120.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -3.88<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -19.26<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -49.95<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -87.38<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: -120.91<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -5.2000000000000002, -23.23, -54.049999999999997, -88.310000000000002, -119.45999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -5.20<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -23.23<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -54.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -88.31<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: -119.46<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.38, -6.8899999999999997, -30.539999999999999, -67.040000000000006, -99.450000000000003, -119.76000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -0.38<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -6.89<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -30.54<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -67.04<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -99.45<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value: -119.76<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [0, -0.47999999999999998, -6.8600000000000003, -27.870000000000001, -61.450000000000003, -93.689999999999998, -114.2],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -6.86<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -27.87<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -61.45<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -93.69<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value: -114.20<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.46999999999999997, -7.21, -42.170000000000002, -102.27, -142.86000000000001, -151.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.21<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -42.17<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value: -102.27<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: -142.86<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -151.68<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.40000000000000002, -6.96, -30.809999999999999, -67.939999999999998, -101.31999999999999, -122.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -6.96<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -30.81<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -67.94<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value: -101.32<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: -122.06<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.46999999999999997, -9, -41.409999999999997, -94.530000000000001, -156.44, -206.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:   -9.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -41.41<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:  -94.53<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: -156.44<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: -206.08<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [0, -0.42999999999999999, -8.8100000000000005, -38.939999999999998, -86.159999999999997, -131.34, -162.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -8.81<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -38.94<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -86.16<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -131.34<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -162.61<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.40999999999999998, -10, -51.920000000000002, -127.25, -212.44, -275.99000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -51.92<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -127.25<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -212.44<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -275.99<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.55000000000000004, -9.3000000000000007, -42.460000000000001, -96.769999999999996, -159.78, -209.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -9.30<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -42.46<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -96.77<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -159.78<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -209.89<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.41999999999999998, -8.2799999999999994, -39.119999999999997, -88.379999999999995, -143.30000000000001, -183.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:   -8.28<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -39.12<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -88.38<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: -143.30<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: -183.75<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [0, -0.41999999999999998, -7.9900000000000002, -37.060000000000002, -79.25, -116.79000000000001, -140.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:   -7.99<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -37.06<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -79.25<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: -116.79<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: -140.31<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.39000000000000001, -8.3800000000000008, -42.200000000000003, -102.04000000000001, -174.11000000000001, -231.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:   -8.38<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -42.20<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: -102.04<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: -174.11<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: -231.94<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.44, -8.6799999999999997, -40.100000000000001, -90.609999999999999, -146.66, -187.84999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.68<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -40.10<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -90.61<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: -146.66<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: -187.85<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.34999999999999998, -5.25, -21.899999999999999, -49.57, -79.299999999999997, -105.73999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -5.25<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -21.90<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -49.57<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -79.30<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: -105.74<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [0, -0.34999999999999998, -5.7000000000000002, -22.129999999999999, -46.460000000000001, -69.129999999999995, -86.969999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.70<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -22.13<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -46.46<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -69.13<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -86.97<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.25, -4.1200000000000001, -20.079999999999998, -49.289999999999999, -81.930000000000007, -109.11],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.12<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -20.08<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -49.29<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -81.93<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: -109.11<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.35999999999999999, -5.4900000000000002, -22.68, -50.460000000000001, -80.939999999999998, -108.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.36<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -5.49<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -22.68<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -50.46<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -80.94<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: -108.07<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.33000000000000002, -6.2300000000000004, -28.629999999999999, -63.950000000000003, -97.319999999999993, -119.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -6.23<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -28.63<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -63.95<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -97.32<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value: -119.25<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [0, -0.46000000000000002, -6.8600000000000003, -28.190000000000001, -61.200000000000003, -92.370000000000005, -112.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.86<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -28.19<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -61.20<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -92.37<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value: -112.94<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.40000000000000002, -6.71, -39.109999999999999, -91.909999999999997, -131.69999999999999, -148.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -6.71<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -39.11<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -91.91<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value: -131.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: -148.31<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.33000000000000002, -6.5099999999999998, -29.93, -66.540000000000006, -100.23999999999999, -121.34],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.51<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -29.93<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -66.54<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value: -100.24<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value: -121.34<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.40999999999999998, -7.8799999999999999, -36.939999999999998, -83.349999999999994, -135.86000000000001, -176.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:   -7.88<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -36.94<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -83.35<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: -135.86<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: -176.36<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [0, -0.42999999999999999, -7.9299999999999997, -36.310000000000002, -78.5, -117.86, -142.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -7.93<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -36.31<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -78.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -117.86<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -142.89<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.39000000000000001, -8.5299999999999994, -43.359999999999999, -104.77, -177.93000000000001, -238.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -8.53<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -43.36<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -104.77<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -177.93<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -238.20<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.34999999999999998, -7.3499999999999996, -35.880000000000003, -82.540000000000006, -135.5, -176.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -7.35<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -35.88<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -82.54<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -135.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -176.24<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.81999999999999995, -14.1, -66, -146.74000000000001, -230.47, -285.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -0.82<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -14.10<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -66.00<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2040<br />value: -146.74<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2045<br />value: -230.47<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2050<br />value: -285.93<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12"],
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
      "y": [0, -0.78000000000000003, -13.789999999999999, -63.399999999999999, -129.72999999999999, -173.24000000000001, -198],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -13.79<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -63.40<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: -129.73<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: -173.24<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: -198.00<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [0, -0.68000000000000005, -13.77, -76.189999999999998, -181.47, -293.56999999999999, -368.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -13.77<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -76.19<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: -181.47<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: -293.57<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: -368.24<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [0, -0.78000000000000003, -13.630000000000001, -63.520000000000003, -140.88, -220.50999999999999, -272.64999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -13.63<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:  -63.52<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: -140.88<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: -220.51<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: -272.65<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [0, -0.59999999999999998, -9.4800000000000004, -40.009999999999998, -87.379999999999995, -142.94, -201.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -0.60<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2030<br />value:   -9.48<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -40.01<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2040<br />value:  -87.38<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2045<br />value: -142.94<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2050<br />value: -201.40<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20"],
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
      "y": [0, -0.54000000000000004, -9, -34.299999999999997, -72.489999999999995, -113.97, -152.91999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:   -9.00<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -34.30<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -72.49<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: -113.97<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: -152.92<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [0, -0.47999999999999998, -8.5600000000000005, -40.640000000000001, -97, -167.33000000000001, -239.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -0.48<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:   -8.56<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -40.64<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:  -97.00<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: -167.33<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: -239.17<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [0, -0.62, -9.5099999999999998, -40.439999999999998, -88.290000000000006, -144.22, -202.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:   -9.51<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -40.44<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:  -88.29<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: -144.22<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: -202.88<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [0, -0.54000000000000004, -8.5999999999999996, -37.829999999999998, -85.400000000000006, -123.3, -138.81],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -8.60<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -37.83<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -85.40<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2045<br />value: -123.30<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -138.81<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4"],
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
      "y": [0, -0.55000000000000004, -8.8599999999999994, -37.210000000000001, -81.280000000000001, -114, -127.95],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -8.86<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -37.21<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -81.28<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value: -114.00<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value: -127.95<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [0, -0.23999999999999999, -5.9100000000000001, -43.090000000000003, -107.43000000000001, -154.25, -158.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -5.91<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -43.09<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: -107.43<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -154.25<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -158.73<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [0, -0.53000000000000003, -8.4900000000000002, -38.369999999999997, -86.450000000000003, -124.25, -138.77000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -8.49<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -38.37<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -86.45<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: -124.25<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -138.77<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [0, -0.75, -12.380000000000001, -57.07, -130.47, -211, -270.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -12.38<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -57.07<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: -130.47<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: -211.00<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: -270.74<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5"],
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
      "y": [0, -0.81000000000000005, -12.34, -54.490000000000002, -117.62, -166.09, -190.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -0.81<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -12.34<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -54.49<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: -117.62<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: -166.09<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: -190.19<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [0, -0.53000000000000003, -11.81, -66.069999999999993, -159.52000000000001, -253.84, -316.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -11.81<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -66.07<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: -159.52<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: -253.84<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: -316.05<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [0, -0.76000000000000001, -12.42, -56.869999999999997, -130.09999999999999, -211.38999999999999, -271.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -12.42<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -56.87<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: -130.10<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: -211.39<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: -271.88<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [0, -0.68000000000000005, -12.960000000000001, -59.390000000000001, -133, -211.46000000000001, -264.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -12.96<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -59.39<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: -133.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: -211.46<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: -264.37<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [0, -0.68000000000000005, -12.99, -58.509999999999998, -120.89, -163.83000000000001, -190.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -12.99<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -58.51<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: -120.89<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: -163.83<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: -190.45<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [0, -0.59999999999999998, -12.85, -68.950000000000003, -165.15000000000001, -271.97000000000003, -346.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -0.60<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -12.85<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -68.95<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: -165.15<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: -271.97<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: -346.61<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [0, -0.67000000000000004, -12.77, -58.579999999999998, -131.16999999999999, -208.88, -261.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -12.77<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -58.58<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: -131.17<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: -208.88<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: -261.24<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [0, -0.56999999999999995, -8.1600000000000001, -33.469999999999999, -74.909999999999997, -125.39, -175.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -0.57<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:   -8.16<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -33.47<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -74.91<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: -125.39<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: -175.64<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [0, -0.45000000000000001, -7.0599999999999996, -27.239999999999998, -59.649999999999999, -97.370000000000005, -133.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:   -7.06<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -27.24<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -59.65<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:  -97.37<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: -133.90<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [0, -0.42999999999999999, -7.25, -33.619999999999997, -81.849999999999994, -145.28, -210.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:   -7.25<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -33.62<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -81.85<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: -145.28<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: -210.76<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [0, -0.56999999999999995, -8.1999999999999993, -34.75, -77.769999999999996, -129.80000000000001, -182.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.57<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.20<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -34.75<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:  -77.77<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: -129.80<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: -182.13<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [0, -0.48999999999999999, -8.8399999999999999, -38.240000000000002, -85.480000000000004, -121.70999999999999, -137.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -8.84<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -38.24<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -85.48<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: -121.71<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -137.88<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [0, -0.51000000000000001, -8.4299999999999997, -35.539999999999999, -79.189999999999998, -112.51000000000001, -128.81],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -8.43<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -35.54<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -79.19<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value: -112.51<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value: -128.81<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [0, -0.26000000000000001, -6.4400000000000004, -41.219999999999999, -103.16, -145.62, -152.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -0.26<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -6.44<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -41.22<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: -103.16<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -145.62<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -152.49<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [0, -0.56000000000000005, -8.8900000000000006, -36.68, -82.760000000000005, -120.19, -138.69],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.89<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -36.68<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -82.76<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value: -120.19<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -138.69<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [0, -0.69999999999999996, -11.859999999999999, -52.899999999999999, -122.06, -200.25999999999999, -260.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -11.86<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -52.90<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: -122.06<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: -200.26<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: -260.24<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [0, -0.76000000000000001, -11.76, -51.219999999999999, -111.66, -161.46000000000001, -187.97999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -11.76<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -51.22<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: -111.66<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: -161.46<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: -187.98<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.52000000000000002, -11.460000000000001, -62.539999999999999, -153.22999999999999, -247.31999999999999, -310.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.46<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -62.54<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: -153.23<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: -247.32<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: -310.64<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.69999999999999996, -11.75, -52.210000000000001, -120.27, -197.84999999999999, -258.22000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -11.75<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -52.21<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: -120.27<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: -197.85<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: -258.22<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.5, -9.4399999999999995, -41.869999999999997, -94.739999999999995, -155.75999999999999, -201.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -0.50<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:   -9.44<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -41.87<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value:  -94.74<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: -155.76<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: -201.29<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [0, -0.45000000000000001, -9.8000000000000007, -42.649999999999999, -91.609999999999999, -134.12, -161.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:   -9.80<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -42.65<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value:  -91.61<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: -134.12<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: -161.79<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.40999999999999998, -9.9800000000000004, -51.560000000000002, -125.55, -212.21000000000001, -274.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:   -9.98<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -51.56<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: -125.55<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: -212.21<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: -274.64<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.48999999999999999, -9.75, -44.840000000000003, -102.22, -167.87, -216.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.75<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -44.84<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: -102.22<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: -167.87<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: -216.35<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.35999999999999999, -5.5099999999999998, -23.210000000000001, -52.439999999999998, -85.129999999999995, -114.55],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -0.36<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -5.51<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -23.21<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -52.44<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -85.13<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: -114.55<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [0, -0.34000000000000002, -4.9299999999999997, -19.670000000000002, -44.090000000000003, -71.469999999999999, -96.010000000000005],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -4.93<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -19.67<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -44.09<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -71.47<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value:  -96.01<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.25, -4.0700000000000003, -20.059999999999999, -51.079999999999998, -88.519999999999996, -120.78],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -4.07<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -20.06<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -51.08<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value:  -88.52<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: -120.78<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -5.4199999999999999, -22.620000000000001, -50.560000000000002, -80.939999999999998, -106.56],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -5.42<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -22.62<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -50.56<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -80.94<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: -106.56<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.42999999999999999, -7.46, -31.739999999999998, -69.230000000000004, -102.48, -123.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -7.46<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -31.74<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -69.23<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value: -102.48<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value: -123.60<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [0, -0.48999999999999999, -7.21, -28.890000000000001, -63.030000000000001, -94.680000000000007, -114.27],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.21<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -28.89<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -63.03<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -94.68<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value: -114.27<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.44, -6.9500000000000002, -40.960000000000001, -100.08, -138.91999999999999, -145.27000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.95<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -40.96<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value: -100.08<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: -138.92<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -145.27<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.42999999999999999, -7.1500000000000004, -31.109999999999999, -68.319999999999993, -101.91, -123.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.15<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -31.11<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -68.32<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value: -101.91<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: -123.41<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.53000000000000003, -9.7200000000000006, -42.039999999999999, -95.75, -158.41, -208.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:   -9.72<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -42.04<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value:  -95.75<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: -158.41<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: -208.73<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [0, -0.46000000000000002, -9.7200000000000006, -40.890000000000001, -90.469999999999999, -137.38999999999999, -168.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -9.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -40.89<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -90.47<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -137.39<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -168.55<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.39000000000000001, -9.75, -51.829999999999998, -127.48, -213.30000000000001, -277.14999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -9.75<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -51.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -127.48<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -213.30<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -277.15<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.52000000000000002, -9.7599999999999998, -42.5, -98, -162.41999999999999, -214.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -9.76<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -42.50<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -98.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -162.42<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -214.12<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.40999999999999998, -8.1799999999999997, -39.719999999999999, -90.569999999999993, -147.15000000000001, -188.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:   -8.18<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -39.72<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -90.57<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: -147.15<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: -188.73<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [0, -0.40999999999999998, -7.9800000000000004, -36.420000000000002, -77.359999999999999, -113.25, -135.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:   -7.98<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -36.42<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -77.36<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.25<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: -135.73<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.40000000000000002, -8.6600000000000001, -44.200000000000003, -107.29000000000001, -182.50999999999999, -242.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:   -8.66<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -44.20<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: -107.29<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: -182.51<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: -242.11<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.40000000000000002, -8.8499999999999996, -40.549999999999997, -91.540000000000006, -147.72999999999999, -188.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.85<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -40.55<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -91.54<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: -147.73<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: -188.60<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.33000000000000002, -5.0300000000000002, -21.210000000000001, -48.719999999999999, -78.390000000000001, -104.72],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.33<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -5.03<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -21.21<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -48.72<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -78.39<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value: -104.72<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [0, -0.34000000000000002, -4.7999999999999998, -19.420000000000002, -43.490000000000002, -67.829999999999998, -87.930000000000007],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -4.80<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -19.42<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -43.49<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -67.83<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -87.93<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.25, -4.1900000000000004, -20.399999999999999, -50.200000000000003, -83.609999999999999, -111.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.19<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -20.40<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -50.20<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -83.61<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: -111.50<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -4.8700000000000001, -20.440000000000001, -46.439999999999998, -75.840000000000003, -102.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -4.87<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -20.44<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -46.44<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -75.84<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: -102.53<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.34000000000000002, -6, -27.27, -61.280000000000001, -94.890000000000001, -118.22],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -6.00<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -27.27<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -61.28<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -94.89<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value: -118.22<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [0, -0.44, -6.8899999999999997, -27.68, -60.439999999999998, -91.579999999999998, -111.77],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.89<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -27.68<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -60.44<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -91.58<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value: -111.77<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.38, -6.4699999999999998, -37.590000000000003, -89.519999999999996, -129.88, -147.33000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -6.47<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -37.59<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -89.52<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value: -129.88<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: -147.33<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.34999999999999998, -6.1100000000000003, -27.879999999999999, -62, -94.739999999999995, -116.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.11<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -27.88<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -62.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -94.74<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value: -116.32<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.38, -7.6799999999999997, -36.950000000000003, -84.329999999999998, -138.06, -179.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:   -7.68<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -36.95<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -84.33<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: -138.06<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: -179.32<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [0, -0.46000000000000002, -9.1999999999999993, -38.200000000000003, -82.620000000000005, -123.94, -149.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -9.20<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -38.20<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -82.62<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -123.94<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -149.26<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.38, -8.5800000000000001, -44.469999999999999, -107.88, -182.78999999999999, -244.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -8.58<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -44.47<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -107.88<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -182.79<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -244.16<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.38, -8.0399999999999991, -37.399999999999999, -84.989999999999995, -138.56999999999999, -179.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.04<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -37.40<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -84.99<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -138.57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -179.45<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.70999999999999996, -11.859999999999999, -67.859999999999999, -152.96000000000001, -236.94, -286.79000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -0.71<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -11.86<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -67.86<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2040<br />value: -152.96<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2045<br />value: -236.94<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2050<br />value: -286.79<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12"],
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
      "y": [0, -0.68999999999999995, -12.17, -64.310000000000002, -132.78, -175.84999999999999, -197],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -12.17<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -64.31<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: -132.78<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: -175.85<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: -197.00<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [0, -0.56999999999999995, -12.17, -78.989999999999995, -190.38999999999999, -303.72000000000003, -372.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -0.57<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -12.17<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:  -78.99<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: -190.39<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: -303.72<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: -372.07<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [0, -0.64000000000000001, -11.210000000000001, -67.140000000000001, -151.84999999999999, -234.5, -282.29000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -11.21<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:  -67.14<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: -151.85<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: -234.50<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: -282.29<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [0, -0.54000000000000004, -8.2400000000000002, -42.200000000000003, -92.349999999999994, -150.13999999999999, -204.46000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2030<br />value:   -8.24<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -42.20<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2040<br />value:  -92.35<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2045<br />value: -150.14<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2050<br />value: -204.46<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20"],
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
      "y": [0, -0.46000000000000002, -7.8300000000000001, -35.520000000000003, -75.269999999999996, -116.61, -149.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:   -7.83<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -35.52<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -75.27<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: -116.61<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: -149.01<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [0, -0.42999999999999999, -7.7300000000000004, -44.039999999999999, -103.52, -175.68000000000001, -240.59],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:   -7.73<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -44.04<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: -103.52<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: -175.68<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: -240.59<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [0, -0.55000000000000004, -8.2400000000000002, -43.060000000000002, -93.439999999999998, -151, -204.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:   -8.24<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -43.06<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:  -93.44<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: -151.00<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: -204.24<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [0, -0.46999999999999997, -6.7199999999999998, -39.219999999999999, -91.260000000000005, -129.90000000000001, -140.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -6.72<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -39.22<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -91.26<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2045<br />value: -129.90<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -140.90<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4"],
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
      "y": [0, -0.41999999999999998, -6.79, -35.799999999999997, -81.480000000000004, -115.31, -129.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -6.79<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -35.80<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -81.48<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value: -115.31<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value: -129.84<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [0, -0.17999999999999999, -4.7699999999999996, -46.07, -115.18000000000001, -160.50999999999999, -160.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -0.18<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -4.77<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -46.07<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: -115.18<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -160.51<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -160.60<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [0, -0.40999999999999998, -6.8099999999999996, -39.530000000000001, -93.299999999999997, -131.93000000000001, -143.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -6.81<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -39.53<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -93.30<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: -131.93<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -143.62<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [0, -0.63, -10.15, -57, -132.90000000000001, -213.90000000000001, -270.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -10.15<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -57.00<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: -132.90<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: -213.90<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: -270.20<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5"],
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
      "y": [0, -0.67000000000000004, -10.220000000000001, -54.700000000000003, -119.92, -169.5, -190.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -0.67<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:  -10.22<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -54.70<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: -119.92<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: -169.50<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: -190.29<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [0, -0.48999999999999999, -9.8900000000000006, -67.469999999999999, -166.44999999999999, -260.48000000000002, -317.69999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:   -9.89<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -67.47<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: -166.45<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: -260.48<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: -317.70<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [0, -0.63, -10.140000000000001, -57.600000000000001, -135.31999999999999, -217.13, -273.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:  -10.14<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -57.60<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: -135.32<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: -217.13<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: -273.38<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [0, -0.64000000000000001, -11.449999999999999, -63.460000000000001, -143.00999999999999, -221.88, -271.02999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -11.45<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -63.46<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: -143.01<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: -221.88<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: -271.03<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [0, -0.68999999999999995, -11.85, -62.340000000000003, -129.16999999999999, -171.59999999999999, -193.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -11.85<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -62.34<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: -129.17<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: -171.60<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: -193.89<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [0, -0.53000000000000003, -11.5, -74.329999999999998, -180.19999999999999, -290.12, -359.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -11.50<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:  -74.33<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: -180.20<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: -290.12<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: -359.50<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [0, -0.62, -11.140000000000001, -62.060000000000002, -139.56999999999999, -216.77000000000001, -265.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -11.14<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:  -62.06<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: -139.57<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: -216.77<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: -265.14<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [0, -0.55000000000000004, -7.8899999999999997, -38.600000000000001, -84.659999999999997, -137.22999999999999, -184.09999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:   -7.89<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -38.60<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:  -84.66<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: -137.23<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: -184.10<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [0, -0.52000000000000002, -8.4399999999999995, -34.43, -71.930000000000007, -112.54000000000001, -146.84999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:   -8.44<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -34.43<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -71.93<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: -112.54<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: -146.85<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [0, -0.44, -7.3600000000000003, -41.740000000000002, -99, -169.12, -233.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:   -7.36<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -41.74<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:  -99.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: -169.12<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: -233.64<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [0, -0.58999999999999997, -7.9299999999999997, -39.590000000000003, -87, -141.05000000000001, -190.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:   -7.93<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -39.59<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:  -87.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: -141.05<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: -190.37<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [0, -0.44, -6.8700000000000001, -36.619999999999997, -84.790000000000006, -121.91, -137.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -6.87<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -36.62<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -84.79<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: -121.91<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -137.12<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [0, -0.45000000000000001, -7.0700000000000003, -36.689999999999998, -82.799999999999997, -115.90000000000001, -129.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -7.07<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -36.69<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -82.80<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value: -115.90<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value: -129.40<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [0, -0.22, -5.3799999999999999, -46.700000000000003, -116.88, -160.11000000000001, -160.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -0.22<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -5.38<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -46.70<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: -116.88<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -160.11<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -160.68<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [0, -0.46999999999999997, -6.9900000000000002, -38.270000000000003, -88.069999999999993, -124.78, -139.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -6.99<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -38.27<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -88.07<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: -124.78<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -139.66<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [0, -0.63, -9.9900000000000002, -54.649999999999999, -127.45, -205.53999999999999, -263.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:   -9.99<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -54.65<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: -127.45<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: -205.54<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: -263.01<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [0, -0.68000000000000005, -10.09, -53.020000000000003, -116.63, -166.31999999999999, -188.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -10.09<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -53.02<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: -116.63<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: -166.32<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: -188.64<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.46000000000000002, -9.9100000000000001, -66.370000000000005, -163.69999999999999, -257.13999999999999, -315.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:   -9.91<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -66.37<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: -163.70<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: -257.14<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: -315.82<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.62, -9.8399999999999999, -53.310000000000002, -125.23999999999999, -204.30000000000001, -260.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -9.84<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -53.31<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: -125.24<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: -204.30<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: -260.82<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.52000000000000002, -10.16, -45.18, -101.36, -164.37, -209.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -10.16<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -45.18<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: -101.36<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: -164.37<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: -209.57<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [0, -0.56999999999999995, -11.19, -48.469999999999999, -101.79000000000001, -144.91, -170.91999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.57<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -11.19<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -48.47<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: -101.79<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: -144.91<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: -170.92<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.42999999999999999, -10.23, -53.880000000000003, -129.12, -212.90000000000001, -272.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -10.23<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -53.88<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: -129.12<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: -212.90<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: -272.93<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.56000000000000005, -10.210000000000001, -46.740000000000002, -104.48999999999999, -168.28, -213.77000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -10.21<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -46.74<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: -104.49<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: -168.28<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: -213.77<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.41999999999999998, -6.5899999999999999, -25.350000000000001, -55.130000000000003, -90.620000000000005, -122.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -6.59<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -25.35<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -55.13<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:  -90.62<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: -122.25<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [0, -0.34999999999999998, -6.0099999999999998, -22.23, -47.469999999999999, -76.189999999999998, -98.659999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.01<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -22.23<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -47.47<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -76.19<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value:  -98.66<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.26000000000000001, -5.29, -23.359999999999999, -55.670000000000002, -96.549999999999997, -133],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.26<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:   -5.29<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -23.36<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -55.67<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value:  -96.55<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: -133.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.40999999999999998, -6.29, -25.52, -56.009999999999998, -90.840000000000003, -119.36],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -6.29<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -25.52<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -56.01<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -90.84<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: -119.36<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.46000000000000002, -7.4699999999999998, -32.359999999999999, -70.599999999999994, -105.65000000000001, -126.52],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -7.47<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -32.36<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -70.60<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value: -105.65<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value: -126.52<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [0, -0.46999999999999997, -7.2400000000000002, -28.670000000000002, -63.520000000000003, -96.730000000000004, -116.02],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.24<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -28.67<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -63.52<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -96.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value: -116.02<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.42999999999999999, -7.0599999999999996, -41.82, -103.36, -146.18000000000001, -153.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.06<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -41.82<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value: -103.36<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: -146.18<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -153.75<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.5, -7.9699999999999998, -33.649999999999999, -72.290000000000006, -106.27, -125.48999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.50<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.97<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -33.65<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -72.29<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value: -106.27<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: -125.49<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.52000000000000002, -9.1400000000000006, -42.880000000000003, -99.75, -165.81999999999999, -217.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:   -9.14<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -42.88<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value:  -99.75<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: -165.82<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: -217.03<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [0, -0.52000000000000002, -10.08, -41.310000000000002, -92.010000000000005, -139.78999999999999, -169.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -10.08<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -41.31<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -92.01<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -139.79<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -169.93<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.41999999999999998, -8.8800000000000008, -53.030000000000001, -131.18000000000001, -218.13, -280.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -8.88<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -53.03<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -131.18<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -218.13<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -280.20<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.57999999999999996, -9.9199999999999999, -43.520000000000003, -100.19, -165.31999999999999, -216.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.58<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -9.92<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -43.52<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -100.19<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -165.32<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -216.44<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.44, -9.2300000000000004, -40.380000000000003, -90.280000000000001, -145.49000000000001, -185.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:   -9.23<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -40.38<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -90.28<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: -145.49<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: -185.05<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [0, -0.40999999999999998, -8.0700000000000003, -36.530000000000001, -77.549999999999997, -113.56, -136.09999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:   -8.07<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -36.53<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -77.55<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.56<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: -136.10<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.39000000000000001, -8.5399999999999991, -43.399999999999999, -105.13, -178.97999999999999, -239.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:   -8.54<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -43.40<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: -105.13<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: -178.98<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: -239.02<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.41999999999999998, -8.9800000000000004, -40.119999999999997, -90.180000000000007, -145.21000000000001, -185.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.98<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -40.12<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -90.18<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: -145.21<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: -185.21<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.37, -6.4299999999999997, -24.210000000000001, -51.090000000000003, -79.390000000000001, -103.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -6.43<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -24.21<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -51.09<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -79.39<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: -103.40<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [0, -0.34999999999999998, -5.9900000000000002, -21.890000000000001, -45.109999999999999, -69.469999999999999, -89.840000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.99<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -21.89<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -45.11<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -69.47<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -89.84<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.25, -4.7599999999999998, -21.420000000000002, -49.350000000000001, -80.049999999999997, -104.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.76<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -21.42<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -49.35<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -80.05<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: -104.60<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -6.4900000000000002, -24.84, -52.590000000000003, -82.109999999999999, -107.39],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -6.49<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -24.84<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -52.59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -82.11<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: -107.39<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.37, -6.5499999999999998, -28.16, -62.390000000000001, -95.379999999999995, -116.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -6.55<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -28.16<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -62.39<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -95.38<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value: -116.60<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [0, -0.48999999999999999, -7.3399999999999999, -28.829999999999998, -61.060000000000002, -89.120000000000005, -105],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -7.34<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -28.83<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -61.06<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -89.12<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value: -105.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.40000000000000002, -6.7999999999999998, -39.090000000000003, -91.980000000000004, -132.34, -149.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -6.80<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -39.09<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -91.98<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value: -132.34<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: -149.07<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.37, -7.4000000000000004, -31.27, -67.700000000000003, -99.879999999999995, -118.76000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -7.40<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -31.27<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -67.70<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -99.88<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value: -118.76<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.39000000000000001, -8.7300000000000004, -38.399999999999999, -87.060000000000002, -142.19, -183.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -0.39<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:   -8.73<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -38.40<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -87.06<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: -142.19<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: -183.39<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [0, -0.45000000000000001, -8.9600000000000009, -37.75, -81.909999999999997, -123.22, -148.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -8.96<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -37.75<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -81.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -123.22<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -148.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.39000000000000001, -8.7400000000000002, -45.600000000000001, -110.81999999999999, -187.68000000000001, -249.33000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -8.74<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -45.60<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -110.82<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -187.68<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -249.33<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.40000000000000002, -8.9299999999999997, -39.25, -88.909999999999997, -144.56999999999999, -186.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.93<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -39.25<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -88.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -144.57<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -186.90<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.72999999999999998, -13.18, -60.130000000000003, -135.06999999999999, -215.96000000000001, -272.51999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -13.18<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -60.13<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2040<br />value: -135.07<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2045<br />value: -215.96<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2050<br />value: -272.52<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12"],
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
      "y": [0, -0.68999999999999995, -13.24, -59.729999999999997, -124.20999999999999, -168.87, -197.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -13.24<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -59.73<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: -124.21<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: -168.87<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: -197.14<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [0, -0.60999999999999999, -12.92, -69.569999999999993, -167.00999999999999, -274.24000000000001, -349.86000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -12.92<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -69.57<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: -167.01<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: -274.24<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: -349.86<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [0, -0.79000000000000004, -13.42, -61.829999999999998, -139.08000000000001, -223.59, -283.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -0.79<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -13.42<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -61.83<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: -139.08<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: -223.59<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: -283.44<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [0, -0.56999999999999995, -8.5500000000000007, -34.630000000000003, -78.450000000000003, -133.25999999999999, -192.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2030<br />value:   -8.55<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -34.63<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -78.45<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2045<br />value: -133.26<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2050<br />value: -192.66<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20"],
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
      "y": [0, -0.54000000000000004, -8.3300000000000001, -30.5, -65.879999999999995, -105.2, -143.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:   -8.33<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -30.50<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -65.88<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value: -105.20<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: -143.58<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [0, -0.42999999999999999, -7.9699999999999998, -37.789999999999999, -92.489999999999995, -163.28, -237.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:   -7.97<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -37.79<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:  -92.49<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: -163.28<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: -237.45<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [0, -0.58999999999999997, -8.5500000000000007, -36.890000000000001, -83.030000000000001, -139.69, -201.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:   -8.55<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -36.89<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:  -83.03<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: -139.69<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: -201.08<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [0, -0.54000000000000004, -8.1500000000000004, -36.350000000000001, -82.810000000000002, -120.38, -137.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -8.15<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -36.35<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -82.81<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2045<br />value: -120.38<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -137.11<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4"],
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
      "y": [0, -0.51000000000000001, -7.9500000000000002, -36.530000000000001, -80.599999999999994, -110.89, -125.01000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -7.95<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -36.53<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -80.60<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value: -110.89<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value: -125.01<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [0, -0.26000000000000001, -6.1799999999999997, -42.950000000000003, -107.22, -152, -154.83000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -0.26<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -6.18<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -42.95<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: -107.22<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -152.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -154.83<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [0, -0.56000000000000005, -8.5800000000000001, -37.770000000000003, -86.170000000000002, -124.11, -140.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -8.58<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -37.77<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -86.17<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: -124.11<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -140.62<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [0, -0.69999999999999996, -11.69, -52.850000000000001, -122.65000000000001, -201.83000000000001, -262.91000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -11.69<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -52.85<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: -122.65<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: -201.83<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: -262.91<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5"],
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
      "y": [0, -0.75, -11.68, -50.600000000000001, -111.15000000000001, -160.22999999999999, -187.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -11.68<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -50.60<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: -111.15<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: -160.23<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: -187.26<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [0, -0.52000000000000002, -11.640000000000001, -65.299999999999997, -158.55000000000001, -252.84999999999999, -317.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -11.64<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -65.30<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: -158.55<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: -252.85<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: -317.31<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [0, -0.69999999999999996, -11.75, -54.549999999999997, -126.97, -207.11000000000001, -268.92000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:  -11.75<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -54.55<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: -126.97<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: -207.11<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: -268.92<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [0, -0.70999999999999996, -12.81, -57.109999999999999, -128.53999999999999, -206.44, -260.58999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -12.81<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -57.11<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: -128.54<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: -206.44<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: -260.59<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [0, -0.66000000000000003, -12.81, -55.880000000000003, -117.09, -161.99000000000001, -191.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -12.81<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -55.88<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: -117.09<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: -161.99<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: -191.87<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [0, -0.56999999999999995, -12.220000000000001, -64.040000000000006, -154.52000000000001, -257.92000000000002, -332.85000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -12.22<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -64.04<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: -154.52<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: -257.92<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: -332.85<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [0, -0.67000000000000004, -12.800000000000001, -57.530000000000001, -129.80000000000001, -208.44999999999999, -262.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -12.80<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -57.53<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: -129.80<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: -208.45<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: -262.82<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [0, -0.55000000000000004, -8.0099999999999998, -32.439999999999998, -72.409999999999997, -121.31, -170.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:   -8.01<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -32.44<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -72.41<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: -121.31<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: -170.50<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [0, -0.44, -7.0199999999999996, -26.309999999999999, -57.240000000000002, -93.700000000000003, -128.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:   -7.02<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -26.31<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -57.24<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -93.70<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: -128.74<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [0, -0.45000000000000001, -7.5499999999999998, -32.789999999999999, -79.799999999999997, -142.41, -206.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -0.45<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:   -7.55<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -32.79<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -79.80<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: -142.41<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: -206.02<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [0, -0.56000000000000005, -8.0099999999999998, -31.960000000000001, -71.379999999999995, -120.45999999999999, -170.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.01<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -31.96<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:  -71.38<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: -120.46<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: -170.55<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [0, -0.51000000000000001, -8.5700000000000003, -36.079999999999998, -80.739999999999995, -115.7, -133.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -8.57<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -36.08<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -80.74<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value: -115.70<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -133.49<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [0, -0.51000000000000001, -8.7899999999999991, -38.210000000000001, -83.560000000000002, -112.93000000000001, -123.79000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -8.79<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -38.21<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -83.56<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value: -112.93<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value: -123.79<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [0, -0.34999999999999998, -7.1900000000000004, -43.729999999999997, -107.48999999999999, -146.88999999999999, -151.97],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -7.19<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -43.73<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: -107.49<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -146.89<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -151.97<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [0, -0.47999999999999998, -8.5600000000000005, -36.43, -81.299999999999997, -116.19, -133.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.48<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.56<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -36.43<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -81.30<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: -116.19<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -133.25<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [0, -0.66000000000000003, -11.779999999999999, -51.68, -119.05, -195.78999999999999, -256.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -11.78<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -51.68<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: -119.05<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: -195.79<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: -256.88<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [0, -0.68999999999999995, -11.720000000000001, -49.969999999999999, -108.98999999999999, -159.52000000000001, -190.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -11.72<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -49.97<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: -108.99<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: -159.52<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: -190.45<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.54000000000000004, -11.34, -61.259999999999998, -151.19999999999999, -245.47, -309.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.34<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -61.26<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: -151.20<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: -245.47<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: -309.38<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.73999999999999999, -12.119999999999999, -52.659999999999997, -120.86, -197.99000000000001, -257.92000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -12.12<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -52.66<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: -120.86<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: -197.99<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: -257.92<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.46999999999999997, -9.4700000000000006, -43.82, -100.16, -165.30000000000001, -213.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:   -9.47<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -43.82<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: -100.16<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: -165.30<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: -213.37<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [0, -0.42999999999999999, -9.3300000000000001, -41.829999999999998, -90.640000000000001, -133.59, -161.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:   -9.33<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -41.83<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:  -90.64<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: -133.59<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: -161.87<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.40999999999999998, -9.7599999999999998, -50.549999999999997, -123.02, -207.83000000000001, -269.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:   -9.76<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -50.55<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: -123.02<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: -207.83<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: -269.94<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.46000000000000002, -9.2699999999999996, -43.359999999999999, -99.280000000000001, -163.74000000000001, -211.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.27<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -43.36<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -99.28<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: -163.74<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: -211.44<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.33000000000000002, -4.7400000000000002, -20.23, -46.939999999999998, -77.650000000000006, -104.56],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -4.74<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -20.23<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -46.94<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -77.65<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: -104.56<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [0, -0.32000000000000001, -4.4800000000000004, -19.109999999999999, -43.630000000000003, -69.849999999999994, -90.390000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.32<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -4.48<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -19.11<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -43.63<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -69.85<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value:  -90.39<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.23999999999999999, -3.8799999999999999, -19.260000000000002, -49.950000000000003, -87.379999999999995, -120.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -3.88<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -19.26<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -49.95<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -87.38<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: -120.91<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -5.2000000000000002, -23.23, -54.049999999999997, -88.310000000000002, -119.45999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -5.20<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -23.23<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -54.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -88.31<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: -119.46<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.38, -6.8899999999999997, -30.539999999999999, -67.040000000000006, -99.450000000000003, -119.76000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -0.38<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -6.89<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -30.54<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -67.04<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -99.45<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value: -119.76<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [0, -0.47999999999999998, -6.8600000000000003, -27.870000000000001, -61.450000000000003, -93.689999999999998, -114.2],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.48<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -6.86<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -27.87<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -61.45<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -93.69<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value: -114.20<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.46999999999999997, -7.21, -42.170000000000002, -102.27, -142.86000000000001, -151.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.21<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -42.17<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value: -102.27<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: -142.86<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -151.68<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.40000000000000002, -6.96, -30.809999999999999, -67.939999999999998, -101.31999999999999, -122.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -6.96<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -30.81<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -67.94<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value: -101.32<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: -122.06<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.46999999999999997, -9, -41.409999999999997, -94.530000000000001, -156.44, -206.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -0.47<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:   -9.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -41.41<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:  -94.53<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: -156.44<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: -206.08<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [0, -0.42999999999999999, -8.8100000000000005, -38.939999999999998, -86.159999999999997, -131.34, -162.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -8.81<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -38.94<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -86.16<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -131.34<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -162.61<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.40999999999999998, -10, -51.920000000000002, -127.25, -212.44, -275.99000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -10.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -51.92<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -127.25<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -212.44<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -275.99<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.55000000000000004, -9.3000000000000007, -42.460000000000001, -96.769999999999996, -159.78, -209.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -9.30<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -42.46<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -96.77<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -159.78<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -209.89<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.41999999999999998, -8.2799999999999994, -39.119999999999997, -88.379999999999995, -143.30000000000001, -183.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:   -8.28<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -39.12<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -88.38<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: -143.30<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: -183.75<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [0, -0.41999999999999998, -7.9900000000000002, -37.060000000000002, -79.25, -116.79000000000001, -140.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:   -7.99<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -37.06<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -79.25<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: -116.79<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: -140.31<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.39000000000000001, -8.3800000000000008, -42.200000000000003, -102.04000000000001, -174.11000000000001, -231.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:   -8.38<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -42.20<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: -102.04<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: -174.11<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: -231.94<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.44, -8.6799999999999997, -40.100000000000001, -90.609999999999999, -146.66, -187.84999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.44<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.68<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -40.10<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -90.61<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: -146.66<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: -187.85<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.34999999999999998, -5.25, -21.899999999999999, -49.57, -79.299999999999997, -105.73999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -5.25<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -21.90<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -49.57<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -79.30<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: -105.74<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [0, -0.34999999999999998, -5.7000000000000002, -22.129999999999999, -46.460000000000001, -69.129999999999995, -86.969999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.70<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -22.13<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -46.46<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -69.13<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -86.97<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.25, -4.1200000000000001, -20.079999999999998, -49.289999999999999, -81.930000000000007, -109.11],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.12<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -20.08<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -49.29<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -81.93<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: -109.11<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.35999999999999999, -5.4900000000000002, -22.68, -50.460000000000001, -80.939999999999998, -108.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.36<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -5.49<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -22.68<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -50.46<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -80.94<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: -108.07<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.33000000000000002, -6.2300000000000004, -28.629999999999999, -63.950000000000003, -97.319999999999993, -119.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -6.23<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -28.63<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -63.95<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -97.32<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value: -119.25<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [0, -0.46000000000000002, -6.8600000000000003, -28.190000000000001, -61.200000000000003, -92.370000000000005, -112.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.86<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -28.19<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -61.20<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -92.37<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value: -112.94<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.40000000000000002, -6.71, -39.109999999999999, -91.909999999999997, -131.69999999999999, -148.31],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -6.71<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -39.11<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -91.91<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value: -131.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: -148.31<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.33000000000000002, -6.5099999999999998, -29.93, -66.540000000000006, -100.23999999999999, -121.34],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.33<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.51<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -29.93<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -66.54<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value: -100.24<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value: -121.34<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.40999999999999998, -7.8799999999999999, -36.939999999999998, -83.349999999999994, -135.86000000000001, -176.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -0.41<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:   -7.88<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -36.94<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -83.35<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: -135.86<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: -176.36<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [0, -0.42999999999999999, -7.9299999999999997, -36.310000000000002, -78.5, -117.86, -142.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -7.93<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -36.31<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -78.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -117.86<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -142.89<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.39000000000000001, -8.5299999999999994, -43.359999999999999, -104.77, -177.93000000000001, -238.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -8.53<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -43.36<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -104.77<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -177.93<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -238.20<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.34999999999999998, -7.3499999999999996, -35.880000000000003, -82.540000000000006, -135.5, -176.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -7.35<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -35.88<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -82.54<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -135.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -176.24<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.81999999999999995, -14.1, -66, -146.74000000000001, -230.47, -285.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -0.82<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -14.10<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -66.00<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2040<br />value: -146.74<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2045<br />value: -230.47<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2050<br />value: -285.93<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12"],
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
      "y": [0, -0.78000000000000003, -13.789999999999999, -63.399999999999999, -129.72999999999999, -173.24000000000001, -198],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -13.79<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -63.40<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: -129.73<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: -173.24<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: -198.00<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [0, -0.68000000000000005, -13.77, -76.189999999999998, -181.47, -293.56999999999999, -368.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -13.77<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -76.19<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: -181.47<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: -293.57<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: -368.24<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [0, -0.78000000000000003, -13.630000000000001, -63.520000000000003, -140.88, -220.50999999999999, -272.64999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -13.63<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:  -63.52<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: -140.88<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: -220.51<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: -272.65<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [0, -0.59999999999999998, -9.4800000000000004, -40.009999999999998, -87.379999999999995, -142.94, -201.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -0.60<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2030<br />value:   -9.48<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -40.01<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2040<br />value:  -87.38<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2045<br />value: -142.94<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2050<br />value: -201.40<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20"],
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
      "y": [0, -0.54000000000000004, -9, -34.299999999999997, -72.489999999999995, -113.97, -152.91999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:   -9.00<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -34.30<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -72.49<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: -113.97<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: -152.92<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [0, -0.47999999999999998, -8.5600000000000005, -40.640000000000001, -97, -167.33000000000001, -239.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -0.48<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:   -8.56<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -40.64<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:  -97.00<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: -167.33<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: -239.17<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [0, -0.62, -9.5099999999999998, -40.439999999999998, -88.290000000000006, -144.22, -202.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:   -9.51<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -40.44<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:  -88.29<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: -144.22<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: -202.88<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [0, -0.54000000000000004, -8.5999999999999996, -37.829999999999998, -85.400000000000006, -123.3, -138.81],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -0.54<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -8.60<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -37.83<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -85.40<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2045<br />value: -123.30<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -138.81<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4"],
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
      "y": [0, -0.55000000000000004, -8.8599999999999994, -37.210000000000001, -81.280000000000001, -114, -127.95],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -8.86<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -37.21<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -81.28<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value: -114.00<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value: -127.95<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [0, -0.23999999999999999, -5.9100000000000001, -43.090000000000003, -107.43000000000001, -154.25, -158.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -0.24<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -5.91<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -43.09<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: -107.43<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -154.25<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -158.73<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [0, -0.53000000000000003, -8.4900000000000002, -38.369999999999997, -86.450000000000003, -124.25, -138.77000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -8.49<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -38.37<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -86.45<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: -124.25<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -138.77<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [0, -0.75, -12.380000000000001, -57.07, -130.47, -211, -270.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -12.38<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -57.07<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: -130.47<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: -211.00<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: -270.74<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5"],
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
      "y": [0, -0.81000000000000005, -12.34, -54.490000000000002, -117.62, -166.09, -190.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -0.81<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -12.34<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -54.49<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: -117.62<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: -166.09<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: -190.19<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [0, -0.53000000000000003, -11.81, -66.069999999999993, -159.52000000000001, -253.84, -316.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -11.81<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -66.07<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: -159.52<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: -253.84<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: -316.05<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [0, -0.76000000000000001, -12.42, -56.869999999999997, -130.09999999999999, -211.38999999999999, -271.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -12.42<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -56.87<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: -130.10<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: -211.39<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: -271.88<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [0, -0.68000000000000005, -12.960000000000001, -59.390000000000001, -133, -211.46000000000001, -264.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -12.96<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -59.39<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: -133.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: -211.46<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: -264.37<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [0, -0.68000000000000005, -12.99, -58.509999999999998, -120.89, -163.83000000000001, -190.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -12.99<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -58.51<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: -120.89<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: -163.83<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: -190.45<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [0, -0.59999999999999998, -12.85, -68.950000000000003, -165.15000000000001, -271.97000000000003, -346.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -0.60<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -12.85<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -68.95<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: -165.15<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: -271.97<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: -346.61<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [0, -0.67000000000000004, -12.77, -58.579999999999998, -131.16999999999999, -208.88, -261.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.67<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -12.77<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -58.58<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: -131.17<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: -208.88<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: -261.24<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [0, -0.56999999999999995, -8.1600000000000001, -33.469999999999999, -74.909999999999997, -125.39, -175.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -0.57<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:   -8.16<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -33.47<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -74.91<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: -125.39<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: -175.64<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [0, -0.45000000000000001, -7.0599999999999996, -27.239999999999998, -59.649999999999999, -97.370000000000005, -133.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:   -7.06<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -27.24<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -59.65<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:  -97.37<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: -133.90<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [0, -0.42999999999999999, -7.25, -33.619999999999997, -81.849999999999994, -145.28, -210.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:   -7.25<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -33.62<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -81.85<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: -145.28<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: -210.76<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [0, -0.56999999999999995, -8.1999999999999993, -34.75, -77.769999999999996, -129.80000000000001, -182.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.57<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:   -8.20<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -34.75<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:  -77.77<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: -129.80<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: -182.13<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [0, -0.48999999999999999, -8.8399999999999999, -38.240000000000002, -85.480000000000004, -121.70999999999999, -137.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -8.84<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -38.24<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -85.48<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: -121.71<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -137.88<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [0, -0.51000000000000001, -8.4299999999999997, -35.539999999999999, -79.189999999999998, -112.51000000000001, -128.81],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -0.51<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -8.43<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -35.54<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -79.19<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value: -112.51<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value: -128.81<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [0, -0.26000000000000001, -6.4400000000000004, -41.219999999999999, -103.16, -145.62, -152.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -0.26<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -6.44<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -41.22<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: -103.16<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -145.62<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -152.49<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [0, -0.56000000000000005, -8.8900000000000006, -36.68, -82.760000000000005, -120.19, -138.69],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -8.89<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -36.68<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -82.76<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value: -120.19<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -138.69<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [0, -0.69999999999999996, -11.859999999999999, -52.899999999999999, -122.06, -200.25999999999999, -260.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -11.86<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -52.90<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: -122.06<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: -200.26<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: -260.24<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [0, -0.76000000000000001, -11.76, -51.219999999999999, -111.66, -161.46000000000001, -187.97999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -11.76<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -51.22<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: -111.66<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: -161.46<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: -187.98<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.52000000000000002, -11.460000000000001, -62.539999999999999, -153.22999999999999, -247.31999999999999, -310.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -11.46<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -62.54<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: -153.23<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: -247.32<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: -310.64<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.69999999999999996, -11.75, -52.210000000000001, -120.27, -197.84999999999999, -258.22000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -11.75<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -52.21<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: -120.27<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: -197.85<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: -258.22<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.5, -9.4399999999999995, -41.869999999999997, -94.739999999999995, -155.75999999999999, -201.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -0.50<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:   -9.44<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -41.87<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value:  -94.74<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: -155.76<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: -201.29<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [0, -0.45000000000000001, -9.8000000000000007, -42.649999999999999, -91.609999999999999, -134.12, -161.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:   -9.80<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -42.65<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value:  -91.61<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: -134.12<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: -161.79<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.40999999999999998, -9.9800000000000004, -51.560000000000002, -125.55, -212.21000000000001, -274.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:   -9.98<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -51.56<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: -125.55<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: -212.21<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: -274.64<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.48999999999999999, -9.75, -44.840000000000003, -102.22, -167.87, -216.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -9.75<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -44.84<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: -102.22<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: -167.87<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: -216.35<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.35999999999999999, -5.5099999999999998, -23.210000000000001, -52.439999999999998, -85.129999999999995, -114.55],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -0.36<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -5.51<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -23.21<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -52.44<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -85.13<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: -114.55<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [0, -0.34000000000000002, -4.9299999999999997, -19.670000000000002, -44.090000000000003, -71.469999999999999, -96.010000000000005],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -4.93<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -19.67<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -44.09<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -71.47<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value:  -96.01<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.25, -4.0700000000000003, -20.059999999999999, -51.079999999999998, -88.519999999999996, -120.78],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -4.07<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -20.06<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -51.08<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value:  -88.52<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: -120.78<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -5.4199999999999999, -22.620000000000001, -50.560000000000002, -80.939999999999998, -106.56],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -5.42<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -22.62<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -50.56<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -80.94<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: -106.56<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.42999999999999999, -7.46, -31.739999999999998, -69.230000000000004, -102.48, -123.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -7.46<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -31.74<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -69.23<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value: -102.48<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value: -123.60<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [0, -0.48999999999999999, -7.21, -28.890000000000001, -63.030000000000001, -94.680000000000007, -114.27],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.21<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -28.89<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -63.03<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -94.68<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value: -114.27<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.44, -6.9500000000000002, -40.960000000000001, -100.08, -138.91999999999999, -145.27000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.95<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -40.96<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value: -100.08<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: -138.92<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -145.27<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.42999999999999999, -7.1500000000000004, -31.109999999999999, -68.319999999999993, -101.91, -123.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.15<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -31.11<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -68.32<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value: -101.91<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: -123.41<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.53000000000000003, -9.7200000000000006, -42.039999999999999, -95.75, -158.41, -208.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:   -9.72<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -42.04<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value:  -95.75<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: -158.41<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: -208.73<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [0, -0.46000000000000002, -9.7200000000000006, -40.890000000000001, -90.469999999999999, -137.38999999999999, -168.55000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -9.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -40.89<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -90.47<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -137.39<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -168.55<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.39000000000000001, -9.75, -51.829999999999998, -127.48, -213.30000000000001, -277.14999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -9.75<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -51.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -127.48<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -213.30<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -277.15<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.52000000000000002, -9.7599999999999998, -42.5, -98, -162.41999999999999, -214.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.52<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -9.76<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -42.50<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -98.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -162.42<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -214.12<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.40999999999999998, -8.1799999999999997, -39.719999999999999, -90.569999999999993, -147.15000000000001, -188.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:   -8.18<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -39.72<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -90.57<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: -147.15<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: -188.73<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [0, -0.40999999999999998, -7.9800000000000004, -36.420000000000002, -77.359999999999999, -113.25, -135.72999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:   -7.98<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -36.42<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -77.36<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.25<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: -135.73<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.40000000000000002, -8.6600000000000001, -44.200000000000003, -107.29000000000001, -182.50999999999999, -242.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:   -8.66<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -44.20<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: -107.29<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: -182.51<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: -242.11<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.40000000000000002, -8.8499999999999996, -40.549999999999997, -91.540000000000006, -147.72999999999999, -188.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.85<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -40.55<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -91.54<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: -147.73<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: -188.60<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.33000000000000002, -5.0300000000000002, -21.210000000000001, -48.719999999999999, -78.390000000000001, -104.72],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.33<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -5.03<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -21.21<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -48.72<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -78.39<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value: -104.72<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [0, -0.34000000000000002, -4.7999999999999998, -19.420000000000002, -43.490000000000002, -67.829999999999998, -87.930000000000007],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -4.80<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -19.42<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -43.49<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -67.83<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -87.93<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.25, -4.1900000000000004, -20.399999999999999, -50.200000000000003, -83.609999999999999, -111.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.19<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -20.40<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -50.20<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -83.61<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: -111.50<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -4.8700000000000001, -20.440000000000001, -46.439999999999998, -75.840000000000003, -102.53],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -4.87<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -20.44<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -46.44<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -75.84<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: -102.53<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.34000000000000002, -6, -27.27, -61.280000000000001, -94.890000000000001, -118.22],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -0.34<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -6.00<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -27.27<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -61.28<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -94.89<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value: -118.22<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [0, -0.44, -6.8899999999999997, -27.68, -60.439999999999998, -91.579999999999998, -111.77],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.44<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.89<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -27.68<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -60.44<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -91.58<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value: -111.77<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.38, -6.4699999999999998, -37.590000000000003, -89.519999999999996, -129.88, -147.33000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -6.47<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -37.59<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -89.52<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value: -129.88<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: -147.33<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.34999999999999998, -6.1100000000000003, -27.879999999999999, -62, -94.739999999999995, -116.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.11<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -27.88<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -62.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -94.74<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value: -116.32<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.38, -7.6799999999999997, -36.950000000000003, -84.329999999999998, -138.06, -179.31999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:   -7.68<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -36.95<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -84.33<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: -138.06<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: -179.32<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [0, -0.46000000000000002, -9.1999999999999993, -38.200000000000003, -82.620000000000005, -123.94, -149.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -9.20<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -38.20<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -82.62<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -123.94<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -149.26<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.38, -8.5800000000000001, -44.469999999999999, -107.88, -182.78999999999999, -244.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -8.58<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -44.47<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -107.88<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -182.79<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -244.16<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.38, -8.0399999999999991, -37.399999999999999, -84.989999999999995, -138.56999999999999, -179.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.38<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.04<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -37.40<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -84.99<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -138.57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -179.45<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.70999999999999996, -11.859999999999999, -67.859999999999999, -152.96000000000001, -236.94, -286.79000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -0.71<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -11.86<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -67.86<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2040<br />value: -152.96<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2045<br />value: -236.94<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2050<br />value: -286.79<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12"],
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
      "y": [0, -0.68999999999999995, -12.17, -64.310000000000002, -132.78, -175.84999999999999, -197],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -12.17<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -64.31<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: -132.78<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: -175.85<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: -197.00<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [0, -0.56999999999999995, -12.17, -78.989999999999995, -190.38999999999999, -303.72000000000003, -372.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -0.57<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -12.17<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:  -78.99<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: -190.39<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: -303.72<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: -372.07<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [0, -0.64000000000000001, -11.210000000000001, -67.140000000000001, -151.84999999999999, -234.5, -282.29000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -11.21<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:  -67.14<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: -151.85<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: -234.50<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: -282.29<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [0, -0.54000000000000004, -8.2400000000000002, -42.200000000000003, -92.349999999999994, -150.13999999999999, -204.46000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2030<br />value:   -8.24<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -42.20<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2040<br />value:  -92.35<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2045<br />value: -150.14<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2050<br />value: -204.46<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20"],
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
      "y": [0, -0.46000000000000002, -7.8300000000000001, -35.520000000000003, -75.269999999999996, -116.61, -149.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:   -7.83<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -35.52<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -75.27<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: -116.61<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: -149.01<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [0, -0.42999999999999999, -7.7300000000000004, -44.039999999999999, -103.52, -175.68000000000001, -240.59],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:   -7.73<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -44.04<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: -103.52<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: -175.68<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: -240.59<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [0, -0.55000000000000004, -8.2400000000000002, -43.060000000000002, -93.439999999999998, -151, -204.24000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:   -8.24<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -43.06<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:  -93.44<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: -151.00<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: -204.24<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [0, -0.46999999999999997, -6.7199999999999998, -39.219999999999999, -91.260000000000005, -129.90000000000001, -140.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -6.72<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -39.22<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -91.26<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2045<br />value: -129.90<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -140.90<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4"],
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
      "y": [0, -0.41999999999999998, -6.79, -35.799999999999997, -81.480000000000004, -115.31, -129.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -6.79<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -35.80<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -81.48<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value: -115.31<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value: -129.84<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [0, -0.17999999999999999, -4.7699999999999996, -46.07, -115.18000000000001, -160.50999999999999, -160.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -0.18<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -4.77<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -46.07<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: -115.18<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -160.51<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -160.60<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [0, -0.40999999999999998, -6.8099999999999996, -39.530000000000001, -93.299999999999997, -131.93000000000001, -143.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -6.81<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -39.53<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -93.30<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: -131.93<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -143.62<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [0, -0.63, -10.15, -57, -132.90000000000001, -213.90000000000001, -270.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -10.15<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -57.00<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: -132.90<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: -213.90<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: -270.20<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5"],
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
      "y": [0, -0.67000000000000004, -10.220000000000001, -54.700000000000003, -119.92, -169.5, -190.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -0.67<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:  -10.22<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -54.70<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: -119.92<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: -169.50<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: -190.29<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [0, -0.48999999999999999, -9.8900000000000006, -67.469999999999999, -166.44999999999999, -260.48000000000002, -317.69999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:   -9.89<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -67.47<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: -166.45<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: -260.48<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: -317.70<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [0, -0.63, -10.140000000000001, -57.600000000000001, -135.31999999999999, -217.13, -273.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:  -10.14<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -57.60<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: -135.32<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: -217.13<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: -273.38<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [0, -0.64000000000000001, -11.449999999999999, -63.460000000000001, -143.00999999999999, -221.88, -271.02999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -11.45<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -63.46<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: -143.01<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: -221.88<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: -271.03<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [0, -0.68999999999999995, -11.85, -62.340000000000003, -129.16999999999999, -171.59999999999999, -193.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -11.85<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -62.34<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: -129.17<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: -171.60<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: -193.89<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [0, -0.53000000000000003, -11.5, -74.329999999999998, -180.19999999999999, -290.12, -359.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -11.50<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:  -74.33<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: -180.20<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: -290.12<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: -359.50<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [0, -0.62, -11.140000000000001, -62.060000000000002, -139.56999999999999, -216.77000000000001, -265.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -11.14<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:  -62.06<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: -139.57<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: -216.77<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: -265.14<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [0, -0.55000000000000004, -7.8899999999999997, -38.600000000000001, -84.659999999999997, -137.22999999999999, -184.09999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:   -7.89<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -38.60<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:  -84.66<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: -137.23<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: -184.10<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [0, -0.52000000000000002, -8.4399999999999995, -34.43, -71.930000000000007, -112.54000000000001, -146.84999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:   -8.44<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -34.43<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -71.93<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: -112.54<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: -146.85<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [0, -0.44, -7.3600000000000003, -41.740000000000002, -99, -169.12, -233.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:   -7.36<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -41.74<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:  -99.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: -169.12<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: -233.64<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [0, -0.58999999999999997, -7.9299999999999997, -39.590000000000003, -87, -141.05000000000001, -190.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:   -7.93<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -39.59<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:  -87.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: -141.05<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: -190.37<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [0, -0.44, -6.8700000000000001, -36.619999999999997, -84.790000000000006, -121.91, -137.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -6.87<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -36.62<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -84.79<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: -121.91<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -137.12<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [0, -0.45000000000000001, -7.0700000000000003, -36.689999999999998, -82.799999999999997, -115.90000000000001, -129.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -7.07<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -36.69<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -82.80<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value: -115.90<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value: -129.40<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [0, -0.22, -5.3799999999999999, -46.700000000000003, -116.88, -160.11000000000001, -160.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -0.22<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -5.38<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -46.70<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: -116.88<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -160.11<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -160.68<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [0, -0.46999999999999997, -6.9900000000000002, -38.270000000000003, -88.069999999999993, -124.78, -139.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -6.99<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -38.27<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -88.07<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: -124.78<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -139.66<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [0, -0.63, -9.9900000000000002, -54.649999999999999, -127.45, -205.53999999999999, -263.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -0.63<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:   -9.99<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -54.65<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: -127.45<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: -205.54<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: -263.01<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [0, -0.68000000000000005, -10.09, -53.020000000000003, -116.63, -166.31999999999999, -188.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -10.09<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -53.02<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: -116.63<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: -166.32<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: -188.64<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.46000000000000002, -9.9100000000000001, -66.370000000000005, -163.69999999999999, -257.13999999999999, -315.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:   -9.91<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -66.37<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: -163.70<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: -257.14<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: -315.82<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.62, -9.8399999999999999, -53.310000000000002, -125.23999999999999, -204.30000000000001, -260.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -9.84<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -53.31<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: -125.24<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: -204.30<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: -260.82<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.52000000000000002, -10.16, -45.18, -101.36, -164.37, -209.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -10.16<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -45.18<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: -101.36<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: -164.37<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: -209.57<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [0, -0.56999999999999995, -11.19, -48.469999999999999, -101.79000000000001, -144.91, -170.91999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.57<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -11.19<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -48.47<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: -101.79<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: -144.91<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: -170.92<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.42999999999999999, -10.23, -53.880000000000003, -129.12, -212.90000000000001, -272.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -10.23<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -53.88<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: -129.12<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: -212.90<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: -272.93<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.56000000000000005, -10.210000000000001, -46.740000000000002, -104.48999999999999, -168.28, -213.77000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.56<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -10.21<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -46.74<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: -104.49<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: -168.28<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: -213.77<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.41999999999999998, -6.5899999999999999, -25.350000000000001, -55.130000000000003, -90.620000000000005, -122.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -6.59<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -25.35<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -55.13<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:  -90.62<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: -122.25<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [0, -0.34999999999999998, -6.0099999999999998, -22.23, -47.469999999999999, -76.189999999999998, -98.659999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.01<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -22.23<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -47.47<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -76.19<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value:  -98.66<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.26000000000000001, -5.29, -23.359999999999999, -55.670000000000002, -96.549999999999997, -133],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.26<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:   -5.29<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -23.36<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -55.67<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value:  -96.55<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: -133.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.40999999999999998, -6.29, -25.52, -56.009999999999998, -90.840000000000003, -119.36],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -6.29<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -25.52<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -56.01<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -90.84<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: -119.36<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.46000000000000002, -7.4699999999999998, -32.359999999999999, -70.599999999999994, -105.65000000000001, -126.52],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -0.46<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -7.47<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -32.36<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -70.60<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value: -105.65<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value: -126.52<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [0, -0.46999999999999997, -7.2400000000000002, -28.670000000000002, -63.520000000000003, -96.730000000000004, -116.02],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.47<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.24<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -28.67<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -63.52<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -96.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value: -116.02<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.42999999999999999, -7.0599999999999996, -41.82, -103.36, -146.18000000000001, -153.75],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.06<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -41.82<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value: -103.36<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: -146.18<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -153.75<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.5, -7.9699999999999998, -33.649999999999999, -72.290000000000006, -106.27, -125.48999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.50<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.97<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -33.65<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -72.29<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value: -106.27<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: -125.49<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.52000000000000002, -9.1400000000000006, -42.880000000000003, -99.75, -165.81999999999999, -217.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:   -9.14<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -42.88<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value:  -99.75<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: -165.82<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: -217.03<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [0, -0.52000000000000002, -10.08, -41.310000000000002, -92.010000000000005, -139.78999999999999, -169.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -10.08<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -41.31<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -92.01<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -139.79<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -169.93<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.41999999999999998, -8.8800000000000008, -53.030000000000001, -131.18000000000001, -218.13, -280.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -8.88<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -53.03<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -131.18<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -218.13<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -280.20<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.57999999999999996, -9.9199999999999999, -43.520000000000003, -100.19, -165.31999999999999, -216.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.58<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -9.92<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -43.52<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -100.19<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -165.32<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -216.44<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.44, -9.2300000000000004, -40.380000000000003, -90.280000000000001, -145.49000000000001, -185.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:   -9.23<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -40.38<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -90.28<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: -145.49<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: -185.05<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [0, -0.40999999999999998, -8.0700000000000003, -36.530000000000001, -77.549999999999997, -113.56, -136.09999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.41<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:   -8.07<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -36.53<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -77.55<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.56<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: -136.10<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.39000000000000001, -8.5399999999999991, -43.399999999999999, -105.13, -178.97999999999999, -239.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:   -8.54<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -43.40<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: -105.13<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: -178.98<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: -239.02<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.41999999999999998, -8.9800000000000004, -40.119999999999997, -90.180000000000007, -145.21000000000001, -185.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -8.98<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -40.12<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -90.18<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: -145.21<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: -185.21<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.37, -6.4299999999999997, -24.210000000000001, -51.090000000000003, -79.390000000000001, -103.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -6.43<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -24.21<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -51.09<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -79.39<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: -103.40<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [0, -0.34999999999999998, -5.9900000000000002, -21.890000000000001, -45.109999999999999, -69.469999999999999, -89.840000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.99<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -21.89<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -45.11<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -69.47<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -89.84<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.25, -4.7599999999999998, -21.420000000000002, -49.350000000000001, -80.049999999999997, -104.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.25<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -4.76<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -21.42<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -49.35<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -80.05<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: -104.60<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -6.4900000000000002, -24.84, -52.590000000000003, -82.109999999999999, -107.39],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -6.49<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -24.84<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -52.59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -82.11<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: -107.39<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.37, -6.5499999999999998, -28.16, -62.390000000000001, -95.379999999999995, -116.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -6.55<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -28.16<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -62.39<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -95.38<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value: -116.60<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [0, -0.48999999999999999, -7.3399999999999999, -28.829999999999998, -61.060000000000002, -89.120000000000005, -105],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -7.34<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -28.83<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -61.06<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -89.12<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value: -105.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.40000000000000002, -6.7999999999999998, -39.090000000000003, -91.980000000000004, -132.34, -149.06999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -6.80<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -39.09<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -91.98<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value: -132.34<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: -149.07<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.37, -7.4000000000000004, -31.27, -67.700000000000003, -99.879999999999995, -118.76000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.37<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -7.40<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -31.27<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -67.70<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -99.88<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value: -118.76<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.39000000000000001, -8.7300000000000004, -38.399999999999999, -87.060000000000002, -142.19, -183.38999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -0.39<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:   -8.73<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -38.40<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -87.06<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: -142.19<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: -183.39<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [0, -0.45000000000000001, -8.9600000000000009, -37.75, -81.909999999999997, -123.22, -148.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -8.96<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -37.75<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -81.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -123.22<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -148.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.39000000000000001, -8.7400000000000002, -45.600000000000001, -110.81999999999999, -187.68000000000001, -249.33000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.39<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -8.74<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -45.60<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -110.82<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -187.68<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -249.33<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.40000000000000002, -8.9299999999999997, -39.25, -88.909999999999997, -144.56999999999999, -186.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.40<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.93<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -39.25<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -88.91<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -144.57<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -186.90<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "range": [-390.67349999999999, 18.6035],
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
    "54fc5d641644": {
      "yintercept": {},
      "type": "scatter"
    },
    "54fc5302272e": {
      "xintercept": {}
    },
    "54fc44713fdd": {
      "x": {},
      "y": {},
      "linetype": {},
      "colour": {}
    },
    "54fc2b8340ba": {
      "x": {},
      "y": {},
      "shape": {},
      "fill": {}
    }
  },
  "cur_data": "54fc5d641644",
  "visdat": {
    "54fc5d641644": ["function (y) ", "x"],
    "54fc5302272e": ["function (y) ", "x"],
    "54fc44713fdd": ["function (y) ", "x"],
    "54fc2b8340ba": ["function (y) ", "x"]
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

  
