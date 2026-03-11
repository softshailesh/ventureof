import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/venture-logo.jpg";
import {
  registerUserThunk,
  resetAuthState,
} from "../store/slice/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, fieldErrors, success } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    dispatch(registerUserThunk(formData));
  };

  /* =========================
     REDIRECT AFTER SUCCESS
  ========================= */
  useEffect(() => {
    if (success) {
      dispatch(resetAuthState());
      navigate("/login");
    }
  }, [success, dispatch, navigate]);

  return (
    <div className=" w-full flex items-center justify-center  mb-9 mt-5">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Venture" className="h-11" />
        </div>

        {/* GLOBAL ERROR */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 text-red-700 px-4 py-2 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-11 px-4 rounded-lg border border-gray-300 text-sm
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full h-11 px-4 rounded-lg border text-sm outline-none
                ${
                  fieldErrors?.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }
              `}
            />
            {fieldErrors?.email && (
              <p className="mt-1 text-xs text-red-600">
                {fieldErrors.email[0]}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full h-11 px-4 rounded-lg border border-gray-300 text-sm
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full h-11 px-4 rounded-lg border border-gray-300 text-sm
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full h-11 px-4 pr-12 rounded-lg border text-sm outline-none
                ${
                  fieldErrors?.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }
              `}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {fieldErrors?.password && (
              <p className="mt-1 text-xs text-red-600">
                {fieldErrors.password[0]}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
              className="w-full h-11 px-4 pr-12 rounded-lg border border-gray-300 text-sm
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-9 text-gray-400"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="col-span-full mt-4 h-12 rounded-lg bg-indigo-600 text-white
            font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
