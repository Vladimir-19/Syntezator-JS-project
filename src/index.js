import "./styles/index.scss";
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
      return synth.triggerAttack("C3");
    case "m":
      return synth.triggerAttack("B3")
    case "q":
      return synth.triggerAttack("C4");
    case "2":
      return synth.triggerAttack("C#4");
    case "w":
      return synth.triggerAttack("D4");
    case "3":
      return synth.triggerAttack("D#4");
    case "e":
      return synth.triggerAttack("E4");
    case "r":
      return synth.triggerAttack("F4");
    case "5":
      return synth.triggerAttack("F#4");
    case "t":
      return synth.triggerAttack("G4");
    case "6":
      return synth.triggerAttack("G#4");
    case "y":
      return synth.triggerAttack("A4");
    case "7":
      return synth.triggerAttack("A#4");
    case "u":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});
// when the key is released, audio is released as well
document.addEventListener("keyup", e => {
  switch (e.key) { 
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