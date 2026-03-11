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

/* ================= SKELETON ROW ================= */
const TableSkeleton = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <tr key={i} className="animate-pulse">
        {[...Array(9)].map((_, j) => (
          <td key={j} className="p-3 border">
            <div className="h-4 bg-gray-200 rounded"></div>
          </td>
        ))}
      </tr>
    ))}
  </>
);

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
  const [search, setSearch] = useState("");

  const [openDrawer, setOpenDrawer] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getAdminContactsThunk({ page, search }));
  }, [page, search, dispatch]);

  const handleView = async (item) => {
    setOpenDrawer(true);
    await dispatch(viewContactThunk(item.id));
  };

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

  const perPage = pagination?.per_page || 10;

  return (
    <>
      <div className="bg-white rounded-xl p-6 border">
        {/* HEADER + SEARCH */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact Queries</h2>

          <input
            type="text"
            placeholder="Search by name, email, company..."
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            className="border px-3 py-2 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="p-3 border w-14">S.No</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Company</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Mobile</th>
                <th className="p-3 border">Industry</th>
                <th className="p-3 border">Objective</th>
                <th className="p-3 border">Created At</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {/* SKELETON */}
              {listLoading && <TableSkeleton />}

              {/* EMPTY */}
              {!listLoading && contacts.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-gray-500"
                  >
                    No contact queries found.
                  </td>
                </tr>
              )}

              {/* DATA */}
              {!listLoading &&
                contacts.map((item, index) => (
                  <tr
                    key={item.id}
                    className="text-sm hover:bg-gray-50"
                  >
                    <td className="p-3 border">
                      {(page - 1) * perPage + index + 1}
                    </td>
                    <td className="p-3 border">
                      {item.first_name} {item.last_name}
                    </td>
                    <td className="p-3 border">
                      {item.company_name || "-"}
                    </td>
                    <td className="p-3 border">
                      {item.business_email}
                    </td>
                    <td className="p-3 border">
                      {item.country_code} {item.mobile}
                    </td>
                    <td className="p-3 border">{item.industry}</td>
                    <td className="p-3 border">{item.key_objective}</td>
                    <td className="p-3 border">
                      {new Date(item.created_at).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="p-3 border text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleView(item)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteClick(item.id)
                          }
                          className="text-red-600 hover:text-red-800"
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
              Page {pagination.current_page} of{" "}
              {pagination.last_page}
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

      {/* VIEW DRAWER */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="w-[300px] p-6">
          <h3 className="text-lg font-semibold mb-4">
            Contact Details
          </h3>

          {viewLoading ? (
            <div className="space-y-3 animate-pulse">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-200 rounded"
                ></div>
              ))}
            </div>
          ) : (
            contact && (
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
            )
          )}
        </div>
      </Drawer>

      {/* DELETE DIALOG */}
      <Dialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
      >
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this contact?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>
            Cancel
          </Button>
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
