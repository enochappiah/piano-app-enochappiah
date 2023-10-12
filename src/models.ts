export interface NoteInfo {
  id: string;
  sound: HTMLAudioElement;
}

export interface Piano {
  pianoKeys : Record<NoteType, NoteInfo>; 
}

export class pianoClass implements Piano{
  pianoKeys: Record<NoteType, NoteInfo> = notes;
}

type whiteKey = "A" | "B" | "C" | "D" | "E" | "F" | "G";
type blackKey = "A-sharp" | "C-sharp" | "D-sharp" | "F-sharp" | "G-sharp";
export type NoteType = whiteKey | blackKey;


 const notes : Record<NoteType, NoteInfo> = {
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