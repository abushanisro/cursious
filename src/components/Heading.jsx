import TagLine from "./Tagline";

const Heading = ({ className = "", title, text, tag, align = "center" }) => {
  return (
    <div
      className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 text-${align} ${className}`}
    >
      {tag && (
        <TagLine className={`mb-4 ${align === "center" ? "md:justify-center" : ""}`}>
          {tag}
        </TagLine>
      )}
      {title && <h2 className="h2 text-n-1">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
