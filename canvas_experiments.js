var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width  = 0.9*window.innerHeight;
ctx.canvas.height = 0.9*window.innerHeight;

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

  var verticalDataValueRed =  valueNormalizer(dataField1, j, numberOfRepetitionsVertical, dataField1Max, dataField1Min);
  var horizontalDataValueRed =  valueNormalizer(dataField2, i, numberOfRepetitionsHorizontal, dataField2Max, dataField2Min);
  var verticalDataValueGreen =  valueNormalizer(dataField3, j, numberOfRepetitionsVertical, dataField3Max, dataField3Min);
  var horizontalDataValueGreen =  valueNormalizer(dataField4, i, numberOfRepetitionsHorizontal, dataField4Max, dataField4Min);
  var verticalDataValueBlue =  valueNormalizer(dataField5, j, numberOfRepetitionsVertical, dataField5Max, dataField5Min);
  var horizontalDataValueBlue =  valueNormalizer(dataField6, i, numberOfRepetitionsHorizontal, dataField6Max, dataField6Min);

	var a1 =  Math.floor(((0.25*verticalDataValueRed)+(0.25*horizontalDataValueRed))*255 + ((0.25*verticalDataValueGreen)+(0.25*horizontalDataValueGreen))*255);
	var a2 =  Math.floor(((0.25*verticalDataValueGreen)+(0.25*horizontalDataValueGreen))*255 + ((0.25*verticalDataValueBlue)+(0.25*horizontalDataValueBlue))*255);
	var a3 =  Math.floor(((0.25*verticalDataValueBlue)+(0.25*horizontalDataValueBlue))*255 + ((0.25*verticalDataValueRed)+(0.25*horizontalDataValueRed))*255);
	ctx.fillStyle = "rgb("+ a1 +","+a2 +","+a3+")";
	ctx.fillRect( i*onePercentOfCanvasWidth , j*onePercentOfCanvasHeight , onePercentOfCanvasWidth , onePercentOfCanvasHeight);
  ctx.fillStyle = "rgba("+ a3 +","+a1 +","+a2+", 0.2)";
	ctx.fillRect( i*onePercentOfCanvasHeight + (onePercentOfCanvasHeight / 2) , j*onePercentOfCanvasWidth + (onePercentOfCanvasWidth / 2)  , onePercentOfCanvasHeight , onePercentOfCanvasWidth);
  if(i == 50 && j == 50){
    console.log("rgb("+ a1 +","+a2 +","+a3+")")
  }
}

function renderScreen(){

	clear();
	for (var j = 0; j < numberOfRepetitionsVertical; j++) {
  	for (var i = 0; i < numberOfRepetitionsHorizontal; i++) {
      drawRectangle(i,j)
    }
  }
}

var listOfCountries = getCountries(populationGrowthDataJson);

for(var i = 0; i < listOfCountries.length; i++){
  $("#countries").append('<option value="'+ listOfCountries[i] +'">'+ listOfCountries[i] +'</option>');
}

$('select').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    var yearStart = 1917;
    var yearEnd = 2017;
    setDataField1(populationGrowthDataJson, valueSelected, yearStart, yearEnd);
    setDataField2(energyConsumptionPerCapitaDataJson, valueSelected, yearStart, yearEnd);
    setDataField3(humanRightsScoreDataJson, valueSelected, yearStart, yearEnd);
    setDataField4(militaryExpenditureByGdpDataJson, valueSelected, yearStart, yearEnd);
    setDataField5(fruitConsumptionPerCapitaKgPerAnnumDataJson, valueSelected, yearStart, yearEnd);
    setDataField6(tradeByGdpDataJson, valueSelected, yearStart, yearEnd);
    renderScreen();
});


//renderScreen();
