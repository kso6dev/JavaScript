function Grid(lines, cols) {
    this.cols = cols;
    this.lines = lines;

    this.nbOfCells = this.cols * this.lines;
    this.cells = [];


    this.addCell = function(cell){
        this.cells.push(cell);
    }

    this.fillWithCells = function(){
        for (var i = 0; i < nbOfCells; i++)
        {
            this.addCell(new Cell());
        }
    }

    this.randomCells = function(rangeMin, rangeMax){
        for (var i = 0; i < nbOfCells; i++)
        {
            this.randomCell(rangeMin, rangeMax);
        }
    }
}

function Cell() {
    
}

function Wheel() {
    var obj = this;
    this.status = 'stop';
    this.wheelNumbers = [];   
}