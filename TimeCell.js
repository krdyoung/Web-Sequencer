class TimeCell {
  constructor(id) {
    this.cellID = id;
    this.renderCell();
  }
  renderCell() {
    this.divRef = document.getElementById("timeLine");
    this.cellObject = document.createElement("div");
    this.cellObject.id = "t" + this.cellID;
    this.cellObject.classList = "timeCell";
    this.divRef.appendChild(this.cellObject);
  }
}
