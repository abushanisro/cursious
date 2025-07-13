import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="get-started">
      <div className="container relative z-2">
        {/* Visual effects */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* CTA Heading */}
        <Heading
          tag="Let’s build your automation engine"
          title="Tailored AI solutions for your workflow"
          text="No fixed plans. No one-size-fits-all. We co-create AI agents that fit your tools, goals, and operations. Cursious to automate?"
        />

        {/* Line design (optional visuals) */}
        <div className="relative">
          <LeftLine />
          <RightLine />
        </div>

        {/* CTA button */}
       <div className="flex justify-center mt-10">
  <a
    className="button text-xs font-code font-bold tracking-wider uppercase border-b"
    href="https://calendly.com/cursious-ai/30min?month=2025-07"
    target="_blank"
    rel="noopener noreferrer"
  >
    Book a free consultation
  </a>
</div>
      </div>
    </Section>
  );
};

export default Pricing;
