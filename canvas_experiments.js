var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width  = 0.9*window.innerHeight;
ctx.canvas.height = 0.9*window.innerHeight;
//var grd = [];
var populationGrowthData = getArrayFromData(populationGrowthDataJson, "Russia", 1950, 2014);
var fruitConsumptionData = getArrayFromData(fruitConsumptionPerCapitaKgPerAnnumDataJson, "Russia", 1950, 2014);
var popGrowthMin = Math.min.apply(null, populationGrowthData);
var popGrowthMax = Math.max.apply(null, populationGrowthData);
var fruitConsumptMin = Math.min.apply(null, fruitConsumptionData);
var fruitConsumptMax = Math.max.apply(null, fruitConsumptionData);
console.log(populationGrowthData);
console.log(fruitConsumptionData);

var heightOfCanvas = $("#myCanvas").height();
var widthOfCanvas = $("#myCanvas").width();

var onePercentOfCanvasHeight = Math.floor(heightOfCanvas/100);
var onePercentOfCanvasWidth = Math.floor(widthOfCanvas/100);

var numberOfRepetitionsVertical = Math.floor(heightOfCanvas / onePercentOfCanvasHeight);
var numberOfRepetitionsHorizontal = Math.floor(widthOfCanvas / onePercentOfCanvasWidth);

function clear() {
    ctx.clearRect(0, 0, widthOfCanvas, heightOfCanvas);
}


function drawRectangle(i,j) {

  var arrayIndexVertical = Math.round((i/numberOfRepetitionsVertical)*(populationGrowthData.length-1));
  var arrayIndexHorizontal = Math.round((j/numberOfRepetitionsHorizontal)*(fruitConsumptionData.length-1));

  var populationGrowthDataValue = populationGrowthData[arrayIndexVertical]
  populationGrowthDataValue = ((populationGrowthDataValue - popGrowthMin)/(popGrowthMax-popGrowthMin))
  var fruitConsumptionDataValue = fruitConsumptionData[arrayIndexHorizontal]
  fruitConsumptionDataValue = ((fruitConsumptionDataValue - fruitConsumptMin)/(fruitConsumptMax-fruitConsumptMin))
console.log(populationGrowthDataValue)
console.log(fruitConsumptionDataValue)
	var a1 =  Math.floor(((populationGrowthDataValue*0.5)+(fruitConsumptionDataValue*0.5))*255);                //Math.round(254*Math.random());
	var a2 =  Math.floor(fruitConsumptionDataValue*255);
	var a3 =  Math.floor(33);
	//document.write(Math.sin(Math.round(2500000*(1+Math.sin(i*2*Math.PI/70)))) + ", ");
	ctx.fillStyle = "rgb("+ a1 +","+a2 +","+a3+")";
	ctx.fillRect( i*onePercentOfCanvasWidth , j*onePercentOfCanvasHeight , onePercentOfCanvasWidth , onePercentOfCanvasHeight);
  // ctx.fillStyle = "rgba("+ 250 +","+250 +","+250+", 0.2)";
	// ctx.fillRect( i*onePercentOfCanvasHeight , j*onePercentOfCanvasWidth , onePercentOfCanvasHeight , onePercentOfCanvasWidth);
}

function renderScreen(){

	//clear();
	for (var j = 0; j < numberOfRepetitionsVertical; j++) {
  	for (var i = 0; i < numberOfRepetitionsHorizontal; i++) {
      drawRectangle(i,j)
    }
  }
}


renderScreen();
