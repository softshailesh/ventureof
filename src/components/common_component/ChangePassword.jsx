import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff } from "lucide-react";
import {
  changePasswordThunk,
  resetChangePasswordState,
} from "../../store/slice/changePasswordSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.changePassword
  );

  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  // 👁 show / hide states
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.current_password ||
      !formData.new_password ||
      !formData.new_password_confirmation
    ) {
      alert("All fields are required");
      return;
    }

    if (formData.new_password !== formData.new_password_confirmation) {
      alert("New password and confirm password do not match");
      return;
    }

    dispatch(changePasswordThunk(formData));
  };

  useEffect(() => {
    if (success) {
      alert("Password changed successfully");
      setFormData({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
      dispatch(resetChangePasswordState());
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  /* =========================
     PASSWORD INPUT COMPONENT
  ========================= */
  const PasswordInput = ({
    name,
    placeholder,
    value,
    showKey,
  }) => (
    <div className="relative">
      <input
        type={show[showKey] ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full h-10 px-3 pr-10 border rounded-md"
      />
      <button
        type="button"
        onClick={() =>
          setShow({ ...show, [showKey]: !show[showKey] })
        }
        className="absolute right-3 top-2.5 text-gray-500"
      >
        {show[showKey] ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto bg-white border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-6">
          Change Password
        </h3>

        <div className="space-y-4">
          <PasswordInput
            name="current_password"
            placeholder="Current Password"
            value={formData.current_password}
            showKey="current"
          />

          <PasswordInput
            name="new_password"
            placeholder="New Password"
            value={formData.new_password}
            showKey="new"
          />

          <PasswordInput
            name="new_password_confirmation"
            placeholder="Confirm New Password"
            value={formData.new_password_confirmation}
            showKey="confirm"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
        

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
