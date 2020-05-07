class TimeController {
  constructor() {
    this.playStatus = 0;
    this.playbackID;
    this.globalBPM = 60000 / 120;
  }
  bpmControl() {
    var bpmSlider = document.getElementById("tempo");
    var bpmOutput = document.getElementById("tempoCounter");
    bpmOutput.innerHTML = bpmSlider.value;
    bpmSlider.oninput = function () {
      Tone.Transport.bpm.value = this.value;
      bpmOutput.innerHTML = this.value;
      this.globalBPM = 60000 / this.value;
    };
  }
  togglePlayback() {
    var playbackPosition = 1;
    this.playStatus = 1 - this.playStatus;
    if (this.playStatus === 1) {
      document.getElementById("playButton").src = "images/stop.png";
      Tone.Transport.start();
      this.playbackID = Tone.Transport.scheduleRepeat(function () {
        if (playbackPosition === 17) {
          playbackPosition = 1;
        }
        timeController.iteratePlayback(playbackPosition);
        musicController.playColumn(playbackPosition - 1);
        playbackPosition++;
      }, "4n");
    } else {
      document.getElementById("playButton").src = "images/play.png";
      this.clearPlayback();
      Tone.Transport.clear(this.playbackID);
      Tone.Transport.stop();
    }
  }
  clearPlayback() {
    for (i = 1; i < 17; i++) {
      var clearID = "t" + i;
      document.getElementById(clearID).style.backgroundColor = "transparent";
    }
  }
  iteratePlayback(pos) {
    var lastEl = pos - 1;
    var previousPosition = "t" + lastEl;
    if (lastEl === 0) {
      previousPosition = "t16";
    }
    var currentPosition = "t" + pos;
    var lastElementSelector = document.getElementById(previousPosition);
    var elementSelector = document.getElementById(currentPosition);
    elementSelector.style.backgroundColor = "#FFFFFF";
    lastElementSelector.style.backgroundColor = "transparent";
  }
}
