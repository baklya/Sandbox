define(['d3', 'jquery'], function(d3, jq) {

  var module = function(svg, x0, y0, rx, ry, a) {
    
    var w = 1200;
    
    var h = 600;

    var angle = a;
    var delta = 2 * Math.PI / 400;



    var shape = svg.append("circle")
      .attr("cx", (x0 + rx * Math.cos(angle)))
      .attr("cy", (y0 + ry * Math.sin(angle)))
      .attr("r", 5)
      .style("fill", "white");


    this.SetNextPosition = function(){
      angle += delta;
      
      if(y0 + ry * Math.sin(angle) > h){
        x0 += 2 * (rx * Math.cos(angle));
        angle = Math.PI - angle;
      }
      
      
      if(y0 + ry * Math.sin(angle) < 0){
        x0 += 2 * (rx * Math.cos(angle));
        angle = 3 * Math.PI - angle;
      }
      
      
      if(x0 + rx * Math.cos(angle) > w){
        y0 += 2 * (ry * Math.sin(angle));
        angle = 2 * Math.PI - angle;
      }
      
      if(x0 + rx * Math.cos(angle) < 0){
        y0 += 2 * (ry * Math.sin(angle));
        angle = 2 * Math.PI - angle;
      }
      
      
      shape
        .attr("cx", (x0 + rx * Math.cos(angle)))
        .attr("cy", (y0 + ry * Math.sin(angle)));
    };

  };

  return module;
});