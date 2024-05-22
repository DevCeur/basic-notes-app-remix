import { Link, Outlet } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import styles from "./layout.module.css";

export default function PublicLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.main_links}>
          <Link to={ROUTE.HOME}>Home</Link>
        </div>

        <div className={styles.auth_links}>
          <Link to={ROUTE.SIGN_IN}>Sign In</Link>
          <Link to={ROUTE.SIGN_UP}>Create Account</Link>
        </div>
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
