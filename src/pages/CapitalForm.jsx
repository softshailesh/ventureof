import React, { useState } from "react";
import axios from "axios";
import { Divide } from "lucide-react";
import { countryCodes } from "../components/common_component/countrycodes";

const CapitalForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    startup_name: "",
    website: "",
    description: "",
    sector: "",
    hq_location: "",
    // founders_linkedin: "",
    connection_with_company: "",
    company_founded_year: "",
    company_employees: "",
    startup_solution: "",
    problem_startup_solving: "",
    solution_different_from_others: "",
    pitch_deck: null,
    product_demo: null,
    primary_consumers: "",
    founders_fulltime: "",
    country_code: "",
    email: "",
    contact_number: "",
    startup_stage: "",
    monthly_run_rate: "",
    raised_funds: "",
    funding_details: "",
    fundraising_amount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact_number") {
      const numeric = value.replace(/\D/g, "");
      if (numeric.length <= 10) {
        setFormData({ ...formData, contact_number: numeric });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newformData = new FormData();
      for (const key in formData) {
        newformData.append(key, formData[key]);
      }
      newformData.set("monthly_run_rate", Number(formData.monthly_run_rate));
      newformData.set("fundraising_amount", Number(formData.fundraising_amount || 0));
      newformData.set("raised_funds", formData.raised_funds === "Yes");
      // const payload = {
      //   ...formData,
      //   monthly_run_rate: Number(formData.monthly_run_rate),
      //   fundraising_amount: Number(formData.fundraising_amount || 0),
      //   raised_funds: formData.raised_funds === "Yes",
      // };

      const response = await axios.post(
        "https://venturesyou.com/api/raise-capital",
        newformData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Success:", response.data);
      // alert("Form submitted successfully!");
      // Success Popup
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      clearForm();
    } catch (error) {
      console.log("API Error:", error.response?.data);
      // Error Popup
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 4000);
    }
  };
  const clearForm = () => {
    setFormData({
      startup_name: "",
      website: "",
      description: "",
      sector: "",
      hq_location: "",
      connection_with_company: "",
      company_founded_year: "",
      company_employees: "",
      // founders_linkedin: "",
      founders_fulltime: "",
      problem_startup_solving: "",
      solution_different_from_others: "",
      primary_consumers: "",
      country_code: "",
      pitch_deck: "",
      product_demo: "",
      startup_solution: "",
      email: "",
      contact_number: "",
      startup_stage: "",
      monthly_run_rate: "",
      raised_funds: "",
      funding_details: "",
      fundraising_amount: "",
    });
  };
  const Field = ({ children, error }) => (
    <div>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
  const Select = ({ label, name, value, children, onChange }) => (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {children}
      </select>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="row">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0  mt-6 mb-6"
        >
          {/* Column 1 */}
          <div className="space-y-4 md:pr-4">
            {/* Startup Name */}
            <div>
              <label className="block font-medium mb-1">
                Name of the Startup/Company{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="startup_name"
                value={formData.startup_name}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* HQ Location */}
            <div>
              <label className="block font-medium mb-1">
                Headquarter location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="hq_location"
                value={formData.hq_location}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Founders Full Time */}
            <div>
              <fieldset className="border border-gray-300 rounded p-3">
                <legend className="font-medium">
                  Are the founders working on this full-time?{" "}
                  <span className="text-red-500">*</span>
                </legend>
                <div className="flex gap-4 mt-2">
                  <label>
                    <input
                      type="radio"
                      name="founders_fulltime"
                      value="1"
                      checked={formData.founders_fulltime === "1"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="founders_fulltime"
                      value="0"
                      checked={formData.founders_fulltime === "0"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    No
                  </label>
                </div>
              </fieldset>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <Field error={errors.country_code}>
              <Select
                label="Country Code"
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select One</option>
                {countryCodes.map((c, i) => (
                  <option key={i} value={c.value}>
                    {c.label} ({c.value})
                  </option>
                ))}
              </Select>
            </Field>

            {/* Contact Number */}
            <div>
              <label className="block font-medium mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                {/* <span className="mr-2">+91</span> */}
                <input
                  type="tel"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  placeholder="Your answer"
                  required
                  maxLength="10"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Raised Funds */}
            <div>
              <fieldset className="border border-gray-300 rounded p-3">
                <legend className="font-medium">
                  Have you raised funds before?{" "}
                  <span className="text-red-500">*</span>
                </legend>
                <div className="flex gap-4 mt-2">
                  <label>
                    <input
                      type="radio"
                      name="raised_funds"
                      value="Yes"
                      checked={formData.raised_funds === "Yes"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="raised_funds"
                      value="No"
                      checked={formData.raised_funds === "No"}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    No
                  </label>
                </div>
              </fieldset>
            </div>

            {/* Funding Details */}
            <div>
              <label className="block font-medium mb-1">
                If yes, please share: amount raised & valuation, funding stage,
                investors
                <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="funding_details"
                value={formData.funding_details}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers

                  if (value.length <= 15) {
                    setFormData({
                      ...formData,
                      funding_details: value,
                    });
                  }
                }}
                placeholder="Your answer"
                required
                maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Startup Solution */}
            <div>
              <label className="block font-medium mb-1">
                What solution your startup is providing and how does it work?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="startup_solution"
                value={formData.startup_solution}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Problem Startup Solving */}
            <div>
              <label className="block font-medium mb-1">
                What problem is your startup solving?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="problem_startup_solving"
                value={formData.problem_startup_solving}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Solution Different from Others */}
            <div>
              <label className="block font-medium mb-1">
                How is your solution different from others?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="solution_different_from_others"
                value={formData.solution_different_from_others}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Primary Consumers */}
            <div>
              <label className="block font-medium mb-1">
                Who are primary consumers of your product or solution{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="primary_consumers"
                value={formData.primary_consumers}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Sector</option>
                <option>Enterprises</option>
                <option>Small and medium business</option>
                <option>Government</option>
                <option>Consumers</option>
                <option>Not decided yet</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 md:pl-4">
            {/* Website */}
            <div>
              <label className="block font-medium mb-1">
                Company website or URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Sector */}
            <div>
              <label className="block font-medium mb-1">
                Sector <span className="text-red-500">*</span>
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Sector</option>
                <option>HealthTech/Healthcare</option>
                <option>FinTech</option>
                <option>CleanTech/Sustainability</option>
                <option>DeepTech</option>
                <option>GenAI</option>
                <option>EdTech</option>
                <option>HRTech</option>
                <option>Logistics</option>
                <option>AgriTech</option>
                <option>SaaS</option>
                <option>PropTech</option>
                <option>Media & Entertainment</option>
                <option>Others</option>
              </select>
            </div>

            {/* Connection with Company */}
            <div>
              <label className="block font-medium mb-1">
                What is your connection with the company raising funds?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="connection_with_company"
                value={formData.connection_with_company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Connection</option>
                <option>Founder</option>
                <option>CEO</option>
                <option>Advisor</option>
                <option>Other</option>
              </select>
            </div>

            {/* LinkedIn */}
            {/* <div>
              <label className="block font-medium mb-1">
                LinkedIn Profile of all Founders{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="founders_linkedin"
                value={formData.founders_linkedin}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div> */}

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">
                Year in which company was founded
                <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="company_founded_year"
                value={formData.company_founded_year}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers

                  if (value.length <= 15) {
                    setFormData({
                      ...formData,
                      company_founded_year: value,
                    });
                  }
                }}
                placeholder="Your answer"
                required
                maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* company employees */}
            <div>
              <label className="block font-medium mb-1">
                Number of employees in your company
                <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="company_employees"
                value={formData.company_employees}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers

                  if (value.length <= 15) {
                    setFormData({
                      ...formData,
                      company_employees: value,
                    });
                  }
                }}
                placeholder="Your answer"
                required
                maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Startup Stage */}
            <div>
              <fieldset className="border border-gray-300 rounded p-3">
                <legend className="font-medium">
                  Stage of the Startup <span className="text-red-500">*</span>
                </legend>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    "Ideation",
                    "Pre-seed",
                    "Seed",
                    "Pre-Series A",
                    "Series A",
                    "Growth Stage",
                  ].map((stage) => (
                    <label key={stage}>
                      <input
                        value={stage}
                        type="radio"
                        name="startup_stage"
                        checked={formData.startup_stage === stage}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      {stage}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Run Rate */}
            <div>
              <label className="block font-medium mb-1">
                Current monthly run-rate (mention 0 if not applicable)
                <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="monthly_run_rate"
                value={formData.monthly_run_rate}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers

                  if (value.length <= 15) {
                    setFormData({
                      ...formData,
                      monthly_run_rate: value,
                    });
                  }
                }}
                placeholder="Your answer"
                required
                maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Fundraising Amount */}
            <div>
              <label className="block font-medium mb-1">
                What is the amount you’re looking to raise?
                <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="fundraising_amount"
                value={formData.fundraising_amount}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers

                  if (value.length <= 15) {
                    setFormData({
                      ...formData,
                      fundraising_amount: value,
                    });
                  }
                }}
                placeholder="Your answer"
                required
                maxLength={15}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Pitch Deck */}
            <label className="block font-medium mb-1">
  Provide pitch deck (Max. 100 MB)
</label>

<input
  type="file"
  name="pitch_deck"
  accept=".ppt,.pptx,.pdf"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file) {
      const maxSize = 100 * 1024 * 1024;

      if (file.size > maxSize) {
        alert("File size must be less than 100 MB");
        e.target.value = "";
        return;
      }

      setFormData({
        ...formData,
        pitch_deck: file,
      });
    }
  }}
  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
/>

            {/* Product Demo */}
           <label className="block font-medium mb-1">
  Upload product video or demo (optional - max 100 MB)
</label>

<input
  type="file"
  name="product_demo"
  accept="video/*"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file) {
      const maxSize = 100 * 1024 * 1024;

      if (file.size > maxSize) {
        alert("Video size must be less than 100 MB");
        e.target.value = "";
        return;
      }

      setFormData({
        ...formData,
        product_demo: file,
      });
    }
  }}
  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
/>
            {/* Other Information */}
            <div>
              <label className="block font-medium mb-1">
                Do you want to provide any other information{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="other_information"
                value={formData.other_information}
                onChange={handleChange}
                placeholder="Your answer"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
            {showSuccess && (
              <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
                Form submitted successfully.
              </div>
            )}
            {showError && (
              <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse">
                Form submission failed.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CapitalForm;
