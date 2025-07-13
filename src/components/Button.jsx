import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className = "",
  href,
  onClick,
  children,
  px = "px-4", // default horizontal padding
  white = false,
  fullWidth = false, // enable full width on mobile
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center h-11 
    rounded-lg transition-all duration-300 ease-in-out overflow-hidden
    text-base font-semibold leading-none
    ${px}
    ${fullWidth ? "w-full sm:w-auto" : ""}
    ${white 
      ? "text-n-8 bg-white hover:bg-neutral-200" 
      : "text-n-1 bg-color-1 hover:bg-color-2"}
    ${className}
  `.trim();

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <ButtonSvg white={white} className="absolute inset-0 z-0 pointer-events-none" />
    </>
  );

  return href ? (
    <a href={href} className={baseClasses}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={baseClasses} type="button">
      {content}
    </button>
  );
};

export default Button;
