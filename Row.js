class Row {
  rowContainer = document.createElement("div");
  rowTypeImg = document.createElement("img");
  row = document.createElement("div");

  //Individual rows
  constructor(type, rowID, board) {
    this.boardRef = board;
    this.rowContainer.classList = "rowContainer";
    this.rowContainer.id = "rc" + rowID;
    this.rowTypeImg.classList = "rowImg";
    this.row.id = "r" + rowID;
    this.row.classList = "row";
    this.cellArray = Array();
    this.rowType = type;
    this.rowTypeImg.src = this.getSrc(this.rowType);
    this.rowNumber = rowID; //Array of unique cells
    for (
      var i = 0;
      i < 16;
      i++ //Populating the array with 16 cells
    ) {
      this.cellArray.push(new Cell(this.rowType, i, this.row, this.rowNumber));
    }
    this.rowContainer.appendChild(this.rowTypeImg);
    this.rowContainer.appendChild(this.row);
    this.boardRef.appendChild(this.rowContainer);
  }
  getSrc(type) {
    switch (type) {
      case 1:
        return "/Web-Sequencer/images/drum.png";
        break;
      case 2:
        return "/Web-Sequencer/images/lead.png";
        break;
      case 3:
        return "/Web-Sequencer/images/keys.png";
        break;
      case 4:
        return "/Web-Sequencer/images/bass.png";
        break;
    }
  }
}
