"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiChartBarThin } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { apiRequest } from "@/app/_lib/auth";

interface OrganizationFormData {
  role: string;
  companyName: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

const SignUpOrganization = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [organizationData, setOrganizationData] =
    useState<OrganizationFormData>({
      role: "organization",
      companyName: "",
      email: "",
      password: "",
      termsAccepted: false,
    });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    setOrganizationData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setErrors({});

    try {
      const data = await apiRequest("auth/signup", "POST", organizationData);

      setMessage(data.message || "Signup successful! Please check your email.");
      alert("Signup successful! Check your email.");

      setOrganizationData({
        role: "organization",
        companyName: "",
        email: "",
        password: "",
        termsAccepted: false,
      });
    } catch (err: unknown) {
      console.error("Signup Error:", err);

      if (err instanceof Error) {
        setMessage(err.message);
        alert(`Signup failed: ${err.message}`);
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center items-center px-2 md:px-0 xl:ml-[40%] py-16">
        <div className="flex flex-col">
          <div className="w-full xl:w-min">
            <div className="flex justify-between items-center pb-12">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="mobiholder logo"
                  width={180}
                  height={60}
                  className="w-[70%] h-auto"
                />
              </Link>

              <div className="relative" ref={modalRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="font-inter font-light text-sm 2xl:text-lg tracking-[-3%] text-purple flex gap-4 items-center border bg-[#24152d] border-purple rounded-[7px] pr-2 pl-10"
                >
                  Organisation <IoMdArrowDropdown />
                </button>

                {isOpen && (
                  <div className="text-[#E5E5E5] bg-[#0d0d0d] border border-t-0 rounded-[3px] px-11 py-2 absolute right-0">
                    <Link href="/auth/signup/individual">Individual</Link>
                  </div>
                )}
              </div>
            </div>

            <div className="relative p-px bg-signup-bdr rounded-[7px]">
              <form
                className="bg-[#0d0d0d] rounded-[7px] p-9"
                onSubmit={handleSubmit}
              >
                <h3 className="font-montserrat font-medium text-[20px] text-lg lg:text-xl 2xl:text-2xl tracking-[-3%] text-[#ffffff] pb-4">
                  Sign Up as Organisation
                </h3>

                {message && (
                  <p className="pb-4 text-sm text-[#c7c6c6]">{message}</p>
                )}

                <div className="py-4">
                  <label
                    htmlFor="companyName"
                    className="pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] 2xl:text-lg"
                  >
                    Company Name
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                      <PiChartBarThin />
                    </div>

                    <input
                      type="text"
                      id="companyName"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      placeholder="Enter your company name"
                      value={organizationData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.companyName && (
                    <p className="pt-2 text-sm text-red-500">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="email"
                    className="pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] 2xl:text-lg"
                  >
                    Company Email
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                      <HiOutlineEnvelope />
                    </div>

                    <input
                      type="email"
                      id="email"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      placeholder="Enter your company email address"
                      value={organizationData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.email && (
                    <p className="pt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="py-4">
                  <label
                    htmlFor="password"
                    className="pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] 2xl:text-lg"
                  >
                    Enter your password
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                      <LuMapPin />
                    </div>

                    <input
                      type="password"
                      id="password"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      placeholder="Enter your password"
                      value={organizationData.password}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.password && (
                    <p className="pt-2 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex gap-3 pb-6">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    className="hidden"
                    checked={organizationData.termsAccepted}
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="termsAccepted"
                    className="h-4 w-4 rounded-[3px] border border-[#999797] flex items-center justify-center shrink-0 mt-1"
                  >
                    {organizationData.termsAccepted && (
                      <svg
                        className="w-4 h-4 text-white"
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
                        />
                      </svg>
                    )}
                  </label>

                  <div>
                    <p className="font-inter font-normal text-[10px] md:text-sm 2xl:text-lg tracking-[0%] text-[#c7c6c6]">
                      I agree to the{" "}
                      <Link href="/legal?tab=terms" className="underline">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/legal?tab=privacy" className="underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    {errors.termsAccepted && (
                      <p className="pt-2 text-sm text-red-500">
                        {errors.termsAccepted}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-purple py-4.25 px-4.5 disabled:opacity-70"
                >
                  <span className="font-montserrat font-semibold text-sm 2xl:text-base text-[#ffffff]">
                    {loading ? "Signing up..." : "Sign Up As Organisation"}
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[3%] text-[#ffffff]">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline text-[#242ef2]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpOrganization;
