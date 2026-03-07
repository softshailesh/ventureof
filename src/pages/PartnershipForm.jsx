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
  const [errors, setErrors] = useState({});
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false); // track if form submitted

  useEffect(() => {
    if (success) {
      setFormData(initialFormState);
      setErrors({});
      setIsRobotChecked(false);
      setSubmitted(false);

      setTimeout(() => {
        dispatch(resetContactState());
      }, 2000);
    }
  }, [success, dispatch]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      if (value.length > 10 || /\D/.test(value)) return; 
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.company_name.trim()) newErrors.company_name = "Company name is required";
    if (!formData.company_website.trim()) newErrors.company_website = "Website is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    if (!formData.job_title) newErrors.job_title = "Job title is required";
    if (!formData.company_size) newErrors.company_size = "Company size is required";

    if (!formData.business_email.trim()) {
      newErrors.business_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.business_email)) {
      newErrors.business_email = "Enter valid email";
    }

    if (!formData.country_code) newErrors.country_code = "Country code is required";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.country_region) newErrors.country_region = "Country / Region is required";
    if (!formData.key_objective) newErrors.key_objective = "Key objective is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!isRobotChecked) newErrors.robot = "Please confirm you are not a robot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!validateForm()) return;
    dispatch(submitContactThunk(formData));
  };

  return (
    <div className="container w-full bg-white px-4 md:px-10 py-10">
      {submitted && Object.keys(errors).length > 0 && (
        <p className="text-red-600 text-center mb-4">Please fix the errors before submitting.</p>
      )}
      {success && <p className="text-green-600 text-center mb-4">Form submitted successfully!</p>}

      <form className="mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field error={errors.first_name}>
            <Input label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
          </Field>

          <Field error={errors.last_name}>
            <Input label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} />
          </Field>

          <Field error={errors.company_name}>
            <Input label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} />
          </Field>

          <Field error={errors.company_website}>
            <Input
              label="Website"
              name="company_website"
              placeholder="https://"
              value={formData.company_website}
              onChange={handleChange}
            />
          </Field>

          <Field error={errors.industry}>
            <Select label="Industry" name="industry" value={formData.industry} onChange={handleChange}>
              <option value="">Select One</option>
              <option>IT Sector</option>
              <option>Education</option>
              <option>Other</option>
            </Select>
          </Field>

          <Field error={errors.job_title}>
            <Select label="Role / Job Title" name="job_title" value={formData.job_title} onChange={handleChange}>
              <option value="">Select One</option>
              <option>CEO</option>
              <option>Manager</option>
              <option>Other</option>
            </Select>
          </Field>

          <Field error={errors.company_size}>
            <Select label="Company Size" name="company_size" value={formData.company_size} onChange={handleChange}>
              <option value="">Select One</option>
              <option>0-10</option>
              <option>10-25</option>
              <option>25+</option>
            </Select>
          </Field>

          <Field error={errors.business_email}>
            <Input label="Business Email" name="business_email" type="email" value={formData.business_email} onChange={handleChange} />
          </Field>

          <Field error={errors.country_code}>
            <Select label="Country Code" name="country_code" value={formData.country_code} onChange={handleChange}>
              <option value="">Select One</option>
              {countryCodes.map((c, i) => (
                <option key={i} value={c.value}>
                  {c.label} ({c.value})
                </option>
              ))}
            </Select>
          </Field>

          <Field error={errors.mobile}>
            <Input label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
          </Field>

          <Field error={errors.country_region}>
            <Select label="Country / Region" name="country_region" value={formData.country_region} onChange={handleChange}>
              <option value="">Select One</option>
              {countryCodes.map((c, i) => (
                <option key={i}>{c.label}</option>
              ))}
            </Select>
          </Field>

          <Field error={errors.key_objective}>
            <Select label="Key Objective" name="key_objective" value={formData.key_objective} onChange={handleChange}>
              <option value="">Select One</option>
              <option>Funding</option>
              <option>Partnership</option>
            </Select>
          </Field>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <div className="mt-6">
          <div className="border rounded-lg p-4 w-60 flex items-center gap-3">
            <input
              type="checkbox"
              checked={isRobotChecked}
              onChange={(e) => {
                setIsRobotChecked(e.target.checked);
                setErrors((prev) => {
                  const newErrors = { ...prev };
                  delete newErrors.robot;
                  return newErrors;
                });
              }}
            />
            <span className="text-sm">I'm not a robot</span>
          </div>
          {errors.robot && <p className="text-red-500 text-sm mt-1">{errors.robot}</p>}
        </div>

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


const Field = ({ children, error }) => (
  <div>
    {children}
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

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
