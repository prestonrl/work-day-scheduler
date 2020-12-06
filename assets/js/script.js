$('#currentDay').text(moment().format('dddd, MMMM Do'));


var colorCode = function() {
    var timeNow = moment().format('H');
    timeNow = parseInt(timeNow);

    var timeBlocks = [$('#block1'), $('#block2'), $('#block3'), $('#block4'), $('#block5'), $('#block6'), $('#block7'), $('#block8'), $('#block9')];
    var timeValues = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    console.log(timeValues);
    for (i = 0; i < timeBlocks.length; i++) {
        if(timeValues[i] < timeNow) {
            timeBlocks[i].addClass("past");
        }
        else if (timeValues[i] === timeNow) {
            timeBlocks[i].addClass("present");
        }
        else {
            timeBlocks[i].addClass("future");
        }
        
    }
}

colorCode();
