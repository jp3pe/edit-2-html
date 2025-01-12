import styles from "@/app/styles.module.css";

interface TitleProps {
  innerText: string;
}

export default function Title({ innerText }: TitleProps) {
  return <h1 className={styles["components-title"]}>{innerText}</h1>;
}
