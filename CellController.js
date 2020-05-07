class CellController {
  type = 0; //0 = drum, 1 = instrument
  statusImg = document.createElement("img");
  upImg = document.createElement("img");
  downImg = document.createElement("img");
  kickImg = document.createElement("img");
  snareImg = document.createElement("img");
  clapImg = document.createElement("img");
  hatImg = document.createElement("img");
  controlContainer = document.getElementById("controlBar");
  constructor() {
    this.statusImg.onclick = this.cellToggle.bind(this);
    this.upImg.onclick = this.increasePitch.bind(this);
    this.downImg.onclick = this.decreasePitch.bind(this);
    this.kickImg.onclick = this.setKick.bind(this);
    this.snareImg.onclick = this.setSnare.bind(this);
    this.clapImg.onclick = this.setClap.bind(this);
    this.hatImg.onclick = this.setHat.bind(this);
    this.statusImg.src = "/images/off.png";
    this.upImg.src = "/images/up.png";
    this.downImg.src = "/images/down.png";
    this.kickImg.src = "/images/kick.png";
    this.snareImg.src = "/images/snare.png";
    this.clapImg.src = "/images/clap.png";
    this.hatImg.src = "/images/hat.png";
    this.statusImg.classList = "controlImg";
    this.upImg.classList = "controlImg";
    this.downImg.classList = "controlImg";
    this.kickImg.classList = "controlImg";
    this.snareImg.classList = "controlImg";
    this.clapImg.classList = "controlImg";
    this.hatImg.classList = "controlImg";
  }
  changeControls(t, s, p) {
    this.status = s;
    this.type = t;
    this.pitch = p;
    if (s == 0) {
      this.statusImg.src = "/images/off.png";
    } else {
      this.statusImg.src = "/images/on.png";
    }
    if (this.type == 1) {
      this.drumControls();
      this.updateBGColor(this.pitch);
    } else {
      this.instrumentControls();
    }
  }
  drumControls() {
    this.controlContainer.innerHTML = "";
    this.controlContainer.appendChild(this.statusImg);
    this.controlContainer.appendChild(this.kickImg);
    this.controlContainer.appendChild(this.snareImg);
    this.controlContainer.appendChild(this.clapImg);
    this.controlContainer.appendChild(this.hatImg);
  }
  instrumentControls() {
    this.controlContainer.innerHTML = "";
    this.controlContainer.appendChild(this.statusImg);
    this.controlContainer.appendChild(this.upImg);
    this.controlContainer.appendChild(this.downImg);
  }
  cellToggle() {
    board.toggleCell();
  }
  setKick() {
    board.changeDrum(13);
    this.updateBGColor(13);
  }
  setSnare() {
    board.changeDrum(14);
    this.updateBGColor(14);
  }
  setClap() {
    board.changeDrum(15);
    this.updateBGColor(15);
  }
  setHat() {
    board.changeDrum(16);
    this.updateBGColor(16);
  }
  updateBGColor(p) {
    this.kickImg.style.backgroundColor = "transparent";
    this.snareImg.style.backgroundColor = "transparent";
    this.clapImg.style.backgroundColor = "transparent";
    this.hatImg.style.backgroundColor = "transparent";
    switch (p) {
      case 13:
        this.kickImg.style.backgroundColor = "#f2a494";
        break;
      case 14:
        this.snareImg.style.backgroundColor = "#f2a494";
        break;
      case 15:
        this.clapImg.style.backgroundColor = "#f2a494";
        break;
      case 16:
        this.hatImg.style.backgroundColor = "#f2a494";
        break;
    }
  }
  increasePitch() {
    board.changePitch(1);
  }
  decreasePitch() {
    board.changePitch(2);
  }
}
