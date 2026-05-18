"use client";

import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { apiRequest } from "@/app/_lib/auth";

interface IndividualFormData {
  role: string;
  firstName: string;
  email: string;
  password: string;
  termsAccepted: boolean;
}

const SignUpIndividual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [individualData, setIndividualData] = useState<IndividualFormData>({
    role: "individual",
    firstName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    setIndividualData((prevData) => ({
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
      const data = await apiRequest("auth/signup", "POST", individualData);

      setMessage(data.message || "Signup successful! Please check your email.");
      alert("Signup successful! Check your email.");

      setIndividualData({
        role: "individual",
        firstName: "",
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
          <div className="w-full">
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
                  className="font-inter font-light text-sm 2xl:text-lg tracking-[-3%] text-[#242ef2] flex gap-4 items-center border bg-[#15182d] border-[#242ef2] rounded-[7px] pr-2 pl-10"
                >
                  Individual <IoMdArrowDropdown />
                </button>

                {isOpen && (
                  <div className="text-[#E5E5E5] bg-[#0d0d0d] border border-t-0 rounded-[3px] px-6 py-2 absolute right-0">
                    <Link href="/auth/signup/organization">Organization</Link>
                  </div>
                )}
              </div>
            </div>

            <div className="relative p-px bg-signup-bdr rounded-[7px]">
              <form
                onSubmit={handleSubmit}
                className="bg-[#0d0d0d] rounded-[7px] p-9"
              >
                <h3 className="font-montserrat font-medium text-base md:text-lg lg:text-xl 2xl:text-2xl tracking-[-3%] text-[#ffffff] pb-4">
                  Sign Up as Individual
                </h3>

                {message && (
                  <p className="pb-4 text-sm text-[#c7c6c6]">{message}</p>
                )}

                <div className="pb-6">
                  <label
                    htmlFor="firstName"
                    className="pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] 2xl:text-lg"
                  >
                    First Name
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                      <AiOutlineUser />
                    </div>

                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      value={individualData.firstName}
                      onChange={handleChange}
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      required
                    />
                  </div>

                  {errors.firstName && (
                    <p className="pt-2 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="pb-6">
                  <label
                    htmlFor="email"
                    className="pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] 2xl:text-lg"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                      <HiOutlineEnvelope />
                    </div>

                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={individualData.email}
                      onChange={handleChange}
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      required
                    />
                  </div>

                  {errors.email && (
                    <p className="pt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="pb-2">
                  <label
                    htmlFor="password"
                    className="pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] 2xl:text-lg"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                      <AiOutlineUser />
                    </div>

                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your preferred password"
                      value={individualData.password}
                      onChange={handleChange}
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      required
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
                    checked={individualData.termsAccepted}
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="termsAccepted"
                    className="h-4 w-4 rounded-[3px] border border-[#999797] flex items-center justify-center shrink-0 mt-1"
                  >
                    {individualData.termsAccepted && (
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
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-purple py-4.25 px-20 md:px-32 disabled:opacity-70"
                >
                  <span className="font-montserrat font-semibold text-sm 2xl:text-base text-[#ffffff]">
                    {loading ? "Signing Up..." : "Sign Up"}
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

export default SignUpIndividual;
