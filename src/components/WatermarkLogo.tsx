import React, { useState, useEffect } from 'react';

const paths = [
  "M133.06 114.77V79.36L170.83 56.69V152.12L149.3 163.42V149.94L133.06 159.53V135.47L108.71 148.89V127.68L133.06 114.77Z",
  "M111.88 170.83L128.47 162V181.77L111.88 190.59V170.83Z",
  "M86.65 170.83L103.24 162V181.77L86.65 190.59V170.83Z",
  "M70.94 134.24L84.36 141.71L98.83 133.24V154.06L84.88 161.83L70.94 153V134.24Z",
  "M49.77 158.47V177.89L66.71 187.42V168L49.77 158.47Z",
  "M25.77 129.53V148.94L42.71 158.47V139.06L25.77 129.53Z",
  "M44.12 119V138.42L61.06 147.94V128.53L44.12 119Z",
  "M0 131.65V151.06L16.94 160.59V141.18L0 131.65Z",
  "M28.59 166.59V177.89L37.41 182.47V171.47L28.59 166.59Z",
  "M71.94 190.89V202.18L80.77 206.77V194.77L71.94 190.89Z",
  "M0 94.94V123.89L18.71 134.47V114.71L37.41 126.71V115.71L0 94.94Z",
  "M0 56.65V89.3L37.41 110.36V77.65L0 56.65Z",
  "M45.88 82.5V114.71L76.36 131.65V99.3L45.88 82.5Z",
  "M84.88 131.65V90.37L6.06 47.18L59.96 14.75C59.96 14.75 52.59 25.77 58.24 34.24L96.71 59.3L120.18 74.61L120.39 112.69L84.89 131.64L84.88 131.65Z",
  "M132 64.59L163.06 46.24L84.88 0L59.96 14.75C55.22 17.55 52.7 23.18 54.21 28.48C54.81 30.58 56.02 32.62 58.24 34.24L71.95 43.77L80.77 38.83C80.77 38.83 85.06 35.65 94.95 41.65L132.01 64.59H132Z"
];

const WatermarkLogo = ({ className }: { className?: string }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    // Ilumina una parte del SVG lentamente cada 1.6 segundos
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % paths.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg 
      className={className} 
      width="171" 
      height="207" 
      viewBox="0 0 171 207" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {paths.map((d, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === (activeIndex - 1 + paths.length) % paths.length;
        const isPrevPrev = index === (activeIndex - 2 + paths.length) % paths.length;

        let fill = "rgba(242, 243, 244, 0.12)";
        let filter = "none";
        let opacity = 0.2;

        if (isActive) {
          fill = "#00CCFF"; // Color celeste técnico de la web
          filter = "url(#cyanGlow)";
          opacity = 1;
        } else if (isPrev) {
          fill = "#00CCFF";
          opacity = 0.5;
        } else if (isPrevPrev) {
          fill = "#00CCFF";
          opacity = 0.25;
        }

        return (
          <path
            key={index}
            d={d}
            fill={fill}
            filter={filter}
            style={{
              opacity,
              transition: 'fill 1.4s ease-in-out, opacity 1.4s ease-in-out, filter 1.4s ease-in-out',
            }}
          />
        );
      })}
    </svg>
  );
};

export default WatermarkLogo;
