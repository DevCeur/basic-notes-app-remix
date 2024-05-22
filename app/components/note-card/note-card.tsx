import { Link } from "@remix-run/react";
import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";

import type { Note } from "~/utils/types";

import styles from "./note-card.module.css";

interface NoteCardProps {
  note: Note;
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <div className={styles.container}>
      <Link to={`/note/${note.id}`} className={styles.info}>
        <h3>{note.title}</h3>

        <p>{note.content}</p>
      </Link>

      <div className={styles.actions}>
        <Link to={`/note/${note.id}/edit`}>
          <HiMiniPencilSquare />
        </Link>

        <form>
          <button>
            <HiTrash />
          </button>
        </form>
      </div>
    </div>
  );
};
