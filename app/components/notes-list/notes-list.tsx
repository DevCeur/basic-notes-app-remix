import type { Note } from "~/utils/types";

import { NoteCard } from "../note-card";

import sytles from "./notes-list.module.css";

interface NotesListProps {
  notes: Note[];
}

export const NotesList = ({ notes }: NotesListProps) => {
  return (
    <div className={sytles.container}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};
