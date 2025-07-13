import { background } from "../../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[65rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow">
      <div className="absolute top-1/2 left-1/2 w-[45rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[28rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-6 w-0.5 h-full bg-gradient-to-b from-orange-400 to-purple-700 opacity-30" />
      <div className="absolute top-0 right-6 w-0.5 h-full bg-gradient-to-b from-purple-700 to-orange-400 opacity-30" />
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-10 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full blur-sm animate-float-slow" />
      <div className="absolute top-[13rem] right-14 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full blur-sm animate-float-medium" />
      <div className="absolute top-[26rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full blur-md animate-float-fast" />
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden overflow-hidden z-0">
      {/* Soft Background Image */}
      <div className="absolute inset-0 opacity-[.05]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      {/* Glowing Rings */}
      <Rings />

      {/* Side Gradient Lines */}
      <SideLines />

      {/* Floating Orbs */}
      <BackgroundCircles />
    </div>
  );
};
