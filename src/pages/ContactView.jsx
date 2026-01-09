import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getContactByIdThunk } from "../store/slice/contactSlice";

const ContactView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { selectedContact, loading } = useSelector(
    (state) => state.contact
  );

  useEffect(() => {
    dispatch(getContactByIdThunk(id));
  }, [id, dispatch]);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading contact...</div>;
  }

  if (!selectedContact) {
    return <div className="p-6 text-gray-500">No contact found.</div>;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-7xl mx-auto">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 text-sm text-blue-600 cursor-pointer"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h2 className="text-xl font-semibold mb-6">Contact Details</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <p><b>Name:</b> {selectedContact.first_name} {selectedContact.last_name}</p>
        <p><b>Email:</b> {selectedContact.business_email}</p>
        <p><b>Mobile:</b> {selectedContact.country_code} {selectedContact.mobile}</p>
        <p><b>Company:</b> {selectedContact.company_name}</p>
        <p><b>Website:</b> {selectedContact.company_website}</p>
        <p><b>Industry:</b> {selectedContact.industry}</p>
        <p><b>Job Title:</b> {selectedContact.job_title}</p>
        <p><b>Company Size:</b> {selectedContact.company_size}</p>
        <p><b>Country:</b> {selectedContact.country_region}</p>
        <p><b>Objective:</b> {selectedContact.key_objective}</p>
      </div>

      <div className="mt-4 text-sm">
        <p><b>Message:</b></p>
        <p className="mt-1 text-gray-700">{selectedContact.message}</p>
      </div>
    </div>
  );
};

export default ContactView;
