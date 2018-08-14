//existing elements
var mainWrapper = document.getElementById("main_wrapper");
var grid = document.getElementById("grid");
var cells = document.querySelectorAll(".cell");
var sideMenu = document.getElementById("sidemenu");
var menuNumbers = document.getElementById("menu_numbers");
var randomNumbersDiv = document.querySelectorAll(".num1, .num2, .num3, .num4, .num5");
var sideMenuButtons = document.getElementById("sidemenubuttons");
var sideMenuRange = document.getElementById("range");
var sideMenuGameInfo = document.getElementById("gameinfo");
var sideMenuTimer = document.getElementById("timer");
var menu = document.getElementById("menu");
var playButton = document.getElementById("playbutton");
var stopButton = document.getElementById("stopbutton");


var wheel = new Wheel();
var allRandomNumDivs = document.querySelectorAll("div[class^=num]");
    
//constants
var nbOfCols = 5;
var nb0fLines = 5;
var nbOfCells = nbOfCols * nb0fLines;
if (nbOfCells != cells.length)
{
    alert("oups! there is a problem with grid cells calculation");
}
var cellHeight = Math.floor(100 / nb0fLines);
var cellWidth = Math.floor(100/ nbOfCols);

var directions = new Map();
directions.set("normal", "row"); directions.set("reverse", "row-reverse");
directions.set("up", "column"); directions.set("down", "column-reverse");
var orientation = directions.get("normal");
var sideMenuOrientation = "column";
if (orientation.indexOf("column") != -1){
    sideMenuOrientation = "row";
}

//side menu elements dimension
var sideMenuElementHeight = 100;
var sideMenuElementWidth = 100;
var sideMenuElementsCount = 4;
if (sideMenuOrientation == "row")
{
    sideMenuElementWidth = Math.floor(100 / sideMenuElementsCount);
}
else
{
    sideMenuElementHeight = Math.floor(100 / sideMenuElementsCount);
}

//define elements orientation and dynamic dimensions depending on screen size and orientation
defineDynamicElements(mainWrapper, "main_wrapper");
defineDynamicElements(sideMenu, "sidemenu");
defineDynamicElements(menuNumbers, "menu_numbers");
defineDynamicElements(sideMenuButtons, "sidemenubuttons");
defineDynamicElements(sideMenuGameInfo, "gameinfo");

//initPlate adding grid cells with event and random numbers
for (var i = 0; i < nbOfCells; i++)
{
    //define dimensions depending on screen size and orientation
    defineDynamicElements(cells[i],"cell");
    
    //add cell events
    cells[i].addEventListener("mouseenter", function(e){
        var cell = e.target;
        addClass(cell, " cell_hovered");
        colorGridCell(cell);
    });
    cells[i].addEventListener("mouseleave", function(e){
        var cell = e.target;
        removeClass(cell, " cell_hovered");
        colorGridCell(cell);
    });

    //define random number
    randomGridCell(cells[i], 0);
}

//init random num wheel
for (var i = 0; i < 5; i++)
{
    randomGridCell(randomNumbersDiv[i], 1);
    if (i < 2){
        randomNumbersDiv[i].addEventListener("click", wheelUp);
    }
    if (i > 2){
        randomNumbersDiv[i].addEventListener("click", wheelDown);
    }
}
//keep random num wheel in array var with display info
for (var i = 1; i < 16; i++)
{
    //wheelNumbers.push([randomNumbersDiv[Math.floor(i / 5)].innerHTML, false]);
    wheel.wheelNumbers.push(new Object());
    wheel.wheelNumbers[i-1].innerHTML = randomNumbersDiv[Math.floor((i-1) / 3)].innerHTML;
    if ((i+1) % 3 == 0)
    {
        wheel.wheelNumbers[i-1].visible = true;
        wheel.wheelNumbers[i-1].grow = 6;
        wheel.wheelNumbers[i-1].shrink = 0;
    }
    else
    {
        wheel.wheelNumbers[i-1].visible = false;
        wheel.wheelNumbers[i-1].grow = 0;
        wheel.wheelNumbers[i-1].shrink = 6;
    }
}
console.log(wheel);

//functions
function defineDynamicElements(element, className){
    switch(className){
        case "main_wrapper":
            element.style.flexDirection = orientation;
            break;
        case "sidemenubuttons":
            element.style.flexDirection = sideMenuOrientation;
            break;
        case "gameinfo":
            element.style.flexDirection = sideMenuOrientation;
            break;
        case "sidemenu":
            element.style.flexDirection = sideMenuOrientation;
            element.style.width = "80%";
            break;
        case "menu_numbers":
            element.style.flexDirection = sideMenuOrientation;
            break;
        case "cell":
            element.style.width = "calc(" + cellWidth +"% - 4px)";
            element.style.height = "calc(" + cellHeight +"% - 4px)";
            break;
    }
}

function wheelUp(e, loop){
    var turn = false;
    
    for (var i = 0; i < 15; i++)
    {
        if (!loop)
        {
            if (i < 14)
            {
                wheelNumbers[i][0] = wheelNumbers[i+1][0];
            }
            else
            {
                wheelNumbers[i][0] = Math.floor(Math.random() * 5 + 1);
            }
            wheelNumbers[i][1] = ((i+1) % 3 == 0);
        }
    }

    if (turn)
    {
        window.requestAnimationFrame(function() {wheelUp(e, true)});
    }
}

function wheelDown(e, loop){
    var turn = false;
    var shrink = 0;
    var grow = 0;

    for (var i = 14; i >= 0; i--)
    {
        if (!loop)
        {
            if (i > 0)
            {
                wheelNumbers[i][0] = wheelNumbers[i-1][0];
            }
            else
            {
                wheelNumbers[i][0] = Math.floor(Math.random() * 5 + 1);
            }
            wheelNumbers[i][1] = (i % 3 == 0);
        }

        if (wheelNumbers[i][1])
        {
            if (allRandomNumDivs[i].style.flexGrow != "")
            {
                grow = parseInt(allRandomNumDivs[i].style.flexGrow);
            }
            grow++;
            allRandomNumDivs[i].style.flexGrow = grow;
        }
        else
        {
            allRandomNumDivs[i].style.flexGrow = "0";
            if (allRandomNumDivs[i].style.flexShrink != "")
            {
                shrink = parseInt(allRandomNumDivs[i].style.flexShrink);
            }
            shrink++;
            allRandomNumDivs[i].style.flexShrink = shrink;
        }
    }
    
    if (turn)
    {
        window.requestAnimationFrame(function() {wheelDown(e, true)});
    }
}

function randomGridCell(cell, plus){
    cell.innerHTML = Math.floor(Math.random() * 5 + plus);
    colorGridCell(cell);
}

function colorGridCell(cell){
    var className = cell.className;
    var factor = parseInt(cell.innerHTML);
    var rgbFactor = 255 / 5;
    var blue = (5 - factor) * rgbFactor;
    var red = factor * rgbFactor;
      
    if (className.indexOf("cell") != -1)
    {
        cell.style.boxShadow = "1px 1px 1px 1px rgba(0, 1, 32, 0.692)";
    }

    if (className.indexOf("hovered") == -1)
    {
        cell.style.backgroundImage = "linear-gradient(to bottom right, rgba("+red+", 0, "+blue+", 0.533), rgba("+red+", 0, "+blue+", 0.021))";
    }
    else
    {
        cell.style.boxShadow = "0px 0px 0px 0px rgba(0, 1, 32, 0.692)";
        cell.style.backgroundImage = "linear-gradient(to bottom right, rgba("+red+", 7, "+blue+", 0.903), rgba(15, 7, 44, 0.321))";
    }
}

function addClass(element, className){
    element.className += className;
}
function removeClass(element, className){
    element.className = element.className.replace(className,"");
}

//start playing
(function(){
    window.addEventListener("load", function(){
        playButton.addEventListener("click", function() {play()});
        stopButton.addEventListener("click", function() {stop()});
        var playing = false;
        var start, time;

        function play(){
            playing = true;
            start = new Date().getTime();
            updateTimer();    
        }

        function stop(){  
            playing = false;
        }

        function updateTimer(){
            if (playing)
            {
                time = new Date().getTime();
                sideMenuTimer.innerHTML = Math.floor((time - start) / 1000);
                window.requestAnimationFrame(function() {updateTimer()});
            }
            else
            {
                sideMenuTimer.innerHTML = 0;
            }
        }
    });
})();

console.log("fin five");