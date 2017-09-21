var dataField1;
var dataField1Max;
var dataField1Min;

var dataField2;
var dataField2Max;
var dataField2Min;

var dataField3;
var dataField3Max;
var dataField3Min;

var dataField4;
var dataField4Max;
var dataField4Min;

var dataField5;
var dataField5Max;
var dataField5Min;

var dataField5;
var dataField5Max;
var dataField5Min;

var dataField6;
var dataField6Max;
var dataField6Min;

function setDataField1(dataArrayJson, country, startYear, endYear){
  dataField1 = getArrayFromData(dataArrayJson, country, startYear, endYear);
  dataField1Max = globalMaxFinder(dataArrayJson);
  dataField1Min = globalMinFinder(dataArrayJson);
}

function setDataField2(dataArrayJson, country, startYear, endYear){
  dataField2 = getArrayFromData(dataArrayJson, country, startYear, endYear);
  dataField2Max = globalMaxFinder(dataArrayJson);
  dataField2Min = globalMinFinder(dataArrayJson);
}

function setDataField3(dataArrayJson, country, startYear, endYear){
  dataField3 = getArrayFromData(dataArrayJson, country, startYear, endYear);
  dataField3Max = globalMaxFinder(dataArrayJson);
  dataField3Min = globalMinFinder(dataArrayJson);
}


function setDataField4(dataArrayJson, country, startYear, endYear){
  dataField4 = getArrayFromData(dataArrayJson, country, startYear, endYear);
  dataField4Max = globalMaxFinder(dataArrayJson);
  dataField4Min = globalMinFinder(dataArrayJson);
}

function setDataField5(dataArrayJson, country, startYear, endYear){
  dataField5 = getArrayFromData(dataArrayJson, country, startYear, endYear);
  dataField5Max = globalMaxFinder(dataArrayJson);
  dataField5Min = globalMinFinder(dataArrayJson);
}

function setDataField6(dataArrayJson, country, startYear, endYear){
  dataField6 = getArrayFromData(dataArrayJson, country, startYear, endYear);
  dataField6Max = globalMaxFinder(dataArrayJson);
  dataField6Min = globalMinFinder(dataArrayJson);
}
