class Board {
  //Sound board
  constructor() {
    this.boardObject = document.createElement("div");
    this.boardObject.id = "b1";
    this.boardObject.classList = "board";
    this.rowNumber = 1; //Total number of rows
    this.rowArray = Array(); //Array of these rows
    this.rowArray.push(new Row(1, this.rowNumber, this.boardObject)); //Creating an initial row
    this.lastCellCoordX = 0;
    this.lastCellCoordY = 0;
    this.lastCellRef = this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ];
    this.isRowBeingCreated = 0;
  }
  createRow() {
    if (this.isRowBeingCreated === 0) {
      this.isRowBeingCreated = 1 - this.isRowBeingCreated;
      var insArray = Array();
      this.insDiv = document.createElement("div");
      this.insDiv.id = "insDiv";
      this.boardObject.appendChild(this.insDiv);
      for (var i = 0; i < 4; i++) {
        insArray.push(
          new InstrumentSelection(
            i,
            this.boardObject,
            this.addRow.bind(this),
            this.rowNumber
          )
        );
      }
    }
  }
  addRow(
    soundType //Creating subsequent rows
  ) {
    this.rowNumber += 1;
    this.rowArray.push(new Row(soundType, this.rowNumber, this.boardObject));
  }
  removeRow() {
    var idToRemove = "r" + this.rowNumber;
    var containerId = "rc" + this.rowNumber;
    const rowToRemove = document.getElementById(idToRemove);
    const containterToRemove = document.getElementById(containerId);
    rowToRemove.parentNode.removeChild(rowToRemove);
    containterToRemove.parentNode.removeChild(containterToRemove);
    this.rowArray.pop();
    this.rowNumber--;
  }
  displayBoard() {
    document.body.appendChild(this.boardObject);
  }
  changeActive(x, y) {
    this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ].selectOff();
    this.lastCellCoordX = x;
    this.lastCellCoordY = y;
  }
  toggleCell() {
    this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ].cellStatus =
      1 -
      this.rowArray[this.lastCellCoordY].cellArray[this.lastCellCoordX]
        .cellStatus;
    this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ].cellSelect();
    this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ].setBGColor();
  }
  changeDrum(i) {
    this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ].cellPitch = i;
  }
  changePitch(i) {
    if (i == 1) {
      if (
        this.rowArray[this.lastCellCoordY].cellArray[this.lastCellCoordX]
          .cellPitch == 36
      ) {
        alert("pitch can't be increased further");
      } else {
        this.pitch = this.rowArray[this.lastCellCoordY].cellArray[
          this.lastCellCoordX
        ].cellPitch;
        this.pitch++;
        this.rowArray[this.lastCellCoordY].cellArray[
          this.lastCellCoordX
        ].cellPitch = this.pitch;
      }
    } else if (i == 2) {
      if (
        this.rowArray[this.lastCellCoordY].cellArray[this.lastCellCoordX]
          .cellPitch == 1
      ) {
        alert("pitch can't be decreased further");
      } else {
        this.pitch = this.rowArray[this.lastCellCoordY].cellArray[
          this.lastCellCoordX
        ].cellPitch;
        this.pitch--;
        this.rowArray[this.lastCellCoordY].cellArray[
          this.lastCellCoordX
        ].cellPitch = this.pitch;
      }
    }
    this.type = this.rowArray[this.lastCellCoordY].cellArray[
      this.lastCellCoordX
    ].cellType;

    this.previewSound(this.type, this.pitch);
  }
  previewSound(type, pitch) {
    switch (type) {
      case 2:
        synthController.leadSynth.triggerAttackRelease(
          this.getNote(pitch),
          "8n"
        );
        break;
      case 3:
        synthController.keySynth.triggerAttackRelease(
          this.getNote(pitch),
          "8n"
        );
        break;
      case 4:
        synthController.bassSynth.triggerAttackRelease(
          this.getNote(pitch),
          "8n"
        );
        break;
    }
  }
  getNote(pitch) {
    return musicController.noteArray[pitch];
  }
}
