import { TextInput } from "~/components/text-input";
import { Button } from "~/components/button";

import styles from "./route.module.css";

export default function SignUpRoute() {
  return (
    <div className={styles.container}>
      <h1>New Note</h1>

      <form className={styles.form_container}>
        <div className={styles.form_fields}>
          <TextInput label="Title" name="title" />

          <TextInput label="Content" name="content" />
        </div>

        <Button>Create Note</Button>
      </form>
    </div>
  );
}
