class SynthController {
  constructor() {
    this.leadSynth = new Tone.PolySynth(999, Tone.synth, {
      oscillator: {
        type: "sawtooth",
      },
    }).toMaster();
    this.keySynth = new Tone.PolySynth(999, Tone.synth).toMaster();
    this.bassSynth = new Tone.PolySynth(999, Tone.synth).toMaster();
  }
}
