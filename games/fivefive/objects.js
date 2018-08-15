//generic object to inherit to be able to animate any objects
function FiveObject()
{
    this.isAnimated = false;

    this.startAnimation = function(){
        this.isAnimated = true;
    };

    this.stopAnimation = function(){
        this.isAnimated = false;
    };
}

//grid object, represents the grid containing the numbers, and where game is played
function Grid(nbOfLines, nbOfCols) {
    FiveObject.call(this);//inherit

    this.nbOfCols = nbOfCols;
    this.nbOfLines = nbOfLines;

    this.nbOfCells = this.nbOfCols * this.nbOfLines;
    this.cells = [];
    this.lines = [];
    this.cols = [];

    this.addCell = function(cell){
        this.cells.push(cell);
    };
    
    this.addCol = function(col){
        this.cols.push(col);
    };
    
    this.addLine = function(line){
        this.lines.push(line);
    };

    this.fullFillGrid = function(){
        for (var i = 0; i < this.nbOfCols; i++)
        {
            this.addCol(new Col(this.nbOfLines));
        }
        for (var i = 0; i < this.nbOfLines; i++)
        {
            this.addLine(new Line(this.nbOfCols));
        }
        for (var y = 0; y < this.nbOfLines; y++)
        {
            for (var x = 0; x < this.nbOfCols; x++)
            {
                this.addCell(new Cell(x, y));
            }
        }
    };

    this.randomCellsNumbers = function(rangeMin, rangeMax){
        for (var i = 0; i < this.nbOfCells; i++)
        {
            this.cells[i].randomCellNumber(rangeMin, rangeMax);
        }
    };
}

function Line(nbOfCells){
    FiveObject.call(this);//inherit

    this.nbOfCells = nbOfCells;
}

function Col(nbOfCells){
    FiveObject.call(this);//inherit

    this.nbOfCells = nbOfCells;
}

function Cell(x, y) {
    FiveObject.call(this);//inherit

    this.x = x;
    this.y = y;
    this.number = 0;
    this.randomCellNumber = function(rangeMin, rangeMax){
        this.number = Math.floor(Math.random() * rangeMax) + rangeMin;
    };
}

function SideBar(){
    FiveObject.call(this);//inherit

    this.wheel = null;
    this.range = "";
    this.gameInfos = [];
    this.buttons = [];

    this.defineWheel = function(wheel){
        this.wheel = wheel;
    };
    
    this.addGameInfo = function(gameInfo){
        this.gameInfos.push(gameInfo);
    };

    this.addButton = function(button){
        this.buttons.push(button);
    };
}

function Wheel(nbOfWheelCells) {
    FiveObject.call(this);//inherit

    this.nbOfWheelCells = nbOfWheelCells;
    this.isMooving = false;
    this.wheelCells = [];   

    this.addWheelCell = function(wheelCell){
        this.wheelCells.push(wheelCell);
    };

    this.fullFill = function(){
        for (var i = 0; i < nbOfWheelCells; i++){
            this.addWheelCell(new WheelCell(i));
        }
    };

}

function WheelCell(cellNo) {
    Cell.call(this);//inherit

    this.cellNo = cellNo;
}

function MainMenu(){
    FiveObject.call(this);//inherit

    this.visible = false;

    this.display = function(){
        this.visible = true;
    };

    this.hide = function(){
        this.visible = false;
    };
}

function Button(value){
    FiveObject.call(this);//inherit

    this.value = value;
}

//prototypes inherits:
Grid.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : Grid,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Line.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : Line,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Col.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : Col,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Cell.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : Cell,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
SideBar.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : SideBar,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Wheel.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : Wheel,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
WheelCell.prototype = Object.create(Cell.prototype, {
    constructor: {
        value : WheelCell,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
MainMenu.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : MainMenu,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
Button.prototype = Object.create(FiveObject.prototype, {
    constructor: {
        value : Button,
        enumerable: false,
        writable: true,
        configurable: true
    }
});