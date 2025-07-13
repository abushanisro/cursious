const ButtonGradient = () => {
  return (
    <svg className="block absolute w-0 h-0">
      <defs>
        {/* 🔥 Top to Bottom Animated Gradient */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA500">
            <animate attributeName="stop-color" values="#FFA500;#FF7F00;#FFA500" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FF7F00">
            <animate attributeName="stop-color" values="#FF7F00;#FFA500;#FF7F00" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        {/* 🔥 Left to Right Animated Gradient */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FF7F00">
            <animate attributeName="stop-color" values="#FF7F00;#FFA500;#FF7F00" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FFA500">
            <animate attributeName="stop-color" values="#FFA500;#FF7F00;#FFA500" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        {/* 🔥 Right to Left Animated Gradient */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFA500">
            <animate attributeName="stop-color" values="#FFA500;#FF7F00;#FFA500" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FF7F00">
            <animate attributeName="stop-color" values="#FF7F00;#FFA500;#FF7F00" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        {/* 🔥 Bottom to Top Animated Gradient */}
        <linearGradient id="btn-right" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7F00">
            <animate attributeName="stop-color" values="#FF7F00;#FFA500;#FF7F00" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FFA500">
            <animate attributeName="stop-color" values="#FFA500;#FF7F00;#FFA500" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
