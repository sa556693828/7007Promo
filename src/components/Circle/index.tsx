interface Props {
  title: string;
  detail: string;
  size: number;
  bottom: string;
}

export default function Circle({ title, size, detail, bottom }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center relative h-${size} w-${size}`}
    >
      <svg viewBox="0 0 110 120" className={`h-${size} w-${size}`}>
        <circle cx="55" cy="55" r="50" className="dashed" />
        <foreignObject x="5" y="5" height="100px" width="100px">
          <div className="flex justify-center items-center w-full h-full">
            {title}
          </div>
        </foreignObject>
      </svg>
      <a className={`text-sm absolute -bottom-${bottom}`}>{detail}</a>
    </div>
  );
}
//h-32 w-32
//h-44 w-44
//h-56 w-56
//h-64 w-64
//-bottom-32
//-bottom-24
//-bottom-[72px]
//-bottom-[57px]
