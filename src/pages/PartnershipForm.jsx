import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryCodes } from "../components/common_component/countrycodes";
import { resetContactState, submitContactThunk } from "../store/slice/contactSlice";

const initialFormState = {
  first_name: "",
  last_name: "",
  company_name: "",
  company_website: "",
  industry: "",
  job_title: "",
  company_size: "",
  business_email: "",
  country_code: "",
  mobile: "",
  country_region: "",
  key_objective: "",
  message: "",
};

const PartnershipForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState(initialFormState);

  /* =========================
     RESET FORM ON SUCCESS
  ========================= */
  useEffect(() => {
    if (success) {
      setFormData(initialFormState);

      // success ko false karo (important)
      setTimeout(() => {
        dispatch(resetContactState());
      }, 2000);
    }
  }, [success, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactThunk(formData));
  };

  return (
    <div className="w-full bg-white px-4 md:px-10 py-10">
      <form className="max-w-7xl mx-auto" onSubmit={handleSubmit}>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
          <Input label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} />
          <Input label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} />
          <Input label="Website" name="company_website" placeholder="https://" value={formData.company_website} onChange={handleChange} />

          {/* Industry */}
          <Select label="Industry" name="industry" value={formData.industry} onChange={handleChange}>
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
          </Select>

          {/* Job Title */}
          <Select label="Role / Job Title" name="job_title" value={formData.job_title} onChange={handleChange}>
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
          </Select>

          {/* Company Size */}
          <Select label="Company Size" name="company_size" value={formData.company_size} onChange={handleChange}>
            <option>Select One</option>
            <option>0-10</option>
            <option>10-25</option>
            <option>25-50</option>
            <option>50-100</option>
            <option>100-250</option>
            <option>250-500</option>
            <option>500-1000</option>
            <option>1000+</option>
          </Select>

          <Input label="Business Email" name="business_email" type="email" value={formData.business_email} onChange={handleChange} />

          {/* Country Code */}
          <Select label="Country Code" name="country_code" value={formData.country_code} onChange={handleChange}>
            <option value="">Select One</option>
            {countryCodes.map((c, i) => (
              <option key={i} value={c.value}>
                {c.label} ({c.value})
              </option>
            ))}
          </Select>

          <Input label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />

          {/* Country / Region */}
          <Select label="Country / Region" name="country_region" value={formData.country_region} onChange={handleChange}>
            <option value="">Select One</option>
            {countryCodes.map((c, i) => (
              <option key={i}>{c.label}</option>
            ))}
          </Select>

          {/* Objective */}
          <Select
            label="Key Objective"
            name="key_objective"
            onChange={handleChange}
            value={formData.key_objective}
          >
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
          </Select>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="text-sm font-medium">Message (Optional)</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        {/* STATUS */}
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {success && <p className="text-green-600 mt-4">Form submitted successfully</p>}

        {/* Captcha Placeholder */}
        <div className="mt-6">
          <div className="border rounded-lg p-4 w-60 flex items-center gap-3">
            <input type="checkbox" />
            <span className="text-sm">I'm not a robot</span>
          </div>
        </div>

        {/* SUBMIT */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

/* =========================
   REUSABLE INPUT
========================= */
const Input = ({ label, name, value, type = "text", placeholder, onChange }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border rounded-lg px-3 py-2 mt-1"
    />
  </div>
);

/* =========================
   REUSABLE SELECT
========================= */
const Select = ({ label, name, value, children, onChange }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-3 py-2 mt-1"
    >
      {children}
    </select>
  </div>
);


export default PartnershipForm;

