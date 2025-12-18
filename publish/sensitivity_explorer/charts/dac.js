(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('dac') 

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
      "y": [-104.37, 4.9700000000000006],
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
      "y": [0, -0.28999999999999998, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -0.73<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12"],
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
      "y": [0, -0.23999999999999999, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2025<br />value:  -0.38<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2030<br />value:  -0.82<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20"],
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
      "y": [0, -0.32000000000000001, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.83999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:  -0.84<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [0, -0.34000000000000002, -0.82999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:  -0.34<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:  -0.83<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:  -0.35<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:  -0.80<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.79000000000000004, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3", "period: 2030<br />value:  -0.79<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.91000000000000003, -1.74, -5.3799999999999999, -15.44, -36.490000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2025<br />value:  -0.37<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2030<br />value:  -0.91<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -1.74<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -5.38<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2045<br />value: -15.44<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -36.49<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4"],
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
      "y": [0, -0.37, -1.8799999999999999, -5.3799999999999999, -15.82, -41.649999999999999, -95.810000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC", "period: 2030<br />value:  -1.88<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC", "period: 2035<br />value:  -5.38<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC", "period: 2040<br />value: -15.82<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC", "period: 2045<br />value: -41.65<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC", "period: 2050<br />value: -95.81<br />scenario: Nzero_55_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.5, -1.29],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:  -0.42<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value:  -0.50<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value:  -1.29<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [0, -0.25, -1.6000000000000001, -5.9900000000000002, -19.039999999999999, -48.460000000000001, -99.400000000000006],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:  -1.60<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -5.99<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: -19.04<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -48.46<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -99.40<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [0, -0.35999999999999999, -0.89000000000000001, -1.6799999999999999, -5.5199999999999996, -16.48, -39.729999999999997],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:  -0.36<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:  -0.89<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -1.68<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -5.52<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: -16.48<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -39.73<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.90000000000000002, -2.3700000000000001, -8.0199999999999996, -22.77, -52.560000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3", "period: 2030<br />value:  -0.90<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3", "period: 2035<br />value:  -2.37<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3", "period: 2040<br />value:  -8.02<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3", "period: 2045<br />value: -22.77<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3", "period: 2050<br />value: -52.56<br />scenario: Nzero_55_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:  -0.34<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -0.76<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:  -0.38<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [0, -0.33000000000000002, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [0, -0.23999999999999999, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.71999999999999997, -0.83999999999999997, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [0, -0.26000000000000001, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [0, -0.23000000000000001, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:  -0.80<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [0, -0.28999999999999998, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:  -0.38<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [0, -0.29999999999999999, -0.82999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:  -0.83<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [0, -0.31, -0.81000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:  -0.81<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.78000000000000003, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.83999999999999997, -1.3100000000000001, -3.1400000000000001, -8.6699999999999999, -21.100000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -1.31<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -3.14<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value:  -8.67<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -21.10<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [0, -0.34999999999999998, -1.54, -4.0300000000000002, -11.58, -30.91, -73.019999999999996],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2025<br />value:  -0.35<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2030<br />value:  -1.54<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2035<br />value:  -4.03<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2040<br />value: -11.58<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2045<br />value: -30.91<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2050<br />value: -73.02<br />scenario: Nzero_55_eedEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.82999999999999996, -0.83999999999999997, -0.73999999999999999, -1.53, -5.0099999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:  -0.83<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -0.74<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value:  -1.53<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value:  -5.01<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [0, -0.23999999999999999, -1.1899999999999999, -5.0999999999999996, -17.199999999999999, -45.789999999999999, -97.049999999999997],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:  -1.19<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -5.10<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: -17.20<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -45.79<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -97.05<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [0, -0.32000000000000001, -0.83999999999999997, -1.4099999999999999, -4.1799999999999997, -12.27, -30.010000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -1.41<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -4.18<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: -12.27<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -30.01<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.81999999999999995, -1.4299999999999999, -4.9000000000000004, -15.460000000000001, -38.899999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2030<br />value:  -0.82<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2035<br />value:  -1.43<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2040<br />value:  -4.90<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2045<br />value: -15.46<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2050<br />value: -38.90<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [0, -0.23000000000000001, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.25, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.28999999999999998, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.25, -0.68000000000000005, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.66000000000000003, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2030<br />value:  -0.66<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.25, -0.67000000000000004, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -0.67<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.66000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2030<br />value:  -0.66<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.46999999999999997, -0.68000000000000005, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:  -0.47<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [0, -0.28000000000000003, -0.53000000000000003, -0.69999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2030<br />value:  -0.53<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2035<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.46000000000000002, -0.68000000000000005, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:  -0.46<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.29999999999999999, -0.53000000000000003, -0.69999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:  -0.53<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.32000000000000001, -0.56999999999999995, -0.73999999999999999, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -0.57<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -0.74<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.58999999999999997, -0.75, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2035<br />value:  -0.75<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.78000000000000003, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [0, -0.28999999999999998, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:  -0.76<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.23000000000000001, -0.70999999999999996, -1.0900000000000001, -4.2300000000000004, -14.93, -39.560000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -1.09<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value:  -4.23<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: -14.93<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -39.56<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.29999999999999999, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:  -0.77<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.28000000000000003, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.68000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [0, -0.22, -0.64000000000000001, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2030<br />value:  -0.64<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.23000000000000001, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.27000000000000002, -0.67000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -0.67<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.66000000000000003, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:  -0.66<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [0, -0.23999999999999999, -0.59999999999999998, -0.80000000000000004, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2035<br />value:  -0.80<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.65000000000000002, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:  -0.65<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.68000000000000005, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.47999999999999998, -0.65000000000000002, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:  -0.48<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -0.65<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [0, -0.29999999999999999, -0.52000000000000002, -0.67000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2030<br />value:  -0.52<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2035<br />value:  -0.67<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.63, -0.73999999999999999, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:  -0.34<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -0.74<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.29999999999999999, -0.47999999999999998, -0.65000000000000002, -0.68999999999999995, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:  -0.48<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -0.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -0.69<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.33000000000000002, -0.54000000000000004, -0.70999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -0.54<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.52000000000000002, -0.70999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2030<br />value:  -0.52<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2035<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.75, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [0, -0.28000000000000003, -0.75, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:  -0.79<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.69999999999999996, -1.1799999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value:  -1.18<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.28999999999999998, -0.75, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2030<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.67000000000000004, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:  -0.67<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [0, -0.22, -0.63, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_CC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.68000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.26000000000000001, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -0.62<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.63, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.63<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.67000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -0.67<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.79000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2025<br />value:  -0.36<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2030<br />value:  -0.79<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20"],
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
      "y": [0, -0.29999999999999999, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [0, -0.34000000000000002, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.78000000000000003, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.90000000000000002, -1.6000000000000001, -4.5599999999999996, -12.74, -29.960000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2030<br />value:  -0.90<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -1.60<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -4.56<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2045<br />value: -12.74<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -29.96<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4"],
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
      "y": [0, -0.44, -2.3199999999999998, -6.5800000000000001, -18.07, -44.649999999999999, -96.829999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC", "period: 2025<br />value:  -0.44<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC", "period: 2030<br />value:  -2.32<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC", "period: 2035<br />value:  -6.58<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC", "period: 2040<br />value: -18.07<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC", "period: 2045<br />value: -44.65<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC", "period: 2050<br />value: -96.83<br />scenario: Nzero_57_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.85999999999999999, -0.84999999999999998, -0.72999999999999998, -0.53000000000000003, -1.45],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value:  -0.53<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value:  -1.45<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [0, -0.26000000000000001, -1.53, -5.5499999999999998, -17.129999999999999, -42.549999999999997, -86.329999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:  -0.26<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:  -1.53<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -5.55<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: -17.13<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -42.55<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -86.33<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [0, -0.37, -0.97999999999999998, -1.9199999999999999, -5.4000000000000004, -14.4, -32.68],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:  -0.98<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -1.92<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -5.40<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: -14.40<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -32.68<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [0, -0.31, -0.83999999999999997, -1.49, -4.5599999999999996, -12.869999999999999, -30.510000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3", "period: 2030<br />value:  -0.84<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3", "period: 2035<br />value:  -1.49<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3", "period: 2040<br />value:  -4.56<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3", "period: 2045<br />value: -12.87<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3", "period: 2050<br />value: -30.51<br />scenario: Nzero_57_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5"],
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
      "y": [0, -0.25, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [0, -0.31, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.68000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -0.68<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:  -0.35<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [0, -0.28999999999999998, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [0, -0.32000000000000001, -0.83999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:  -0.80<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.78000000000000003, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.85999999999999999, -1.4299999999999999, -3.8500000000000001, -10.67, -25.390000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:  -0.35<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -1.43<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -3.85<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: -10.67<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -25.39<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [0, -0.35999999999999999, -1.6799999999999999, -4.5, -12.56, -32.479999999999997, -74.599999999999994],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2030<br />value:  -1.68<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2035<br />value:  -4.50<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2040<br />value: -12.56<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2045<br />value: -32.48<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2050<br />value: -74.60<br />scenario: Nzero_57_eedEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.85999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.25],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [0, -0.23999999999999999, -1.0800000000000001, -3.77, -12.56, -33.479999999999997, -72.079999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:  -1.08<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -3.77<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: -12.56<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -33.48<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -72.08<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [0, -0.34999999999999998, -0.85999999999999999, -1.3799999999999999, -3.1499999999999999, -7.8200000000000003, -17.59],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:  -0.35<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -1.38<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -3.15<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value:  -7.82<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -17.59<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.82999999999999996, -1.28, -3.6099999999999999, -10.619999999999999, -26.440000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2030<br />value:  -0.83<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2035<br />value:  -1.28<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2040<br />value:  -3.61<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2045<br />value: -10.62<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2050<br />value: -26.44<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:  -0.33<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -0.76<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.25, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.32000000000000001, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.71999999999999997, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:  -0.76<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.23000000000000001, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.69999999999999996, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -0.81<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [0, -0.29999999999999999, -0.66000000000000003, -0.79000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2030<br />value:  -0.66<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2035<br />value:  -0.79<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.64000000000000001, -0.76000000000000001, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:  -0.64<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -0.76<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.32000000000000001, -0.55000000000000004, -0.69999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:  -0.55<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -0.71<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -0.71999999999999997, -0.80000000000000004, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -0.80<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.69999999999999996, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [0, -0.28999999999999998, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2030<br />value:  -0.80<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:  -0.80<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.23999999999999999, -0.72999999999999998, -1.1399999999999999, -4.2400000000000002, -14.609999999999999, -38.359999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -1.14<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value:  -4.24<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: -14.61<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -38.36<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.29999999999999999, -0.79000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:  -0.79<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.28000000000000003, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.90000000000000002, -1.8600000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2045<br />value:  -0.90<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2050<br />value:  -1.86<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [0, -0.22, -0.67000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2030<br />value:  -0.67<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.23000000000000001, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.28000000000000003, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -0.62, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -0.81<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.62, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2035<br />value:  -0.81<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.26000000000000001, -0.70999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.44, -0.64000000000000001, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:  -0.44<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -0.64<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [0, -0.31, -0.60999999999999999, -0.73999999999999999, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2030<br />value:  -0.61<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2035<br />value:  -0.74<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.40999999999999998, -0.62, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:  -0.41<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.31, -0.5, -0.66000000000000003, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:  -0.50<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -0.66<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.28000000000000003, -0.42999999999999999, -0.63, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -0.63<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.53000000000000003, -0.70999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2030<br />value:  -0.53<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2035<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2040<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.73999999999999999, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [0, -0.28999999999999998, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.81999999999999995, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.25, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.68999999999999995, -1.1299999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value:  -0.69<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value:  -1.13<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.28999999999999998, -0.72999999999999998, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.27000000000000002, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.25, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [0, -0.22, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_CC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.79000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -0.79<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.27000000000000002, -0.68000000000000005, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -0.68<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.64000000000000001, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.64<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12"],
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
      "y": [0, -0.28999999999999998, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [0, -0.22, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:  -0.22<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [0, -0.31, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.64000000000000001, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2030<br />value:  -0.64<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20"],
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
      "y": [0, -0.23000000000000001, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.67000000000000004, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:  -0.67<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [0, -0.29999999999999999, -0.65000000000000002, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:  -0.65<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [0, -0.37, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:  -0.37<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [0, -0.34999999999999998, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3", "period: 2025<br />value:  -0.35<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -0.69999999999999996, -1.75, -4.7199999999999998, -12.449999999999999, -28.260000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2030<br />value:  -0.70<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -1.75<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -4.72<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2045<br />value: -12.45<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -28.26<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4"],
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
      "y": [0, -0.44, -2.1800000000000002, -6.8899999999999997, -18.84, -46.210000000000001, -99.400000000000006],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC", "period: 2025<br />value:  -0.44<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC", "period: 2030<br />value:  -2.18<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC", "period: 2035<br />value:  -6.89<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC", "period: 2040<br />value: -18.84<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC", "period: 2045<br />value: -46.21<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC", "period: 2050<br />value: -99.40<br />scenario: Nzero_59_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.68000000000000005, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.16],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:  -0.68<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value:  -0.16<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [0, -0.17000000000000001, -1.05, -5.4800000000000004, -17.91, -45.850000000000001, -94.340000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:  -0.17<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:  -1.05<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -5.48<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: -17.91<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -45.85<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -94.34<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [0, -0.31, -0.68000000000000005, -1.6499999999999999, -4.8899999999999997, -13.74, -32.240000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:  -0.68<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -1.65<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -4.89<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: -13.74<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -32.24<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.62, -1.4299999999999999, -3.9199999999999999, -10.720000000000001, -25.18],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3", "period: 2035<br />value:  -1.43<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3", "period: 2040<br />value:  -3.92<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3", "period: 2045<br />value: -10.72<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3", "period: 2050<br />value: -25.18<br />scenario: Nzero_59_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5"],
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
      "y": [0, -0.28999999999999998, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [0, -0.32000000000000001, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [0, -0.37, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:  -0.37<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [0, -0.40000000000000002, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2025<br />value:  -0.40<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [0, -0.28000000000000003, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [0, -0.27000000000000002, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:  -0.35<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [0, -0.27000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [0, -0.29999999999999999, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [0, -0.27000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.75, -1.6799999999999999, -4.2400000000000002, -10.83, -24.039999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -1.68<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -4.24<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: -10.83<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -24.04<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [0, -0.27000000000000002, -1.73, -5.5999999999999996, -15.529999999999999, -38.869999999999997, -85.379999999999995],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2030<br />value:  -1.73<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2035<br />value:  -5.60<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2040<br />value: -15.53<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2045<br />value: -38.87<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2050<br />value: -85.38<br />scenario: Nzero_59_eedEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.68000000000000005, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.54000000000000004],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:  -0.68<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value:  -0.54<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [0, -0.20000000000000001, -0.91000000000000003, -5, -16.920000000000002, -44.549999999999997, -93.609999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:  -0.20<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:  -0.91<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -5.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: -16.92<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -44.55<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -93.61<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [0, -0.23999999999999999, -0.72999999999999998, -1.6899999999999999, -4.1299999999999999, -10.550000000000001, -23.550000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -1.69<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -4.13<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: -10.55<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -23.55<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [0, -0.31, -0.60999999999999999, -1.3999999999999999, -3.48, -9.2100000000000009, -21.52],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2035<br />value:  -1.40<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2040<br />value:  -3.48<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2045<br />value:  -9.21<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2050<br />value: -21.52<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [0, -0.28000000000000003, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.17999999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2050<br />value:  -0.18<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [0, -0.26000000000000001, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.33000000000000002, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.34000000000000002, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.34<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [0, -0.23999999999999999, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.85999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:  -0.86<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [0, -0.29999999999999999, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:  -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [0, -0.33000000000000002, -0.80000000000000004, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:  -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.33000000000000002, -0.85999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -0.86<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.82999999999999996, -0.85999999999999999, -0.73999999999999999, -0.44, -0.059999999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2035<br />value:  -0.86<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2040<br />value:  -0.74<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2045<br />value:  -0.44<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2050<br />value:  -0.06<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -0.82999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [0, -0.29999999999999999, -0.81999999999999995, -1.1899999999999999, -2.7400000000000002, -6.96, -16.260000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2035<br />value:  -1.19<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2040<br />value:  -2.74<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2045<br />value:  -6.96<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2050<br />value: -16.26<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [0, -0.25, -0.72999999999999998, -1.2, -4.5499999999999998, -15.5, -40.030000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -1.20<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value:  -4.55<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: -15.50<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -40.03<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.31, -0.83999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.81000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2030<br />value:  -0.81<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:  -0.69<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:  -0.35<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -0.26000000000000001, -0.64000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -0.64<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.29999999999999999, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -0.80<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.27000000000000002, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2030<br />value:  -0.74<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.76000000000000001, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.72999999999999998, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.26000000000000001, -0.72999999999999998, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.82999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [0, -0.31, -0.66000000000000003, -0.79000000000000004, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2030<br />value:  -0.66<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2035<br />value:  -0.79<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.78000000000000003, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:  -0.34<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -0.81<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.32000000000000001, -0.70999999999999996, -0.78000000000000003, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.33000000000000002, -0.81999999999999995, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.81000000000000005, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2030<br />value:  -0.81<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.82999999999999996, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [0, -0.26000000000000001, -0.79000000000000004, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2030<br />value:  -0.79<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.82999999999999996, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.88, -1.3899999999999999, -3.21],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -0.88<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value:  -1.39<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value:  -3.21<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.28000000000000003, -0.81000000000000005, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:  -0.81<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [0, -0.23000000000000001, -0.70999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_CC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_CC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_CC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -0.23999999999999999, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.27000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limVRE3,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limVRE3,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -0.73<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12"],
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
      "y": [0, -0.23999999999999999, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio12_CC"],
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
      "name": "(Nzero_55_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2025<br />value:  -0.38<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2030<br />value:  -0.82<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20"],
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
      "y": [0, -0.32000000000000001, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio20_CC"],
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
      "name": "(Nzero_55_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.83999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:  -0.84<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.34000000000000002, -0.82999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:  -0.34<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:  -0.83<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [0, -0.34999999999999998, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:  -0.35<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:  -0.80<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.79000000000000004, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3", "period: 2030<br />value:  -0.79<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.91000000000000003, -1.74, -5.3799999999999999, -15.44, -36.490000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2025<br />value:  -0.37<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2030<br />value:  -0.91<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -1.74<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -5.38<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2045<br />value: -15.44<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -36.49<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4"],
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
      "y": [0, -0.37, -1.8799999999999999, -5.3799999999999999, -15.82, -41.649999999999999, -95.810000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC", "period: 2030<br />value:  -1.88<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC", "period: 2035<br />value:  -5.38<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC", "period: 2040<br />value: -15.82<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC", "period: 2045<br />value: -41.65<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC", "period: 2050<br />value: -95.81<br />scenario: Nzero_55_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio4_CC"],
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
      "name": "(Nzero_55_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.41999999999999998, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.5, -1.29],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:  -0.42<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value:  -0.50<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value:  -1.29<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -1.6000000000000001, -5.9900000000000002, -19.039999999999999, -48.460000000000001, -99.400000000000006],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:  -1.60<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -5.99<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value: -19.04<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -48.46<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -99.40<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [0, -0.35999999999999999, -0.89000000000000001, -1.6799999999999999, -5.5199999999999996, -16.48, -39.729999999999997],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:  -0.36<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:  -0.89<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -1.68<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -5.52<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value: -16.48<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -39.73<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.90000000000000002, -2.3700000000000001, -8.0199999999999996, -22.77, -52.560000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3", "period: 2030<br />value:  -0.90<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3", "period: 2035<br />value:  -2.37<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3", "period: 2040<br />value:  -8.02<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3", "period: 2045<br />value: -22.77<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3", "period: 2050<br />value: -52.56<br />scenario: Nzero_55_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:  -0.34<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -0.76<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_bio7p5_CC"],
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
      "name": "(Nzero_55_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:  -0.38<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [0, -0.33000000000000002, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [0, -0.23999999999999999, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio12_CC"],
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
      "name": "(Nzero_55_eedEff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.71999999999999997, -0.83999999999999997, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [0, -0.26000000000000001, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [0, -0.23000000000000001, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:  -0.80<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [0, -0.28999999999999998, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio20_CC"],
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
      "name": "(Nzero_55_eedEff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.38, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:  -0.38<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.29999999999999999, -0.82999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:  -0.83<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [0, -0.31, -0.81000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:  -0.81<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.78000000000000003, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.83999999999999997, -1.3100000000000001, -3.1400000000000001, -8.6699999999999999, -21.100000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -1.31<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -3.14<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value:  -8.67<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -21.10<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [0, -0.34999999999999998, -1.54, -4.0300000000000002, -11.58, -30.91, -73.019999999999996],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2025<br />value:  -0.35<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2030<br />value:  -1.54<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2035<br />value:  -4.03<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2040<br />value: -11.58<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2045<br />value: -30.91<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC", "period: 2050<br />value: -73.02<br />scenario: Nzero_55_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio4_CC"],
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
      "name": "(Nzero_55_eedEff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.82999999999999996, -0.83999999999999997, -0.73999999999999999, -1.53, -5.0099999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:  -0.83<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -0.74<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value:  -1.53<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value:  -5.01<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -1.1899999999999999, -5.0999999999999996, -17.199999999999999, -45.789999999999999, -97.049999999999997],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:  -1.19<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -5.10<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value: -17.20<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -45.79<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -97.05<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [0, -0.32000000000000001, -0.83999999999999997, -1.4099999999999999, -4.1799999999999997, -12.27, -30.010000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -1.41<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -4.18<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value: -12.27<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -30.01<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.81999999999999995, -1.4299999999999999, -4.9000000000000004, -15.460000000000001, -38.899999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2030<br />value:  -0.82<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2035<br />value:  -1.43<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2040<br />value:  -4.90<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2045<br />value: -15.46<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3", "period: 2050<br />value: -38.90<br />scenario: Nzero_55_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [0, -0.23000000000000001, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_eedEff_bio7p5_CC"],
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
      "name": "(Nzero_55_eedEff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.28999999999999998, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_eedEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.25, -0.68000000000000005, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.66000000000000003, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2030<br />value:  -0.66<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio12_CC"],
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
      "name": "(Nzero_55_ff55Eff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.25, -0.67000000000000004, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -0.67<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.66000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2030<br />value:  -0.66<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.46999999999999997, -0.68000000000000005, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:  -0.47<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [0, -0.28000000000000003, -0.53000000000000003, -0.69999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2030<br />value:  -0.53<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2035<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio20_CC"],
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
      "name": "(Nzero_55_ff55Eff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.46000000000000002, -0.68000000000000005, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:  -0.46<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.29999999999999999, -0.53000000000000003, -0.69999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:  -0.53<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -0.70<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.32000000000000001, -0.56999999999999995, -0.73999999999999999, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -0.57<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -0.74<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.58999999999999997, -0.75, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2035<br />value:  -0.75<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.78000000000000003, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [0, -0.28999999999999998, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio4_CC"],
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
      "name": "(Nzero_55_ff55Eff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:  -0.32<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:  -0.76<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23000000000000001, -0.70999999999999996, -1.0900000000000001, -4.2300000000000004, -14.93, -39.560000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -1.09<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value:  -4.23<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value: -14.93<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -39.56<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.29999999999999999, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:  -0.77<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.28000000000000003, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.68000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [0, -0.22, -0.64000000000000001, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2030<br />value:  -0.64<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_CC"],
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
      "name": "(Nzero_55_ff55Eff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -0.74<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23000000000000001, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.27000000000000002, -0.67000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -0.67<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.66000000000000003, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:  -0.66<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [0, -0.23999999999999999, -0.59999999999999998, -0.80000000000000004, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2035<br />value:  -0.80<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio12_CC"],
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
      "name": "(Nzero_55_RpEUEff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.65000000000000002, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:  -0.65<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.68000000000000005, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.47999999999999998, -0.65000000000000002, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:  -0.48<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -0.65<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [0, -0.29999999999999999, -0.52000000000000002, -0.67000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2030<br />value:  -0.52<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2035<br />value:  -0.67<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio20_CC"],
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
      "name": "(Nzero_55_RpEUEff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.63, -0.73999999999999999, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:  -0.34<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -0.74<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.29999999999999999, -0.47999999999999998, -0.65000000000000002, -0.68999999999999995, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:  -0.48<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -0.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -0.69<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.33000000000000002, -0.54000000000000004, -0.70999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -0.54<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.52000000000000002, -0.70999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2030<br />value:  -0.52<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2035<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2040<br />value:  -0.71<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.75, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:  -0.30<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [0, -0.28000000000000003, -0.75, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio4_CC"],
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
      "name": "(Nzero_55_RpEUEff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:  -0.79<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.69999999999999996, -1.1799999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value:  -1.18<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.28999999999999998, -0.75, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:  -0.75<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -0.72<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2030<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.67000000000000004, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:  -0.27<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:  -0.67<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [0, -0.22, -0.63, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_CC"],
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
      "name": "(Nzero_55_RpEUEff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.68000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -0.68<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.26000000000000001, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -0.62<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.63, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.63<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio12_CC"],
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
      "name": "(Nzero_57_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.67000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -0.67<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.79000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2025<br />value:  -0.36<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2030<br />value:  -0.79<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20"],
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
      "y": [0, -0.29999999999999999, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio20_CC"],
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
      "name": "(Nzero_57_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.34000000000000002, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.78000000000000003, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.90000000000000002, -1.6000000000000001, -4.5599999999999996, -12.74, -29.960000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2030<br />value:  -0.90<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -1.60<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -4.56<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2045<br />value: -12.74<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -29.96<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4"],
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
      "y": [0, -0.44, -2.3199999999999998, -6.5800000000000001, -18.07, -44.649999999999999, -96.829999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC", "period: 2025<br />value:  -0.44<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC", "period: 2030<br />value:  -2.32<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC", "period: 2035<br />value:  -6.58<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC", "period: 2040<br />value: -18.07<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC", "period: 2045<br />value: -44.65<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC", "period: 2050<br />value: -96.83<br />scenario: Nzero_57_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio4_CC"],
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
      "name": "(Nzero_57_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.85999999999999999, -0.84999999999999998, -0.72999999999999998, -0.53000000000000003, -1.45],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value:  -0.53<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value:  -1.45<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.26000000000000001, -1.53, -5.5499999999999998, -17.129999999999999, -42.549999999999997, -86.329999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:  -0.26<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:  -1.53<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -5.55<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value: -17.13<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -42.55<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -86.33<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [0, -0.37, -0.97999999999999998, -1.9199999999999999, -5.4000000000000004, -14.4, -32.68],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:  -0.98<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -1.92<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -5.40<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value: -14.40<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -32.68<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [0, -0.31, -0.83999999999999997, -1.49, -4.5599999999999996, -12.869999999999999, -30.510000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3", "period: 2030<br />value:  -0.84<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3", "period: 2035<br />value:  -1.49<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3", "period: 2040<br />value:  -4.56<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3", "period: 2045<br />value: -12.87<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3", "period: 2050<br />value: -30.51<br />scenario: Nzero_57_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5"],
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
      "y": [0, -0.25, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_bio7p5_CC"],
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
      "name": "(Nzero_57_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [0, -0.31, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [0, -0.25, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio12_CC"],
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
      "name": "(Nzero_57_eedEff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.68000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -0.68<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.68999999999999995, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:  -0.35<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [0, -0.28999999999999998, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio20_CC"],
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
      "name": "(Nzero_57_eedEff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.32000000000000001, -0.83999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:  -0.80<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.78000000000000003, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.85999999999999999, -1.4299999999999999, -3.8500000000000001, -10.67, -25.390000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:  -0.35<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -1.43<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -3.85<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value: -10.67<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -25.39<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [0, -0.35999999999999999, -1.6799999999999999, -4.5, -12.56, -32.479999999999997, -74.599999999999994],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2030<br />value:  -1.68<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2035<br />value:  -4.50<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2040<br />value: -12.56<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2045<br />value: -32.48<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC", "period: 2050<br />value: -74.60<br />scenario: Nzero_57_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio4_CC"],
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
      "name": "(Nzero_57_eedEff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.40999999999999998, -0.85999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.25],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:  -0.41<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -1.0800000000000001, -3.77, -12.56, -33.479999999999997, -72.079999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:  -1.08<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -3.77<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value: -12.56<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -33.48<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -72.08<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [0, -0.34999999999999998, -0.85999999999999999, -1.3799999999999999, -3.1499999999999999, -7.8200000000000003, -17.59],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:  -0.35<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:  -0.86<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -1.38<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -3.15<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value:  -7.82<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -17.59<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.82999999999999996, -1.28, -3.6099999999999999, -10.619999999999999, -26.440000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2030<br />value:  -0.83<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2035<br />value:  -1.28<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2040<br />value:  -3.61<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2045<br />value: -10.62<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3", "period: 2050<br />value: -26.44<br />scenario: Nzero_57_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:  -0.33<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -0.76<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_eedEff_bio7p5_CC"],
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
      "name": "(Nzero_57_eedEff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.32000000000000001, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.28000000000000003, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_eedEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.71999999999999997, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio12_CC"],
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
      "name": "(Nzero_57_ff55Eff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:  -0.76<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23000000000000001, -0.69999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.69999999999999996, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -0.81<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [0, -0.29999999999999999, -0.66000000000000003, -0.79000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2030<br />value:  -0.66<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2035<br />value:  -0.79<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio20_CC"],
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
      "name": "(Nzero_57_ff55Eff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.64000000000000001, -0.76000000000000001, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:  -0.64<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -0.76<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.32000000000000001, -0.55000000000000004, -0.69999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:  -0.55<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -0.71<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.34000000000000002, -0.71999999999999997, -0.80000000000000004, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:  -0.34<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -0.80<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.69999999999999996, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [0, -0.28999999999999998, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2030<br />value:  -0.80<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio4_CC"],
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
      "name": "(Nzero_57_ff55Eff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:  -0.80<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.72999999999999998, -1.1399999999999999, -4.2400000000000002, -14.609999999999999, -38.359999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -1.14<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value:  -4.24<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value: -14.61<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -38.36<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.29999999999999999, -0.79000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:  -0.79<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.28000000000000003, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.90000000000000002, -1.8600000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2045<br />value:  -0.90<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3", "period: 2050<br />value:  -1.86<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [0, -0.22, -0.67000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2030<br />value:  -0.67<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_CC"],
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
      "name": "(Nzero_57_ff55Eff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:  -0.32<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23000000000000001, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.28000000000000003, -0.77000000000000002, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -0.62, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -0.81<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.62, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2035<br />value:  -0.81<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio12_CC"],
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
      "name": "(Nzero_57_RpEUEff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.68999999999999995, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:  -0.69<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.26000000000000001, -0.70999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.23999999999999999, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.44, -0.64000000000000001, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:  -0.44<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -0.64<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [0, -0.31, -0.60999999999999999, -0.73999999999999999, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2030<br />value:  -0.61<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2035<br />value:  -0.74<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio20_CC"],
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
      "name": "(Nzero_57_RpEUEff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.40999999999999998, -0.62, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:  -0.41<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.31, -0.5, -0.66000000000000003, -0.69999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:  -0.50<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -0.66<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.28000000000000003, -0.42999999999999999, -0.63, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -0.63<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.53000000000000003, -0.70999999999999996, -0.70999999999999996, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2030<br />value:  -0.53<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2035<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2040<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.73999999999999999, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:  -0.31<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:  -0.74<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [0, -0.28999999999999998, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2030<br />value:  -0.77<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio4_CC"],
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
      "name": "(Nzero_57_RpEUEff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.81999999999999995, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:  -0.33<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.68999999999999995, -1.1299999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value:  -0.69<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value:  -1.13<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.28999999999999998, -0.72999999999999998, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:  -0.29<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -0.72<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.27000000000000002, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2030<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.25, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:  -0.25<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [0, -0.22, -0.62, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2025<br />value:  -0.22<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2030<br />value:  -0.62<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_CC"],
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
      "name": "(Nzero_57_RpEUEff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.79000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -0.79<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -0.70<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.27000000000000002, -0.68000000000000005, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -0.68<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.64000000000000001, -0.81999999999999995, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.64<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.82<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12"],
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
      "y": [0, -0.28999999999999998, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio12_CC"],
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
      "name": "(Nzero_59_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.22, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:  -0.22<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [0, -0.31, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.64000000000000001, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2030<br />value:  -0.64<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20"],
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
      "y": [0, -0.23000000000000001, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio20_CC"],
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
      "name": "(Nzero_59_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.67000000000000004, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:  -0.67<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.29999999999999999, -0.65000000000000002, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:  -0.65<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [0, -0.37, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:  -0.37<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [0, -0.34999999999999998, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3", "period: 2025<br />value:  -0.35<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.23999999999999999, -0.69999999999999996, -1.75, -4.7199999999999998, -12.449999999999999, -28.260000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2030<br />value:  -0.70<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -1.75<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -4.72<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2045<br />value: -12.45<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -28.26<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4"],
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
      "y": [0, -0.44, -2.1800000000000002, -6.8899999999999997, -18.84, -46.210000000000001, -99.400000000000006],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC", "period: 2025<br />value:  -0.44<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC", "period: 2030<br />value:  -2.18<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC", "period: 2035<br />value:  -6.89<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC", "period: 2040<br />value: -18.84<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC", "period: 2045<br />value: -46.21<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC", "period: 2050<br />value: -99.40<br />scenario: Nzero_59_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio4_CC"],
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
      "name": "(Nzero_59_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.68000000000000005, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.16],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:  -0.68<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value:  -0.16<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.17000000000000001, -1.05, -5.4800000000000004, -17.91, -45.850000000000001, -94.340000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:  -0.17<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:  -1.05<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -5.48<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value: -17.91<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -45.85<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -94.34<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [0, -0.31, -0.68000000000000005, -1.6499999999999999, -4.8899999999999997, -13.74, -32.240000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:  -0.68<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -1.65<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -4.89<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value: -13.74<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -32.24<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [0, -0.28999999999999998, -0.62, -1.4299999999999999, -3.9199999999999999, -10.720000000000001, -25.18],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3", "period: 2035<br />value:  -1.43<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3", "period: 2040<br />value:  -3.92<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3", "period: 2045<br />value: -10.72<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3", "period: 2050<br />value: -25.18<br />scenario: Nzero_59_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5"],
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
      "y": [0, -0.28999999999999998, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_bio7p5_CC"],
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
      "name": "(Nzero_59_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.32000000000000001, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [0, -0.37, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:  -0.37<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [0, -0.40000000000000002, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2025<br />value:  -0.40<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [0, -0.28000000000000003, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio12_CC"],
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
      "name": "(Nzero_59_eedEff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.60999999999999999, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [0, -0.27000000000000002, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio20_CC"],
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
      "name": "(Nzero_59_eedEff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:  -0.35<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.27000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [0, -0.29999999999999999, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [0, -0.27000000000000002, -0.62, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2030<br />value:  -0.62<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.75, -1.6799999999999999, -4.2400000000000002, -10.83, -24.039999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -1.68<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -4.24<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value: -10.83<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -24.04<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [0, -0.27000000000000002, -1.73, -5.5999999999999996, -15.529999999999999, -38.869999999999997, -85.379999999999995],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2030<br />value:  -1.73<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2035<br />value:  -5.60<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2040<br />value: -15.53<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2045<br />value: -38.87<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC", "period: 2050<br />value: -85.38<br />scenario: Nzero_59_eedEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio4_CC"],
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
      "name": "(Nzero_59_eedEff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.68000000000000005, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.54000000000000004],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:  -0.68<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value:  -0.54<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.20000000000000001, -0.91000000000000003, -5, -16.920000000000002, -44.549999999999997, -93.609999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:  -0.20<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:  -0.91<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -5.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value: -16.92<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -44.55<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -93.61<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [0, -0.23999999999999999, -0.72999999999999998, -1.6899999999999999, -4.1299999999999999, -10.550000000000001, -23.550000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -1.69<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -4.13<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value: -10.55<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -23.55<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [0, -0.31, -0.60999999999999999, -1.3999999999999999, -3.48, -9.2100000000000009, -21.52],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2030<br />value:  -0.61<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2035<br />value:  -1.40<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2040<br />value:  -3.48<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2045<br />value:  -9.21<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3", "period: 2050<br />value: -21.52<br />scenario: Nzero_59_eedEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [0, -0.28000000000000003, -0.59999999999999998, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.17999999999999999],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2030<br />value:  -0.60<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC", "period: 2050<br />value:  -0.18<br />scenario: Nzero_59_eedEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_eedEff_bio7p5_CC"],
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
      "name": "(Nzero_59_eedEff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.63, -0.84999999999999998, -0.72999999999999998, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value:  -0.42<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value:  -0.04<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.26000000000000001, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [0, -0.33000000000000002, -0.63, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -0.63<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [0, -0.34000000000000002, -0.58999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.34<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_eedEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28000000000000003, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio12_CC"],
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
      "name": "(Nzero_59_ff55Eff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.72999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [0, -0.27000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.71999999999999997, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.85999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:  -0.86<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [0, -0.29999999999999999, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio20_CC"],
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
      "name": "(Nzero_59_ff55Eff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.37, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:  -0.37<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:  -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.33000000000000002, -0.80000000000000004, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:  -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [0, -0.33000000000000002, -0.85999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -0.86<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [0, -0.32000000000000001, -0.82999999999999996, -0.85999999999999999, -0.73999999999999999, -0.44, -0.059999999999999998],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2035<br />value:  -0.86<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2040<br />value:  -0.74<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2045<br />value:  -0.44<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3", "period: 2050<br />value:  -0.06<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.32000000000000001, -0.82999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [0, -0.29999999999999999, -0.81999999999999995, -1.1899999999999999, -2.7400000000000002, -6.96, -16.260000000000002],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2035<br />value:  -1.19<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2040<br />value:  -2.74<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2045<br />value:  -6.96<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC", "period: 2050<br />value: -16.26<br />scenario: Nzero_59_ff55Eff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio4_CC"],
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
      "name": "(Nzero_59_ff55Eff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.35999999999999999, -0.84999999999999998, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:  -0.36<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:  -0.85<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.72999999999999998, -1.2, -4.5499999999999998, -15.5, -40.030000000000001],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -1.20<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value:  -4.55<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value: -15.50<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -40.03<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [0, -0.31, -0.83999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [0, -0.29999999999999999, -0.81000000000000005, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2030<br />value:  -0.81<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.68999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:  -0.69<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [0, -0.23999999999999999, -0.71999999999999997, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_CC"],
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
      "name": "(Nzero_59_ff55Eff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.81999999999999995, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:  -0.35<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.26000000000000001, -0.64000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -0.64<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -0.29999999999999999, -0.80000000000000004, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -0.80<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -0.27000000000000002, -0.73999999999999999, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2030<br />value:  -0.74<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.76000000000000001, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [0, -0.23000000000000001, -0.72999999999999998, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio12_CC"],
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
      "name": "(Nzero_59_RpEUEff_bio12_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.28999999999999998, -0.69999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:  -0.29<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:  -0.70<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.71999999999999997, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [0, -0.26000000000000001, -0.72999999999999998, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.25, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio12_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.33000000000000002, -0.82999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [0, -0.31, -0.66000000000000003, -0.79000000000000004, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2030<br />value:  -0.66<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2035<br />value:  -0.79<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio20_CC"],
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
      "name": "(Nzero_59_RpEUEff_bio20_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34000000000000002, -0.78000000000000003, -0.81000000000000005, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:  -0.34<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -0.81<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.32000000000000001, -0.70999999999999996, -0.78000000000000003, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:  -0.32<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [0, -0.33000000000000002, -0.81999999999999995, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:  -0.33<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -0.82<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [0, -0.31, -0.81000000000000005, -0.84999999999999998, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2030<br />value:  -0.81<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2035<br />value:  -0.85<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio20_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.82999999999999996, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [0, -0.26000000000000001, -0.79000000000000004, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2030<br />value:  -0.79<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio4_CC"],
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
      "name": "(Nzero_59_RpEUEff_bio4_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.31, -0.82999999999999996, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:  -0.31<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.25, -0.71999999999999997, -0.83999999999999997, -0.88, -1.3899999999999999, -3.21],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:  -0.25<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -0.88<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value:  -1.39<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value:  -3.21<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [0, -0.28000000000000003, -0.81000000000000005, -0.83999999999999997, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:  -0.28<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:  -0.81<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -0.72<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [0, -0.26000000000000001, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio4_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limVRE3,limVRE_strgLimInt,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.27000000000000002, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [0, -0.23000000000000001, -0.70999999999999996, -0.82999999999999996, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2025<br />value:  -0.23<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2035<br />value:  -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_CC<br />lim: unlimCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_CC"],
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
      "name": "(Nzero_59_RpEUEff_bio7p5_CC,unlimCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_CC,unlimCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.29999999999999999, -0.78000000000000003, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:  -0.30<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -0.78<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-down",
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
      "y": [0, -0.23999999999999999, -0.70999999999999996, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:  -0.24<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -0.71<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -0.27000000000000002, -0.76000000000000001, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:  -0.27<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -0.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "name": "(Nzero_59_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.26000000000000001, -0.75, -0.83999999999999997, -0.72999999999999998, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:   0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2025<br />value:  -0.26<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2030<br />value:  -0.75<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2035<br />value:  -0.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2040<br />value:  -0.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2045<br />value:  -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3", "period: 2050<br />value:  -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3<br />lim: limVRE_strgLimInt<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE3"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square-open-dot",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limVRE3,limVRE_strgLimInt,1,NA)",
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
      "range": [-104.37, 4.9700000000000006],
      "tickmode": "array",
      "ticktext": ["-100", "-75", "-50", "-25", "0"],
      "tickvals": [-100, -75, -50, -25, 0],
      "categoryorder": "array",
      "categoryarray": ["-100", "-75", "-50", "-25", "0"],
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
        "layer": "below",
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
    "7968645f5d0e": {
      "yintercept": {},
      "type": "scatter"
    },
    "79681c262ea2": {
      "xintercept": {}
    },
    "79681c3d67e3": {
      "x": {},
      "y": {},
      "linetype": {},
      "colour": {}
    },
    "796862577b2c": {
      "x": {},
      "y": {},
      "shape": {},
      "fill": {}
    }
  },
  "cur_data": "7968645f5d0e",
  "visdat": {
    "7968645f5d0e": ["function (y) ", "x"],
    "79681c262ea2": ["function (y) ", "x"],
    "79681c3d67e3": ["function (y) ", "x"],
    "796862577b2c": ["function (y) ", "x"]
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

  
