class Cell {
  //Individual cells
  constructor(type, ID, row, rowNum) {
    this.cellType = type; //1 = Drum; 2 = Lead; 3 = Keys; 4 = Bass
    this.cellOctave = 2; //Octave 1-3
    this.cellPitch = 13; //Pitch 1-36
    this.cellLength = 1; //Note length
    this.cellSelected = 0;
    this.cellStatus = 0; //Off/On Status
    this.cellID = ID + 1; //Unique Cell ID
    this.rowRef = row;
    this.rowNumber = rowNum;
    this.cellObject = document.createElement("div");
    this.cellDesc = document.createElement("p");
    this.createCell();
  }

  createCell() {
    this.cellDesc.id = "p" + this.rowNumber + "c" + this.cellID;
    this.cellDesc.classList = "cellP";
    this.cellDesc.innerHTML = "c";
    this.cellDesc.style.display = "none";
    this.cellObject.id = "r" + this.rowNumber + "c" + this.cellID;
    this.cellObject.classList = "cell";
    this.cellObject.onclick = this.cellSelect.bind(this);
    this.cellObject.appendChild(this.cellDesc);
    this.rowRef.appendChild(this.cellObject);
  }

  cellSelect() {
    cellController.changeControls(
      this.cellType,
      this.cellStatus,
      this.cellPitch
    );
    board.changeActive(this.cellID - 1, this.rowNumber - 1);
    this.selectOn();
  }
  selectOn() {
    this.cellObject.style.borderColor = "#67fe63";
    this.cellSelected = 1;
  }
  selectOff() {
    this.cellObject.style.borderColor = "white";
    this.cellSelected = 0;
  }
  setBGColor() {
    if (this.cellStatus == 1) {
      this.cellObject.style.backgroundColor = this.getColor(this.cellType);
    } else {
      this.cellObject.style.backgroundColor = "transparent";
    }
  }
  getColor(type) {
    //Returns the color for each insturment
    switch (type) {
      case 1:
        return "#f2a494";
      case 2:
        return "#f2d994";
      case 3:
        return "#acf294";
      case 4:
        return "#9694f2";
    }
  }
}
