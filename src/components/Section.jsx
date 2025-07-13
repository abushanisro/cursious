import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className = "",
  id,
  crosses = false,
  crossesOffset = "",
  customPaddings = false,
  children,
}) => {
  // Determine default padding based on props
  const defaultPadding = customPaddings
    ? ""
    : `py-10 sm:py-14 lg:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`;

  return (
    <section
      id={id}
      className={`relative ${defaultPadding} ${className}`.trim()}
    >
      {children}

      {/* Vertical grid lines (left and right) */}
      <div className="hidden absolute top-0 left-5 w-px h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-px h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Horizontal grid line and SVG crosses if enabled */}
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-px bg-stroke-1 ${
              crossesOffset || ""
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
