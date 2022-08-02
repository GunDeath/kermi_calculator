let exp = 1.25;
let temperatureSupply = 80;
let temperatureReturn = 60;
let temperatureRoom = 30;
let oldValueOfCell300 =  [239, 299, 359, 418, 478, 538, 598, 657, 717, 837, 956, 1076, 1195, 1375, 1554, 1793]
let oldValueOfCell400 =  [304, 380, 456, 532, 608, 684, 760, 836, 912, 1064, 1215, 1367, 1519, 1747, 1975, 2279]
let newValueOfCell = 0;

for (let i = 0; i < oldValueOfCell400.length; i++){
    newValueOfCell = Math.round(oldValueOfCell400[i] * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
    console.log(Math.round(newValueOfCell));
}
