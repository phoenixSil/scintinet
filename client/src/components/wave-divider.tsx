interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

export function WaveDivider({ flip = false, color = "#0097CE", className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
        <path
          d="M0,50 C200,70 400,20 600,50 C800,80 1000,10 1200,50 C1300,65 1370,55 1440,50 L1440,80 L0,80 Z"
          fill="#38D430"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

export function WaveDividerTop({ color = "#0097CE", className = "" }: Omit<WaveDividerProps, "flip">) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z"
          fill={color}
        />
        <path
          d="M0,30 C200,10 400,60 600,30 C800,0 1000,70 1200,30 C1300,15 1370,25 1440,30 L1440,0 L0,0 Z"
          fill="#38D430"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
