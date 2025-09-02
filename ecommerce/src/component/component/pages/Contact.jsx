import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "09eb6f7d-dfc8-4b2e-a2e1-50978c6d23b4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Something went wrong ❌");
    }
  };

  const links = [{ name: "Home", path: "/home" }];
  const navigate = useNavigate();

  return (
    <div className="px-4 md:pl-[300px] mt-20 flex flex-col">
      {/* Breadcrumb */}
      <div className="flex flex-row gap-3">
        <div className="text-[15px] text-[#7D8184] font-medium cursor-pointer hover:text-black">
          {links.map((home, index) => (
            <span key={index} onClick={() => navigate(home.path)}>
              {home.name}
            </span>
          ))}
        </div>
        <span className="text-[15px] text-[#7D8184] font-medium">/</span>
        <span className="text-[15px] font-medium hover:text-[#7D8184] cursor-pointer">
          Contact
        </span>
      </div>

      {/* Main Section */}
      <div className="mt-[120px] flex flex-col md:flex-row gap-y-10 md:gap-x-[84px]">
        {/* Contact Info Box */}
        <div className="w-full md:w-[430px] h-[510px] shadow-sm p-[15px]">
          <div className="w-full h-[493px] flex flex-col gap-6">
            {/* Call Section */}
            <div className="w-full border-b border-gray-400 flex flex-col gap-6 pb-4">
              <div className="flex flex-row gap-5 items-center">
                <img
                  src="/Assets/Contac1.png"
                  className="object-cover w-[55px] h-[55px]"
                  alt="Call"
                />
                <span className="text-[21px] font-medium">Call To Us</span>
              </div>
              <span className="text-[17px] font-sans">
                We are available 24/7, 7 days a week.
              </span>
              <span className="text-[17px] font-sans">
                Phone: +8801611112222
              </span>
            </div>

            {/* Email Section */}
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-row gap-5 items-center">
                <img
                  src="/Assets/Contac2.png"
                  className="object-cover w-[55px] h-[55px]"
                  alt="Write"
                />
                <span className="text-[21px] font-medium">Write To Us</span>
              </div>
              <span className="text-[17px] font-sans">
                Fill out our form and we will contact you within 24 hours.
              </span>
              <span className="text-[17px] font-sans">
                Emails: customer@exclusive.com
              </span>
              <span className="text-[17px] font-sans">
                Emails: support@exclusive.com
              </span>
            </div>
          </div>
        </div>

        {/* Form Box */}
        <form onSubmit={onSubmit}>
          <div className="w-full md:w-[930px] mt-5 h-[530px] shadow-sm p-[15px]">
            <div className="flex flex-col gap-8">
              {/* Top Inputs */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-7">
                <div className="w-full md:w-[235px] h-[59px] text-center p-4 rounded-[2px] bg-gray-100">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="outline-0 bg-gray-100 w-full"
                  />
                </div>
                <div className="w-full md:w-[275px] h-[59px] text-center p-4 rounded-[2px] bg-gray-100">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    className="outline-0 bg-gray-100 w-full"
                  />
                </div>
                <div className="w-full md:w-[235px] h-[59px] text-center p-4 rounded-[2px] bg-gray-100">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    required
                    className="outline-0 bg-gray-100 w-full"
                  />
                </div>
              </div>

              {/* Message Box */}
              <div className="w-full h-[229px] text-center rounded-[2px] bg-gray-100 flex items-center justify-center">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="outline-0 w-[97%] h-[95%] resize-none p-4 rounded-[4px] text-[16px] bg-gray-100"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="w-[215px] h-[56px] text-center bg-[#DB4444] rounded-[6px] cursor-pointer flex items-center justify-center"
                >
                  <span className="text-white text-[16px] font-semibold">
                    Send Message
                  </span>
                </button>
              </div>

              {/* Status Message */}
              {result && (
                <p className="text-center text-[16px] text-gray-600 mt-3">
                  {result}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
