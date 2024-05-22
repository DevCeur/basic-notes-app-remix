import { Link, Outlet } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { Button } from "~/components/button";

import styles from "./layout.module.css";

export default function PublicLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.main_links}>
          <Link to={ROUTE.NOTES}>Notes</Link>
          <Link to={ROUTE.CREATE_NOTE}>Create Note</Link>
        </div>

        <form className={styles.auth_links}>
          <Button>Sign Out</Button>
        </form>
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
