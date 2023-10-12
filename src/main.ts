import {
    Piano,
    NoteInfo,
    notes,
    NoteType,
    pianoClass
} from "./models";
import "./style.css";

const piano = new pianoClass();
const pianoKeys = piano.pianoKeys;


// function createPianoListener(piano : pianoClass) {
//   const pianoContainerArr = document.getElementsByClassName("piano-container");
//   const pianoContainer = pianoContainerArr[0];
//   pianoContainer.addEventListener("click", handleKeyPress(piano));    
// }
function createPianoListener() {
  const pianoContainerArr = document.getElementsByClassName("piano-container");
  const pianoContainer = pianoContainerArr[0];
  pianoContainer.addEventListener("click", handleKeyPress); 
}
function handleKeyPress(e: Event) {
  e.preventDefault();
  const target = (e.target as HTMLElement)
  if (target!.closest(".natural-key") || target!.closest(".accidental-key")) { 
    playSound(target);
  } else {
    console.error("Please click a key");
  }

}

function playSound(note : HTMLElement) {
  const noteId : string = note.id;
  const key = (Object.keys(pianoKeys) as Array<NoteType>).find(key => pianoKeys[key].id === noteId);
  console.log(key);
  pianoKeys[key!].sound.play();
}


//do event listener when dom content loaded
document.addEventListener("DOMContentLoaded", () => {
  createPianoListener();


});

