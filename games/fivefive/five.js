//parameters
var nbOfCols = 5;
var nb0fLines = 5;
var directions = new Map();
directions.set("normal", "row"); directions.set("reverse", "row-reverse");
directions.set("up", "column"); directions.set("down", "column-reverse");
var orientation = directions.get("normal");
var sideMenuOrientation = "column";
if (orientation.indexOf("column") != -1){
    sideMenuOrientation = "row";
}
var playZoneFlex = 4;
var gridFlex = 1;
var sideMenuFlex = 1;

//calculations depending on nbOfCols and nbOfLines
var nbOfCells = nbOfCols * nb0fLines;
var cellHeight = Math.floor(100 / nb0fLines);
var cellWidth = Math.floor(100/ nbOfCols);

//existing elements
var mainWrapper = document.getElementById("main_wrapper");
var playZone = document.getElementById("playzone");
var sideMenu = document.getElementById("sidemenu");
var menu = document.getElementById("menu");

//dynamic playzone elements
var grid = document.createElement("div"); 

//cells array for easy access
var cells = [];

//dynamic menu elements created and added to menuElements collection
var menuElements = {};

//randomcell
var randomcell_upup = document.createElement("div"); 
menuElements.randomcell_upup = randomcell_upup; 
menuElements.randomcell_upup.className = "randomcell_upup";

var randomcell_up = document.createElement("div"); 
menuElements.randomcell_up = randomcell_up; 
menuElements.randomcell_up.className = "randomcell_up";

var randomcell = document.createElement("div"); 
menuElements.randomcell = randomcell; 
menuElements.randomcell.className = "randomcell";

var randomcell_down = document.createElement("div"); 
menuElements.randomcell_down = randomcell_down; 
menuElements.randomcell_down.className = "randomcell_down";

var randomcell_downdown = document.createElement("div"); 
menuElements.randomcell_downdown = randomcell_downdown; 
menuElements.randomcell_downdown.className = "randomcell_downdown";

//range
var rangeDiv = document.createElement("div"); 
menuElements.rangeDiv = rangeDiv;
menuElements.rangeDiv.className = "range";
//score
var scoreDiv = document.createElement("div"); 
menuElements.scoreDiv = scoreDiv;
menuElements.scoreDiv.className = "score";
//timer
var timerDiv = document.createElement("div");
menuElements.timerDiv = timerDiv; 
menuElements.timerDiv.className = "timer"; 

//side menu elements dimension
var menuElementHeight = 100;
var menuElementWidth = 100;
var menuElementsLen = Object.keys(menuElements).length;
if (sideMenuOrientation == "row")
{
    menuElementWidth = Math.floor(100 / menuElementsLen);
}
else
{
    menuElementHeight = Math.floor(100 / menuElementsLen);
}

function initPlate(){
    //main_wrapper
    defineElementStyle(mainWrapper, "main_wrapper", true);

    //playzone
    defineElementStyle(playZone, "playzone", true);
    
    //sidemenu
    defineElementStyle(sideMenu, "sidemenu", true);
    for (var element in menuElements){
        defineElementStyle(menuElements[element], menuElements[element].className, true);
        sideMenu.appendChild(menuElements[element]);
    }

    //grid
    defineElementStyle(grid, "grid", true);
    playZone.appendChild(grid);
    
    //cells
    addCells(grid);
}

function randomGridCells(){
    var cellsLen = cells.length;
    for (var i = 0; i < cellsLen; i++)
    {
        randomGridCell(cells[i]);
    }
}

function randomGridCell(cell){
    cell.innerHTML = Math.floor(Math.random() * 6);
    colorGridCell(cell);
}

function colorGridCell(cell){
    var className = cell.className;
    var factor = parseInt(cell.innerHTML);
    var rgbFactor = 255 / 5;
    var blue = (5 - factor) * rgbFactor;
    var red = factor * rgbFactor;
      
    cell.style.boxShadow = "1px 1px 1px 1px rgba(0, 1, 32, 0.692)";

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

function addCells(grid){
    var cell;
    for (var i = 0; i < nbOfCells; i++){
        cell = document.createElement("div");
        cell.addEventListener("mouseenter", function(e){
            var cell = e.target;
            defineElementStyle(cell, cell.className+"_hovered", false);
            colorGridCell(cell);
        });
        cell.addEventListener("mouseleave", function(e){
            var cell = e.target;
            defineElementStyle(cell, "cell", true);
            colorGridCell(cell);
        });
        defineElementStyle(cell,"cell",true);
        grid.appendChild(cell);
        cells.push(cell);
    }
}

function defineElementStyle(element, className, replaceClassName){
    if (replaceClassName){
        element.className = className;
    }
    else {
        element.className += " " + className;
    }
    
    switch(className){
        case "main_wrapper":
            element.style.flexDirection = orientation;
            break;
        case "playzone":
            element.style.flex = playZoneFlex;
            break;
        case "sidemenu":
            element.style.flex = sideMenuFlex;
            element.style.flexDirection = sideMenuOrientation;
            break;
        case "grid":
            element.style.flex = gridFlex;
            break;
        case "cell":
            element.style.width = "calc(" + cellWidth +"% - 4px)";
            element.style.height = "calc(" + cellHeight +"% - 4px)";
            break;
        case "randomcell_upup":
        case "randomcell_downdown":
            element.style.width = "calc(" + menuElementWidth/2 +"% - 4px)";
            element.style.height = "calc(" + cellHeight/2 +"% - 4px)";
            break;
        case "randomcell_up":
        case "randomcell_down":
            element.style.width = "calc(" + menuElementWidth/1.5 +"% - 4px)";
            element.style.height = "calc(" + cellHeight/1.5 +"% - 4px)";
            break;
        case "randomcell":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + cellHeight +"% - 4px)";
            break;
    }
    
}

initPlate();
//start
randomGridCells();

console.log("fin poc");