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
  return [0];
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
    console.log(startsAt)

    for(var arrayCounter = outputValues.length-1; arrayCounter >= 0;arrayCounter--){
      if(outputValues[arrayCounter] != "NA"){
        endsAt = arrayCounter;
        break
      }
    }
    console.log(endsAt)

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
          for(var secondaryArrayCounter = endsAt; secondaryArrayCounter >= arrayCounter; secondaryArrayCounter--){
            if(outputValues[secondaryArrayCounter] != "NA"){
              previousValidValueIndex = secondaryArrayCounter;
              break;
            }
          }
          console.log(startsAt)
          console.log(endsAt)
          console.log(arrayCounter)
          var weightedPositionCounter = (arrayCounter - previousValidValueIndex)/(nextValidValueIndex - previousValidValueIndex);
          var totalGap = outputValues[nextValidValueIndex] - outputValues[previousValidValueIndex]
          //var outputValues[arrayCounter] = (outputValues[previousValidValueIndex]) + (weightedPositionCounter*totalGap);
        }
      }
    }else{
      return[0]
    }

  outputValues = outputValues.slice(startsAt, endsAt+1);

  return outputValues;
}
