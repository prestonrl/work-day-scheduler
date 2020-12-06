$('#currentDay').text(moment().format('dddd, MMMM Do'));
var timeNow = moment().format('H');
timeNow = parseInt(timeNow);

var timeBlocks = [$('#block1'), $('#block2'), $('#block3'), $('#block4'), $('#block5'), $('#block6'), $('#block7'), $('#block8'), $('#block9')];
var timeValues = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var tasks = [];

var colorCode = function() {
    
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

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (i = 0; i < tasks.length; i++) {
        var timePosition= tasks[i].time - 8;
        newID = "block" + timePosition;
        console.log(tasks[i].item);
        //if (timeBlocks[i]+9)
        $('#' + newID).val(tasks[i].item);
    }
}


$('#btn1').on('click', function () {
    var newTask = $('#block1').val().trim();
    var blockInfo = {item: newTask, time: 9};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn2').on('click', function () {
    var newTask = $('#block2').val().trim();
    var blockInfo = { item: newTask, time: 10};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn3').on('click', function () {
    var newTask = $('#block3').val().trim();
    var blockInfo = { item: newTask, time: 11};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn4').on('click', function () {
    var newTask = $('#block4').val().trim();
    var blockInfo = { item: newTask, time: 12};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn5').on('click', function () {
    var newTask = $('#block5').val().trim();
    var blockInfo = { item: newTask, time: 13};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn6').on('click', function () {
    var newTask = $('#block6').val().trim();
    var blockInfo = { item: newTask, time: 14};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn7').on('click', function () {
    var newTask = $('#block7').val().trim();
    var blockInfo = { item: newTask, time: 15};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn8').on('click', function () {
    var newTask = $('#block8').val().trim();
    var blockInfo = { item: newTask, time: 16};
    tasks.push(blockInfo);
    saveTasks();
});

$('#btn9').on('click', function () {
    var newTask = $('#block9').val().trim();
    var blockInfo = { item: newTask, time: 17};
    tasks.push(blockInfo);
    saveTasks();
});

colorCode();
loadTasks();
