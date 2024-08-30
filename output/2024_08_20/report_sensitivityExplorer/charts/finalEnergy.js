(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('finalEnergy') 

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
      "x": [2002.75, 2052.25],
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
      "y": [-2.4785000000000004, 52.048500000000004],
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
      "y": [48.649999999999999, 48.359999999999999, 43.729999999999997, 39.009999999999998, 34.740000000000002, 31.890000000000001, 30.550000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2025<br />value: 48.36<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2030<br />value: 43.73<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2035<br />value: 39.01<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2040<br />value: 34.74<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2045<br />value: 31.89<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2050<br />value: 30.55<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12"],
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
      "y": [48.649999999999999, 48.380000000000003, 43.850000000000001, 37.990000000000002, 33.210000000000001, 30.440000000000001, 29.359999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value: 48.38<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value: 43.85<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value: 37.99<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: 33.21<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: 30.44<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: 29.36<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [48.649999999999999, 48.369999999999997, 43.780000000000001, 38.710000000000001, 34.210000000000001, 31.350000000000001, 29.77],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value: 48.37<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value: 43.78<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value: 38.71<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: 34.21<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: 31.35<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: 29.77<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [48.649999999999999, 48.25, 42.460000000000001, 38.75, 33.859999999999999, 30.07, 28.059999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value: 48.25<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value: 42.46<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value: 38.75<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: 33.86<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: 30.07<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: 28.06<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.390000000000001, 43.969999999999999, 40.060000000000002, 36.390000000000001, 33.909999999999997, 33.350000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2025<br />value: 48.39<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2030<br />value: 43.97<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2035<br />value: 40.06<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2040<br />value: 36.39<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2045<br />value: 33.91<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2050<br />value: 33.35<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20"],
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
      "y": [48.649999999999999, 48.399999999999999, 44.020000000000003, 39.57, 35.539999999999999, 32.950000000000003, 32.68],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value: 48.40<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value: 44.02<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value: 39.57<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value: 35.54<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value: 32.95<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: 32.68<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [48.649999999999999, 48.409999999999997, 43.939999999999998, 39.960000000000001, 36.140000000000001, 33.539999999999999, 32.509999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value: 48.41<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value: 43.94<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value: 39.96<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value: 36.14<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: 33.54<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: 32.51<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [48.649999999999999, 48.259999999999998, 42.57, 39.619999999999997, 35.689999999999998, 32.469999999999999, 31.120000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value: 48.26<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value: 42.57<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value: 39.62<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value: 35.69<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: 32.47<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: 31.12<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.920000000000002, 42.920000000000002, 37.07, 32.259999999999998, 30.100000000000001, 29.640000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2025<br />value: 47.92<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2030<br />value: 42.92<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2035<br />value: 37.07<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2040<br />value: 32.26<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2045<br />value: 30.10<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2050<br />value: 29.64<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4"],
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
      "y": [48.649999999999999, 47.93, 42.960000000000001, 36.140000000000001, 31.120000000000001, 29.09, 28.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value: 42.96<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value: 36.14<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value: 31.12<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value: 29.09<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value: 28.60<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [48.649999999999999, 47.93, 42.990000000000002, 36.579999999999998, 31.73, 29.960000000000001, 29.399999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value: 42.99<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value: 36.58<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: 31.73<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: 29.96<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: 29.40<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [48.649999999999999, 47.659999999999997, 40.289999999999999, 35.920000000000002, 30.120000000000001, 26.739999999999998, 26.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value: 47.66<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value: 40.29<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value: 35.92<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value: 30.12<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: 26.74<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: 26.03<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [48.649999999999999, 48.170000000000002, 43.200000000000003, 38, 33.32, 30.59, 29.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value: 48.17<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value: 43.20<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value: 38.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: 33.32<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: 30.59<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: 29.62<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5"],
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
      "y": [48.649999999999999, 48.159999999999997, 43.229999999999997, 37.25, 32.350000000000001, 29.699999999999999, 28.75],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value: 48.16<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value: 43.23<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value: 37.25<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: 32.35<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: 29.70<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: 28.75<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [48.649999999999999, 48.130000000000003, 43.219999999999999, 37.100000000000001, 32.049999999999997, 29.66, 28.57],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value: 48.13<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value: 43.22<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value: 37.10<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: 32.05<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: 29.66<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: 28.57<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.93, 40.780000000000001, 37.170000000000002, 31.66, 27.859999999999999, 26.48],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value: 40.78<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value: 37.17<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: 31.66<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: 27.86<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: 26.48<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.049999999999997, 42.020000000000003, 36.899999999999999, 32.159999999999997, 29.09, 27.670000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value: 48.05<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value: 42.02<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value: 36.90<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: 32.16<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: 29.09<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: 27.67<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [48.649999999999999, 48.020000000000003, 41.880000000000003, 35.990000000000002, 31.010000000000002, 28.010000000000002, 26.809999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value: 48.02<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value: 41.88<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value: 35.99<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: 31.01<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: 28.01<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: 26.81<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.009999999999998, 36.649999999999999, 31.760000000000002, 28.699999999999999, 27.039999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value: 48.04<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value: 42.01<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value: 36.65<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: 31.76<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: 28.70<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: 27.04<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [48.649999999999999, 48.100000000000001, 41.740000000000002, 37.869999999999997, 32.979999999999997, 29.219999999999999, 27.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value: 48.10<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value: 41.74<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value: 37.87<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: 32.98<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: 29.22<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: 27.26<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.030000000000001, 42.039999999999999, 37.590000000000003, 33.479999999999997, 30.579999999999998, 30.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value: 48.03<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value: 42.04<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value: 37.59<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value: 33.48<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: 30.58<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: 30.25<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [48.649999999999999, 48, 41.909999999999997, 37.18, 32.82, 29.960000000000001, 29.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value: 48.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value: 41.91<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value: 37.18<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value: 32.82<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value: 29.96<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: 29.96<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.049999999999997, 37.600000000000001, 33.460000000000001, 30.530000000000001, 29.710000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value: 48.04<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value: 42.05<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value: 37.60<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value: 33.46<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: 30.53<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: 29.71<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [48.649999999999999, 48.119999999999997, 41.82, 38.600000000000001, 34.369999999999997, 31, 29.82],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value: 48.12<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value: 41.82<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value: 38.60<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value: 34.37<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: 31.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: 29.82<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.759999999999998, 41.960000000000001, 35.719999999999999, 30.59, 28.309999999999999, 27.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value: 47.76<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value: 41.96<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value: 35.72<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value: 30.59<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value: 28.31<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: 27.60<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [48.649999999999999, 47.740000000000002, 41.969999999999999, 34.840000000000003, 29.620000000000001, 27.420000000000002, 26.66],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value: 47.74<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value: 41.97<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value: 34.84<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value: 29.62<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value: 27.42<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value: 26.66<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.75, 41.960000000000001, 35.340000000000003, 30.25, 28.199999999999999, 27.280000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value: 47.75<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value: 41.96<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value: 35.34<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: 30.25<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: 28.20<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: 27.28<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.649999999999999, 40.25, 35.950000000000003, 30.210000000000001, 26.800000000000001, 26.02],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value: 47.65<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value: 40.25<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value: 35.95<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value: 30.21<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: 26.80<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: 26.02<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.969999999999999, 42.020000000000003, 36.600000000000001, 31.649999999999999, 28.760000000000002, 27.5],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value: 47.97<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value: 42.02<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value: 36.60<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: 31.65<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: 28.76<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: 27.50<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [48.649999999999999, 47.93, 41.93, 35.770000000000003, 30.670000000000002, 27.82, 26.629999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value: 41.93<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value: 35.77<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: 30.67<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: 27.82<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: 26.63<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.899999999999999, 41.899999999999999, 35.710000000000001, 30.469999999999999, 27.82, 26.390000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value: 47.90<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value: 41.90<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value: 35.71<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: 30.47<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: 27.82<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: 26.39<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.920000000000002, 40.68, 37.100000000000001, 31.66, 27.84, 26.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value: 47.92<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value: 40.68<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value: 37.10<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: 31.66<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: 27.84<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: 26.42<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.170000000000002, 33.880000000000003, 29.100000000000001, 25.940000000000001, 24.550000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value: 47.40<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value: 33.88<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: 29.10<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: 25.94<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: 24.55<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [48.649999999999999, 47.420000000000002, 39.170000000000002, 33.509999999999998, 28.57, 25.460000000000001, 24.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value: 47.42<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value: 33.51<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value: 28.57<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: 25.46<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: 24.26<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [48.649999999999999, 47.43, 39.219999999999999, 33.810000000000002, 28.940000000000001, 25.800000000000001, 24.120000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value: 47.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value: 39.22<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value: 33.81<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: 28.94<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: 25.80<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: 24.12<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.159999999999997, 34.619999999999997, 29.850000000000001, 26.370000000000001, 24.690000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value: 39.16<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value: 34.62<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value: 29.85<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: 26.37<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: 24.69<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [48.649999999999999, 47.380000000000003, 39.210000000000001, 34.18, 29.809999999999999, 26.890000000000001, 27.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value: 47.38<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value: 39.21<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value: 34.18<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value: 29.81<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value: 26.89<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: 27.03<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [48.649999999999999, 47.369999999999997, 39.200000000000003, 34.07, 29.629999999999999, 26.670000000000002, 27.010000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value: 47.37<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value: 39.20<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value: 34.07<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value: 29.63<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value: 26.67<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value: 27.01<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [48.649999999999999, 47.380000000000003, 39.189999999999998, 34.140000000000001, 29.739999999999998, 26.73, 26.359999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value: 47.38<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value: 39.19<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value: 34.14<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value: 29.74<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value: 26.73<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: 26.36<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.539999999999999, 39.240000000000002, 35.07, 30.84, 27.789999999999999, 27.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value: 47.54<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value: 39.24<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value: 35.07<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value: 30.84<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value: 27.79<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: 27.60<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.200000000000003, 39.18, 32.75, 27.559999999999999, 25.050000000000001, 24.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value: 47.20<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value: 39.18<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value: 32.75<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value: 27.56<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value: 25.05<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value: 24.03<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [48.649999999999999, 47.189999999999998, 39.189999999999998, 32.259999999999998, 27.079999999999998, 24.530000000000001, 23.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value: 47.19<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value: 39.19<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value: 32.26<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value: 27.08<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value: 24.53<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value: 23.44<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.18, 39.170000000000002, 32.509999999999998, 27.370000000000001, 25.059999999999999, 23.850000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value: 47.18<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value: 32.51<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value: 27.37<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: 25.06<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: 23.85<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.359999999999999, 39.049999999999997, 34.170000000000002, 28.460000000000001, 25.27, 24.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value: 47.36<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value: 39.05<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value: 34.17<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value: 28.46<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value: 25.27<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: 24.46<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.359999999999999, 39.170000000000002, 33.770000000000003, 28.850000000000001, 25.760000000000002, 24.350000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value: 47.36<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value: 33.77<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value: 28.85<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: 25.76<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: 24.35<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [48.649999999999999, 47.350000000000001, 39.170000000000002, 33.409999999999997, 28.399999999999999, 25.32, 24.010000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value: 47.35<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value: 33.41<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value: 28.40<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: 25.32<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: 24.01<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.32, 39.170000000000002, 33.200000000000003, 28.039999999999999, 25.079999999999998, 23.48],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value: 47.32<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value: 33.20<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: 28.04<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: 25.08<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: 23.48<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.530000000000001, 39.130000000000003, 34.869999999999997, 29.73, 26.079999999999998, 24.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value: 47.53<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value: 39.13<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value: 34.87<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: 29.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: 26.08<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: 24.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.5, 32.060000000000002, 27.289999999999999, 24.079999999999998, 22.66],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value: 46.87<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value: 32.06<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value: 27.29<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: 24.08<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: 22.66<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.490000000000002, 31.780000000000001, 26.890000000000001, 23.760000000000002, 22.530000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value: 46.88<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value: 31.78<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value: 26.89<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: 23.76<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: 22.53<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.479999999999997, 31.920000000000002, 27.079999999999998, 23.920000000000002, 22.170000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value: 46.86<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value: 31.92<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: 27.08<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: 23.92<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: 22.17<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [48.649999999999999, 46.990000000000002, 37.530000000000001, 32.450000000000003, 27.640000000000001, 24.289999999999999, 22.789999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value: 46.99<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value: 37.53<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value: 32.45<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value: 27.64<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: 24.29<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: 22.79<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.520000000000003, 32.25, 27.73, 24.73, 25.27],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value: 46.86<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value: 37.52<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value: 32.25<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value: 27.73<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value: 24.73<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: 25.27<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.5, 32.149999999999999, 27.559999999999999, 24.550000000000001, 25.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value: 46.86<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value: 32.15<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value: 27.56<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value: 24.55<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value: 25.26<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [48.649999999999999, 46.840000000000003, 37.479999999999997, 32.210000000000001, 27.699999999999999, 24.68, 24.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value: 46.84<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value: 32.21<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value: 27.70<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value: 24.68<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: 24.62<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [48.649999999999999, 46.969999999999999, 37.520000000000003, 32.68, 28.219999999999999, 25.199999999999999, 25.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value: 46.97<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value: 37.52<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value: 32.68<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value: 28.22<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value: 25.20<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: 25.62<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.490000000000002, 30.940000000000001, 25.77, 23.050000000000001, 21.809999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value: 46.69<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value: 30.94<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value: 25.77<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value: 23.05<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value: 21.81<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [48.649999999999999, 46.659999999999997, 37.509999999999998, 30.789999999999999, 25.649999999999999, 22.850000000000001, 21.48],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value: 46.66<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value: 37.51<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value: 30.79<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value: 25.65<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value: 22.85<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value: 21.48<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [48.649999999999999, 46.68, 37.479999999999997, 30.719999999999999, 25.609999999999999, 23.149999999999999, 21.780000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value: 46.68<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value: 30.72<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value: 25.61<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value: 23.15<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: 21.78<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [48.649999999999999, 46.920000000000002, 37.490000000000002, 32.009999999999998, 26.370000000000001, 23.399999999999999, 22.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value: 46.92<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value: 32.01<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value: 26.37<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value: 23.40<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value: 22.42<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 46.840000000000003, 37.5, 32, 27.16, 23.969999999999999, 22.510000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value: 46.84<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value: 32.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value: 27.16<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: 23.97<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: 22.51<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [48.649999999999999, 46.829999999999998, 37.479999999999997, 31.780000000000001, 26.890000000000001, 23.77, 22.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value: 46.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value: 31.78<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value: 26.89<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: 23.77<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: 22.42<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 46.82, 37.490000000000002, 31.59, 26.5, 23.420000000000002, 21.780000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value: 46.82<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value: 31.59<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: 26.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: 23.42<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: 21.78<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.030000000000001, 37.5, 32.810000000000002, 27.899999999999999, 24.510000000000002, 22.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value: 47.03<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value: 32.81<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: 27.90<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: 24.51<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: 22.96<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.289999999999999, 43.170000000000002, 38.490000000000002, 34.509999999999998, 31.829999999999998, 30.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2025<br />value: 48.29<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2030<br />value: 43.17<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2035<br />value: 38.49<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2040<br />value: 34.51<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2045<br />value: 31.83<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2050<br />value: 30.58<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12"],
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
      "y": [48.649999999999999, 48.310000000000002, 43.329999999999998, 37.659999999999997, 33.079999999999998, 30.420000000000002, 29.370000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value: 48.31<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value: 43.33<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value: 37.66<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: 33.08<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: 30.42<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: 29.37<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [48.649999999999999, 48.310000000000002, 43.240000000000002, 38.280000000000001, 34.039999999999999, 31.350000000000001, 29.84],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value: 48.31<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value: 43.24<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value: 38.28<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: 34.04<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: 31.35<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: 29.84<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [48.649999999999999, 48.170000000000002, 42.140000000000001, 38.259999999999998, 33.770000000000003, 30.129999999999999, 28.309999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value: 48.17<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value: 42.14<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value: 38.26<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: 33.77<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: 30.13<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: 28.31<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.299999999999997, 43.340000000000003, 39.390000000000001, 36.079999999999998, 33.890000000000001, 33.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2025<br />value: 48.30<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2030<br />value: 43.34<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2035<br />value: 39.39<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2040<br />value: 36.08<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2045<br />value: 33.89<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2050<br />value: 33.58<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20"],
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
      "y": [48.649999999999999, 48.310000000000002, 43.420000000000002, 38.990000000000002, 35.299999999999997, 32.969999999999999, 32.880000000000003],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value: 48.31<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value: 43.42<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value: 38.99<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value: 35.30<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: 32.97<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: 32.88<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [48.649999999999999, 48.299999999999997, 43.32, 39.32, 35.909999999999997, 33.590000000000003, 32.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value: 48.30<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value: 43.32<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value: 39.32<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value: 35.91<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: 33.59<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: 32.83<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [48.649999999999999, 48.149999999999999, 42.149999999999999, 38.899999999999999, 35.270000000000003, 32.340000000000003, 31.34],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value: 48.15<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value: 42.15<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value: 38.90<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value: 35.27<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: 32.34<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: 31.34<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.829999999999998, 42.380000000000003, 36.630000000000003, 32, 30.050000000000001, 29.68],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2025<br />value: 47.83<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2030<br />value: 42.38<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2035<br />value: 36.63<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2040<br />value: 32.00<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2045<br />value: 30.05<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2050<br />value: 29.68<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4"],
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
      "y": [48.649999999999999, 47.82, 42.409999999999997, 35.829999999999998, 31.030000000000001, 29.079999999999998, 28.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value: 47.82<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value: 42.41<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value: 35.83<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value: 31.03<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value: 29.08<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value: 28.58<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [48.649999999999999, 47.829999999999998, 42.409999999999997, 36.280000000000001, 31.629999999999999, 29.780000000000001, 29.18],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value: 47.83<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value: 42.41<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value: 36.28<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: 31.63<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: 29.78<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: 29.18<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [48.649999999999999, 47.630000000000003, 40.170000000000002, 35.850000000000001, 30.100000000000001, 26.789999999999999, 26.09],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value: 47.63<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value: 40.17<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value: 35.85<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value: 30.10<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: 26.79<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: 26.09<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [48.649999999999999, 48.07, 42.719999999999999, 37.539999999999999, 33.119999999999997, 30.600000000000001, 29.68],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value: 48.07<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value: 42.72<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value: 37.54<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: 33.12<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: 30.60<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: 29.68<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5"],
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
      "y": [48.649999999999999, 48.090000000000003, 42.799999999999997, 36.979999999999997, 32.369999999999997, 29.809999999999999, 28.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value: 48.09<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value: 42.80<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value: 36.98<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: 32.37<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: 29.81<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: 28.86<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [48.649999999999999, 48.030000000000001, 42.670000000000002, 36.850000000000001, 32.100000000000001, 29.77, 28.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value: 48.03<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value: 42.67<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value: 36.85<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: 32.10<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: 29.77<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: 28.65<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.880000000000003, 40.579999999999998, 37.009999999999998, 31.629999999999999, 27.93, 26.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value: 47.88<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value: 40.58<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value: 37.01<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: 31.63<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: 27.93<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: 26.56<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.049999999999997, 42, 36.979999999999997, 32.630000000000003, 29.780000000000001, 28.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value: 48.05<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value: 42.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value: 36.98<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: 32.63<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: 29.78<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: 28.44<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [48.649999999999999, 48.030000000000001, 41.869999999999997, 36.149999999999999, 31.41, 28.559999999999999, 27.41],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value: 48.03<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value: 41.87<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value: 36.15<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: 31.41<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: 28.56<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: 27.41<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [48.649999999999999, 48.049999999999997, 42.009999999999998, 36.82, 32.310000000000002, 29.48, 27.879999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value: 48.05<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value: 42.01<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value: 36.82<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: 32.31<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: 29.48<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: 27.88<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [48.649999999999999, 48.049999999999997, 41.579999999999998, 37.490000000000002, 32.93, 29.359999999999999, 27.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value: 48.05<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value: 41.58<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value: 37.49<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: 32.93<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: 29.36<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: 27.60<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.030000000000001, 37.68, 33.969999999999999, 31.48, 31.27],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value: 48.04<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value: 42.03<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value: 37.68<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value: 33.97<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: 31.48<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: 31.27<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [48.649999999999999, 48.020000000000003, 41.990000000000002, 37.280000000000001, 33.299999999999997, 30.719999999999999, 30.780000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value: 48.02<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value: 41.99<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value: 37.28<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value: 33.30<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value: 30.72<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: 30.78<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.009999999999998, 37.609999999999999, 33.840000000000003, 31.239999999999998, 30.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value: 48.04<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value: 42.01<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value: 37.61<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value: 33.84<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: 31.24<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: 30.56<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [48.649999999999999, 48.039999999999999, 41.560000000000002, 38.100000000000001, 34.390000000000001, 31.48, 30.59],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value: 48.04<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value: 41.56<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value: 38.10<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value: 34.39<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: 31.48<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: 30.59<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.729999999999997, 41.850000000000001, 35.829999999999998, 31.010000000000002, 28.829999999999998, 28.219999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value: 47.73<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value: 41.85<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value: 35.83<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value: 31.01<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: 28.83<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: 28.22<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [48.649999999999999, 47.710000000000001, 41.810000000000002, 35.100000000000001, 30.129999999999999, 27.98, 27.27],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value: 47.71<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value: 41.81<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value: 35.10<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value: 30.13<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value: 27.98<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value: 27.27<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.710000000000001, 41.82, 35.469999999999999, 30.670000000000002, 28.75, 27.920000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value: 47.71<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value: 41.82<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value: 35.47<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: 30.67<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: 28.75<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: 27.92<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.609999999999999, 40.090000000000003, 35.780000000000001, 30.059999999999999, 26.760000000000002, 26.039999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value: 47.61<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value: 40.09<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value: 35.78<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value: 30.06<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value: 26.76<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: 26.04<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.920000000000002, 41.920000000000002, 36.609999999999999, 32.060000000000002, 29.359999999999999, 28.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value: 47.92<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value: 41.92<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value: 36.61<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: 32.06<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: 29.36<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: 28.25<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [48.649999999999999, 47.909999999999997, 41.869999999999997, 35.950000000000003, 31.18, 28.460000000000001, 27.309999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value: 47.91<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value: 41.87<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value: 35.95<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: 31.18<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: 28.46<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: 27.31<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.880000000000003, 41.869999999999997, 35.899999999999999, 30.949999999999999, 28.390000000000001, 27.059999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value: 47.88<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value: 41.87<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value: 35.90<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: 30.95<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: 28.39<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: 27.06<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.840000000000003, 40.439999999999998, 36.880000000000003, 31.600000000000001, 27.920000000000002, 26.530000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value: 47.84<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value: 40.44<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value: 36.88<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: 31.60<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: 27.92<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: 26.53<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 47.43, 39.259999999999998, 34.009999999999998, 29.27, 26.09, 24.710000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value: 47.43<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value: 39.26<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value: 34.01<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value: 29.27<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: 26.09<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: 24.71<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [48.649999999999999, 47.420000000000002, 39.18, 33.509999999999998, 28.559999999999999, 25.449999999999999, 24.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value: 47.42<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value: 33.51<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value: 28.56<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: 25.45<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: 24.25<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.170000000000002, 33.780000000000001, 28.93, 25.780000000000001, 24.09],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value: 47.40<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value: 33.78<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: 28.93<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: 25.78<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: 24.09<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.579999999999998, 39.310000000000002, 34.75, 29.93, 26.41, 24.73],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value: 47.58<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value: 39.31<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value: 34.75<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: 29.93<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: 26.41<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: 24.73<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [48.649999999999999, 47.390000000000001, 39.240000000000002, 34.210000000000001, 29.82, 26.890000000000001, 27.050000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value: 47.39<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value: 39.24<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value: 34.21<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value: 29.82<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value: 26.89<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: 27.05<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [48.649999999999999, 47.369999999999997, 39.189999999999998, 34.030000000000001, 29.539999999999999, 26.57, 27.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value: 47.37<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value: 39.19<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value: 34.03<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value: 29.54<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value: 26.57<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value: 27.03<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [48.649999999999999, 47.409999999999997, 39.299999999999997, 34.310000000000002, 30.010000000000002, 27.07, 26.640000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value: 47.41<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value: 39.30<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value: 34.31<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value: 30.01<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value: 27.07<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: 26.64<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.280000000000001, 35.090000000000003, 30.899999999999999, 27.829999999999998, 27.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value: 39.28<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value: 35.09<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value: 30.90<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value: 27.83<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: 27.62<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.189999999999998, 39.18, 32.75, 27.579999999999998, 25.07, 24.039999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value: 47.19<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value: 32.75<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value: 27.58<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value: 25.07<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value: 24.04<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [48.649999999999999, 47.170000000000002, 39.149999999999999, 32.340000000000003, 27.16, 24.559999999999999, 23.469999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value: 47.17<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value: 39.15<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value: 32.34<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value: 27.16<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value: 24.56<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value: 23.47<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.18, 39.170000000000002, 32.520000000000003, 27.390000000000001, 25.079999999999998, 23.870000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value: 47.18<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value: 32.52<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value: 27.39<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: 25.08<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: 23.87<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.18, 34.350000000000001, 28.640000000000001, 25.449999999999999, 24.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value: 47.40<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value: 34.35<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value: 28.64<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value: 25.45<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: 24.62<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.369999999999997, 39.18, 33.859999999999999, 28.960000000000001, 25.890000000000001, 24.469999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value: 47.37<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value: 33.86<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value: 28.96<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: 25.89<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: 24.47<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [48.649999999999999, 47.350000000000001, 39.159999999999997, 33.329999999999998, 28.309999999999999, 25.25, 23.940000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value: 47.35<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value: 39.16<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value: 33.33<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value: 28.31<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: 25.25<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: 23.94<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.329999999999998, 39.18, 33.280000000000001, 28.129999999999999, 25.149999999999999, 23.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value: 47.33<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value: 33.28<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: 28.13<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: 25.15<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: 23.56<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.18, 35.159999999999997, 30.120000000000001, 26.469999999999999, 24.949999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value: 35.16<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: 30.12<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: 26.47<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: 24.95<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.530000000000001, 32.090000000000003, 27.329999999999998, 24.149999999999999, 22.73],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value: 46.88<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value: 37.53<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value: 32.09<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value: 27.33<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: 24.15<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: 22.73<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.490000000000002, 31.850000000000001, 27.02, 23.91, 22.699999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value: 46.88<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value: 31.85<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value: 27.02<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: 23.91<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: 22.70<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [48.649999999999999, 46.890000000000001, 37.520000000000003, 32.030000000000001, 27.23, 24.059999999999999, 22.329999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value: 46.89<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value: 37.52<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value: 32.03<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: 27.23<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: 24.06<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: 22.33<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [48.649999999999999, 47, 37.549999999999997, 32.520000000000003, 27.739999999999998, 24.390000000000001, 22.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value: 47.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value: 37.55<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value: 32.52<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value: 27.74<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: 24.39<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: 22.83<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.509999999999998, 32.329999999999998, 27.890000000000001, 24.969999999999999, 25.489999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value: 46.87<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value: 32.33<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value: 27.89<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value: 24.97<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value: 25.49<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.509999999999998, 32.229999999999997, 27.690000000000001, 24.75, 25.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value: 46.87<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value: 32.23<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value: 27.69<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value: 24.75<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value: 25.46<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [48.649999999999999, 46.850000000000001, 37.490000000000002, 32.219999999999999, 27.710000000000001, 24.670000000000002, 24.609999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value: 46.85<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value: 32.22<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value: 27.71<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value: 24.67<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: 24.61<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [48.649999999999999, 46.969999999999999, 37.509999999999998, 32.670000000000002, 28.199999999999999, 25.18, 25.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value: 46.97<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value: 32.67<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value: 28.20<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value: 25.18<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: 25.60<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.5, 30.949999999999999, 25.780000000000001, 23.07, 21.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value: 46.69<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value: 37.50<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value: 30.95<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value: 25.78<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value: 23.07<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value: 21.83<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.5, 30.719999999999999, 25.539999999999999, 22.75, 21.399999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value: 46.69<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value: 37.50<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value: 30.72<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value: 25.54<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value: 22.75<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value: 21.40<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.490000000000002, 30.719999999999999, 25.609999999999999, 23.170000000000002, 21.800000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value: 46.69<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value: 30.72<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value: 25.61<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value: 23.17<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: 21.80<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [48.649999999999999, 46.920000000000002, 37.509999999999998, 32.079999999999998, 26.43, 23.420000000000002, 22.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value: 46.92<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value: 32.08<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value: 26.43<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value: 23.42<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value: 22.44<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 46.850000000000001, 37.520000000000003, 32.060000000000002, 27.23, 24.079999999999998, 22.640000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value: 46.85<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value: 37.52<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value: 32.06<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value: 27.23<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: 24.08<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: 22.64<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [48.649999999999999, 46.829999999999998, 37.479999999999997, 31.780000000000001, 26.879999999999999, 23.760000000000002, 22.41],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value: 46.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value: 37.48<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value: 31.78<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value: 26.88<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: 23.76<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: 22.41<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 46.82, 37.5, 31.640000000000001, 26.57, 23.48, 21.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value: 46.82<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value: 37.50<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value: 31.64<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: 26.57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: 23.48<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: 21.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.030000000000001, 37.509999999999998, 32.840000000000003, 27.940000000000001, 24.559999999999999, 23.02],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value: 47.03<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value: 32.84<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: 27.94<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: 24.56<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: 23.02<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.619999999999997, 38.060000000000002, 34.259999999999998, 31.780000000000001, 30.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2030<br />value: 42.62<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2035<br />value: 38.06<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2040<br />value: 34.26<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2045<br />value: 31.78<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2050<br />value: 30.65<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.619999999999997, 37.200000000000003, 32.880000000000003, 30.43, 29.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value: 42.62<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value: 37.20<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: 32.88<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: 30.43<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: 29.45<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.560000000000002, 37.75, 33.710000000000001, 31.27, 29.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value: 42.56<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value: 37.75<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: 33.71<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: 31.27<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: 29.86<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [48.649999999999999, 48, 41.490000000000002, 37.340000000000003, 33.140000000000001, 29.870000000000001, 28.359999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value: 48.00<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value: 41.49<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value: 37.34<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: 33.14<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: 29.87<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: 28.36<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.719999999999999, 38.719999999999999, 35.630000000000003, 33.670000000000002, 33.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2030<br />value: 42.72<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2035<br />value: 38.72<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2040<br />value: 35.63<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2045<br />value: 33.67<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2050<br />value: 33.58<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.700000000000003, 38.270000000000003, 34.840000000000003, 32.729999999999997, 32.899999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value: 42.70<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value: 38.27<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value: 34.84<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: 32.73<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: 32.90<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [48.649999999999999, 48.200000000000003, 42.649999999999999, 38.579999999999998, 35.420000000000002, 33.340000000000003, 32.880000000000003],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value: 48.20<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value: 42.65<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value: 38.58<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: 35.42<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: 33.34<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: 32.88<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [48.649999999999999, 47.969999999999999, 41.469999999999999, 37.880000000000003, 34.5, 31.969999999999999, 31.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value: 47.97<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value: 41.47<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value: 37.88<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value: 34.50<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: 31.97<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: 31.42<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.689999999999998, 41.729999999999997, 36.119999999999997, 31.699999999999999, 30.100000000000001, 29.77],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2025<br />value: 47.69<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2030<br />value: 41.73<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2035<br />value: 36.12<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2040<br />value: 31.70<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2045<br />value: 30.10<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2050<br />value: 29.77<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4"],
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
      "y": [48.649999999999999, 47.68, 41.789999999999999, 35.340000000000003, 30.940000000000001, 29.199999999999999, 28.739999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value: 47.68<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value: 41.79<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value: 35.34<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value: 30.94<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value: 29.20<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value: 28.74<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [48.649999999999999, 47.670000000000002, 41.710000000000001, 35.810000000000002, 31.370000000000001, 29.989999999999998, 29.41],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value: 47.67<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value: 41.71<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value: 35.81<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: 31.37<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: 29.99<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: 29.41<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [48.649999999999999, 47.460000000000001, 39.630000000000003, 35.390000000000001, 29.920000000000002, 26.710000000000001, 26.16],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value: 47.46<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value: 39.63<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value: 35.39<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value: 29.92<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: 26.71<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: 26.16<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.950000000000003, 42.009999999999998, 37.020000000000003, 32.799999999999997, 30.52, 29.690000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value: 47.95<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value: 42.01<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value: 37.02<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: 32.80<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: 30.52<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: 29.69<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5"],
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
      "y": [48.649999999999999, 47.960000000000001, 42.090000000000003, 36.549999999999997, 32.18, 29.809999999999999, 28.940000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value: 47.96<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value: 42.09<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value: 36.55<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: 32.18<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: 29.81<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: 28.94<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.909999999999997, 42.090000000000003, 36.450000000000003, 31.920000000000002, 29.739999999999998, 28.670000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value: 47.91<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value: 42.09<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value: 36.45<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: 31.92<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: 29.74<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: 28.67<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.649999999999999, 39.909999999999997, 36.5, 31.84, 28.440000000000001, 27.129999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value: 47.65<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value: 39.91<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value: 36.50<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: 31.84<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: 28.44<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: 27.13<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.060000000000002, 41.880000000000003, 37.100000000000001, 33.049999999999997, 30.469999999999999, 29.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value: 48.06<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value: 41.88<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value: 37.10<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: 33.05<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: 30.47<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: 29.26<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [48.649999999999999, 48.060000000000002, 41.859999999999999, 36.359999999999999, 31.920000000000002, 29.300000000000001, 28.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value: 48.06<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value: 41.86<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value: 36.36<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: 31.92<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: 29.30<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: 28.25<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [48.649999999999999, 48.060000000000002, 41.869999999999997, 36.850000000000001, 32.560000000000002, 29.989999999999998, 28.489999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value: 48.06<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value: 41.87<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value: 36.85<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: 32.56<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: 29.99<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: 28.49<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.960000000000001, 41.299999999999997, 37.090000000000003, 32.829999999999998, 29.48, 27.940000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value: 47.96<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value: 41.30<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value: 37.09<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: 32.83<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: 29.48<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: 27.94<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.039999999999999, 41.909999999999997, 37.630000000000003, 34.210000000000001, 32.039999999999999, 31.98],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value: 48.04<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value: 41.91<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value: 37.63<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value: 34.21<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: 32.04<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: 31.98<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [48.649999999999999, 48.039999999999999, 41.899999999999999, 37.32, 33.710000000000001, 31.469999999999999, 31.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value: 48.04<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value: 41.90<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value: 37.32<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value: 33.71<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: 31.47<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: 31.65<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [48.649999999999999, 48.049999999999997, 41.909999999999997, 37.579999999999998, 34.119999999999997, 31.82, 31.34],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value: 48.05<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value: 41.91<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value: 37.58<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value: 34.12<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: 31.82<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: 31.34<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.950000000000003, 41.310000000000002, 37.729999999999997, 34.32, 31.57, 30.949999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value: 47.95<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value: 41.31<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value: 37.73<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value: 34.32<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: 31.57<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: 30.95<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.659999999999997, 41.560000000000002, 35.789999999999999, 31.280000000000001, 29.32, 28.850000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value: 47.66<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value: 41.56<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value: 35.79<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value: 31.28<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: 29.32<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: 28.85<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [48.649999999999999, 47.609999999999999, 41.539999999999999, 35.090000000000003, 30.43, 28.510000000000002, 27.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value: 47.61<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value: 41.54<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value: 35.09<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value: 30.43<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value: 28.51<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value: 27.86<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.640000000000001, 41.57, 35.490000000000002, 30.940000000000001, 29.170000000000002, 28.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value: 47.64<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value: 41.57<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value: 35.49<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: 30.94<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: 29.17<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: 28.46<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.479999999999997, 39.670000000000002, 35.369999999999997, 29.920000000000002, 26.699999999999999, 26.16],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value: 47.48<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value: 39.67<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value: 35.37<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value: 29.92<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: 26.70<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: 26.16<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.899999999999999, 41.68, 36.590000000000003, 32.259999999999998, 29.809999999999999, 28.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value: 47.90<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value: 41.68<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value: 36.59<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: 32.26<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: 29.81<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: 28.83<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [48.649999999999999, 47.899999999999999, 41.740000000000002, 36.039999999999999, 31.52, 29.010000000000002, 27.98],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value: 47.90<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value: 41.74<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value: 36.04<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: 31.52<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: 29.01<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: 27.98<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.850000000000001, 41.729999999999997, 35.990000000000002, 31.32, 28.960000000000001, 27.710000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value: 47.85<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value: 41.73<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value: 35.99<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: 31.32<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: 28.96<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: 27.71<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.68, 39.93, 36.420000000000002, 31.640000000000001, 28.210000000000001, 26.920000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value: 47.68<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value: 39.93<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value: 36.42<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: 31.64<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: 28.21<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: 26.92<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 47.450000000000003, 39.289999999999999, 34.130000000000003, 29.48, 26.440000000000001, 25.079999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value: 47.45<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value: 39.29<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value: 34.13<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: 29.48<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: 26.44<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: 25.08<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [48.649999999999999, 47.439999999999998, 39.189999999999998, 33.590000000000003, 28.760000000000002, 25.73, 24.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value: 47.44<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value: 39.19<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value: 33.59<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: 28.76<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: 25.73<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: 24.56<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [48.649999999999999, 47.409999999999997, 39.149999999999999, 33.829999999999998, 29.09, 26.100000000000001, 24.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value: 47.41<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value: 39.15<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value: 33.83<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: 29.09<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: 26.10<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: 24.45<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.289999999999999, 34.740000000000002, 30.170000000000002, 26.82, 25.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value: 39.29<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value: 34.74<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: 30.17<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: 26.82<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: 25.25<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [48.649999999999999, 47.390000000000001, 39.18, 34.289999999999999, 30.109999999999999, 27.370000000000001, 27.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value: 47.39<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value: 39.18<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value: 34.29<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value: 30.11<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value: 27.37<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: 27.58<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.200000000000003, 34.159999999999997, 29.870000000000001, 27.100000000000001, 27.539999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value: 47.40<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value: 39.20<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value: 34.16<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value: 29.87<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value: 27.10<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value: 27.54<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.200000000000003, 34.289999999999999, 30.100000000000001, 27.300000000000001, 26.949999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value: 47.40<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value: 39.20<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value: 34.29<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value: 30.10<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value: 27.30<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: 26.95<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.539999999999999, 39.299999999999997, 35.109999999999999, 31.16, 28.359999999999999, 28.190000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value: 47.54<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value: 39.30<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value: 35.11<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value: 31.16<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value: 28.36<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: 28.19<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.18, 39.18, 32.950000000000003, 27.960000000000001, 25.539999999999999, 24.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value: 47.18<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value: 39.18<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value: 32.95<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value: 27.96<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value: 25.54<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value: 24.60<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [48.649999999999999, 47.18, 39.200000000000003, 32.5, 27.469999999999999, 24.98, 23.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value: 47.18<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value: 39.20<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value: 32.50<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value: 27.47<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value: 24.98<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value: 23.96<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.18, 39.219999999999999, 32.770000000000003, 27.77, 25.510000000000002, 24.309999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value: 47.18<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value: 39.22<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value: 32.77<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value: 27.77<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: 25.51<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: 24.31<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.310000000000002, 39.060000000000002, 34.310000000000002, 28.789999999999999, 25.68, 24.989999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value: 47.31<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value: 39.06<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value: 34.31<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value: 28.79<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value: 25.68<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: 24.99<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.359999999999999, 39.159999999999997, 33.869999999999997, 29.129999999999999, 26.239999999999998, 24.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value: 47.36<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value: 39.16<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value: 33.87<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value: 29.13<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: 26.24<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: 24.86<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [48.649999999999999, 47.340000000000003, 39.159999999999997, 33.460000000000001, 28.600000000000001, 25.739999999999998, 24.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value: 47.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value: 39.16<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value: 33.46<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value: 28.60<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: 25.74<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: 24.45<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.329999999999998, 39.149999999999999, 33.329999999999998, 28.34, 25.559999999999999, 23.989999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value: 47.33<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value: 39.15<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value: 33.33<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: 28.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: 25.56<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: 23.99<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.520000000000003, 39.170000000000002, 35.240000000000002, 30.440000000000001, 26.98, 25.57],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value: 47.52<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value: 39.17<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value: 35.24<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: 30.44<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: 26.98<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: 25.57<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.520000000000003, 32.109999999999999, 27.41, 24.23, 22.800000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value: 46.88<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value: 37.52<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value: 32.11<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value: 27.41<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: 24.23<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: 22.80<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.490000000000002, 31.789999999999999, 26.91, 23.77, 22.550000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value: 46.87<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value: 31.79<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value: 26.91<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: 23.77<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: 22.55<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.509999999999998, 31.98, 27.140000000000001, 23.920000000000002, 22.190000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value: 46.88<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value: 37.51<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value: 31.98<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: 27.14<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: 23.92<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: 22.19<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [48.649999999999999, 47, 37.549999999999997, 32.539999999999999, 27.789999999999999, 24.489999999999998, 22.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value: 47.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value: 37.55<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value: 32.54<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value: 27.79<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: 24.49<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: 22.96<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.509999999999998, 32.310000000000002, 27.859999999999999, 24.93, 25.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value: 46.87<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value: 37.51<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value: 32.31<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value: 27.86<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value: 24.93<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: 25.46<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.5, 32.189999999999998, 27.66, 24.690000000000001, 25.379999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value: 46.86<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value: 37.50<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value: 32.19<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value: 27.66<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value: 24.69<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value: 25.38<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.5, 32.240000000000002, 27.75, 24.760000000000002, 24.699999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value: 46.86<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value: 37.50<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value: 32.24<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value: 27.75<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value: 24.76<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: 24.70<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [48.649999999999999, 46.969999999999999, 37.539999999999999, 32.719999999999999, 28.329999999999998, 25.359999999999999, 25.789999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value: 46.97<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value: 37.54<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value: 32.72<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value: 28.33<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value: 25.36<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: 25.79<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 46.700000000000003, 37.490000000000002, 30.960000000000001, 25.82, 23.149999999999999, 21.920000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value: 46.70<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value: 30.96<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value: 25.82<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value: 23.15<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value: 21.92<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.509999999999998, 30.710000000000001, 25.579999999999998, 22.800000000000001, 21.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value: 46.69<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value: 37.51<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value: 30.71<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value: 25.58<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value: 22.80<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value: 21.45<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [48.649999999999999, 46.68, 37.490000000000002, 30.73, 25.620000000000001, 23.170000000000002, 21.809999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value: 46.68<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value: 30.73<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value: 25.62<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value: 23.17<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: 21.81<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [48.649999999999999, 46.909999999999997, 37.520000000000003, 32.07, 26.420000000000002, 23.469999999999999, 22.52],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value: 46.91<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value: 37.52<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value: 32.07<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value: 26.42<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value: 23.47<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value: 22.52<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 46.840000000000003, 37.5, 32.060000000000002, 27.260000000000002, 24.120000000000001, 22.690000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value: 46.84<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value: 37.50<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value: 32.06<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value: 27.26<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: 24.12<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: 22.69<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [48.649999999999999, 46.82, 37.490000000000002, 31.809999999999999, 26.93, 23.780000000000001, 22.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value: 46.82<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value: 31.81<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value: 26.93<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: 23.78<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: 22.44<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 46.82, 37.490000000000002, 31.66, 26.609999999999999, 23.52, 21.879999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value: 46.82<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value: 31.66<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: 26.61<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: 23.52<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: 21.88<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.049999999999997, 37.57, 32.880000000000003, 27.940000000000001, 24.539999999999999, 23.059999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value: 47.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value: 37.57<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value: 32.88<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: 27.94<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: 24.54<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: 23.06<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.359999999999999, 43.729999999999997, 39.009999999999998, 34.740000000000002, 31.890000000000001, 30.550000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2025<br />value: 48.36<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2030<br />value: 43.73<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2035<br />value: 39.01<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2040<br />value: 34.74<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2045<br />value: 31.89<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2050<br />value: 30.55<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12"],
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
      "y": [48.649999999999999, 48.380000000000003, 43.850000000000001, 37.990000000000002, 33.210000000000001, 30.440000000000001, 29.359999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value: 48.38<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value: 43.85<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value: 37.99<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: 33.21<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: 30.44<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: 29.36<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [48.649999999999999, 48.369999999999997, 43.780000000000001, 38.710000000000001, 34.210000000000001, 31.350000000000001, 29.77],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value: 48.37<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value: 43.78<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value: 38.71<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: 34.21<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: 31.35<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: 29.77<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [48.649999999999999, 48.25, 42.460000000000001, 38.75, 33.859999999999999, 30.07, 28.059999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value: 48.25<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value: 42.46<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value: 38.75<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: 33.86<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: 30.07<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: 28.06<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.390000000000001, 43.969999999999999, 40.060000000000002, 36.390000000000001, 33.909999999999997, 33.350000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2025<br />value: 48.39<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2030<br />value: 43.97<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2035<br />value: 40.06<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2040<br />value: 36.39<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2045<br />value: 33.91<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2050<br />value: 33.35<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20"],
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
      "y": [48.649999999999999, 48.399999999999999, 44.020000000000003, 39.57, 35.539999999999999, 32.950000000000003, 32.68],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value: 48.40<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value: 44.02<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value: 39.57<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value: 35.54<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value: 32.95<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: 32.68<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [48.649999999999999, 48.409999999999997, 43.939999999999998, 39.960000000000001, 36.140000000000001, 33.539999999999999, 32.509999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value: 48.41<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value: 43.94<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value: 39.96<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value: 36.14<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: 33.54<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: 32.51<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [48.649999999999999, 48.259999999999998, 42.57, 39.619999999999997, 35.689999999999998, 32.469999999999999, 31.120000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value: 48.26<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value: 42.57<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value: 39.62<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value: 35.69<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: 32.47<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: 31.12<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.920000000000002, 42.920000000000002, 37.07, 32.259999999999998, 30.100000000000001, 29.640000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2025<br />value: 47.92<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2030<br />value: 42.92<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2035<br />value: 37.07<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2040<br />value: 32.26<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2045<br />value: 30.10<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2050<br />value: 29.64<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4"],
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
      "y": [48.649999999999999, 47.93, 42.960000000000001, 36.140000000000001, 31.120000000000001, 29.09, 28.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value: 42.96<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value: 36.14<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value: 31.12<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value: 29.09<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value: 28.60<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [48.649999999999999, 47.93, 42.990000000000002, 36.579999999999998, 31.73, 29.960000000000001, 29.399999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value: 42.99<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value: 36.58<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: 31.73<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: 29.96<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: 29.40<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [48.649999999999999, 47.659999999999997, 40.289999999999999, 35.920000000000002, 30.120000000000001, 26.739999999999998, 26.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value: 47.66<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value: 40.29<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value: 35.92<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value: 30.12<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: 26.74<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: 26.03<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [48.649999999999999, 48.170000000000002, 43.200000000000003, 38, 33.32, 30.59, 29.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value: 48.17<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value: 43.20<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value: 38.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: 33.32<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: 30.59<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: 29.62<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5"],
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
      "y": [48.649999999999999, 48.159999999999997, 43.229999999999997, 37.25, 32.350000000000001, 29.699999999999999, 28.75],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value: 48.16<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value: 43.23<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value: 37.25<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: 32.35<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: 29.70<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: 28.75<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [48.649999999999999, 48.130000000000003, 43.219999999999999, 37.100000000000001, 32.049999999999997, 29.66, 28.57],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value: 48.13<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value: 43.22<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value: 37.10<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: 32.05<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: 29.66<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: 28.57<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.93, 40.780000000000001, 37.170000000000002, 31.66, 27.859999999999999, 26.48],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value: 40.78<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value: 37.17<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: 31.66<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: 27.86<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: 26.48<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.049999999999997, 42.020000000000003, 36.899999999999999, 32.159999999999997, 29.09, 27.670000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value: 48.05<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value: 42.02<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value: 36.90<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: 32.16<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: 29.09<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: 27.67<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [48.649999999999999, 48.020000000000003, 41.880000000000003, 35.990000000000002, 31.010000000000002, 28.010000000000002, 26.809999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value: 48.02<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value: 41.88<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value: 35.99<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: 31.01<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: 28.01<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: 26.81<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.009999999999998, 36.649999999999999, 31.760000000000002, 28.699999999999999, 27.039999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value: 48.04<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value: 42.01<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value: 36.65<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: 31.76<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: 28.70<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: 27.04<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [48.649999999999999, 48.100000000000001, 41.740000000000002, 37.869999999999997, 32.979999999999997, 29.219999999999999, 27.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value: 48.10<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value: 41.74<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value: 37.87<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: 32.98<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: 29.22<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: 27.26<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.030000000000001, 42.039999999999999, 37.590000000000003, 33.479999999999997, 30.579999999999998, 30.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value: 48.03<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value: 42.04<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value: 37.59<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value: 33.48<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: 30.58<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: 30.25<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [48.649999999999999, 48, 41.909999999999997, 37.18, 32.82, 29.960000000000001, 29.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value: 48.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value: 41.91<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value: 37.18<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value: 32.82<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value: 29.96<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: 29.96<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.049999999999997, 37.600000000000001, 33.460000000000001, 30.530000000000001, 29.710000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value: 48.04<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value: 42.05<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value: 37.60<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value: 33.46<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: 30.53<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: 29.71<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [48.649999999999999, 48.119999999999997, 41.82, 38.600000000000001, 34.369999999999997, 31, 29.82],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value: 48.12<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value: 41.82<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value: 38.60<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value: 34.37<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: 31.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: 29.82<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.759999999999998, 41.960000000000001, 35.719999999999999, 30.59, 28.309999999999999, 27.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value: 47.76<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value: 41.96<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value: 35.72<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value: 30.59<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value: 28.31<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: 27.60<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [48.649999999999999, 47.740000000000002, 41.969999999999999, 34.840000000000003, 29.620000000000001, 27.420000000000002, 26.66],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value: 47.74<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value: 41.97<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value: 34.84<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value: 29.62<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value: 27.42<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value: 26.66<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.75, 41.960000000000001, 35.340000000000003, 30.25, 28.199999999999999, 27.280000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value: 47.75<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value: 41.96<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value: 35.34<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: 30.25<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: 28.20<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: 27.28<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.649999999999999, 40.25, 35.950000000000003, 30.210000000000001, 26.800000000000001, 26.02],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value: 47.65<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value: 40.25<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value: 35.95<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value: 30.21<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: 26.80<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: 26.02<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.969999999999999, 42.020000000000003, 36.600000000000001, 31.649999999999999, 28.760000000000002, 27.5],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value: 47.97<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value: 42.02<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value: 36.60<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: 31.65<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: 28.76<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: 27.50<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [48.649999999999999, 47.93, 41.93, 35.770000000000003, 30.670000000000002, 27.82, 26.629999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value: 47.93<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value: 41.93<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value: 35.77<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: 30.67<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: 27.82<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: 26.63<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.899999999999999, 41.899999999999999, 35.710000000000001, 30.469999999999999, 27.82, 26.390000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value: 47.90<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value: 41.90<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value: 35.71<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: 30.47<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: 27.82<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: 26.39<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.920000000000002, 40.68, 37.100000000000001, 31.66, 27.84, 26.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value: 47.92<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value: 40.68<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value: 37.10<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: 31.66<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: 27.84<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: 26.42<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.170000000000002, 33.880000000000003, 29.100000000000001, 25.940000000000001, 24.550000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value: 47.40<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value: 33.88<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: 29.10<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: 25.94<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: 24.55<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [48.649999999999999, 47.420000000000002, 39.170000000000002, 33.509999999999998, 28.57, 25.460000000000001, 24.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value: 47.42<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value: 33.51<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value: 28.57<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: 25.46<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: 24.26<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [48.649999999999999, 47.43, 39.219999999999999, 33.810000000000002, 28.940000000000001, 25.800000000000001, 24.120000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value: 47.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value: 39.22<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value: 33.81<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: 28.94<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: 25.80<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: 24.12<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.159999999999997, 34.619999999999997, 29.850000000000001, 26.370000000000001, 24.690000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value: 39.16<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value: 34.62<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value: 29.85<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: 26.37<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: 24.69<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [48.649999999999999, 47.380000000000003, 39.210000000000001, 34.18, 29.809999999999999, 26.890000000000001, 27.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value: 47.38<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value: 39.21<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value: 34.18<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value: 29.81<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value: 26.89<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: 27.03<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [48.649999999999999, 47.369999999999997, 39.200000000000003, 34.07, 29.629999999999999, 26.670000000000002, 27.010000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value: 47.37<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value: 39.20<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value: 34.07<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value: 29.63<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value: 26.67<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value: 27.01<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [48.649999999999999, 47.380000000000003, 39.189999999999998, 34.140000000000001, 29.739999999999998, 26.73, 26.359999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value: 47.38<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value: 39.19<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value: 34.14<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value: 29.74<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value: 26.73<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: 26.36<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.539999999999999, 39.240000000000002, 35.07, 30.84, 27.789999999999999, 27.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value: 47.54<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value: 39.24<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value: 35.07<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value: 30.84<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value: 27.79<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: 27.60<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.200000000000003, 39.18, 32.75, 27.559999999999999, 25.050000000000001, 24.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value: 47.20<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value: 39.18<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value: 32.75<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value: 27.56<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value: 25.05<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value: 24.03<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [48.649999999999999, 47.189999999999998, 39.189999999999998, 32.259999999999998, 27.079999999999998, 24.530000000000001, 23.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value: 47.19<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value: 39.19<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value: 32.26<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value: 27.08<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value: 24.53<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value: 23.44<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.18, 39.170000000000002, 32.509999999999998, 27.370000000000001, 25.059999999999999, 23.850000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value: 47.18<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value: 32.51<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value: 27.37<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: 25.06<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: 23.85<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.359999999999999, 39.049999999999997, 34.170000000000002, 28.460000000000001, 25.27, 24.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value: 47.36<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value: 39.05<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value: 34.17<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value: 28.46<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value: 25.27<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: 24.46<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.359999999999999, 39.170000000000002, 33.770000000000003, 28.850000000000001, 25.760000000000002, 24.350000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value: 47.36<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value: 33.77<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value: 28.85<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: 25.76<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: 24.35<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [48.649999999999999, 47.350000000000001, 39.170000000000002, 33.409999999999997, 28.399999999999999, 25.32, 24.010000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value: 47.35<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value: 33.41<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value: 28.40<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: 25.32<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: 24.01<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.32, 39.170000000000002, 33.200000000000003, 28.039999999999999, 25.079999999999998, 23.48],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value: 47.32<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value: 33.20<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: 28.04<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: 25.08<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: 23.48<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.530000000000001, 39.130000000000003, 34.869999999999997, 29.73, 26.079999999999998, 24.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value: 47.53<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value: 39.13<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value: 34.87<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: 29.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: 26.08<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: 24.65<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.5, 32.060000000000002, 27.289999999999999, 24.079999999999998, 22.66],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value: 46.87<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value: 32.06<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value: 27.29<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: 24.08<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: 22.66<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.490000000000002, 31.780000000000001, 26.890000000000001, 23.760000000000002, 22.530000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value: 46.88<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value: 31.78<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value: 26.89<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: 23.76<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: 22.53<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.479999999999997, 31.920000000000002, 27.079999999999998, 23.920000000000002, 22.170000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value: 46.86<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value: 31.92<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: 27.08<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: 23.92<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: 22.17<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [48.649999999999999, 46.990000000000002, 37.530000000000001, 32.450000000000003, 27.640000000000001, 24.289999999999999, 22.789999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value: 46.99<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value: 37.53<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value: 32.45<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value: 27.64<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: 24.29<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: 22.79<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.520000000000003, 32.25, 27.73, 24.73, 25.27],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value: 46.86<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value: 37.52<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value: 32.25<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value: 27.73<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value: 24.73<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: 25.27<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.5, 32.149999999999999, 27.559999999999999, 24.550000000000001, 25.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value: 46.86<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value: 32.15<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value: 27.56<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value: 24.55<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value: 25.26<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [48.649999999999999, 46.840000000000003, 37.479999999999997, 32.210000000000001, 27.699999999999999, 24.68, 24.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value: 46.84<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value: 32.21<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value: 27.70<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value: 24.68<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: 24.62<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [48.649999999999999, 46.969999999999999, 37.520000000000003, 32.68, 28.219999999999999, 25.199999999999999, 25.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value: 46.97<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value: 37.52<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value: 32.68<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value: 28.22<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value: 25.20<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: 25.62<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.490000000000002, 30.940000000000001, 25.77, 23.050000000000001, 21.809999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value: 46.69<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value: 30.94<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value: 25.77<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value: 23.05<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value: 21.81<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [48.649999999999999, 46.659999999999997, 37.509999999999998, 30.789999999999999, 25.649999999999999, 22.850000000000001, 21.48],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value: 46.66<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value: 37.51<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value: 30.79<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value: 25.65<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value: 22.85<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value: 21.48<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [48.649999999999999, 46.68, 37.479999999999997, 30.719999999999999, 25.609999999999999, 23.149999999999999, 21.780000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value: 46.68<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value: 30.72<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value: 25.61<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value: 23.15<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: 21.78<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [48.649999999999999, 46.920000000000002, 37.490000000000002, 32.009999999999998, 26.370000000000001, 23.399999999999999, 22.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value: 46.92<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value: 32.01<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value: 26.37<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value: 23.40<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value: 22.42<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 46.840000000000003, 37.5, 32, 27.16, 23.969999999999999, 22.510000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value: 46.84<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value: 32.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value: 27.16<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: 23.97<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: 22.51<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [48.649999999999999, 46.829999999999998, 37.479999999999997, 31.780000000000001, 26.890000000000001, 23.77, 22.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value: 46.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value: 37.48<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value: 31.78<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value: 26.89<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: 23.77<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: 22.42<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 46.82, 37.490000000000002, 31.59, 26.5, 23.420000000000002, 21.780000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value: 46.82<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value: 31.59<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: 26.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: 23.42<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: 21.78<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.030000000000001, 37.5, 32.810000000000002, 27.899999999999999, 24.510000000000002, 22.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value: 47.03<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value: 37.50<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value: 32.81<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: 27.90<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: 24.51<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: 22.96<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.289999999999999, 43.170000000000002, 38.490000000000002, 34.509999999999998, 31.829999999999998, 30.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2025<br />value: 48.29<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2030<br />value: 43.17<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2035<br />value: 38.49<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2040<br />value: 34.51<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2045<br />value: 31.83<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2050<br />value: 30.58<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12"],
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
      "y": [48.649999999999999, 48.310000000000002, 43.329999999999998, 37.659999999999997, 33.079999999999998, 30.420000000000002, 29.370000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value: 48.31<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value: 43.33<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value: 37.66<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: 33.08<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: 30.42<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: 29.37<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [48.649999999999999, 48.310000000000002, 43.240000000000002, 38.280000000000001, 34.039999999999999, 31.350000000000001, 29.84],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value: 48.31<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value: 43.24<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value: 38.28<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: 34.04<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: 31.35<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: 29.84<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [48.649999999999999, 48.170000000000002, 42.140000000000001, 38.259999999999998, 33.770000000000003, 30.129999999999999, 28.309999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value: 48.17<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value: 42.14<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value: 38.26<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: 33.77<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: 30.13<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: 28.31<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.299999999999997, 43.340000000000003, 39.390000000000001, 36.079999999999998, 33.890000000000001, 33.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2025<br />value: 48.30<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2030<br />value: 43.34<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2035<br />value: 39.39<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2040<br />value: 36.08<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2045<br />value: 33.89<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2050<br />value: 33.58<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20"],
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
      "y": [48.649999999999999, 48.310000000000002, 43.420000000000002, 38.990000000000002, 35.299999999999997, 32.969999999999999, 32.880000000000003],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value: 48.31<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value: 43.42<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value: 38.99<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value: 35.30<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: 32.97<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: 32.88<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [48.649999999999999, 48.299999999999997, 43.32, 39.32, 35.909999999999997, 33.590000000000003, 32.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value: 48.30<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value: 43.32<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value: 39.32<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value: 35.91<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: 33.59<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: 32.83<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [48.649999999999999, 48.149999999999999, 42.149999999999999, 38.899999999999999, 35.270000000000003, 32.340000000000003, 31.34],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value: 48.15<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value: 42.15<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value: 38.90<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value: 35.27<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: 32.34<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: 31.34<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.829999999999998, 42.380000000000003, 36.630000000000003, 32, 30.050000000000001, 29.68],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2025<br />value: 47.83<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2030<br />value: 42.38<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2035<br />value: 36.63<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2040<br />value: 32.00<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2045<br />value: 30.05<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2050<br />value: 29.68<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4"],
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
      "y": [48.649999999999999, 47.82, 42.409999999999997, 35.829999999999998, 31.030000000000001, 29.079999999999998, 28.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value: 47.82<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value: 42.41<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value: 35.83<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value: 31.03<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value: 29.08<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value: 28.58<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [48.649999999999999, 47.829999999999998, 42.409999999999997, 36.280000000000001, 31.629999999999999, 29.780000000000001, 29.18],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value: 47.83<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value: 42.41<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value: 36.28<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: 31.63<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: 29.78<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: 29.18<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [48.649999999999999, 47.630000000000003, 40.170000000000002, 35.850000000000001, 30.100000000000001, 26.789999999999999, 26.09],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value: 47.63<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value: 40.17<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value: 35.85<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value: 30.10<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: 26.79<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: 26.09<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [48.649999999999999, 48.07, 42.719999999999999, 37.539999999999999, 33.119999999999997, 30.600000000000001, 29.68],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value: 48.07<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value: 42.72<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value: 37.54<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: 33.12<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: 30.60<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: 29.68<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5"],
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
      "y": [48.649999999999999, 48.090000000000003, 42.799999999999997, 36.979999999999997, 32.369999999999997, 29.809999999999999, 28.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value: 48.09<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value: 42.80<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value: 36.98<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: 32.37<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: 29.81<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: 28.86<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [48.649999999999999, 48.030000000000001, 42.670000000000002, 36.850000000000001, 32.100000000000001, 29.77, 28.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value: 48.03<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value: 42.67<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value: 36.85<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: 32.10<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: 29.77<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: 28.65<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.880000000000003, 40.579999999999998, 37.009999999999998, 31.629999999999999, 27.93, 26.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value: 47.88<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value: 40.58<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value: 37.01<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: 31.63<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: 27.93<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: 26.56<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.049999999999997, 42, 36.979999999999997, 32.630000000000003, 29.780000000000001, 28.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value: 48.05<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value: 42.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value: 36.98<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: 32.63<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: 29.78<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: 28.44<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [48.649999999999999, 48.030000000000001, 41.869999999999997, 36.149999999999999, 31.41, 28.559999999999999, 27.41],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value: 48.03<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value: 41.87<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value: 36.15<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: 31.41<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: 28.56<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: 27.41<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [48.649999999999999, 48.049999999999997, 42.009999999999998, 36.82, 32.310000000000002, 29.48, 27.879999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value: 48.05<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value: 42.01<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value: 36.82<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: 32.31<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: 29.48<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: 27.88<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [48.649999999999999, 48.049999999999997, 41.579999999999998, 37.490000000000002, 32.93, 29.359999999999999, 27.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value: 48.05<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value: 41.58<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value: 37.49<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: 32.93<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: 29.36<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: 27.60<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.030000000000001, 37.68, 33.969999999999999, 31.48, 31.27],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value: 48.04<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value: 42.03<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value: 37.68<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value: 33.97<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: 31.48<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: 31.27<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [48.649999999999999, 48.020000000000003, 41.990000000000002, 37.280000000000001, 33.299999999999997, 30.719999999999999, 30.780000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value: 48.02<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value: 41.99<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value: 37.28<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value: 33.30<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value: 30.72<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: 30.78<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [48.649999999999999, 48.039999999999999, 42.009999999999998, 37.609999999999999, 33.840000000000003, 31.239999999999998, 30.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value: 48.04<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value: 42.01<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value: 37.61<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value: 33.84<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: 31.24<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: 30.56<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [48.649999999999999, 48.039999999999999, 41.560000000000002, 38.100000000000001, 34.390000000000001, 31.48, 30.59],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value: 48.04<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value: 41.56<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value: 38.10<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value: 34.39<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: 31.48<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: 30.59<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.729999999999997, 41.850000000000001, 35.829999999999998, 31.010000000000002, 28.829999999999998, 28.219999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value: 47.73<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value: 41.85<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value: 35.83<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value: 31.01<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: 28.83<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: 28.22<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [48.649999999999999, 47.710000000000001, 41.810000000000002, 35.100000000000001, 30.129999999999999, 27.98, 27.27],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value: 47.71<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value: 41.81<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value: 35.10<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value: 30.13<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value: 27.98<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value: 27.27<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.710000000000001, 41.82, 35.469999999999999, 30.670000000000002, 28.75, 27.920000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value: 47.71<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value: 41.82<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value: 35.47<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: 30.67<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: 28.75<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: 27.92<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.609999999999999, 40.090000000000003, 35.780000000000001, 30.059999999999999, 26.760000000000002, 26.039999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value: 47.61<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value: 40.09<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value: 35.78<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value: 30.06<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value: 26.76<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: 26.04<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.920000000000002, 41.920000000000002, 36.609999999999999, 32.060000000000002, 29.359999999999999, 28.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value: 47.92<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value: 41.92<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value: 36.61<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: 32.06<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: 29.36<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: 28.25<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [48.649999999999999, 47.909999999999997, 41.869999999999997, 35.950000000000003, 31.18, 28.460000000000001, 27.309999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value: 47.91<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value: 41.87<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value: 35.95<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: 31.18<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: 28.46<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: 27.31<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.880000000000003, 41.869999999999997, 35.899999999999999, 30.949999999999999, 28.390000000000001, 27.059999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value: 47.88<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value: 41.87<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value: 35.90<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: 30.95<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: 28.39<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: 27.06<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.840000000000003, 40.439999999999998, 36.880000000000003, 31.600000000000001, 27.920000000000002, 26.530000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value: 47.84<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value: 40.44<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value: 36.88<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: 31.60<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: 27.92<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: 26.53<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 47.43, 39.259999999999998, 34.009999999999998, 29.27, 26.09, 24.710000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value: 47.43<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value: 39.26<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value: 34.01<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value: 29.27<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: 26.09<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: 24.71<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [48.649999999999999, 47.420000000000002, 39.18, 33.509999999999998, 28.559999999999999, 25.449999999999999, 24.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value: 47.42<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value: 33.51<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value: 28.56<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: 25.45<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: 24.25<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.170000000000002, 33.780000000000001, 28.93, 25.780000000000001, 24.09],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value: 47.40<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value: 33.78<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: 28.93<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: 25.78<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: 24.09<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.579999999999998, 39.310000000000002, 34.75, 29.93, 26.41, 24.73],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value: 47.58<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value: 39.31<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value: 34.75<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: 29.93<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: 26.41<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: 24.73<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [48.649999999999999, 47.390000000000001, 39.240000000000002, 34.210000000000001, 29.82, 26.890000000000001, 27.050000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value: 47.39<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value: 39.24<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value: 34.21<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value: 29.82<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value: 26.89<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: 27.05<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [48.649999999999999, 47.369999999999997, 39.189999999999998, 34.030000000000001, 29.539999999999999, 26.57, 27.030000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value: 47.37<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value: 39.19<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value: 34.03<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value: 29.54<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value: 26.57<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value: 27.03<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [48.649999999999999, 47.409999999999997, 39.299999999999997, 34.310000000000002, 30.010000000000002, 27.07, 26.640000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value: 47.41<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value: 39.30<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value: 34.31<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value: 30.01<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value: 27.07<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: 26.64<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.280000000000001, 35.090000000000003, 30.899999999999999, 27.829999999999998, 27.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value: 39.28<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value: 35.09<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value: 30.90<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value: 27.83<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: 27.62<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.189999999999998, 39.18, 32.75, 27.579999999999998, 25.07, 24.039999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value: 47.19<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value: 32.75<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value: 27.58<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value: 25.07<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value: 24.04<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [48.649999999999999, 47.170000000000002, 39.149999999999999, 32.340000000000003, 27.16, 24.559999999999999, 23.469999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value: 47.17<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value: 39.15<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value: 32.34<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value: 27.16<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value: 24.56<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value: 23.47<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.18, 39.170000000000002, 32.520000000000003, 27.390000000000001, 25.079999999999998, 23.870000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value: 47.18<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value: 39.17<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value: 32.52<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value: 27.39<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: 25.08<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: 23.87<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.18, 34.350000000000001, 28.640000000000001, 25.449999999999999, 24.620000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value: 47.40<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value: 34.35<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value: 28.64<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value: 25.45<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: 24.62<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.369999999999997, 39.18, 33.859999999999999, 28.960000000000001, 25.890000000000001, 24.469999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value: 47.37<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value: 33.86<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value: 28.96<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: 25.89<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: 24.47<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [48.649999999999999, 47.350000000000001, 39.159999999999997, 33.329999999999998, 28.309999999999999, 25.25, 23.940000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value: 47.35<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value: 39.16<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value: 33.33<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value: 28.31<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: 25.25<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: 23.94<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.329999999999998, 39.18, 33.280000000000001, 28.129999999999999, 25.149999999999999, 23.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value: 47.33<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value: 33.28<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: 28.13<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: 25.15<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: 23.56<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.18, 35.159999999999997, 30.120000000000001, 26.469999999999999, 24.949999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value: 39.18<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value: 35.16<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: 30.12<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: 26.47<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: 24.95<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.530000000000001, 32.090000000000003, 27.329999999999998, 24.149999999999999, 22.73],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value: 46.88<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value: 37.53<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value: 32.09<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value: 27.33<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: 24.15<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: 22.73<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.490000000000002, 31.850000000000001, 27.02, 23.91, 22.699999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value: 46.88<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value: 31.85<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value: 27.02<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: 23.91<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: 22.70<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [48.649999999999999, 46.890000000000001, 37.520000000000003, 32.030000000000001, 27.23, 24.059999999999999, 22.329999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value: 46.89<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value: 37.52<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value: 32.03<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: 27.23<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: 24.06<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: 22.33<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [48.649999999999999, 47, 37.549999999999997, 32.520000000000003, 27.739999999999998, 24.390000000000001, 22.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value: 47.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value: 37.55<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value: 32.52<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value: 27.74<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: 24.39<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: 22.83<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.509999999999998, 32.329999999999998, 27.890000000000001, 24.969999999999999, 25.489999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value: 46.87<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value: 32.33<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value: 27.89<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value: 24.97<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value: 25.49<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.509999999999998, 32.229999999999997, 27.690000000000001, 24.75, 25.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value: 46.87<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value: 32.23<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value: 27.69<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value: 24.75<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value: 25.46<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [48.649999999999999, 46.850000000000001, 37.490000000000002, 32.219999999999999, 27.710000000000001, 24.670000000000002, 24.609999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value: 46.85<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value: 32.22<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value: 27.71<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value: 24.67<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: 24.61<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [48.649999999999999, 46.969999999999999, 37.509999999999998, 32.670000000000002, 28.199999999999999, 25.18, 25.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value: 46.97<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value: 32.67<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value: 28.20<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value: 25.18<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: 25.60<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.5, 30.949999999999999, 25.780000000000001, 23.07, 21.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value: 46.69<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value: 37.50<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value: 30.95<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value: 25.78<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value: 23.07<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value: 21.83<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.5, 30.719999999999999, 25.539999999999999, 22.75, 21.399999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value: 46.69<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value: 37.50<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value: 30.72<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value: 25.54<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value: 22.75<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value: 21.40<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.490000000000002, 30.719999999999999, 25.609999999999999, 23.170000000000002, 21.800000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value: 46.69<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value: 30.72<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value: 25.61<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value: 23.17<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: 21.80<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [48.649999999999999, 46.920000000000002, 37.509999999999998, 32.079999999999998, 26.43, 23.420000000000002, 22.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value: 46.92<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value: 32.08<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value: 26.43<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value: 23.42<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value: 22.44<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 46.850000000000001, 37.520000000000003, 32.060000000000002, 27.23, 24.079999999999998, 22.640000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value: 46.85<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value: 37.52<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value: 32.06<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value: 27.23<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: 24.08<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: 22.64<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [48.649999999999999, 46.829999999999998, 37.479999999999997, 31.780000000000001, 26.879999999999999, 23.760000000000002, 22.41],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value: 46.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value: 37.48<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value: 31.78<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value: 26.88<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: 23.76<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: 22.41<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 46.82, 37.5, 31.640000000000001, 26.57, 23.48, 21.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value: 46.82<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value: 37.50<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value: 31.64<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: 26.57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: 23.48<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: 21.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.030000000000001, 37.509999999999998, 32.840000000000003, 27.940000000000001, 24.559999999999999, 23.02],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value: 47.03<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value: 37.51<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value: 32.84<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: 27.94<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: 24.56<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: 23.02<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.619999999999997, 38.060000000000002, 34.259999999999998, 31.780000000000001, 30.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2030<br />value: 42.62<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2035<br />value: 38.06<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2040<br />value: 34.26<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2045<br />value: 31.78<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2050<br />value: 30.65<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.619999999999997, 37.200000000000003, 32.880000000000003, 30.43, 29.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value: 42.62<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value: 37.20<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: 32.88<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: 30.43<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: 29.45<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.560000000000002, 37.75, 33.710000000000001, 31.27, 29.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value: 42.56<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value: 37.75<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: 33.71<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: 31.27<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: 29.86<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [48.649999999999999, 48, 41.490000000000002, 37.340000000000003, 33.140000000000001, 29.870000000000001, 28.359999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value: 48.00<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value: 41.49<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value: 37.34<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: 33.14<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: 29.87<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: 28.36<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.719999999999999, 38.719999999999999, 35.630000000000003, 33.670000000000002, 33.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2030<br />value: 42.72<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2035<br />value: 38.72<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2040<br />value: 35.63<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2045<br />value: 33.67<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2050<br />value: 33.58<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20"],
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
      "y": [48.649999999999999, 48.210000000000001, 42.700000000000003, 38.270000000000003, 34.840000000000003, 32.729999999999997, 32.899999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value: 48.21<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value: 42.70<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value: 38.27<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value: 34.84<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: 32.73<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: 32.90<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [48.649999999999999, 48.200000000000003, 42.649999999999999, 38.579999999999998, 35.420000000000002, 33.340000000000003, 32.880000000000003],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value: 48.20<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value: 42.65<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value: 38.58<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: 35.42<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: 33.34<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: 32.88<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [48.649999999999999, 47.969999999999999, 41.469999999999999, 37.880000000000003, 34.5, 31.969999999999999, 31.420000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value: 47.97<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value: 41.47<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value: 37.88<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value: 34.50<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: 31.97<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: 31.42<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.689999999999998, 41.729999999999997, 36.119999999999997, 31.699999999999999, 30.100000000000001, 29.77],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2025<br />value: 47.69<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2030<br />value: 41.73<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2035<br />value: 36.12<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2040<br />value: 31.70<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2045<br />value: 30.10<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2050<br />value: 29.77<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4"],
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
      "y": [48.649999999999999, 47.68, 41.789999999999999, 35.340000000000003, 30.940000000000001, 29.199999999999999, 28.739999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value: 47.68<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value: 41.79<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value: 35.34<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value: 30.94<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value: 29.20<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value: 28.74<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [48.649999999999999, 47.670000000000002, 41.710000000000001, 35.810000000000002, 31.370000000000001, 29.989999999999998, 29.41],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value: 47.67<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value: 41.71<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value: 35.81<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: 31.37<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: 29.99<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: 29.41<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [48.649999999999999, 47.460000000000001, 39.630000000000003, 35.390000000000001, 29.920000000000002, 26.710000000000001, 26.16],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value: 47.46<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value: 39.63<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value: 35.39<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value: 29.92<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: 26.71<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: 26.16<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.950000000000003, 42.009999999999998, 37.020000000000003, 32.799999999999997, 30.52, 29.690000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value: 47.95<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value: 42.01<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value: 37.02<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: 32.80<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: 30.52<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: 29.69<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5"],
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
      "y": [48.649999999999999, 47.960000000000001, 42.090000000000003, 36.549999999999997, 32.18, 29.809999999999999, 28.940000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value: 47.96<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value: 42.09<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value: 36.55<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: 32.18<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: 29.81<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: 28.94<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.909999999999997, 42.090000000000003, 36.450000000000003, 31.920000000000002, 29.739999999999998, 28.670000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value: 47.91<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value: 42.09<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value: 36.45<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: 31.92<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: 29.74<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: 28.67<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.649999999999999, 39.909999999999997, 36.5, 31.84, 28.440000000000001, 27.129999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value: 47.65<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value: 39.91<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value: 36.50<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: 31.84<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: 28.44<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: 27.13<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 48.060000000000002, 41.880000000000003, 37.100000000000001, 33.049999999999997, 30.469999999999999, 29.260000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value: 48.06<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value: 41.88<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value: 37.10<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: 33.05<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: 30.47<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: 29.26<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [48.649999999999999, 48.060000000000002, 41.859999999999999, 36.359999999999999, 31.920000000000002, 29.300000000000001, 28.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value: 48.06<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value: 41.86<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value: 36.36<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: 31.92<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: 29.30<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: 28.25<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [48.649999999999999, 48.060000000000002, 41.869999999999997, 36.850000000000001, 32.560000000000002, 29.989999999999998, 28.489999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value: 48.06<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value: 41.87<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value: 36.85<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: 32.56<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: 29.99<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: 28.49<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.960000000000001, 41.299999999999997, 37.090000000000003, 32.829999999999998, 29.48, 27.940000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value: 47.96<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value: 41.30<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value: 37.09<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: 32.83<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: 29.48<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: 27.94<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 48.039999999999999, 41.909999999999997, 37.630000000000003, 34.210000000000001, 32.039999999999999, 31.98],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value: 48.04<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value: 41.91<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value: 37.63<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value: 34.21<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: 32.04<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: 31.98<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [48.649999999999999, 48.039999999999999, 41.899999999999999, 37.32, 33.710000000000001, 31.469999999999999, 31.649999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value: 48.04<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value: 41.90<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value: 37.32<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value: 33.71<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: 31.47<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: 31.65<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [48.649999999999999, 48.049999999999997, 41.909999999999997, 37.579999999999998, 34.119999999999997, 31.82, 31.34],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value: 48.05<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value: 41.91<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value: 37.58<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value: 34.12<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: 31.82<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: 31.34<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.950000000000003, 41.310000000000002, 37.729999999999997, 34.32, 31.57, 30.949999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value: 47.95<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value: 41.31<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value: 37.73<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value: 34.32<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: 31.57<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: 30.95<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.659999999999997, 41.560000000000002, 35.789999999999999, 31.280000000000001, 29.32, 28.850000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value: 47.66<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value: 41.56<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value: 35.79<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value: 31.28<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: 29.32<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: 28.85<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [48.649999999999999, 47.609999999999999, 41.539999999999999, 35.090000000000003, 30.43, 28.510000000000002, 27.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value: 47.61<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value: 41.54<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value: 35.09<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value: 30.43<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value: 28.51<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value: 27.86<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.640000000000001, 41.57, 35.490000000000002, 30.940000000000001, 29.170000000000002, 28.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value: 47.64<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value: 41.57<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value: 35.49<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: 30.94<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: 29.17<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: 28.46<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.479999999999997, 39.670000000000002, 35.369999999999997, 29.920000000000002, 26.699999999999999, 26.16],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value: 47.48<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value: 39.67<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value: 35.37<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value: 29.92<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: 26.70<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: 26.16<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.899999999999999, 41.68, 36.590000000000003, 32.259999999999998, 29.809999999999999, 28.829999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value: 47.90<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value: 41.68<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value: 36.59<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: 32.26<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: 29.81<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: 28.83<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [48.649999999999999, 47.899999999999999, 41.740000000000002, 36.039999999999999, 31.52, 29.010000000000002, 27.98],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value: 47.90<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value: 41.74<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value: 36.04<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: 31.52<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: 29.01<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: 27.98<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.850000000000001, 41.729999999999997, 35.990000000000002, 31.32, 28.960000000000001, 27.710000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value: 47.85<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value: 41.73<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value: 35.99<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: 31.32<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: 28.96<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: 27.71<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.68, 39.93, 36.420000000000002, 31.640000000000001, 28.210000000000001, 26.920000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value: 47.68<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value: 39.93<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value: 36.42<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: 31.64<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: 28.21<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: 26.92<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 47.450000000000003, 39.289999999999999, 34.130000000000003, 29.48, 26.440000000000001, 25.079999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value: 47.45<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value: 39.29<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value: 34.13<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: 29.48<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: 26.44<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: 25.08<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [48.649999999999999, 47.439999999999998, 39.189999999999998, 33.590000000000003, 28.760000000000002, 25.73, 24.559999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value: 47.44<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value: 39.19<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value: 33.59<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: 28.76<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: 25.73<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: 24.56<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [48.649999999999999, 47.409999999999997, 39.149999999999999, 33.829999999999998, 29.09, 26.100000000000001, 24.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value: 47.41<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value: 39.15<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value: 33.83<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: 29.09<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: 26.10<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: 24.45<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [48.649999999999999, 47.549999999999997, 39.289999999999999, 34.740000000000002, 30.170000000000002, 26.82, 25.25],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value: 47.55<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value: 39.29<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value: 34.74<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: 30.17<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: 26.82<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: 25.25<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [48.649999999999999, 47.390000000000001, 39.18, 34.289999999999999, 30.109999999999999, 27.370000000000001, 27.579999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value: 47.39<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value: 39.18<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value: 34.29<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value: 30.11<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value: 27.37<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: 27.58<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.200000000000003, 34.159999999999997, 29.870000000000001, 27.100000000000001, 27.539999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value: 47.40<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value: 39.20<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value: 34.16<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value: 29.87<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value: 27.10<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value: 27.54<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [48.649999999999999, 47.399999999999999, 39.200000000000003, 34.289999999999999, 30.100000000000001, 27.300000000000001, 26.949999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value: 47.40<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value: 39.20<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value: 34.29<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value: 30.10<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value: 27.30<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: 26.95<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [48.649999999999999, 47.539999999999999, 39.299999999999997, 35.109999999999999, 31.16, 28.359999999999999, 28.190000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value: 47.54<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value: 39.30<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value: 35.11<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value: 31.16<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value: 28.36<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: 28.19<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [48.649999999999999, 47.18, 39.18, 32.950000000000003, 27.960000000000001, 25.539999999999999, 24.600000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value: 47.18<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value: 39.18<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value: 32.95<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value: 27.96<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value: 25.54<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value: 24.60<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [48.649999999999999, 47.18, 39.200000000000003, 32.5, 27.469999999999999, 24.98, 23.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value: 47.18<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value: 39.20<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value: 32.50<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value: 27.47<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value: 24.98<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value: 23.96<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [48.649999999999999, 47.18, 39.219999999999999, 32.770000000000003, 27.77, 25.510000000000002, 24.309999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value: 47.18<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value: 39.22<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value: 32.77<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value: 27.77<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: 25.51<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: 24.31<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [48.649999999999999, 47.310000000000002, 39.060000000000002, 34.310000000000002, 28.789999999999999, 25.68, 24.989999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value: 47.31<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value: 39.06<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value: 34.31<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value: 28.79<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value: 25.68<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: 24.99<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [48.649999999999999, 47.359999999999999, 39.159999999999997, 33.869999999999997, 29.129999999999999, 26.239999999999998, 24.859999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value: 47.36<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value: 39.16<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value: 33.87<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value: 29.13<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: 26.24<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: 24.86<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [48.649999999999999, 47.340000000000003, 39.159999999999997, 33.460000000000001, 28.600000000000001, 25.739999999999998, 24.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value: 47.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value: 39.16<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value: 33.46<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value: 28.60<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: 25.74<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: 24.45<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 47.329999999999998, 39.149999999999999, 33.329999999999998, 28.34, 25.559999999999999, 23.989999999999998],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value: 47.33<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value: 39.15<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value: 33.33<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: 28.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: 25.56<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: 23.99<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.520000000000003, 39.170000000000002, 35.240000000000002, 30.440000000000001, 26.98, 25.57],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value: 47.52<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value: 39.17<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value: 35.24<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: 30.44<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: 26.98<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: 25.57<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.520000000000003, 32.109999999999999, 27.41, 24.23, 22.800000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value: 46.88<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value: 37.52<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value: 32.11<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value: 27.41<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: 24.23<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: 22.80<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.490000000000002, 31.789999999999999, 26.91, 23.77, 22.550000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value: 46.87<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value: 31.79<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value: 26.91<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: 23.77<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: 22.55<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [48.649999999999999, 46.880000000000003, 37.509999999999998, 31.98, 27.140000000000001, 23.920000000000002, 22.190000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value: 46.88<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value: 37.51<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value: 31.98<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: 27.14<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: 23.92<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: 22.19<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [48.649999999999999, 47, 37.549999999999997, 32.539999999999999, 27.789999999999999, 24.489999999999998, 22.960000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value: 47.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value: 37.55<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value: 32.54<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value: 27.79<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: 24.49<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: 22.96<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [48.649999999999999, 46.869999999999997, 37.509999999999998, 32.310000000000002, 27.859999999999999, 24.93, 25.460000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value: 46.87<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value: 37.51<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value: 32.31<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value: 27.86<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value: 24.93<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: 25.46<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.5, 32.189999999999998, 27.66, 24.690000000000001, 25.379999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value: 46.86<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value: 37.50<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value: 32.19<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value: 27.66<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value: 24.69<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value: 25.38<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [48.649999999999999, 46.859999999999999, 37.5, 32.240000000000002, 27.75, 24.760000000000002, 24.699999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value: 46.86<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value: 37.50<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value: 32.24<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value: 27.75<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value: 24.76<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: 24.70<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [48.649999999999999, 46.969999999999999, 37.539999999999999, 32.719999999999999, 28.329999999999998, 25.359999999999999, 25.789999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value: 46.97<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value: 37.54<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value: 32.72<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value: 28.33<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value: 25.36<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: 25.79<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [48.649999999999999, 46.700000000000003, 37.490000000000002, 30.960000000000001, 25.82, 23.149999999999999, 21.920000000000002],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value: 46.70<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value: 30.96<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value: 25.82<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value: 23.15<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value: 21.92<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [48.649999999999999, 46.689999999999998, 37.509999999999998, 30.710000000000001, 25.579999999999998, 22.800000000000001, 21.449999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value: 46.69<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value: 37.51<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value: 30.71<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value: 25.58<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value: 22.80<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value: 21.45<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [48.649999999999999, 46.68, 37.490000000000002, 30.73, 25.620000000000001, 23.170000000000002, 21.809999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value: 46.68<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value: 30.73<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value: 25.62<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value: 23.17<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: 21.81<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [48.649999999999999, 46.909999999999997, 37.520000000000003, 32.07, 26.420000000000002, 23.469999999999999, 22.52],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value: 46.91<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value: 37.52<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value: 32.07<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value: 26.42<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value: 23.47<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value: 22.52<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [48.649999999999999, 46.840000000000003, 37.5, 32.060000000000002, 27.260000000000002, 24.120000000000001, 22.690000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value: 46.84<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value: 37.50<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value: 32.06<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value: 27.26<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: 24.12<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: 22.69<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [48.649999999999999, 46.82, 37.490000000000002, 31.809999999999999, 26.93, 23.780000000000001, 22.440000000000001],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value: 46.82<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value: 31.81<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value: 26.93<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: 23.78<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: 22.44<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [48.649999999999999, 46.82, 37.490000000000002, 31.66, 26.609999999999999, 23.52, 21.879999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value: 46.82<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value: 37.49<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value: 31.66<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: 26.61<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: 23.52<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: 21.88<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [48.649999999999999, 47.049999999999997, 37.57, 32.880000000000003, 27.940000000000001, 24.539999999999999, 23.059999999999999],
      "text": ["period: 2020<br />value: 48.65<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value: 47.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value: 37.57<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value: 32.88<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: 27.94<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: 24.54<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: 23.06<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
    },
    {
      "x": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      "y": [49.259999999999998, 49.57, 48.939999999999998, 49.189999999999998, 46.539999999999999, 48.450000000000003, 46.740000000000002, 46.450000000000003, 46.130000000000003, 44.359999999999999, 45.200000000000003, 46.020000000000003, 46.880000000000003, 46.920000000000002, 46.640000000000001, 43.200000000000003, 45.950000000000003],
      "text": ["period: 2005<br />value: 49.26<br />scenario: historical", "period: 2006<br />value: 49.57<br />scenario: historical", "period: 2007<br />value: 48.94<br />scenario: historical", "period: 2008<br />value: 49.19<br />scenario: historical", "period: 2009<br />value: 46.54<br />scenario: historical", "period: 2010<br />value: 48.45<br />scenario: historical", "period: 2011<br />value: 46.74<br />scenario: historical", "period: 2012<br />value: 46.45<br />scenario: historical", "period: 2013<br />value: 46.13<br />scenario: historical", "period: 2014<br />value: 44.36<br />scenario: historical", "period: 2015<br />value: 45.20<br />scenario: historical", "period: 2016<br />value: 46.02<br />scenario: historical", "period: 2017<br />value: 46.88<br />scenario: historical", "period: 2018<br />value: 46.92<br />scenario: historical", "period: 2019<br />value: 46.64<br />scenario: historical", "period: 2020<br />value: 43.20<br />scenario: historical", "period: 2021<br />value: 45.95<br />scenario: historical"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    }
  ],
  "layout": {
    "margin": {
      "t": 35.925280199252796,
      "r": 9.9626400996264,
      "b": 56.787048567870485,
      "l": 30.884184308841846
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 19.9252801992528
    },
    "xaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [2002.75, 2052.25],
      "tickmode": "array",
      "ticktext": ["2010", "2020", "2030", "2040", "2050"],
      "tickvals": [2010, 2020, 2030, 2040, 2050],
      "categoryorder": "array",
      "categoryarray": ["2010", "2020", "2030", "2040", "2050"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 4.9813200498132,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 15.940224159402243
      },
      "tickangle": -90,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 0.90569455451149117,
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
      "range": [-2.4785000000000004, 52.048500000000004],
      "tickmode": "array",
      "ticktext": ["0", "10", "20", "30", "40", "50"],
      "tickvals": [0, 10, 20, 29.999999999999996, 40, 50],
      "categoryorder": "array",
      "categoryarray": ["0", "10", "20", "30", "40", "50"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 4.9813200498132,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 15.940224159402243
      },
      "tickangle": -0,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 0.90569455451149117,
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
        "size": 19.9252801992528
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
    "4078e125931": {
      "yintercept": {},
      "type": "scatter"
    },
    "40784fce1aee": {
      "xintercept": {}
    },
    "407877594502": {
      "x": {},
      "y": {},
      "linetype": {},
      "colour": {}
    },
    "4078351622d": {
      "x": {},
      "y": {},
      "shape": {},
      "fill": {}
    },
    "40785fe03760": {
      "x": {},
      "y": {}
    }
  },
  "cur_data": "4078e125931",
  "visdat": {
    "4078e125931": ["function (y) ", "x"],
    "40784fce1aee": ["function (y) ", "x"],
    "407877594502": ["function (y) ", "x"],
    "4078351622d": ["function (y) ", "x"],
    "40785fe03760": ["function (y) ", "x"]
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

  
