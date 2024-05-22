import { Link } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import styles from "./route.module.css";

export default function HomeRoute() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Basic Notes App</h1>

        <p>Use this basic remix app, to create basic notes, edit them and delete them.</p>
      </div>

      <Link to={ROUTE.CREATE_NOTE} className={styles.cta}>
        Create First Note
      </Link>
    </div>
  );
}
