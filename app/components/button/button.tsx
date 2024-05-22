import type { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
