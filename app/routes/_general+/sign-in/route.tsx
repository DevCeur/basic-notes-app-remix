import { TextInput } from "~/components/text-input";
import { Button } from "~/components/button";

import styles from "./route.module.css";

export default function SignInRoute() {
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>

      <form className={styles.form_container}>
        <div className={styles.form_fields}>
          <TextInput label="Email" type="email" name="email" />

          <TextInput label="Password" type="password" name="password" />
        </div>

        <Button>Sign In</Button>
      </form>
    </div>
  );
}
