import * as d3 from 'd3';

var path = [
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01],
  [1, -22.97, -45.96],
  [2, -22.97, -45.97]
];

var nodes = [];

var links = [];

const createPath = () => {
    for (var i = 0; i < path.length; i++){
        nodes.push({altitude: path[i][0], latitude: path[i][1], longitude: path[i][2]});
        if (i > 0){
            links.push({source: i - 1, target: i});
        }
    }
    generateGraph();
}

function generateGraph() {
  var svg = d3.select("div#visualization")
    .append("svg")
    .attr("width", 100 + "%")
    .attr("height", 100 + "%");

  // Set the desired X and Y positions for each node
  var desiredX = 50;
  var desiredY = 50;
  var sumX = 100;
  nodes.forEach(function(node, i) {
    node.desiredX = desiredX;
    node.desiredY = desiredY;
    desiredX += sumX;
    if (desiredX >= 50 * 17 - 50 || desiredX <= 0 - 50) {
      sumX = -sumX;
      desiredX += sumX;
      desiredY += 50;
    }
  });

  // Define the force simulation
  var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(function(d) { return d.index; }).strength(0))
    .force("x", d3.forceX().x(function(d) { return d.desiredX; }).strength(1))
    .force("y", d3.forceY().y(function(d) { return d.desiredY; }).strength(1));

  // Add links to the visualization
  var link = svg.selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link");

  // Add nodes to the visualization
  var node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("id",function(d) {return "node" + d.index})
    .attr("onmouseover", function(d) {return "getNodeInfo(" + d.index + ")"})
    .attr("onmouseout", function(d) {return "hideNodeInfo(" + d.index + ")"})
    
  node.append("circle")
    .attr("r", 20)
    .attr("fill", "black");

  node.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .attr("fill", "white")
    .style("pointer-events", "none")
    .text(function(d) { return d.index + 1; });

  // Define the node position and link endpoints
  simulation.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
  // getNodeInfo(node);
}

function getNodeInfo(node) {
  document.getElementById("vertexInfo").style.display = "block";
  document.getElementById("vertexId").innerHTML = "<b> Vértice " + (node + 1) + "<b>";
  document.getElementById("vertexAltitude").innerHTML = "Altitude: " + nodes[node].altitude;
  document.getElementById("vertexLatitude").innerHTML = "Latitude: " + nodes[node].latitude;
  document.getElementById("vertexLongitude").innerHTML = "Longitude: " + nodes[node].longitude;
  document.getElementById("vertexInfo").style.left = d3.select("#node" + node).datum().x + "px";
	document.getElementById("vertexInfo").style.top = d3.select("#node" + node).datum().y + "px";
  hideNodeInfo();
}

function hideNodeInfo() {
  document.getElementById("vertexInfo").style.display = "none";
}

export default createPath;