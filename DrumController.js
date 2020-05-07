class DrumController {
  constructor() {
    this.kick = new Tone.Player("/Web-Sequencer/Samples/kick.wav").toMaster();
    this.snare = new Tone.Player("/Web-Sequencer/Samples/snare.wav").toMaster();
    this.clap = new Tone.Player("/Web-Sequencer/Samples/clap.wav").toMaster();
    this.hat = new Tone.Player("/Web-Sequencer/Samples/hat.wav").toMaster();
  }
  playKick() {
    this.kick.start();
  }
  playSnare() {
    this.snare.start();
  }
  playClap() {
    this.clap.start();
  }
  playHat() {
    this.hat.start();
  }
}
