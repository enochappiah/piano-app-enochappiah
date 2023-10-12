export interface NoteInfo {
  id: string;
  sound: HTMLAudioElement;
  //played: boolean;  
}

export interface Key {

}

// export interface NaturalNote extends Note {
//   note: naturalNotes[number]
// }

// export interface FlatNote extends Note {
// //   played: boolean
//   note: accidentalNotes[number]
// }

export interface UserResponse {
  noteId: string;
  notePressed : NoteInfo  //and Event?
}


export interface Piano {
  //notes: NoteType[]; //includes both white and black keys
  pianoKeys : Record<NoteType, NoteInfo> 
  //Record array here?

}

export class pianoClass implements Piano{
  pianoKeys: Record<NoteType, NoteInfo> = notes;
}

export type whiteKey = "A" | "B" | "C" | "D" | "E" | "F" | "G";
export type blackKey = "A-sharp" | "C-sharp" | "D-sharp" | "F-sharp" | "G-sharp";
export type NoteType = whiteKey | blackKey;

export const notes : Record<NoteType, NoteInfo> = {
    "A": { id: "A", sound: new Audio("/sounds/piano_A.mp3") },
    "B": { id: "B", sound: new Audio("/sounds/piano_B.mp3") },
    "C": { id: "C", sound: new Audio("/sounds/piano_C.mp3") },
    "D": { id: "D", sound: new Audio("/sounds/piano_D.mp3") },
    "E": { id: "E", sound: new Audio("/sounds/piano_E.mp3") },
    "F": { id: "F", sound: new Audio("/sounds/piano_F.mp3") },
    "G": { id: "G", sound: new Audio("/sounds/piano_G.mp3") },
    "A-sharp": { id: "A-sharp", sound: new Audio("/sounds/piano_ASharp.mp3") },
    "C-sharp": { id: "C-sharp", sound: new Audio("/sounds/piano_CSharp.mp3") },
    "D-sharp": { id: "D-sharp", sound: new Audio("/sounds/piano_DSharp.mp3") },
    "F-sharp": { id: "F-sharp", sound: new Audio("/sounds/piano_FSharp.mp3") },
    "G-sharp": { id: "G-sharp", sound: new Audio("/sounds/piano_GSharp.mp3") }
}

//export type naturalNotes = ["A", "B", "C", "D", "E", "F", "G"];
//export type accidentalNotes = ["A-sharp", "C-sharp", "D-sharp", "F-sharp", "G-sharp"];

//Record will be <Note Id element or Note Text class element, NoteSound --> this is has to be a type/interface>
//Each key(natural) is a button and has another button (accidental key) wrapped into it
//id and text class elements

//new Audio(url) is a type of HTMLAudioElement /MediaElement https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement 