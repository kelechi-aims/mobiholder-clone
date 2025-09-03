import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsCondition from "./TermsCondition";

const LegalHeading = ({ title, isActive, onClick }) => {
  return (
    <div
      className={`ml-4 cursor-pointer transition ${
        isActive ? "border-t-4 md:border-l-4 border-[#242ef2]" : ""
      }`}
      onClick={() => onClick(title)}
    >
      <span className="font-inter font-semibold text-sm md:text-[16px] lg:text:[20px] xl:text-[24px] leading-[60px] md:leading-[114.84px] text-[#242ef2]">
        {title}
      </span>
    </div>
  );
};

const Legal = () => {
  const [selectedLegal, setSelectedLegal] = useState("Privacy Policy");

  // Function to handle click on legal items
  const renderContent = () => {
    if (selectedLegal === "Privacy Policy") return <PrivacyPolicy />;
    if (selectedLegal === "Terms & Conditions") return <TermsCondition />;
  };

  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <h1
            className={`pt-[219px] font-grifter font-bold text-white pb-[105px]
            text-[30.96px] leading-[40.84px]
            md:text-[40.96px] md:leading-[45.84px]
            lg:text-[45.96px] lg:leading-[47.84px]
            xl:text-[47.96px] xl:leading-[48.84px] 
            xls:text-[49.96px] xls:leading-[49.84px] 
            2xl:text-[70.96px] 2xl:leading-[80.84px]`}
          >
            Legal
          </h1>
        </div>
      </div>

      <div className="container py-[79px] mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[25%] xll:w-[23%] 2xl:w-[20%]">
            <h4 className="font-grifter font-bold text-[16px] lg:text-[18px] xl:text-[22px] leading-[114.84px] text-[#343333]">
              ON THIS PAGE
            </h4>
            <div className="flex md:flex-col">
              <LegalHeading
                title="Privacy Policy"
                isActive={selectedLegal === "Privacy Policy"}
                onClick={setSelectedLegal}
              />
              <LegalHeading
                title="Terms & Conditions"
                isActive={selectedLegal === "Terms & Conditions"}
                onClick={setSelectedLegal}
              />
            </div>
          </div>
          <div className="w-full md:w-[75%] xll:w-[77%] 2xl:w-[80%]">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
