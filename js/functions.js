/* static table values  */
// let bigArray = [
//     [400, 239, 304, 367, 430, 301, 378, 454, 528, 257, 409, 513, 616, 717, 368, 584, 735, 879, 1017],
//     [500, 299, 380, 459, 538, 377, 472, 567, 660, 321, 511, 641, 770, 896, 459, 730, 918, 1099, 1271],
//     [600, 359, 456, 551, 646, 452, 567, 681, 792, 385, 613, 770, 924, 1075, 551, 876, 1102, 1318, 1525],
//     [700, 418, 532, 643, 753, 527, 662, 794, 924, 449, 715, 898, 1078, 1254, 643, 1022, 1286, 1538, 1779],
//     [800, 478, 608, 735, 861, 602, 756, 908, 1056, 513, 817, 1026, 1232, 1433, 735, 1169, 1469, 1758, 2034],
//     [900, 538, 684, 827, 968, 678, 851, 1021, 1188, 578, 920, 1155, 1386, 1612, 827, 1315, 1653, 1977, 2288],
//     [1000, 598, 760, 918, 1076, 753, 946, 1135, 1320, 642, 1022, 1283, 1540, 1791, 919, 1461, 1837, 2197, 2542],
//     [1100, 657, 836, 1010, 1184, 828, 1040, 1248, 1453, 706, 1124, 1411, 1694, 1971, 1010, 1607, 2020, 2417, 2796],
//     [1200, 717, 912, 1102, 1291, 904, 1135, 1362, 1585, 770, 1226, 1540, 1848, 2150, 1102, 1753, 2204, 2637, 3050],
//     [1400, 837, 1064, 1286, 1506, 1054, 1324, 1589, 1848, 898, 1430, 1796, 2156, 2508, 1286, 2045, 2571, 3076, 3559],
//     [1600, 956, 1215, 1470, 1721, 1205, 1513, 1816, 2112, 1027, 1635, 2053, 2464, 2866, 1470, 2337, 2939, 3515, 4067],
//     [1800, 1076, 1367, 1653, 1937, 1355, 1702, 2043, 2377, 1155, 1839, 2309, 2772, 3225, 1653, 2629, 3306, 3955, 4576],
//     [2000, 1195, 1519, 1837, 2152, 1506, 1891, 2270, 2641, 1283, 2044, 2566, 3080, 3583, 1837, 2921, 3673, 4394, 5084],
//     [2300, 1375, 1747, 2112, 2475, 1732, 2175, 2610, 3036, 1476, 2350, 2951, 3542, 4120, 2112, 3359, 4224, 5053, 5847],
//     [2600, 1554, 1975, 2388, 2797, 1958, 2459, 2951, 3433, 1668, 2657, 3336, 4004, 4658, 2388, 3798, 4775, 5713, 6610],
//     [3000, 1793, 2279, 2755, 3228, 2259, 2837, 3405, 3961, 1925, 3065, 3849, 4620, 5374, 2755, 4382, 5510, 6592, 7627]
// ]


let bigArray = [
    [400, 239,  367, 301, 378, 454, 257, 409, 513, 616, 717, 368, 584, 735, 879, 1017],
    [500, 299,  459, 377, 472, 567, 321, 511, 641, 770, 896, 459, 730, 918, 1099, 1271],
    [600, 359, 551, 452, 567, 681, 385, 613, 770, 924, 1075, 551, 876, 1102, 1318, 1525],
    [700, 418,  643, 527, 662, 794, 449, 715, 898, 1078, 1254, 643, 1022, 1286, 1538, 1779],
    [800, 478,  735, 602, 756, 908, 513, 817, 1026, 1232, 1433, 735, 1169, 1469, 1758, 2034],
    [900, 538,  827, 678, 851, 1021, 578, 920, 1155, 1386, 1612, 827, 1315, 1653, 1977, 2288],
    [1000, 598, 918, 753, 946, 1135, 642, 1022, 1283, 1540, 1791, 919, 1461, 1837, 2197, 2542],
    [1100, 657, 1010, 828, 1040, 1248, 706, 1124, 1411, 1694, 1971, 1010, 1607, 2020, 2417, 2796],
    [1200, 717,  1102, 904, 1135, 1362, 770, 1226, 1540, 1848, 2150, 1102, 1753, 2204, 2637, 3050],
    [1400, 837,  1286, 1054, 1324, 1589, 898, 1430, 1796, 2156, 2508, 1286, 2045, 2571, 3076, 3559],
    [1600, 956,  1470, 1205, 1513, 1816, 1027, 1635, 2053, 2464, 2866, 1470, 2337, 2939, 3515, 4067],
    [1800, 1076,  1653, 1355, 1702, 2043, 1155, 1839, 2309, 2772, 3225, 1653, 2629, 3306, 3955, 4576],
    [2000, 1195,  1837, 1506, 1891, 2270, 1283, 2044, 2566, 3080, 3583, 1837, 2921, 3673, 4394, 5084],
    [2300, 1375,  2112, 1732, 2175, 2610, 1476, 2350, 2951, 3542, 4120, 2112, 3359, 4224, 5053, 5847],
    [2600, 1554,  2388, 1958, 2459, 2951, 1668, 2657, 3336, 4004, 4658, 2388, 3798, 4775, 5713, 6610],
    [3000, 1793,  2755, 2259, 2837, 3405, 1925, 3065, 3849, 4620, 5374, 2755, 4382, 5510, 6592, 7627]
]

let smallTableArray = [300, 500, 300, 400, 500, 200, 300, 400, 500, 600, 200, 300, 400, 500, 600]

let colspanArray = [ [2, 11], [3, 12], [5, 22], [5, 33] ]
/*--------------------------------------*/
/*--------------------------------------*/

/* functions which generate tables */

/* create top title of table "Тип .." */
const createTopTitle = (flag) => {
    let getTopTableElement = document.getElementById(`getTopTableElement${flag}`);
    for(let i = colspanArray.length - 1; i >= 0; i--){
        let th_element = document.createElement('th');
        Object.assign(th_element, {
            colSpan: String(colspanArray[i][0]),
            className: 'th_style_new',
            innerHTML: `Тип ${colspanArray[i][1]}`
        })
        getTopTableElement.after(th_element)
    }
}

/* create top title of table "values"*/
const createThElements = (flag) => {
    let getTh = document.getElementById(`getTableItemTh${flag}`);
    for(let i = 0; i < smallTableArray.length; i++){
        let th_element = document.createElement('th');
        Object.assign(th_element, {
            id:`0_${i+1}`,
            className: 'th_style',
            innerHTML: String(smallTableArray[i])
        })
        getTh.appendChild(th_element);
    }
}

/* create all other cells of table */
const createTable1VTrElements = (count, flag, id_name=' ') => {
    let getTr = document.getElementById(`getTableMainItemTr${flag}`);
    for(let j = 0; j < count; j++){
        let trElem = document.createElement('tr')
        for(let i = 0; i < count; i++){
            if(i === 0){
                let th_element = document.createElement('th')
                Object.assign(th_element, {
                    id:`${j+1}_${i}`,
                    className: 'th_left_style',
                    style: 'color: #538ED5',
                    innerHTML: String(bigArray[j][i])
                })
                trElem.appendChild(th_element);
            }else{
                let td_element = document.createElement('td')
                Object.assign(td_element, {
                    id:`${id_name}${j+1}_${i}`,
                    onmouseover: 'select(this.id)',
                    onmouseout: 'unselect(this.id)',
                    innerHTML: String(bigArray[j][i])
                })
                trElem.appendChild(td_element);
            }
        }
        getTr.before(trElem);
    }
}

/*--------------------------------------*/
/*--------------------------------------*/
/* function which calculate temperature */
const repeatInputValues = () => {
    let addingInput = document.getElementById('temperatureRoomOwn');
    addingInput.oninput = () => {
        document.getElementById('temperatureRoom').value = addingInput.value;
    }
}

function someCalculation() {
    let exp
    let oldValueOfCell = 0;
    let newValueOfCell = 0;
    let temperatureSupply = localStorage.getItem('l_temperatureSupply');
    let temperatureReturn = localStorage.getItem('l_temperatureReturn');
    let temperatureRoom = localStorage.getItem('l_temperatureRoom');
    document.getElementById('temperature_difference').innerHTML = (parseInt(temperatureSupply) + parseInt(temperatureReturn)) / 2 - temperatureRoom;

    for (let n = 1; n < 19; n++) {
        let maxColumn = 16;
        for (let i = 1; i < maxColumn; i++) {
            switch (i) {
                case 1:
                    exp = 1.25
                    break
                case 2:
                    exp = 1.25
                    break
                case 3:
                    exp = 1.26;
                    oldValueOfCell = +(document.getElementById(n + '_' + (i + 5)).innerHTML);
                    newValueOfCell = Math.round(oldValueOfCell * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
                    document.getElementById(n + '_' + i).innerHTML = Math.round(newValueOfCell * 0.737);
                    break
                case 4:
                    exp = 1.27
                    oldValueOfCell = +(document.getElementById(n + '_' + (i + 5)).innerHTML);
                    newValueOfCell = Math.round(oldValueOfCell * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
                    document.getElementById(n + '_' + i).innerHTML = Math.round(newValueOfCell * 0.737);
                    break
                case 5:
                    exp = 1.25
                    oldValueOfCell = +(document.getElementById(n + '_' + (i + 5)).innerHTML);
                    newValueOfCell = Math.round(oldValueOfCell * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
                    document.getElementById(n + '_' + i).innerHTML = Math.round(newValueOfCell * 0.737);
                    break
                case 6:
                    exp = 1.27
                    oldValueOfCell = +(document.getElementById(n + '_' + (i + 2)).innerHTML);
                    newValueOfCell = Math.round(oldValueOfCell * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
                    document.getElementById(n + '_' + i).innerHTML = Math.round(newValueOfCell / 2);
                    break
                case 7:
                    exp = 1.29
                    break
                case 8:
                    exp = 1.27
                    break
                case 9:
                    exp = 1.28
                    break
                case 10:
                    exp = 1.29
                    break
                case 11:
                    exp = 1.31
                    oldValueOfCell = +(document.getElementById(n + '_' + (i + 2)).innerHTML);
                    newValueOfCell = Math.round(oldValueOfCell * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
                    document.getElementById(n + '_' + i).innerHTML = Math.round(newValueOfCell / 2);
                    break
                case 12:
                    exp = 1.3
                    break
                case 13:
                    exp = 1.31
                    break
                case 14:
                    exp = 1.32
                    break
                case 15:
                    exp = 1.33
                    break
            }
            if (i !== 3 && i !== 4 && i !== 5 && i !== 6 && i !== 11) {
                oldValueOfCell = +(document.getElementById(n + '_' + i).innerHTML);
                newValueOfCell = Math.round(oldValueOfCell * Math.pow((((temperatureSupply - temperatureReturn) / (Math.log((temperatureSupply - temperatureRoom) / (temperatureReturn - temperatureRoom)))) / 49.83), exp));
                document.getElementById(n + '_' + i).innerHTML = newValueOfCell;
            }
        }
    }
}

function checking(input) {
    input.value = input.value.replace(",", '.');
    if (+input.value) { }
    else { input.value = ""; }
}

function calculate() {
    localStorage.setItem('l_temperatureSupply', document.getElementById('temperatureSupply').value);
    localStorage.setItem('l_temperatureReturn', document.getElementById('temperatureReturn').value);
    localStorage.setItem('l_temperatureRoom', document.getElementById('temperatureRoom').value);
    let table1C = document.getElementById('table1C')
    let table1V = document.getElementById('table1V')
    table1V.innerHTML = table1C.innerHTML;
    let tableValues = document.getElementById('reloadCalc').getElementsByTagName('td')
    let count = 0;
    let loopLength = tableValues.length - 1;
    try {
        while (count <= loopLength) {
            let attributeValue = tableValues[count].getAttribute('id')
            let re = /zm /gi;
            let newStr = attributeValue.replace(re, '');
            tableValues[count].setAttribute('id', '' + newStr + '')
            ++count;
        }
    } catch (err) { someCalculation(); }
}

/*--------------------------------------*/
/*--------------------------------------*/
/* creating and adding function of calculating process */
/*create top row of values*/
createThElements(1);
createThElements(2);
/*create all fields of values*/
createTable1VTrElements(16, 1);
createTable1VTrElements(16, 2, 'zm ');
/*create top title*/
createTopTitle(1);
createTopTitle(2);
/*repeat input values*/
repeatInputValues()