import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !location || !phoneNumber || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const newContact = { name, location, phoneNumber, subject, message };
    console.log("ContactLog:", newContact);

    setName("");
    setLocation("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <h1
            className={`pt-[219px] font-grifter font-bold text-white pb-[105px]
            text-[70px] leading-[114.8px]`}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 my-[106px]">
          <div className="border-2 rounded-[38px] border-[#2e2f36] bg-[#0d151d] px-[52px] py-[63px]">
            <div className="xl:flex justify-between">
              <div className="rounded-[30px] bg-contactus-bg w-full mb-14 xl:mb-0 xl:w-[40%] p-10">
                <h4
                  className={`font-grifter font-bold text-[40px] leading-[114.84px] text-white
                  xl:text-[34px]
                  2xl:text-[40px] `}
                >
                  Contact Information
                </h4>
                <p
                  className={`font-inter font-normal text-[22px] leading-[35px] text-[#e9e8e8]
                  xl:text-[16px]
                  2xl:text-[22px] `}
                >
                  We are here to help make your experience convenient and
                  smooth, shoot us a mail today
                </p>
                <div className="flex items-center gap-11 mt-6">
                  <div className="text-white text-6xl xl:text-4xl 2xl:text-6xl">
                    <BsFillTelephoneFill />
                  </div>
                  <div>
                    <p
                      className={`font-inter font-medium text-[22px] leading-[44px] text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      0700 000 0000
                    </p>
                    <p
                      className={`font-inter font-medium text-[22px] leading-[44px] text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      0700 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-11 mt-6">
                  <div className="text-white text-6xl xl:text-4xl 2xl:text-6xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p
                      className={`font-inter font-medium text-[22px] leading-[44px] text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      infomobiholder@gmail.com
                    </p>
                    <p
                      className={`font-inter font-medium text-[22px] leading-[44px] text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      mobisupport@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-11 mt-6">
                  <div className="text-white text-6xl xl:text-4xl 2xl:text-6xl ">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p
                      className={`font-inter font-medium text-[22px] leading-[44px] text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      Lekki , Lagos
                    </p>
                    <p
                      className={`font-inter font-medium text-[22px] leading-[44px] text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      London, UK
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-[55%]">
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[35px] left-5 flex items-center pointer-events-none text-[#89888d] text-base z-10">
                        <AiOutlineUser />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-[10px] py-[25px] px-[45px] text-[#89888d] text-base xl:text-xs 2xl:text-base"
                      placeholder="Enter your full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="w-full rounded-[10px] py-[25px] px-[20px] text-[#89888d] text-base xl:text-xs 2xl:text-base"
                      placeholder="Choose your location"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-[10px] py-[25px] px-[20px] text-[#89888d] text-base xl:text-xs 2xl:text-base"
                      placeholder="Enter your phone number"
                      required
                      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-[10px] py-[25px] px-[20px] text-[#89888d] text-base xl:text-xs 2xl:text-base"
                      placeholder="Enter the subject of your message"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Mesaage
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full rounded-[10px] py-[25px] px-[20px] text-[#89888d] text-base mb-10 xl:text-xs 2xl:text-base"
                      placeholder="Enter your message"
                      rows={8}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div>
                    <button className="w-full bg-[#a324f2] text-white text-base xl:text-xl font-bold font-grifter rounded-[100px] flex items-center gap-[10px] justify-center py-[21px]">
                      Send Message <MdOutlineArrowRightAlt />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
