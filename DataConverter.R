populationGrowthRatesData <- read.csv(file.choose(), header=TRUE, sep=",")

populationGrowthRatesDataT <- t(populationGrowthRatesData);

outputPopGrowthRatesDf <- data.frame(matrix(ncol = 102, nrow = 0));

names(outputPopGrowthRatesDf) <- c("country", 1917:2017)

counter <- 1
for(country in unique(populationGrowthRatesDataT[1,])){
  outputPopGrowthRatesDf[counter,1] <- country
  
  yearsAvailable <- populationGrowthRatesDataT[3,populationGrowthRatesDataT[1,] == country & populationGrowthRatesDataT[3,]>1917 & 
                               populationGrowthRatesDataT[3,] < 2017 & populationGrowthRatesDataT[3,] %in% names(outputPopGrowthRatesDf)];
  
  selector <- populationGrowthRatesDataT[1,] == country & populationGrowthRatesDataT[3,]>1917 & populationGrowthRatesDataT[3,] < 2017 &
                                                                          populationGrowthRatesDataT[3,] %in% names(outputPopGrowthRatesDf);
  outputPopGrowthRatesDf[counter,yearsAvailable] <- populationGrowthRatesDataT[4, selector]
  counter = counter + 1;
}


write.csv(outputPopGrowthRatesDf, file = "outputPopGrowthRatesDf.csv")




