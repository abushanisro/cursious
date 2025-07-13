import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import PlusSvg from "../../assets/svg/PlusSvg";

// Gradient bar after roadmap cards
export const Gradient = () => (
  <>
    <div className="relative z-10 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:mx-8" />
    <div className="relative z-10 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:mx-20" />
  </>
);

// Bottom border line with crosses (only for xl)
export const BottomLine = () => (
  <>
    <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
    <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-20 pointer-events-none xl:block" />
    <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-20 pointer-events-none xl:block" />
  </>
);

// Ring outlines in background
const Rings = () => {
  const ringSizes = [
    "w-[65.875rem]",
    "w-[51.375rem]",
    "w-[36.125rem]",
    "w-[23.125rem]",
  ];
  return (
    <>
      {ringSizes.map((size, i) => (
        <div
          key={i}
          className={`absolute top-1/2 left-1/2 ${size} aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2`}
        />
      ))}
    </>
  );
};

// Main animated background circle component
export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const balls = [
    { rotate: "rotate-[46deg]", size: "w-2 h-2", offset: "-ml-1 -mt-36", color: "from-[#DD734F]" },
    { rotate: "-rotate-[56deg]", size: "w-4 h-4", offset: "-ml-1 -mt-32", color: "from-[#DD734F]" },
    { rotate: "rotate-[54deg]", size: "w-4 h-4", offset: "-ml-1 mt-[12.9rem]", color: "from-[#B9AEDF]", showOn: "xl" },
    { rotate: "-rotate-[65deg]", size: "w-3 h-3", offset: "-ml-1.5 mt-52", color: "from-[#B9AEDF]" },
    { rotate: "-rotate-[85deg]", size: "w-6 h-6", offset: "-ml-3 -mt-3", color: "from-[#88E5BE]" },
    { rotate: "rotate-[70deg]", size: "w-6 h-6", offset: "-ml-3 -mt-3", color: "from-[#88E5BE]" },
  ];

  return (
    <div className="absolute -top-[42rem] left-1/2 w-[78rem] max-w-[100vw] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem] pointer-events-none z-0">
      <Rings />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {balls.map((ball, i) => (
          <div
            key={i}
            className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom ${ball.rotate}`}
          >
            <div
              className={`
                ${ball.showOn ? `hidden ${ball.showOn}:block` : ""}
                ${ball.size} ${ball.offset}
                bg-gradient-to-b ${ball.color} to-[#1A1A32] rounded-full
                transition-transform duration-700 ease-out
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};
