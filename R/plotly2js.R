
plotly2js <- function(plotly.object, div.id = 'plot1', output.html = FALSE, output.file = NULL, output.dir = NULL, output.url = NULL){
  
  if(is.null(output.file)) output.file <- paste0(div.id,".js")
  if(is.null(output.dir)) js.filename <- paste0(getwd(), "/", output.file) else js.filename <- paste0(output.dir, "/", output.file)
  if(is.null(output.url)) output.url <- paste0(div.id,".html")
  
  json <- plotly_json(plotly.object,FALSE)
  
  js.output <-
    "(function(){ \n
        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; \n
        \n
        var gd = document.getElementById('%div.id%') \n
        var resizeDebounce = null; \n

        function resizePlot() { \n
          var bb = gd.getBoundingClientRect(); \n
          Plotly.relayout(gd, { \n
            width: bb.width, \n
              height: bb.height \n
            }); \n
          } \n

          Plotly.plot(gd,  \n
              %json%
           \n
                  ); \n
           }()); \n
  "
  
  js.output <- gsub('%div.id%', div.id, js.output)
  js.output <- gsub('%json%', json, js.output)
  
  fileConn<-file(js.filename)
  writeLines(js.output, fileConn)
  close(fileConn)
  
  if(output.html){
    output.html <-
      "<html> \n
        <head> \n
            <meta charset=\"utf-8\"/> \n
        </head> \n

        <body> \n
        \n
          <script src='https://cdn.plot.ly/plotly-latest.min.js'></script> \n
        \n
        <div id=\"%div.id%\" style=\"width: 100%; height: 100%;\" class=\"plotly-graph-div\"></div> \n
        <script type=\"text/javascript\" src=\"%js.filename%\"></script> \n

        </body>\n
        </html>\n"
    
    output.html <- gsub('%div.id%', div.id, output.html)
    output.html <- gsub('%js.filename%', output.file, output.html)
    
    fileConn <- file(output.url)
    writeLines(output.html, fileConn)
    close(fileConn)
    
  }
  
}


