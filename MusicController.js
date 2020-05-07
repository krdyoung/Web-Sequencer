class MusicController {
  constructor() {
    this.noteArray = [
      "B2",
      "C3",
      "C#3",
      "D3",
      "D#3",
      "E3",
      "F3",
      "F#3",
      "G3",
      "G#3",
      "A3",
      "A#3",
      "B3",
      "C4",
      "C#4",
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4",
      "C5",
      "C#5",
      "D5",
      "D#5",
      "E5",
      "F5",
      "F#5",
      "G5",
      "G#5",
      "A5",
      "A#5",
      "B5",
    ];
  }
  playColumn(colNo) {
    console.log("Playing " + colNo);
    for (var i = 0; i < board.rowNumber; i++) {
      console.log("Row " + i);
      if (board.rowArray[i].cellArray[colNo].cellStatus == 1) {
        var type = board.rowArray[i].cellArray[colNo].cellType;
        var pitch = board.rowArray[i].cellArray[colNo].cellPitch;
        this.soundSelector(type, pitch);
      }
    }
  }
  soundSelector(type, pitch) {
    //console.log(type + " " + pitch + " " + octave + " " + noteLength);
    switch (type) {
      case 1:
        this.playDrum(pitch);
        break;
      case 2:
        this.playLead(pitch, "8n");
        break;
      case 3:
        this.playKeys(pitch, "8n");
        break;
      case 4:
        this.playBass(pitch, "8n");
        break;
    }
  }
  playDrum(pitch) {
    switch (pitch) {
      case 13:
        drumController.playKick();
        break;
      case 14:
        drumController.playSnare();
        break;
      case 15:
        drumController.playClap();
        break;
      case 16:
        drumController.playHat();
        break;
    }
  }
  playLead(pitch, noteLength) {
    synthController.leadSynth.triggerAttackRelease(
      this.noteArray[pitch],
      noteLength
    );
  }

  playKeys(pitch, noteLength) {
    synthController.keySynth.triggerAttackRelease(
      this.noteArray[pitch],
      noteLength
    );
  }
  playBass(pitch, noteLength) {
    synthController.bassSynth.triggerAttackRelease(
      this.noteArray[pitch],
      noteLength
    );
  }
}
