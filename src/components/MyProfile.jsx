import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { toast } from "react-toastify";

const BASE_STORAGE_URL = "https://venturesyou.com/storage";

/* ================= IMAGE PATH HELPER ================= */
const getProfileImageUrl = (path) => {
  if (!path) return "";
  const cleanPath = path.replace(/\\/g, "");
  return `${BASE_STORAGE_URL}/${cleanPath}`;
};

const MyProfile = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState("");

  /* ================= GET PROFILE ================= */
  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(
        "https://venturesyou.com/api/admin/profile"
      );

      const admin = res.data?.admin;

      setForm({
        name: admin?.name ?? "",
        email: admin?.email ?? "",
        phone: admin?.phone ?? "",
        address: admin?.address ?? "",
      });

      setPreview(getProfileImageUrl(admin?.profile_image));
    } catch (error) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (preview?.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ================= UPDATE PROFILE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );

      if (profileImage) {
        formData.append("profile_image", profileImage);
      }

      await axiosInstance.post(
        "https://venturesyou.com/api/admin/profile/update",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Profile updated successfully");
      setProfileImage(null);
      fetchProfile();
    } catch (error) {
      toast.error("Profile update failed");
    } finally {
      setSaving(false);
    }
  };

  /* ================= LOADING UI ================= */
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow animate-pulse">
        <div className="h-6 w-40 bg-gray-200 mb-6 rounded"></div>
        <div className="grid grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  /* ================= MAIN UI ================= */
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-6">My Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
       

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* ADDRESS */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 cursor-pointer"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
