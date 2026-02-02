import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { viewContactThunk } from "../store/slice/contactSlice";

const ContactView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { selectedContact, viewLoading } = useSelector(
    (state) => state.contact
  );

  useEffect(() => {
    dispatch(viewContactThunk(id)); // ✅ correct thunk
  }, [id, dispatch]);

  const contact = selectedContact?.contact;

  if (viewLoading) {
    return <div className="p-6 text-gray-500">Loading contact...</div>;
  }

  if (!contact) {
    return <div className="p-6 text-gray-500">No contact found.</div>;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-7xl mx-auto">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 text-sm text-blue-600"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h2 className="text-xl font-semibold mb-6">Contact Details</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <p><b>Name:</b> {contact.first_name} {contact.last_name}</p>
        <p><b>Email:</b> {contact.business_email}</p>
        <p><b>Mobile:</b> {contact.country_code} {contact.mobile}</p>
        <p><b>Company:</b> {contact.company_name}</p>
        <p><b>Website:</b> {contact.company_website}</p>
        <p><b>Industry:</b> {contact.industry}</p>
        <p><b>Job Title:</b> {contact.job_title}</p>
        <p><b>Company Size:</b> {contact.company_size}</p>
        <p><b>Country:</b> {contact.country_region}</p>
        <p><b>Objective:</b> {contact.key_objective}</p>
      </div>

      <div className="mt-4 text-sm">
        <p><b>Message:</b></p>
        <p className="mt-1 text-gray-700">{contact.message}</p>
      </div>
    </div>
  );
};

export default ContactView;
