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
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // stop form submission if validation fails
    }
    setSubmitting(true);
    try {
      const newformData = new FormData();
      for (const key in formData) {
        newformData.append(key, formData[key]);
      }
      newformData.set("monthly_run_rate", Number(formData.monthly_run_rate));
      newformData.set(
        "fundraising_amount",
        Number(formData.fundraising_amount || 0),
      );
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

      if (validateForm()) {
        console.log("Form submitted", formData);
      }

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
    } finally {
      setSubmitting(false);
    }
  };
  const validateForm = () => {
    let newErrors = {};

    if (!formData.startup_name.trim())
      newErrors.startup_name = "Startup name is required";
    if (!formData.website.trim()) {
      newErrors.website = "Website URL is required";
    } else if (
      !/^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[\w\d-._~:/?#[\]@!$&'()*+,;=.]+)?$/.test(
        formData.website,
      )
    ) {
      newErrors.website = "Please enter a valid website URL";
    }
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.sector.trim()) newErrors.sector = "Sector is required";
    if (!formData.hq_location.trim())
      newErrors.hq_location = "HQ Location is required";
    if (!formData.connection_with_company.trim())
      newErrors.connection_with_company = "Connection with company is required";
    if (!formData.company_founded_year)
      newErrors.company_founded_year = "Founded year is required";
    if (!formData.company_employees)
      newErrors.company_employees = "Employees count is required";
    if (!formData.founders_fulltime)
      newErrors.founders_fulltime = "Founders full time status is required";
    if (!formData.problem_startup_solving.trim())
      newErrors.problem_startup_solving = "Problem field is required";
    if (!formData.solution_different_from_others.trim())
      newErrors.solution_different_from_others = "Solution field is required";
    if (!formData.primary_consumers.trim())
      newErrors.primary_consumers = "Primary consumers is required";
    if (!formData.country_code.trim())
      newErrors.country_code = "Country code is required";
    // if (!formData.pitch_deck) newErrors.pitch_deck = "Pitch deck is required";
    // if (!formData.product_demo)
    //   newErrors.product_demo = "Product demo is required";
    if (!formData.startup_solution.trim())
      newErrors.startup_solution = "Startup solution is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.contact_number.trim()) {
      newErrors.contact_number = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contact_number)) {
      newErrors.contact_number = "Enter a valid 10 digit number";
    }
    if (!formData.startup_stage)
      newErrors.startup_stage = "Startup stage is required";
    if (!formData.monthly_run_rate)
      newErrors.monthly_run_rate = "Monthly run rate is required";
    if (!formData.raised_funds)
      newErrors.raised_funds = "Raised funds is required";
    if (!formData.funding_details.trim())
      newErrors.funding_details = "Funding details is required";
    if (!formData.fundraising_amount)
      newErrors.fundraising_amount = "Fundraising amount is required";
    if (!formData.other_information)
      newErrors.other_information = "Other information is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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

  const Loader = () => (
    <div className="loderbeforePage fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-blue-500"></div>

        {/* Animated Dots */}
        <div className="flex space-x-3">
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        </div>

        <p className="text-gray-600 text-sm font-medium">Submitting...</p>
      </div>
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
                className={`w-full border rounded px-3 py-2 focus:outline-none
      ${errors.startup_name ? "border-red-500" : "border-gray-300"}`}
              />

              {errors.startup_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startup_name}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 
    ${
      errors.description
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 
    ${
      errors.hq_location
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.hq_location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.hq_location}
                </p>
              )}
            </div>

            {/* Founders Full Time */}
            <div>
              <fieldset
                className={`border rounded p-3 ${
                  errors.founders_fulltime
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
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

              {errors.founders_fulltime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.founders_fulltime}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 
    ${
      errors.email
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <Field error={errors.country_code}>
              <Select
                label="Country Code"
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 ${
                  errors.country_code
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-green-500"
                }`}
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
                <input
                  type="tel"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  placeholder="Your answer"
                  maxLength="10"
                  className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
      ${
        errors.contact_number
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-green-500"
      }`}
                />
              </div>

              {errors.contact_number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contact_number}
                </p>
              )}
            </div>

            {/* Raised Funds */}
            <div>
              <fieldset
                className={`border rounded p-3 ${
                  errors.raised_funds ? "border-red-500" : "border-gray-300"
                }`}
              >
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

              {errors.raised_funds && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.raised_funds}
                </p>
              )}
            </div>

            {/* Funding Details */}
            {formData.raised_funds === "Yes" && (
              <div>
                <label className="block font-medium mb-1">
                  If yes, please share: amount raised & valuation, funding
                  stage, investors
                </label>

                <input
                  type="text"
                  name="funding_details"
                  value={formData.funding_details}
                  onChange={(e) => {
                    let value = e.target.value;

                    setFormData({
                      ...formData,
                      funding_details: value,
                    });

                    setErrors({
                      ...errors,
                      funding_details: "",
                    });
                  }}
                  placeholder="Your answer"
                  className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.funding_details
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
                />

                {errors.funding_details && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.funding_details}
                  </p>
                )}
              </div>
            )}

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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.startup_solution
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.startup_solution && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startup_solution}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.problem_startup_solving
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.problem_startup_solving && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.problem_startup_solving}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.solution_different_from_others
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.solution_different_from_others && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.solution_different_from_others}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.primary_consumers
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              >
                <option value="">Select Sector</option>
                <option>Enterprises</option>
                <option>Small and medium business</option>
                <option>Government</option>
                <option>Consumers</option>
                <option>Not decided yet</option>
                <option>Other</option>
              </select>

              {errors.primary_consumers && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.primary_consumers}
                </p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
                ${
                  errors.website
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-green-500"
                }`}
              />

              {errors.website && (
                <p className="text-red-500 text-sm mt-1">{errors.website}</p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.sector
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
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

              {errors.sector && (
                <p className="text-red-500 text-sm mt-1">{errors.sector}</p>
              )}
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.connection_with_company
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              >
                <option value="">Select Connection</option>
                <option>Founder</option>
                <option>CEO</option>
                <option>Advisor</option>
                <option>Other</option>
              </select>

              {errors.connection_with_company && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.connection_with_company}
                </p>
              )}
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

                    setErrors({
                      ...errors,
                      company_founded_year: "",
                    });
                  }
                }}
                placeholder="Your answer"
                maxLength={15}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.company_founded_year
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.company_founded_year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.company_founded_year}
                </p>
              )}
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

                    setErrors({
                      ...errors,
                      company_employees: "",
                    });
                  }
                }}
                placeholder="Your answer"
                maxLength={15}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.company_employees
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.company_employees && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.company_employees}
                </p>
              )}
            </div>

            {/* Startup Stage */}
            <div>
              <fieldset
                className={`border rounded p-3 ${
                  errors.startup_stage ? "border-red-500" : "border-gray-300"
                }`}
              >
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
                        type="radio"
                        name="startup_stage"
                        value={stage}
                        checked={formData.startup_stage === stage}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      {stage}
                    </label>
                  ))}
                </div>
              </fieldset>

              {errors.startup_stage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.startup_stage}
                </p>
              )}
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

                    setErrors({
                      ...errors,
                      monthly_run_rate: "",
                    });
                  }
                }}
                placeholder="Your answer"
                maxLength={15}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.monthly_run_rate
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.monthly_run_rate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.monthly_run_rate}
                </p>
              )}
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

                    setErrors({
                      ...errors,
                      fundraising_amount: "",
                    });
                  }
                }}
                placeholder="Your answer"
                maxLength={15}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.fundraising_amount
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.fundraising_amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fundraising_amount}
                </p>
              )}
            </div>

            {/* Pitch Deck */}
            <div>
              <label className="block font-medium mb-1">
                Provide pitch deck{" "}
                <span className="text-sm text-gray-500">
                  (supported files: ppt,pptx,pdf,doc,docx,xls,xlsx)(Max. 100 MB)
                </span>
                <span className="text-red-500">*</span>
              </label>

              <input
                type="file"
                name="pitch_deck"
                accept=".ppt,.pptx,.pdf,.doc,.docx,.xls,.xlsx"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    const maxSize = 100 * 1024 * 1024;

                    if (file.size > maxSize) {
                      setErrors({
                        ...errors,
                        pitch_deck: "File size must be less than 100 MB",
                      });
                      e.target.value = "";
                      return;
                    }

                    setFormData({
                      ...formData,
                      pitch_deck: file,
                    });

                    setErrors({
                      ...errors,
                      pitch_deck: "",
                    });
                  }
                }}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.pitch_deck
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.pitch_deck && (
                <p className="text-red-500 text-sm mt-1">{errors.pitch_deck}</p>
              )}
            </div>

            {/* Product Demo */}
            <div>
              <label className="block font-medium mb-1">
                Upload product video or demo{" "}
                <span className="text-sm text-gray-500">
                  (supported files: mp4,mov,avi,wmv)(Max. 100 MB)
                </span>
                <span className="text-red-500">*</span>
              </label>

              <input
                type="file"
                name="product_demo"
                accept="video/mp4,video/mov,video/avi,video/wmv"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    const maxSize = 100 * 1024 * 1024;

                    if (file.size > maxSize) {
                      setErrors({
                        ...errors,
                        product_demo: "Video size must be less than 100 MB",
                      });
                      e.target.value = "";
                      return;
                    }

                    setFormData({
                      ...formData,
                      product_demo: file,
                    });

                    setErrors({
                      ...errors,
                      product_demo: "",
                    });
                  }
                }}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.product_demo
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.product_demo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.product_demo}
                </p>
              )}

              {formData.product_demo && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected file: {formData.product_demo.name}
                </p>
              )}
            </div>
            {/* Other Information */}
            <div>
              <label className="block font-medium mb-1">
                Do you want to provide any other information
              </label>

              <input
                type="text"
                name="other_information"
                value={formData.other_information}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    other_information: e.target.value,
                  });

                  setErrors({
                    ...errors,
                    other_information: "",
                  });
                }}
                placeholder="Your answer"
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2
    ${
      errors.other_information
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-green-500"
    }`}
              />

              {errors.other_information && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.other_information}
                </p>
              )}
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
      {submitting && <Loader />}
    </div>
  );
};

export default CapitalForm;
