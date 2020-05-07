class DrumController {
  constructor() {
    this.kick = new Tone.Player("/Samples/kick.wav").toMaster();
    this.snare = new Tone.Player("/Samples/snare.wav").toMaster();
    this.clap = new Tone.Player("/Samples/clap.wav").toMaster();
    this.hat = new Tone.Player("/Samples/hat.wav").toMaster();
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
