import type { InputHTMLAttributes } from "react";

import styles from "./text-input.module.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextInput = ({ label, error, ...inputProps }: TextInputProps) => {
  return (
    <label className={styles.container}>
      <span>{label}</span>

      <input {...inputProps} />

      {error && <span className={styles.error_message}>{error}</span>}
    </label>
  );
};
