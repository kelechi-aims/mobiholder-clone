"use client";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useState } from "react";

function ContactForm() {
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
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className={`mb-2 block font-inter font-normal text-base md:text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
        >
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-5.75 md:inset-y-8.75 left-6 md:left-5 flex items-center pointer-events-none text-[#89888d] text-base z-10">
            <AiOutlineUser />
          </div>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-[10px] py-3.75 md:py-6.25 px-11.25 text-[#89888d] text-sm md:text-base xl:text-xs 2xl:text-base"
          placeholder="Enter your full name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className={`mb-2 block font-inter font-normal text-base md:text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full rounded-[10px] py-3.75 md:py-6.25 px-5 text-[#89888d] text-sm md:text-base xl:text-xs 2xl:text-base"
          placeholder="Choose your location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className={`mb-2 block font-inter font-normal text-base md:text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-[10px] py-3.75 md:py-6.25 px-5 text-[#89888d] text-sm md:text-base xl:text-xs 2xl:text-base"
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
          className={`mb-2 block font-inter font-normal text-base md:text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full rounded-[10px] py-3.75 md:py-6.25 px-5 text-[#89888d] text-sm md:text-base xl:text-xs 2xl:text-base"
          placeholder="Enter the subject of your message"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className={`mb-2 block font-inter font-normal text-base md:text-lg tracking-tight text-white focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
        >
          Mesaage
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full rounded-[10px] py-3.75 md:py-6.25 px-5 text-[#89888d] text-base mb-10 xl:text-xs 2xl:text-base"
          placeholder="Enter your message"
          rows={8}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <button className="w-full bg-purple text-white text-sm md:text-base xl:text-xl font-bold font-grifter rounded-[100px] flex items-center gap-2.5 justify-center py-4 md:py-5.25">
          Send Message <MdOutlineArrowRightAlt />
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
