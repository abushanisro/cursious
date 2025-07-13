import PlusSvg from "./PlusSvg";

const SectionSvg = ({
  crossesOffset = "",         // Additional positioning classes
  color = "#ADA8C4",          // Custom color (optional)
  animate = false,            // Enable rotation/pulse animation (optional)
  className = "",             // Custom class override
}) => {
  const animationClass = animate ? "animate-spin-slow" : "";

  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] xl:left-[2.1875rem] 
          pointer-events-none lg:block ${crossesOffset} ${animationClass} ${className}`}
        color={color}
      />

      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] right-[1.5625rem] xl:right-[2.1875rem] 
          pointer-events-none lg:block ${crossesOffset} ${animationClass} ${className}`}
        color={color}
      />
    </>
  );
};

export default SectionSvg;
