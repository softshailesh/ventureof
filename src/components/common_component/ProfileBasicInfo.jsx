import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileThunk,
  resetProfileState,
} from "../../store/slice/profileSlice";
import ChangePassword from "./ChangePassword";

const ProfileBasicInfo = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.profile
  );

  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    bio: "",
    profile_image: null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        bio: "",
        profile_image: null,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    dispatch(updateProfileThunk(formData));
  };

  useEffect(() => {
    if (success) {
      alert("Profile updated successfully");
      dispatch(resetProfileState());
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  return (
    <>
        <div className="">
      <div className="mx-auto bg-white p-6 rounded-xl border">

        <h3 className="text-lg font-semibold mb-6">Basic Details</h3>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <label className="relative cursor-pointer">
            <img
              src={user?.profile_image_url}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
            <input
              type="file"
              name="profile_image"
              hidden
              onChange={handleChange}
            />
            <span className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow border">
              <Pencil size={14} />
            </span>
          </label>
        </div>

        <div className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full h-10 px-3 border rounded-md"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full h-10 px-3 border rounded-md"
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Location"
            className="w-full h-10 px-3 border rounded-md"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
         
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
    </>

  );
};

export default ProfileBasicInfo;
