var path = [
  [1, -22.97, -45.96],
  [2, -22.97, -45.97],
  [3, -22.97, -45.98],
  [4, -22.97, -45.99],
  [5, -22.97, -46.00],
  [6, -22.97, -46.01]
];

var nodes = [];

var links = [];

function createPath(){
    for (var i = 0; i < path.length; i++){
        nodes.push({altitude: path[i][0], latitude: path[i][1], longitude: path[i][2]});
        if (i > 0){
            links.push({source: i - 1, target: i});
        }
    }
    generateGraph();
}

function generateGraph(){
    var svg = d3.select("div#visualization")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

    // Define the force simulation
    var simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(function(d) { return d.index; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(250, 250));

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
  .append("circle")
  .attr("class", "node")
  .attr("r", 10)
  .attr("fill", function(d, i) {
    if (i == 0) {return "green";}
    else if (i == nodes.length - 1) {return "yellow";}
    else {return "blue";}
  });

    // Define the node position and link endpoints
    simulation.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
    });
}