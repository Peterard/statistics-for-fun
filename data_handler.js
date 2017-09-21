function getArrayFromData(JsonObject, givenCountry, startYear, endYear){

  var outputValues = [];

  for(var i=0; i < JsonObject.length; i++){
    countryText = JsonObject[i].country;
    if(countryText == givenCountry){

      for(var year=startYear; year <=endYear; year++){
        outputValues.push(JsonObject[i][year]);
      }
      outputValues = makeSureNaInMiddleIsNormalized(outputValues);
      return outputValues
    }
  }

  for(var i=0; i < JsonObject.length; i++){
    countryText = JsonObject[i].country;
    if(countryText == "World"){

      for(var year=startYear; year <=endYear; year++){
        outputValues.push(JsonObject[i][year]);
      }
      outputValues = makeSureNaInMiddleIsNormalized(outputValues);
      return outputValues
    }
  }
}

function makeSureNaInMiddleIsNormalized(outputValues){
    var startsAt = undefined;
    var endsAt = undefined;

    for(var arrayCounter = 0; arrayCounter < outputValues.length;arrayCounter++){
      if(outputValues[arrayCounter] != "NA"){
        startsAt = arrayCounter;
        break
      }
    }

    for(var arrayCounter = outputValues.length-1; arrayCounter >= 0;arrayCounter--){
      if(outputValues[arrayCounter] != "NA"){
        endsAt = arrayCounter;
        break
      }
    }

    if(startsAt != undefined && endsAt != undefined){
      for(var arrayCounter = startsAt; arrayCounter <= endsAt;arrayCounter++){
        if(outputValues[arrayCounter] == "NA"){
          var nextValidValueIndex = endsAt;
          for(var secondaryArrayCounter = arrayCounter; secondaryArrayCounter <= endsAt; secondaryArrayCounter++){
            if(outputValues[secondaryArrayCounter] != "NA"){
              nextValidValueIndex = secondaryArrayCounter;
              break;
            }
          }
          var previousValidValueIndex = startsAt;
          for(var secondaryArrayCounter = arrayCounter; secondaryArrayCounter >= startsAt; secondaryArrayCounter--){
            if(outputValues[secondaryArrayCounter] != "NA"){
              previousValidValueIndex = secondaryArrayCounter;
              break;
            }
          }
          var weightedPositionCounter = (arrayCounter - previousValidValueIndex)/(nextValidValueIndex - previousValidValueIndex);
          var totalGap = outputValues[nextValidValueIndex] - outputValues[previousValidValueIndex]
          outputValues[arrayCounter] = (outputValues[previousValidValueIndex]) + (weightedPositionCounter*totalGap);
        }
      }
    }else{
      return[0]
    }

  outputValues = outputValues.slice(startsAt, endsAt+1);

  return outputValues;
}

function globalMaxFinder(jsonDataArray){
  var globalMax;
  for(var i=0; i < jsonDataArray.length; i++){
    for(var year=1917; year <= 2017; year++){
      if(!isNaN(jsonDataArray[i][year]) && (typeof globalMax == "undefined" || jsonDataArray[i][year] > globalMax)){
        globalMax = jsonDataArray[i][year];
      };
    }
  }
  return globalMax;
}

function globalMinFinder(jsonDataArray){
  var globalMin;
  for(var i=0; i < jsonDataArray.length; i++){
    for(var year=1917; year <= 2017; year++){
      if(!isNaN(jsonDataArray[i][year]) && (typeof globalMin == "undefined" || jsonDataArray[i][year] < globalMin)){
        globalMin = jsonDataArray[i][year];
      };
    }
  }
  return globalMin;
}


function valueNormalizer(dataArray, index, numberOfRepetitions, globalMax, globalMin){

  var min = Math.min.apply(null, dataArray);
  var max = Math.max.apply(null, dataArray);

  min = (min*50 + globalMin)/51;
  max = (max*50 + globalMax)/51;

  var arrayIndex = ((index/numberOfRepetitions)*(dataArray.length-1));

  var lowerArrayIndex = Math.floor(arrayIndex);

  var higherArrayIndex = Math.ceil(arrayIndex);

  var indexGap = arrayIndex - lowerArrayIndex;

  var differenceDataValue = dataArray[higherArrayIndex] - dataArray[lowerArrayIndex];

  var dataValue = dataArray[lowerArrayIndex] + (differenceDataValue * indexGap);

  return ((dataValue - min)/(max-min));

}

function getCountries(JsonObject){
  var countryList = [];
  for(var i=0; i < JsonObject.length; i++){
    countryList.push(JsonObject[i].country);
  }
  return countryList;
}
