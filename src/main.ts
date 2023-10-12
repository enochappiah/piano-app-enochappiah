import {
    NoteType,
    pianoClass
} from "./models";
import "./style.css";

const piano = new pianoClass();
const pianoKeys = piano.pianoKeys;

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
  const sound = pianoKeys[key!].sound;
  // sound.play();


  // // Pause and rewind the audio to the beginning
  // sound.pause();
  // //sound.load();
  // sound.currentTime = 0;
  
  // // Play the audio
  // sound.play();

  var soundPromise = sound.play();

  if (soundPromise !== undefined) {
    soundPromise.then(()=> {
      sound.play();
      sound.pause();
      sound.currentTime = 0;
      sound.play(); 
    })
    // sound.play();
    // sound.pause();
    // sound.currentTime = 0;
    // sound.play();
    .catch(error =>{
      console.error("Audio playback error:", error);
    });
  }
}


//do event listener when dom content loaded
document.addEventListener("DOMContentLoaded", () => {
  createPianoListener();


});

