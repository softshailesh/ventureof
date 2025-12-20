import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/venture_logo.svg";
import { registerUserThunk, resetAuthState } from "../store/slice/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
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

    dispatch(
      registerUserThunk({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
        password_confirmation: formData.password_confirmation, // ✅ REQUIRED
      })
    );
  };

  /* =========================
     HANDLE AUTH STATE
  ========================= */
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(resetAuthState());
      navigate("/login"); 
    }
  }, [isAuthenticated, dispatch, navigate]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  return (
    
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f7fb]">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Venture" className="h-11" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {["name", "email", "phone", "address"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-600 mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "address"}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 text-sm
                focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          ))}

          {/* Password */}
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
              className="w-full h-11 px-4 pr-12 rounded-lg border border-gray-300 text-sm
              focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
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
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="col-span-full mt-4 h-12 rounded-lg bg-indigo-600 text-white
            font-semibold hover:bg-indigo-700 transition disabled:opacity-60 cursor-pointer"
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
