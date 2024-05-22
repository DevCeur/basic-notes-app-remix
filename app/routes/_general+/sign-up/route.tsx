import { TextInput } from "~/components/text-input";
import { Button } from "~/components/button";

import styles from "./route.module.css";

export default function SignUpRoute() {
  return (
    <div className={styles.container}>
      <h1>Create Account</h1>

      <form className={styles.form_container}>
        <div className={styles.form_fields}>
          <TextInput label="Email" type="email" placeholder="Your email" name="email" />

          <TextInput
            label="Password"
            type="password"
            placeholder="+6 Characters"
            name="password"
          />
        </div>

        <Button>Create Account</Button>
      </form>
    </div>
  );
}
