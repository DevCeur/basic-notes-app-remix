import type { InputHTMLAttributes } from "react";

import styles from "./text-input.module.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...inputProps }: TextInputProps) => {
  return (
    <label className={styles.container}>
      <span>{label}</span>

      <input {...inputProps} />
    </label>
  );
};
