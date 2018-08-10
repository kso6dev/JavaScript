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

//dynamic menu elements created and added to menuElements collection
var menuElements = {};
//dice
var dice = document.createElement("div"); 
menuElements.dice = dice; 
menuElements.dice.className = "dice";
//range
var rangeDiv = document.createElement("div"); 
menuElements.rangeDiv = rangeDiv;
menuElements.rangeDiv.className = "range";
//score
var scoreDiv = document.createElement("div"); 
menuElements.scoreDiv = scoreDiv;
menuElements.scoreDiv.className = "score";
//cost
var costDiv = document.createElement("div"); 
menuElements.costDiv = costDiv;
menuElements.costDiv.className = "cost";
//reroll grid
var rerollGridDiv = document.createElement("div");
menuElements.rerollGridDiv = rerollGridDiv;
menuElements.rerollGridDiv.className = "rerollgrid";
//reroll dice
var rerollDiceDiv = document.createElement("div"); 
menuElements.rerollDiceDiv = rerollDiceDiv;
menuElements.rerollDiceDiv.className = "rerolldice"
//timer
var timerDiv = document.createElement("div");
menuElements.timerDiv = timerDiv; 
menuElements.timerDiv.className = "timer"; 

//side menu elements dimension
var menuElementHeight = 80;
var menuElementWidth = 80;
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

    //tests
    defineElementStyle(grid.childNodes[0], "good_cell", false);
    defineElementStyle(grid.childNodes[1], "bad_cell", false);
}

function addCells(grid){
    var cell;
    for (var i = 0; i < nbOfCells; i++){
        cell = document.createElement("div");
        defineElementStyle(cell, "cell", true);
        cell.addEventListener("mouseenter", function(e){
            var cell = e.target;
            defineElementStyle(cell, cell.className+"_hovered", false);
        });
        cell.addEventListener("mouseleave", function(e){
            var cell = e.target;
            defineElementStyle(cell, cell.className.replace("_hovered",""), true);
        });
        grid.appendChild(cell);
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
        case "dice":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
            break;
        case "range":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
            break;
        case "score":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
            break;
        case "cost":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
        break;
        case "rerollgrid":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
            break;
        case "rerolldice":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
            break;
        case "timer":
            element.style.width = "calc(" + menuElementWidth +"% - 4px)";
            element.style.height = "calc(" + menuElementHeight +"% - 4px)";
            break;
    }
    
}

initPlate();

console.log("fin poc");