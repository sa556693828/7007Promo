interface Props {
  title: string;
  detail: string;
  size: number;
  right: string;
}

export default function CircleMobile({ title, size, detail, right }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center h-${size} w-${size}`}
    >
      <svg viewBox="0 0 110 120" className={`h-${size} w-${size}`}>
        <circle cx="55" cy="55" r="50" className="dashed" />
        <foreignObject x="5" y="5" height="100px" width="100px">
          <div className="flex h-full w-full items-center justify-center">
            {title}
          </div>
        </foreignObject>
      </svg>
      <a className="pt-2 text-sm">{detail}</a>
    </div>
  );
}
//h-32 w-32
//h-44 w-44
//h-56 w-56
//h-64 w-64
//-right-32
//-right-24
//-right-[72px]
//-right-[57px]
