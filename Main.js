window.onload = function () {
  timeCellArray = Array();
  document.getElementById("tempo").value = 120;
  Tone.Transport.bpm.value = 120;
  for (i = 0; i < 16; i++) {
    timeCellArray.push(new TimeCell(i + 1));
  }
  board = new Board();
  cellController = new CellController();
  drumController = new DrumController();
  timeController = new TimeController();
  musicController = new MusicController();
  synthController = new SynthController();
  board.rowArray[0].cellArray[0].cellSelect();
  board.displayBoard();
};
