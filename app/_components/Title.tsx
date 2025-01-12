interface TitleProps {
  innerText: string;
}

export default function Title({ innerText }: TitleProps) {
  return <h1>{innerText}</h1>;
}
