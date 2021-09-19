import "./styles/index.scss";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoA11y = true
// import "./images/yoda-stitch.jpg";
// import canvasExample from "./scripts/canvas";
// import Square from "./scripts/square";
// import { DOMExample } from "./scripts/DOMExample";
// import { Tone } from "tone/build/esm/core/Tone";
// import * as Tone from 'tone';
// const currentStateObj = {
//   currentExample: null,
//   currentEventListeners: [],
// };

// document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
// document.querySelector("#DOM-demo").addEventListener("click", startDOM);

// function startDOM() {
//   unregisterEventListeners();
//   clearDemo();
//   currentStateObj.currentExample = "DOMDEMO";
//   DOMExample();
// }

// function startCanvas() {
//   clearDemo();
//   unregisterEventListeners();
//   currentStateObj.currentExample = "CANVASDEMO";
//   const canvas = new canvasExample();
//   canvas.createCanvas();
//   const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];

//   let animating = true;

//   const animation = () => {
//     canvas.clearCanvas();
//     if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
//     squares.forEach((sq) => sq.drawSquare());
//     window.requestAnimationFrame(animation);
//     squares.forEach((sq) => {
//       if (sq.coords[0] + sq.coords[2] > window.innerWidth)
//         sq.reverseAnimation();
//       if (sq.coords[0] < 0) sq.reverseAnimation();
//     });
//   };

//   window.requestAnimationFrame(animation);

//   window.addEventListener("keydown", handleKeyDown);
//   currentStateObj.currentEventListeners.push([
//     "window",
//     "keydown",
//     handleKeyDown,
//   ]);

//   window.addEventListener("mousedown", handleMouseDown);
//   currentStateObj.currentEventListeners.push([
//     "window",
//     "mousedown",
//     handleMouseDown,
//   ]);

//   function handleKeyDown(event) {
//     if (event.which === 32) {
//       event.preventDefault();
//       squares.forEach((sq) => sq.reverseAnimation());
//       canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//     }
//   }

//   function handleMouseDown(event) {
//     event.preventDefault();
//     squares.push(
//       new Square(
//         canvas.ctx,
//         canvas.coords.map((co) => co + 25),
//         canvas.fillColor
//       )
//     );
//     // animating = !animating;
//   }
// }

// function unregisterEventListeners() {
//   while (currentStateObj.currentEventListeners.length) {
//     let [
//       selector,
//       event,
//       handler,
//     ] = currentStateObj.currentEventListeners.pop();
//     if (selector === "window") {
//       window.removeEventListener(event, handler);
//       console.log(handler);
//     } else {
//       document.querySelector(selector).removeEventListener(event, handler);
//     }
//   }
// }

// function clearDemo() {
//   if (currentStateObj.currentExample === "CANVASDEMO")
//     document.body.removeChild(document.querySelector("canvas"));
//   if (currentStateObj.currentExample === "DOMDEMO") {
//     [...document.querySelectorAll(".card")].forEach((elem) =>
//       document.body.removeChild(elem)
//     );
//   }
// }

// /////////////////// start my code 

// const synth = new Tone.PolySynth().toMaster(); // to have multiple notes at the same time

// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth().toDestination();
// Set the tone to sine //square, triangle, or sawtooth
synth.oscillator.type = "sine"; 
// connect it to the master output (your speakers)
// synth.toMaster();
// const synth = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
const octaver = new Tone.PolySynth().toDestination()

const piano = document.getElementById("piano");

const now = Tone.now()

document.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  synth.triggerAttack(e.target.dataset.note);
});

document.addEventListener("mouseup", e => {
  // stops the trigger
  synth.triggerRelease();
});

// handles keyboard events
document.addEventListener("keydown", e => {
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "z":
      return synth.triggerAttack("C4");
    case "s":
      return synth.triggerAttack("C#4");
    case "x":
      return synth.triggerAttack("D4");
    case "d":
      return synth.triggerAttack("D#4");
    case "c":
      return synth.triggerAttack("E4");
    case "v":
      return synth.triggerAttack("F4");
    case "g":
      return synth.triggerAttack("F#4");
    case "b":
      return synth.triggerAttack("G4");
    case "h":
      return synth.triggerAttack("G#4");
    case "n":
      return synth.triggerAttack("A4");
    case "j":
      return synth.triggerAttack("A#4");
    case "m":
      return synth.triggerAttack("B4")
      
    case "q":
      return synth.triggerAttack("C5");
    case "2":
      return synth.triggerAttack("C#5");
    case "w":
      return synth.triggerAttack("D5");
    case "3":
      return synth.triggerAttack("D#5");
    case "e":
      return synth.triggerAttack("E5");
    case "r":
      return synth.triggerAttack("F5");
    case "5":
      return synth.triggerAttack("F#5");
    case "t":
      return synth.triggerAttack("G5");
    case "6":
      return synth.triggerAttack("G#5");
    case "y":
      return synth.triggerAttack("A5");
    case "7":
      return synth.triggerAttack("A#5");
    case "u":
      return synth.triggerAttack("B5");
    default:
      return;
  }
});
// when the key is released, audio is released as well
document.addEventListener("keyup", e => {
  switch (e.key) { 
    case "z":
    case "s":
    case "x":
    case "d":
    case "c":
    case "v":
    case "g":
    case "b":
    case "h":
    case "n":
    case "j":
    case "m":
    case "q":
    case "2":
    case "w":
    case "3":
    case "e":
    case "r":
    case "5":
    case "t":
    case "6":
    case "y":
    case "7":
    case "u":
      synth.triggerRelease();
  }
});

// const notes = ["C", "D", "E", "F", "G", "A", "B"]
// const html = ""

// for (var octave = 0; octave < 2; octave++) {
//   for (var i = 0; i < notes.length; i++) {
//     const hasSharp = true;
//     const note = notes[i]
    
//     if (note == "E" || note == "B") 
//       hasSharp = false;

//     html += `<div class='key'>`
    
//   }
// }