const Brackets = ({ position }) => {
  const isLeft = position === "left";

  return (
    <div
      className="transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-3"
    >
      <svg
        width="5"
        height="14"
        viewBox="0 0 5 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        <path
          d={isLeft ? "M5 0.822266H1V12.8223H5" : "M0 0.822266H4V12.8223H0"}
          stroke={`url(#brackets-${position})`}
          strokeWidth="1.2"
        />
        <defs>
          <linearGradient
            id={`brackets-${position}`}
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          >
            {isLeft ? (
              <>
                <stop offset="0%" stopColor="#89F9E8" />
                <stop offset="100%" stopColor="#FACB7B" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#9099FC" />
                <stop offset="100%" stopColor="#D87CEE" />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Brackets;
