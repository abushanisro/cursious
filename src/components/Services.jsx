import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { cursiousServices, cursiousServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="AI Automation, Tailored for You"
          text="At Cursious AI, we build intelligent systems that save time, scale workflows, and unlock deep operational efficiency."
        />

        <div className="relative flex flex-col gap-y-10">
          {/* Process Automation */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center h-auto lg:h-[46rem] p-6 sm:p-8 lg:p-20 border border-n-1/10 rounded-3xl overflow-hidden gap-6">
            {/* Background image with gradient */}
            <div className="absolute top-0 left-0 w-full h-full lg:w-3/5 z-0">
              <img
                className="w-full h-full object-cover object-right"
                src={service1}
                width={800}
                height={730}
                alt="Process Automation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 bg-black/70 text-white rounded-xl p-6 sm:p-8 w-full lg:max-w-[22rem] ml-auto">
              <h4 className="h4 mb-4">Process Automation</h4>
              <p className="body-2 mb-6">
                Automate repetitive workflows, approvals, and backend ops with intelligent agents that learn from your business logic.
              </p>
              <ul className="body-2 space-y-4">
                {cursiousServices.map((item, index) => (
                  <li key={index} className="flex items-start border-t border-white/20 pt-4">
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Generating Visual */}
            <Generating className="mt-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8 border border-n-1/10" />
          </div>

          {/* Lead Qualification */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Card */}
            <div className="relative min-h-[30rem] sm:min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Lead Qualification"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-gradient-to-b from-transparent to-black/90 z-10">
                <h4 className="h4 mb-4 text-white">Lead Qualification</h4>
                <p className="body-2 mb-10 text-white/80">
                  Our agents chat with inbound leads, ask qualifying questions, and instantly sync responses to your CRM.
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            {/* Right Card */}
            <div className="p-4 sm:p-6 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] flex flex-col justify-between">
              <div className="py-10 px-4 md:px-6 lg:px-8">
                <h4 className="h4 mb-4">Customer Support Automation</h4>
                <p className="body-2 mb-8 text-n-3">
                  Handle support queries, escalations, and feedback collection with always-on voice or text AI agents.
                </p>

                <ul className="flex flex-wrap gap-4">
                  {cursiousServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-12 h-12 p-0.5 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-xl"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt="icon" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[18rem] sm:h-[20rem] md:h-[25rem] bg-n-8 rounded-xl overflow-hidden">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Support Agent"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          {/* Visual Fade/Curve */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
