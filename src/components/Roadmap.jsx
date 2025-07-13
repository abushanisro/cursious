// Imports
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

// 🔥 Glow Button Component
const Button = ({
  className = "",
  href,
  onClick,
  children,
  target = "_blank",
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center 
        px-7 py-3 rounded-xl font-semibold text-sm text-white tracking-wide
        bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600
        hover:from-orange-300 hover:via-yellow-400 hover:to-orange-500
        transition-all duration-300 ease-in-out
        shadow-[0_0_25px_#FFA50080] hover:shadow-[0_0_35px_#FF8C0080]
        hover:scale-105 active:scale-100
        ${className}`}
    >
      {/* Glow Ring */}
      <span className="absolute inset-0 rounded-xl bg-orange-400 opacity-20 blur-md animate-pulse pointer-events-none" />
      {/* Shine Animation */}
      <span className="absolute inset-0 rounded-xl bg-white opacity-5 blur-sm animate-shimmer pointer-events-none" />

      <span className="relative z-10">{children}</span>
    </a>
  );
};

// 🌟 Roadmap Section
const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading
        tag="The future of Cursious AI"
        title="AI automations in the pipeline"
        text="We're actively building powerful agent tools, integrations, and system upgrades that evolve with your needs. Here’s what’s coming."
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Live" : "In progress";

          return (
            <div
              key={item.id}
              className={`md:flex even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] transition-all duration-300
                ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}
                hover:shadow-[0_0_30px_#ffa50040] hover:scale-[1.01]`}
            >
              <div className="relative p-8 bg-n-8/90 backdrop-blur-md border border-white/10 rounded-[2.4375rem] overflow-hidden xl:p-15 transition-transform duration-300">
                {/* Grid Background */}
                <div className="absolute top-0 left-0 max-w-full opacity-10 pointer-events-none">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>

                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8 shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Glow Background Shape */}
        <Gradient />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="https://calendly.com/cursious-ai/30min?month=2025-07">
          Book a free consultation
        </Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
