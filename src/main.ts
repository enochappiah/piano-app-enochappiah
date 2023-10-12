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
  const target : HTMLElement = (e.target as HTMLElement)

    if (target.tagName === "BUTTON") { 
    playSound(target);
  } else {
    return;
  }

}

function playSound(note : HTMLElement) {
  const noteId : string = note.id;
  const key  = (Object.keys(pianoKeys) as Array<NoteType>).find(key => pianoKeys[key].id === noteId);
  const sound : HTMLAudioElement = pianoKeys[key!].sound;

  var soundPromise : Promise<void> = sound.play();
  if (soundPromise !== undefined) {
    soundPromise.then(()=> {
      sound.play();
      sound.pause();
      sound.currentTime = 0;
      sound.play(); 
    })
    .catch(error =>{
      console.error("Audio playback error:", error);
    });
  }
}

document.addEventListener("DOMContentLoaded", createPianoListener);

