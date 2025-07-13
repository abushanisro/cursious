import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Trusted by forward-thinking companies
      </h5>
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center h-[6rem] sm:h-[8.5rem] w-auto"
            key={index}
          >
            <img
              src={logo}
              width={134}
              height={28}
              alt={`Company logo ${index + 1}`}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
