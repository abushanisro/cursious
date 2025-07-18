const MenuSvg = ({ openNavigation }) => (
  <svg
    className="overflow-visible"
    width="20"
    height="12"
    viewBox="0 0 20 12"
    aria-hidden="true"
    focusable="false"
  >
    {/* Top Line */}
    <rect
      className={`transition-all duration-300 ease-in-out origin-center`}
      y={openNavigation ? 5 : 0}
      width="20"
      height="2"
      rx="1"
      fill="white"
      transform={openNavigation ? "rotate(45)" : "rotate(0)"}
    />

    {/* Bottom Line */}
    <rect
      className={`transition-all duration-300 ease-in-out origin-center`}
      y={openNavigation ? 5 : 10}
      width="20"
      height="2"
      rx="1"
      fill="white"
      transform={openNavigation ? "rotate(-45)" : "rotate(0)"}
    />
  </svg>
);

export default MenuSvg;
