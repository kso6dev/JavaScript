//parameters
var nbOfCols = 4;
var nb0fLines = 4;
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

//divs
var mainWrapper = document.getElementById("main_wrapper");
var playZone = document.getElementById("playzone");
var sideMenu = document.getElementById("sidemenu");
var menu = document.getElementById("menu");


function initPlate(){
    //main_wrapper
    defineElementStyle(mainWrapper, "main_wrapper", true);

    //playzone
    defineElementStyle(playZone, "playzone", true);
    
    //sidemenu
    defineElementStyle(sideMenu, "sidemenu", true);

    //grid
    var grid = document.createElement("div");
    defineElementStyle(grid, "grid", true);
    playZone.appendChild(grid);
    //cells
    addCells(grid);
}

function addCells(grid){
    var cell;
    for (var i = 0; i < nbOfCells; i++){
        cell = document.createElement("div");
        defineElementStyle(cell, "cell", true);
        cell.addEventListener("mouseenter", function(e){
            var cell = e.target;
            defineElementStyle(cell, "cell_hovered", false);
        });
        cell.addEventListener("mouseleave", function(e){
            var cell = e.target;
            defineElementStyle(cell, "cell", true);
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
    }
    
}

initPlate();
console.log("fin poc");