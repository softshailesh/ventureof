import React from "react";
import {countryCodes} from "../components/common_component/countrycodes";
const PartnershipForm = () => {
  return (
    <div className="w-full bg-white px-4 md:px-10 py-10">
      <form className="max-w-7xl mx-auto">
        {/* GRID - 2 Columns on md+, 1 Column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First Name */}
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="text-sm font-medium">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Website */}
          <div>
            <label className="text-sm font-medium">Website (eg: https://website.com)</label>
            <input
              type="text"
              placeholder="https://"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Industry Dropdown */}
          <div>
            <label className="text-sm font-medium">Industry</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Select One</option>
              <option>Banks</option>
              <option>Blockchain</option>
              <option>Consultancy</option>
              <option>Education</option>
              <option>Fintech</option>
              <option>Government</option>
              <option>Healthcare</option>
              <option>Insurance</option>
              <option>Investors</option>
              <option>Investment</option>
              <option>IT Sector</option>
              <option>Lending</option>
              <option>Media</option>
              <option>Payments</option>
              <option>Professional Services</option>
              <option>Real Estate</option>
              <option>Recruitment</option>
              <option>Retailers & Merchants</option>
              <option>Robo Advisors</option>
              <option>Technology</option>
              <option>Telecoms & Mobile</option>
              <option>Other</option>
            </select>
          </div>

          {/* Role / Job Title */}
          <div>
            <label className="text-sm font-medium">Role / Job Title</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Select One</option>
              <option>CEO</option>
              <option>CFO</option>
              <option>CMO</option>
              <option>CTO</option>
              <option>COO</option>
              <option>Founder</option>
              <option>Co-Founder</option>
              <option>Manager</option>
              <option>Other</option>
            </select>
          </div>

          {/* Company Size */}
          <div>
            <label className="text-sm font-medium">Company Size (Employees)</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Select One</option>
              <option>0-10</option>
              <option>10-25</option>
              <option>25-50</option>
              <option>50-100</option>
              <option>100-250</option>
              <option>250-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
          </div>

          {/* Business Email */}
          <div>
            <label className="text-sm font-medium">Business Email</label>
            <input
              type="email"
              placeholder="Business Email"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Country Code — FIXED */}
          <div>
            <label className="text-sm font-medium">Country Code</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Select One</option>
              {countryCodes.map((c, index) => (
                <option key={index} value={c.value}>
                  {c.label} ({c.value})
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-sm font-medium">Mobile Number</label>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Country / Region */}
          <div>
            <label className="text-sm font-medium">Country / Region</label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Select One</option>
              {countryCodes.map((c, index) => (
                <option key={index}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Key Objective */}
          <div>
            <label className="text-sm font-medium">
              What is your key objective for partnership with us?
            </label>
            <select className="w-full border rounded-lg px-3 py-2 mt-1">
              <option>Select One</option>
              <option>Funding</option>
              <option>Partnership</option>
              <option>Networking</option>
              <option>Consulting</option>
              <option>Debt</option>
              <option>Equity</option>
              <option>Valuation</option>
              <option>Advisory</option>
              <option>Other</option>
            </select>
          </div>

        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="text-sm font-medium">Message (Optional)</label>
          <textarea
            rows="4"
            placeholder="Type Your Message"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          ></textarea>
        </div>

        {/* Captcha Placeholder */}
        <div className="mt-6">
          <div className="border rounded-lg p-4 w-60 flex items-center gap-3">
            <input type="checkbox" />
            <span className="text-sm">I'm not a robot</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnershipForm;
