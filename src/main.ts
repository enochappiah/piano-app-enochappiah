import { NoteInfo, NoteType, notes } from "./models";
import "./style.css";

// Record of each note mapped to its sound filepath
const pianoKeys: Record<NoteType, NoteInfo> = notes;

// attach eventListener to pianoContainer element
function createPianoListener(): void {
  const pianoContainerArr: HTMLCollection =
    document.getElementsByClassName("piano-container");
  const pianoContainer: Element = pianoContainerArr[0];
  pianoContainer.addEventListener("click", handleKeyPress);
}

// calls playSound function if user clicks a key button
function handleKeyPress(e: Event): void {
  e.preventDefault();

  // cast target as HTMLElement to access event.target attribute
  const target: HTMLElement = e.target as HTMLElement;
  if (target.tagName === "BUTTON") {
    playSound(target);
  } else {
    return;
  }
}

// play sound of button user clicks and handles audio playback & errors
function playSound(note: HTMLElement): void {
  // gets the id of the note the user clicked
  const noteId: string = note.id;

  // converts keys in pianoKeys record to an array of NoteType to find
  // the record key,value pair corresponding to the note id of the user clicked button
  const key: NoteType = (Object.keys(pianoKeys) as Array<NoteType>).find(
    (key) => pianoKeys[key].id === noteId,
  ) as NoteType;

  // gets the file path (value) of the key
  const soundFile: string = pianoKeys[key!].sound;

  // creates new audio
  const sound: HTMLAudioElement = new Audio(soundFile);

  // adding canplaythrough event listener & error event listener replaces play/catch chaining
  sound.addEventListener("canplaythrough", () => {
    sound.play();
  });

  sound.addEventListener("error", () => {
    console.error(`${key} key file loading error`);
    alert(
      "Error with audio playback. Please look at the console for details and try again later.",
    );
  });

  // allows user to spam keys and have sound play successively
  sound.pause();
  sound.currentTime = 0;
  sound.load();
}

document.addEventListener("DOMContentLoaded", createPianoListener);
