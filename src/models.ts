export interface NoteInfo {
  id: string;
  sound: string;
}

// export class Piano {
//   pianoKeys: Record<NoteType, NoteInfo> = notes;
// }

export class PianoClass {
  pianoKeys: Record<NoteType, NoteInfo> = notes;
}

type whiteKey = "A" | "B" | "C" | "D" | "E" | "F" | "G";
type blackKey = "A-sharp" | "C-sharp" | "D-sharp" | "F-sharp" | "G-sharp";
export type NoteType = whiteKey | blackKey;

export const notes: Record<NoteType, NoteInfo> = {
  A: { id: "A", sound: ("./sounds/piano_A.mp3") },
  B: { id: "B", sound: ("./sounds/piano_B.mp3") },
  C: { id: "C", sound: ("./sounds/piano_C.mp3") },
  D: { id: "D", sound: ("./sounds/piano_D.mp3") },
  E: { id: "E", sound: ("./sounds/piano_E.mp3") },
  F: { id: "F", sound: ("./sounds/piano_F.mp3") },
  G: { id: "G", sound: ("./sounds/piano_G.mp3") },
  "A-sharp": { id: "A-sharp", sound: ("./sounds/piano_ASharp.mp3") },
  "C-sharp": { id: "C-sharp", sound: ("./sounds/piano_CSharp.mp3") },
  "D-sharp": { id: "D-sharp", sound: ("./sounds/piano_DSharp.mp3") },
  "F-sharp": { id: "F-sharp", sound: ("./sounds/piano_FSharp.mp3") },
  "G-sharp": { id: "G-sharp", sound: ("./sounds/piano_GSharp.mp3") },
};
