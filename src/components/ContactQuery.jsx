import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Eye, Trash2 } from "lucide-react";
import {
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  getAdminContactsThunk,
  viewContactThunk,
  deleteContactThunk,
} from "../store/slice/contactSlice";

const ContactQuery = () => {
  const dispatch = useDispatch();
  const {
    contacts,
    pagination,
    listLoading,
    viewLoading,
    deleteLoading,
    selectedContact,
  } = useSelector((state) => state.contact);

  const [page, setPage] = useState(1);

  /* VIEW DRAWER */
  const [openDrawer, setOpenDrawer] = useState(false);

  /* DELETE DIALOG */
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getAdminContactsThunk(page));
  }, [page, dispatch]);

  /* ================= VIEW ================= */
  const handleView = async (item) => {
    setOpenDrawer(true); // drawer pehle open
    await dispatch(viewContactThunk(item.id)); // API call
  };

  /* ================= DELETE ================= */
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    await dispatch(deleteContactThunk(deleteId));
    setDeleteDialog(false);
    setDeleteId(null);
  };

  const contact = selectedContact?.contact;

  return (
    <>
      <div className="bg-white rounded-xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">Contact Queries</h2>

        {/* LIST LOADER */}
        {listLoading && (
          <div className="text-center py-6 text-gray-500">
            Loading contacts...
          </div>
        )}

        {/* EMPTY */}
        {!listLoading && contacts.length === 0 && (
          <p className="text-gray-500">No contact queries found.</p>
        )}

        {/* TABLE */}
        {!listLoading && contacts.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Company</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Mobile</th>
                  <th className="p-3 border">Industry</th>
                  <th className="p-3 border">Objective</th>
                  <th className="p-3 border text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item) => (
                  <tr key={item.id} className="text-sm hover:bg-gray-50">
                    <td className="p-3 border">
                      {item.first_name} {item.last_name}
                    </td>
                    <td className="p-3 border">{item.company_name || "-"}</td>
                    <td className="p-3 border">{item.business_email}</td>
                    <td className="p-3 border">
                      {item.country_code} {item.mobile}
                    </td>
                    <td className="p-3 border">{item.industry}</td>
                    <td className="p-3 border">{item.key_objective}</td>

                    <td className="p-3 border text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleView(item)}
                          className="text-blue-600 hover:text-blue-800 cursor-pointer "
                          title="View"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          onClick={() => handleDeleteClick(item.id)}
                          className="text-red-600 hover:text-red-800 cursor-pointer "
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PAGINATION */}
        {pagination?.last_page > 1 && (
          <div className="flex justify-between items-center mt-6">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-sm text-gray-600">
              Page {pagination.current_page} of {pagination.last_page}
            </span>

            <button
              disabled={page === pagination.last_page}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* ================= VIEW DRAWER ================= */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className="w-[290px] p-6">
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>

          {viewLoading && (
            <div className="text-center py-6 text-gray-500">
              Loading contact details...
            </div>
          )}

          {!viewLoading && contact && (
            <div className="space-y-2 text-sm">
              <p><b>Name:</b> {contact.first_name} {contact.last_name}</p>
              <p><b>Email:</b> {contact.business_email}</p>
              <p><b>Mobile:</b> {contact.country_code} {contact.mobile}</p>
              <p><b>Company:</b> {contact.company_name}</p>
              <p><b>Website:</b> {contact.company_website}</p>
              <p><b>Job Title:</b> {contact.job_title}</p>
              <p><b>Company Size:</b> {contact.company_size}</p>
              <p><b>Industry:</b> {contact.industry}</p>
              <p><b>Country:</b> {contact.country_region}</p>
              <p><b>Objective:</b> {contact.key_objective}</p>
              <p><b>Message:</b> {contact.message}</p>
            </div>
          )}
        </div>
      </Drawer>

      {/* ================= DELETE CONFIRMATION ================= */}
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this contact?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
          <Button
            color="error"
            onClick={handleDeleteConfirm}
            disabled={deleteLoading}
          >
            {deleteLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactQuery;
