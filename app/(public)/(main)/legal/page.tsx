"use client";

import PrivacyPolicy from "@/app/_components/_legal/PrivacyPolicy";
import TermsCondition from "@/app/_components/_legal/TermsCondition";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type LegalHeadingProps = {
  title: string;
  isActive: boolean;
  onClick: (title: string) => void;
};

const LegalHeading = ({ title, isActive, onClick }: LegalHeadingProps) => {
  return (
    <div
      className={`ml-4 cursor-pointer transition ${
        isActive ? "border-t-4 md:border-l-4 border-[#242ef2]" : ""
      }`}
      onClick={() => onClick(title)}
    >
      <span className="font-inter font-semibold text-sm md:text-[16px] lg:text-[20px] xl:text-[24px] leading-15 md:leading-[114.84px] text-[#242ef2]">
        {title}
      </span>
    </div>
  );
};

const Legal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [selectedLegal, setSelectedLegal] = useState("Privacy Policy");

  useEffect(() => {
    if (tab === "terms") {
      setSelectedLegal("Terms & Conditions");
    } else {
      setSelectedLegal("Privacy Policy");
    }
  }, [tab]);

  const handleLegalChange = (title: string) => {
    setSelectedLegal(title);

    if (title === "Terms & Conditions") {
      router.push("/legal?tab=terms");
    } else {
      router.push("/legal?tab=privacy");
    }
  };

  const renderContent = () => {
    if (selectedLegal === "Privacy Policy") return <PrivacyPolicy />;
    if (selectedLegal === "Terms & Conditions") return <TermsCondition />;
    return <PrivacyPolicy />;
  };

  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover bg-center flex flex-col justify-center'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <h1
            className="pt-54.75 font-grifter font-bold text-white pb-26.25
            text-[30.96px] leading-[40.84px]
            md:text-[40.96px] md:leading-[45.84px]
            lg:text-[45.96px] lg:leading-[47.84px]
            xl:text-[47.96px] xl:leading-[48.84px]
            xls:text-[49.96px] xls:leading-[49.84px]
            2xl:text-[70.96px] 2xl:leading-[80.84px]"
          >
            Legal
          </h1>
        </div>
      </div>

      <div className="container py-19.75 mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[25%] xll:w-[23%] 2xl:w-[20%]">
            <h4 className="font-grifter font-bold text-[16px] lg:text-[18px] xl:text-[22px] leading-[114.84px] text-[#343333]">
              ON THIS PAGE
            </h4>

            <div className="flex md:flex-col">
              <LegalHeading
                title="Privacy Policy"
                isActive={selectedLegal === "Privacy Policy"}
                onClick={handleLegalChange}
              />
              <LegalHeading
                title="Terms & Conditions"
                isActive={selectedLegal === "Terms & Conditions"}
                onClick={handleLegalChange}
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
