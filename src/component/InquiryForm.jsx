import React from "react";

const InquiryForm = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white shadow-lg p-8 md:p-12 rounded-md">
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm tracking-widest text-[#a68a4c] uppercase mb-2">
            Make an Enquiry
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">
            Book Your Meridian Grand Wedding
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Simply complete the form below and our team will be in touch shortly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#a68a4c]"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#a68a4c]"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email*"
            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#a68a4c]"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#a68a4c]"
          />

          {/* Dropdown */}
          <select
            className="w-full border border-gray-300 px-4 py-3 text-gray-500 focus:outline-none focus:border-[#a68a4c]"
          >
            <option>How did you find us?*</option>
            <option>Google</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Referral</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#a68a4c] text-white py-3 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#8c743e] transition"
          >
            Send →
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;