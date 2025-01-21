import { JSX, ReactElement } from "react";

import styles from "@/app/styles.module.css";

interface TextAreaProps {
  textComponent: ReactElement<JSX.Element>;
}

export default function TextArea({ textComponent }: TextAreaProps) {
  return <div className={styles["text-area"]}>{textComponent}</div>;
}
