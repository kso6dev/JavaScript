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
var menu = document.getElementById("menu");

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
    randomGridCell(cells[i]);
}

//init random num wheel
for (var i = 0; i < 5; i++)
{
    randomGridCell(randomNumbersDiv[i]);
    if (i < 2){
        randomNumbersDiv[i].addEventListener("click", wheelUp);
    }
    if (i > 2){
        randomNumbersDiv[i].addEventListener("click", wheelDown);
    }
}

function wheelUp(e){
    var allRandomNumDivs = document.querySelectorAll("div[class^=num]");
    randomGridCell(allRandomNumDivs[14]);
    allRandomNumDivs[2].innerHTML = randomNumbersDiv[1].innerHTML;
    allRandomNumDivs[5].innerHTML = randomNumbersDiv[2].innerHTML;
    allRandomNumDivs[8].innerHTML = randomNumbersDiv[3].innerHTML;
    allRandomNumDivs[11].innerHTML = randomNumbersDiv[4].innerHTML;
}

function wheelDown(e){
    var allRandomNumDivs = document.querySelectorAll("div[class^=num]");
    randomGridCell(allRandomNumDivs[0]);
    allRandomNumDivs[3].innerHTML = randomNumbersDiv[0].innerHTML;
    allRandomNumDivs[6].innerHTML = randomNumbersDiv[1].innerHTML;
    allRandomNumDivs[9].innerHTML = randomNumbersDiv[2].innerHTML;
    allRandomNumDivs[12].innerHTML = randomNumbersDiv[3].innerHTML;
}

function randomGridCell(cell){
    cell.innerHTML = Math.floor(Math.random() * 5);
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



console.log("fin five");