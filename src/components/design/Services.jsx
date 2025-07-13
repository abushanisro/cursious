import { cursiousWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

// 🎨 Background Gradient Visual
export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Curious AI Gradient Background"
      />
    </div>
  );
};

// 💬 Chat bubble for photo enhancement prompt
export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black text-white rounded-t-xl rounded-bl-xl font-code text-base shadow-lg lg:top-16 lg:right-[8.75rem]">
      Hey Curious AI, enhance this photo
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

// ✅ Chat bubble for completed video confirmation
export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-12 w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 text-white rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem] shadow-lg">
      Task Completed!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-orange-400 rounded-[0.75rem]">
        <img
          src={cursiousWhiteSymbol}
          width={26}
          height={26}
          alt="Curious AI Symbol"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

// ▶️ Video playback progress bar
export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6 bg-gradient-to-t from-black/50 to-transparent">
   
      
    </div>
  );
};
