interface TitleProps {
  innerText: string;
}

export default function Title({ innerText }: TitleProps) {
  return (
    <h1>
      {innerText}

      <style jsx>{`
        h1 {
          margin-bottom: 30px;
          font-size: 3rem;
          font-weight: bold;
        }
      `}</style>
    </h1>
  );
}
