function getRandomInt(max) {
    min = Math.ceil(30);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#0';
    for (var i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color + "3";
}

d3.selectAll("p").style("color", "green");




var width = window.innerWidth - 10;
var height = window.innerHeight - 100;

var x = width / 2
var y = height / 2


var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);





 for (var i = 0; i < 10; i++) {

    svg.append("path").attr("class",'farfalla' + i  ).attr("style","stroke: black; display: inline;").attr("d", "M264,253 C267,217,226,175,245,190C265,206,345,278,369,300C394,323,363,296,372,263C382,231,431,193,404,206C377,219,274,283,245,301C216,318,262,288,264,253")
    .style("fill", getRandomColor())
    .attr("transform", "scale(0.3)" + "translate("+getRandomInt(width)+"," + getRandomInt(height) + ")")
    

    

/*     svg.append("circle")
        .attr("class", "farfalla" + i)
        .style("fill", getRandomColor())
        .attr("cx", getRandomInt(width))
        .attr("cy", getRandomInt(height))
        .attr("r", 20)
        .attr("cx", x + data[j][i].x)
        .attr("cy", y + (-1 * data[j][i].y))
 */
} 

function drawCiao(data) {
    console.log(data);

    for (var j = 0; j < data.length; j++) {
        for (var i = 0; i < 10; i++) {

            svg.select(".farfalla" + i)
                .transition()
                .duration(1000)
                .delay(2000 * j)
                .style("fill", getRandomColor())
                .attr("transform", "scale(0.3)" + "translate("+ (3*(x + data[j][i].x)-200) +"," + (3*(y + (-1 * data[j][i].y))-400) + ")")

        }



    }

}

d3.select("body")
    .on("keydown", e => {
        if (d3.event.keyCode == 67) {
            d3.json("/data/position.json").then(data => {
                drawCiao(data);
            });
        }
    });



