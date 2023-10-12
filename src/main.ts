import { NoteInfo, NoteType, PianoClass } from "./models";
import "./style.css";

const piano: PianoClass = new PianoClass();
const pianoKeys: Record<NoteType, NoteInfo> = piano.pianoKeys;

function createPianoListener(): void {
  const pianoContainerArr: HTMLCollection =
    document.getElementsByClassName("piano-container");
  const pianoContainer: Element = pianoContainerArr[0];
  pianoContainer.addEventListener("click", handleKeyPress);
}

function handleKeyPress(e: Event): void {
  e.preventDefault();
  const target: HTMLElement = e.target as HTMLElement;
  if (target.tagName === "BUTTON") {
    playSound(target);
  } else {
    return;
  }
}

function playSound(note: HTMLElement): void {
  const noteId: string = note.id;
  const key = (Object.keys(pianoKeys) as Array<NoteType>).find(
    (key) => pianoKeys[key].id === noteId,
  ); //TODO how to get typescript type for this
  const sound: HTMLAudioElement = pianoKeys[key!].sound;

  var soundPromise: Promise<void> = sound.play();
  if (soundPromise !== undefined) {
    soundPromise
      .then(() => {
        sound.play();
        sound.pause();
        sound.currentTime = 0;
        sound.play();
      })
      .catch((error) => {
        alert(
          "Error with audio playback. Please look at the console for details and try again later.",
        );
        console.error("Audio playback error:", error.message);
      });
  }
}

document.addEventListener("DOMContentLoaded", createPianoListener);
