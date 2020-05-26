//ritorna un intero casuale inferiore al parametro passato
function getRandomInt(max) {
    min = 30;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// genera un Hex color code che inizia con #0 (in modo che i colori siano tutti freddi)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#0';
    for (var i = 0; i < 4; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color + "3";
}

// ----------------------------

// creazione del container svg e di altre variabili utili per le posizioni
var width = window.innerWidth - 10;
var height = window.innerHeight - 100;

var x = width / 2
var y = height / 2

var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// crea le farfalle come un path e le posiziona casualmente
for (var i = 0; i < 10; i++) {
    svg.append("path")
        .attr("class", 'farfalla' + i)
        .attr("style", "stroke: black; display: inline;")
        .attr("d", "M264,253 C267,217,226,175,245,190C265,206,345,278,369,300C394,323,363,296,372,263C382,231,431,193,404,206C377,219,274,283,245,301C216,318,262,288,264,253")
        .style("fill", getRandomColor())
        .attr("transform", "scale(0.3)" + "translate(" + getRandomInt(width) + "," + getRandomInt(height) + ")")
}

// fa apparire in sequenza caratteri che gli vengono passati come parametro
function drawCiao(data) {

    for (var j = 0; j < data.length; j++) {
        for (var i = 0; i < 10; i++) {

            svg.select(".farfalla" + i)
                .transition()
                .duration(1000)
                .delay(2000 * j)
                .style("fill", getRandomColor())
                .attr("transform", "scale(0.3)" + "translate(" + (3 * (x + data[j][i].x) - 200) + "," + (3 * (y + (-1 * data[j][i].y)) - 400) + ")")
        }
    }
}

// Event Listener che attende la pressione della 'c' e recupera il file json per poi passarlo alla funzione drawciao
d3.select("body")
    .on("keydown", e => {
        if (d3.event.keyCode == 67) {
            d3.json("/data/position.json").then(data => {
                drawCiao(data);
            });
        }
    });