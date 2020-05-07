class InstrumentSelection {
  constructor(type, board, addRow, rowNum) {
    this.insDivRef = document.getElementById("insDiv");
    this.insType = type + 1;
    this.addRow = addRow;
    this.rowNumber = rowNum;
    this.boardRef = board;
    this.insTypeObject = document.createElement("div");
    this.insTypeObject.style.backgroundColor = this.getColor(this.insType);
    this.insTypeObject.id = "ins" + type;
    this.insTypeObject.innerHTML = this.getLabel(this.insType);
    this.insTypeObject.classList = "insTypeSelector";
    this.insTypeObject.onclick = this.makeSelection.bind(this);
    this.insDivRef.appendChild(this.insTypeObject);
  }
  makeSelection() {
    console.log(this.insType);
    this.addRow(this.insType);
    const removeOne = document.getElementById("ins0");
    const removeTwo = document.getElementById("ins1");
    const removeThree = document.getElementById("ins2");
    const removeFour = document.getElementById("ins3");
    const removeWrapper = document.getElementById("insDiv");
    removeOne.parentNode.removeChild(removeOne);
    removeTwo.parentNode.removeChild(removeTwo);
    removeThree.parentNode.removeChild(removeThree);
    removeFour.parentNode.removeChild(removeFour);
    removeWrapper.parentNode.removeChild(removeWrapper);
    board.isRowBeingCreated = 1 - board.isRowBeingCreated;
  }
  getLabel(type) {
    switch (type) {
      case 1:
        return "Drums";
      case 2:
        return "Lead";
      case 3:
        return "Keys";
      case 4:
        return "Bass";
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
