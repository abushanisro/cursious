const ChatBubbleWing = ({
  className = "",
  pathClassName = "",
  gradient = false, // optional toggle for gradient fill
}) => {
  return (
    <svg
      className={`transition-all duration-300 ease-in-out ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="37"
      viewBox="0 0 26 37"
      focusable="false"
      aria-hidden="true"
    >
      {gradient && (
        <defs>
          <linearGradient id="chat-bubble-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF7F00" />
          </linearGradient>
        </defs>
      )}
      <path
        className={`transition-all duration-300 ${pathClassName}`}
        d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
        fill={gradient ? "url(#chat-bubble-gradient)" : "currentColor"}
      />
    </svg>
  );
};

export default ChatBubbleWing;
