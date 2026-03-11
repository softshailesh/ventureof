import React, { useState } from "react";
import axios from "axios";
import { countryCodes } from "../components/common_component/countrycodes";

const InvestForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country_code: "",
    contact_number: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers in contact number
    if (name === "contact_number") {
      const numericValue = value.replace(/\D/g, "");

      if (numericValue.length <= 10) {
        setFormData({
          ...formData,
          [name]: numericValue,
        });
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

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
      const response = await axios.post(
        "https://venturesyou.com/api/invest",
        formData,
      );

      console.log("API Response:", response.data);

      setShowSuccess(true);

      // Hide success popup after 4 sec
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        country_code: "",
        contact_number: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("API Error:", error.response);
      setShowError(true);

      // Hide error popup after 4 sec
      setTimeout(() => {
        setShowError(false);
      }, 4000);
    }
  };
  const Field = ({ children, error }) => (
    <div>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
  const Select = ({ label, name, value, children, onChange }) => (
    <div>
      <label className="text-sm font-medium">{label}</label>{" "}<span className="text-red-500">*</span>
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block font-medium mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
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

            <div className="flex items-center">
              {/* <span className="mr-2 text-gray-600">+91</span> */}

              <input
                type="tel"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                required
                maxLength="10"
                pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* City */}
          <div>
            {/* <label className="block font-medium mb-1">
              Country / Region <span className="text-red-500">*</span>
            </label> */}

            <Field error={errors.city}>
              <Select
                label=" Country / Region"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select One</option>
                {countryCodes.map((c, i) => (
                  <option key={i}>{c.label}</option>
                ))}
              </Select>
            </Field>

            {/* <Field error={errors.country_region}>
              <Select
                label="Country / Region"
                name="country_region"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">Select One</option>
                {countryCodes.map((c, i) => (
                  <option key={i}>{c.label}</option>
                ))}
              </Select>
            </Field> */}
            {console.log("formData.city:", formData.city)}
            {/* <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            /> */}
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-3">
            <button
              type="submit"
              className="bg-green-600 text-white w-full sm:w-auto px-6 py-2 rounded-lg hover:bg-[#42b87c]-700 transition"
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

// const Field = ({ children, error }) => (
//   <div>
//     {children}
//     {error && <p className="text-red-500 text-sm">{error}</p>}
//   </div>
// );

// const Select = ({ label, name, value, children, onChange }) => (
//   <div>
//     <label className="text-sm font-medium">{label}</label>
//     <select
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full border rounded-lg px-3 py-2 mt-1"
//     >
//       {children}
//     </select>
//   </div>
// );
export default InvestForm;
