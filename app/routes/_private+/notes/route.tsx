import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

import { ROUTE } from "~/utils/enum";

import { NotesList } from "~/components/notes-list";

import styles from "./route.module.css";

export const loader: LoaderFunction = () => {
  return json({
    notes: [],
  });
};

export default function NotesRoute() {
  const loaderData = useLoaderData<typeof loader>();

  const notes = loaderData?.notes;

  return (
    <div className={styles.container}>
      <h1>All Notes</h1>

      {notes && notes.length > 0 ? (
        <NotesList notes={notes} />
      ) : (
        <div className={styles.empty_container}>
          <p>Seems that this is empty, create a note!</p>

          <Link to={ROUTE.CREATE_NOTE}>Create Note</Link>
        </div>
      )}
    </div>
  );
}
