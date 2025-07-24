import SignUpSlider from "../../components/signupslider/SignUpSlider";
import { IoMdArrowDropdown, IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { PiChartBarThin } from "react-icons/pi";
import { LuPhone, LuMapPin } from "react-icons/lu";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Country, ICountry, IState, State } from "country-state-city";
import { AiFillInfoCircle } from "react-icons/ai";

interface FormData {
  companyName: string;
  companyPhone: string;
  companyAddress: string;
  selectedCountry: string;
  selectedState: string;
  companyEmail: string;
  about: string;
  accessType: string;
  agreed: boolean;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  userPhone: string;
  userAddress: string;
  userCountry: string;
  userState: string;
  userEmail: string;
  userAccessType: string;
  userAgreed: boolean;
  userFullName: string;
  userPassword: string;
  companyAdmin: boolean;
}


const ProgressBarOne = () => {
  return (
    <div className="border rounded-[10px] bg-[#2e2f36] br-[#000000] px-4 py-2">
      <p className="font-inter font-normal text-sm  text-[#c7c6c6]">STEP 1</p>
      <div className="flex justify-between">
        <p className="font-inter font-normal text-base  text-[#c7c6c6]">
          Organization Info
        </p>
        <div className="w-4/6 bg-[#c7c6c6] h-1.5 mt-2 rounded-full relative">
          <div className="bg-[#242ef2] h-1.5 rounded-[10px] w-1/2"></div>
          <div className="absolute top-[-4px] left-[49%] w-3 h-3 bg-white rounded-full border-2 border-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

const ProgressBarTwo = () => {
  return (
    <div className="border rounded-[10px] bg-[#2e2f36] br-[#000000] px-4 py-2">
      <p className="font-inter font-normal text-sm  text-[#c7c6c6]">STEP 2</p>
      <div className="flex justify-between">
        <p className="font-inter font-normal text-base  text-[#c7c6c6]">
          Add User Details
        </p>
        <div className="w-4/6 bg-[#c7c6c6] h-1.5 mt-2 rounded-full relative">
          <div className="bg-[#242ef2] h-1.5 rounded-[10px] w-full"></div>
          <div className="absolute top-[-4px] left-[49%] w-3 h-3 bg-[#242ef2] rounded-full border-2 border-gray-500"></div>
          <div className="absolute top-[-4px] right-0 bg-[#242ef2] w-3 h-3  rounded-full border-2 border-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

const SignUpOrganization = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    //Page 1 - Organization Info
    companyName: "",
    companyPhone: "",
    companyAddress: "",
    selectedCountry: "",
    selectedState: "",
    companyEmail: "",
    about: "",
    accessType: "",
    agreed: false,
    //Page 2 - User Info
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userPhone: "",
    userAddress: "",
    userCountry: "",
    userState: "",
    userEmail: "",
    userAccessType: "",
    userAgreed: false,
    userFullName: "",
    userPassword: "",
    companyAdmin: false,
  });
  const [step, setStep] = useState<number>(1);

  const isStepOneValid = () => {
    const {
      companyName,
      companyPhone,
      companyAddress,
      selectedCountry,
      selectedState,
      companyEmail,
      about,
      accessType,
      agreed,
    } = formData;
    return (
      companyName.trim() !== "" &&
      companyPhone.trim() !== "" &&
      companyAddress.trim() !== "" &&
      selectedCountry.trim() !== "" &&
      selectedState.trim() !== "" &&
      companyEmail.trim() !== "" &&
      about.trim() !== "" &&
      accessType.trim() !== "" &&
      agreed
    );
  };

  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [states, setStates] = useState<IState[]>([]);
  const accessOptions = ["Opened", "Semi Closed", "Closed"];

  interface AccessTypeChangeOption {
    option: string;
  }

  const handleAccessTypeChange = (option: string): void => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      accessType: prevData.accessType === option ? "" : option,
    }));
  };

  const handleProceed = () => {
    // if (isStepOneValid()) {
    // Proceed to the next step
    setStep(2);
    // } else {
    // Show an error message or handle the case where the form is not valid
    // console.log("Please fill in all required fields and agree to the terms.");
    // }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  //Load countries on first render
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  // Load states when a country is selected
  useEffect(() => {
    if (formData.selectedCountry) {
      const stateData = State.getStatesOfCountry(formData.selectedCountry);
      setStates(stateData);
    } else {
      setStates([]);
    }
  }, [formData.selectedCountry]);

  const handleClickOutside =
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  return (
    <div className="">
      <div className="flex justify-center items-center xl:justify-between bg-[#0d0d0d] h-screen w-full md:overflow-y-auto">
        <div className="hidden xl:block lg:w-[40%] xl:w-[33%] fixed overflow-hidden">
          <SignUpSlider />
        </div>
        <div
          className={`w-full flex justify-center items-center xl:ml-[40%] lg:py-16 ${step === 1 ? "md:pt-[700px] lg:pt-[700px]" : "md:pt-[400px] lg:pt-[400px]"}`}
        >
          <div className="flex flex-col">
            <div className="w-full xl:w-min">
              <div className="flex justify-between items-center pb-12">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="mobiholder logo"
                    className="w-[70%]"
                  />
                </Link>
                <div className="relative" ref={modalRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="font-inter font-light text-sm 2xl:text-lg tracking-[-3%] text-[#a324f2] flex gap-4 items-center border bg-[#24152d] border-[#a324f2] rounded-[7px] pr-2 pl-10"
                  >
                    Organisation <IoMdArrowDropdown />
                  </button>
                  {isOpen && (
                    <div className="text-[#E5E5E5] bg-[#0d0d0d] border border-t-0 rounded-[3px] px-11 py-2 border- absolute right-0">
                      <Link to="/signup/individual">Individual</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative p-[1px] bg-signup-bdr rounded-[7px]">
                <form
                  className="bg-[#0d0d0d] rounded-[7px] p-9"
                  onSubmit={handleSubmit}
                >
                  {step === 1 && (
                    <>
                      <h3 className="font-montserrat font-medium text-[20px] text-lg lg:text-xl 2xl:text-2xl tracking-[-3%] text-[#ffffff] pb-4">
                        Sign Up as Organisation
                      </h3>

                      <ProgressBarOne />
                      <div className="py-4">
                        <label
                          htmlFor="companyName"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <PiChartBarThin />
                          </div>
                        </div>
                        <input
                          type="text"
                          id="companyName"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Enter your company name"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="py-4">
                        <label
                          htmlFor="companyNumber"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Company Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <LuPhone />
                          </div>
                        </div>
                        <input
                          type="tel"
                          id="companyNumber"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Enter your company phone number"
                          value={formData.companyPhone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="py-4">
                        <label
                          htmlFor="address"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Company Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <LuMapPin />
                          </div>
                        </div>
                        <input
                          type="text"
                          id="address"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Enter your company address"
                          value={formData.companyAddress}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex pb-4 gap-10">
                        <div>
                          <label
                            htmlFor="country"
                            className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                          >
                            Country
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                              <LuMapPin />
                            </div>
                          </div>
                          <select
                            name="country"
                            id="country"
                            className="bg-[#2e2f36] px-10 py-5 rounded-[10px] text-[#999797] w-[250px] text-sm 2xl:text-lg"
                            value={formData.selectedCountry}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                selectedCountry: e.target.value,
                                selectedState: "",
                              }))
                            }
                          >
                            <option value="" disabled selected>
                              Choose your country
                            </option>
                            {countries.map((country) => (
                              <option
                                key={country.isoCode}
                                value={country.isoCode}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="state"
                            className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                          2xl:text-lg`}
                          >
                            State
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                              <LuMapPin />
                            </div>
                          </div>
                          <select
                            name="state"
                            id="state"
                            className="bg-[#2e2f36] px-10 py-5 rounded-[10px] text-[#999797] w-[250px] text-sm 2xl:text-lg"
                            value={formData.selectedState}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                selectedState: e.target.value,
                              }))
                            }
                            disabled={!states.length}
                          >
                            <option value="" disabled selected>
                              Choose your state
                            </option>
                            {states.map((state) => (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="pb-4">
                        <label
                          htmlFor="email"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Company Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <HiOutlineEnvelope />
                          </div>
                        </div>
                        <input
                          type="email"
                          id="email"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Enter your company email address"
                          value={formData.companyEmail}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="pb-4">
                        <label
                          htmlFor="about"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          About Company
                        </label>
                        <input
                          type="text"
                          id="about"
                          required
                          className="bg-[#2e2f36] pl-4 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Tell us about your company "
                          value={formData.about}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="pb-4 relative">
                        <label
                          htmlFor="accessType"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Organisation Access Type
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] right-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            {isAccessOpen ? <FaCaretUp /> : <FaCaretDown />}
                          </div>
                        </div>
                        <div
                          className="bg-[#2e2f36] px-4 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          onClick={() => setIsAccessOpen(!isAccessOpen)}
                        >
                          {formData.accessType
                            ? formData.accessType
                            : "Choose Access Type"}
                        </div>
                        {isAccessOpen && (
                          <div className="absolute z-10 mt-1 w-full  rounded-[10px] bg-[#2e2f36] shadow-md max-h-48 overflow-auto">
                            {accessOptions.map((accessOption) => (
                              <label
                                key={accessOption}
                                className="flex items-center justify-between  px-4 py-2  hover:bg-gray-100 cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={
                                      formData.accessType === accessOption
                                    }
                                    onChange={() =>
                                      handleAccessTypeChange(accessOption)
                                    }
                                    className="form-checkbox text-blue-600"
                                  />
                                  <span>{accessOption}</span>
                                </div>
                                <AiFillInfoCircle className="text-white" />
                              </label>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex gap-3 pb-6">
                        <input
                          type="checkbox"
                          id="agreed"
                          name="agreed"
                          className="hidden peer"
                          checked={formData.agreed}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="agreed"
                          className="h-4 w-4 rounded-[3px] border border-[#999797]"
                        >
                          {formData.agreed && (
                            <svg
                              className={`w-4 h-4 text-white ${formData.agreed ? "block" : "hidden"}`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </label>
                        <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[0%] text-[#c7c6c6]">
                          I agree to the{" "}
                          <Link to='/termsandconditions' className="underline">Terms & Conditions</Link>{" "}
                          and <Link to='/privacy-policy' className="underline">Privacy Policy.</Link>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleProceed}
                        className="w-full rounded-full bg-[#a324f2] py-[17px] px-[128px]"
                      >
                        <span className="font-montserrat font-semibold text-sm 2xl:text-base text-[#ffffff]">
                          Proceed
                        </span>
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h3 className="font-montserrat font-medium text-[20px] text-lg lg:text-xl 2xl:text-2xl tracking-[-3%] text-[#ffffff] pb-4">
                        Sign Up as Organisation
                      </h3>

                      <ProgressBarTwo />
                      <div className="py-4">
                        <label
                          htmlFor="companyName"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <PiChartBarThin />
                          </div>
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[540px] text-sm 2xl:text-lg"
                          placeholder="Enter user name"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="py-4">
                        <label
                          htmlFor="userEmail"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <LuPhone />
                          </div>
                        </div>
                        <input
                          type="email"
                          id="userEmail"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Enter user email"
                          value={formData.userEmail}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="py-4">
                        <label
                          htmlFor="password"
                          className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                        >
                          Enter your password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                            <LuMapPin />
                          </div>
                        </div>
                        <input
                          type="password"
                          id="password"
                          required
                          className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex gap-3 pb-6">
                        <input
                          type="checkbox"
                          id="companyAdmin"
                          name="companyAdmin"
                          className="hidden peer"
                          checked={formData.companyAdmin}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="companyAdmin"
                          className="h-4 w-4 rounded-[3px] border border-[#999797]"
                        >
                          {formData.companyAdmin && (
                            <svg
                              className={`w-4 h-4 text-white ${formData.companyAdmin ? "block" : "hidden"}`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </label>
                        <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[0%] text-[#c7c6c6]">
                          Note, this person would be your organisation Super
                          Admin
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-content rounded-full bg-[#a324f2] py-[17px] px-[50px]"
                        >
                          <div className="font-montserrat flex justify-between content-center text-[#ffffff]">
                            <IoIosArrowRoundBack className="text-xl" />
                            <span className="font-semibold text-sm 2xl:text-base">
                              Back
                            </span>
                          </div>
                        </button>

                        <button
                          type="submit"
                          className="w-content rounded-full bg-[#a324f2] py-[17px] px-[50px]"
                        >
                          <span className="font-montserrat font-semibold text-sm 2xl:text-base text-[#ffffff]">
                            Sign Up As Organisation
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[3%] text-[#ffffff]">
                Already have an account?{" "}
                <Link to="/login" className="underline text-[#242ef2]">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpOrganization;
