import React, { useEffect, useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { axiosInstance } from "../api/axiosInstance";

/* ================= TABLE SKELETON ================= */
const TableSkeleton = ({ rows = 5 }) => (
  <>
    {Array.from({ length: rows }).map((_, i) => (
      <tr key={i} className="animate-pulse">
        {Array.from({ length: 7 }).map((_, j) => (
          <td key={j} className="p-3 border">
            <div className="h-4 bg-gray-200 rounded w-full" />
          </td>
        ))}
      </tr>
    ))}
  </>
);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [perPage] = useState(15);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  /* STATUS LOADER */
  const [statusLoadingId, setStatusLoadingId] = useState(null);

  /* VIEW MODAL */
  const [openView, setOpenView] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewLoading, setViewLoading] = useState(false);

  /* DELETE */
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  /* ================= FETCH USERS ================= */
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(
        "https://venturesyou.com/api/admin/users",
        {
          params: {
            page,
            per_page: perPage,
            search: search || undefined,
          },
        }
      );

      setUsers(res.data?.users?.data || []);
      setPagination(res.data?.users || {});
    } catch {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchUsers, 400);
    return () => clearTimeout(timer);
  }, [page, search]);

  /* ================= VIEW USER ================= */
  const handleView = async (id) => {
    try {
      setViewLoading(true);
      setOpenView(true);

      const res = await axiosInstance.get(
        `https://venturesyou.com/api/admin/users/${id}`
      );

      setSelectedUser(res.data?.user || null);
    } catch {
      toast.error("Failed to load user details");
      setOpenView(false);
    } finally {
      setViewLoading(false);
    }
  };

  /* ================= DELETE USER ================= */
  const handleDeleteConfirm = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      await axiosInstance.delete(
        `https://venturesyou.com/api/admin/users/${deleteId}`
      );

      toast.success("User deleted successfully");
      setUsers((prev) => prev.filter((u) => u.id !== deleteId));
      setDeleteId(null);
    } catch {
      toast.error("Failed to delete user");
    } finally {
      setDeleting(false);
    }
  };

  /* ================= TOGGLE STATUS ================= */
  const handleStatusToggle = async (user) => {
    try {
      setStatusLoadingId(user.id);

      const res = await axiosInstance.put(
        `https://venturesyou.com/api/admin/users/${user.id}/status`,
        { is_active: !user.is_active }
      );

      if (res.data?.success) {
        toast.success("Status updated");

        setUsers((prev) =>
          prev.map((u) =>
            u.id === user.id ? { ...u, is_active: !u.is_active } : u
          )
        );
      }
    } catch {
      toast.error("Failed to update status");
    } finally {
      setStatusLoadingId(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users</h2>

        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border px-3 py-2 rounded w-64"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="p-3 border">S.No</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Documents</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading && <TableSkeleton rows={5} />}

            {!loading && users.length === 0 && (
              <tr>
                <td colSpan="7" className="py-6 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}

            {!loading &&
              users.map((user, index) => (
                <tr key={user.id} className="text-sm hover:bg-gray-50">
                  <td className="p-3 border">
                    {(pagination.from ?? 1) + index}
                  </td>
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.phone || "-"}</td>
                  <td className="p-3 border text-center">
                    {user.documents_count ?? 0}
                  </td>

                  <td className="p-3 border text-center">
                    <button
                      disabled={statusLoadingId === user.id}
                      onClick={() => handleStatusToggle(user)}
                      className={`px-3 py-1 rounded text-xs font-medium ${
                        user.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {statusLoadingId === user.id
                        ? "Updating..."
                        : user.is_active
                        ? "Active"
                        : "Inactive"}
                    </button>
                  </td>

                  <td className="p-3 border text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleView(user.id)}
                        className="text-blue-600"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => setDeleteId(user.id)}
                        className="text-red-600"
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

      {/* ================= VIEW MODAL ================= */}
      <Dialog
        open={openView}
        onClose={() => setOpenView(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>User Details</DialogTitle>

        <DialogContent>
          {viewLoading && (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded" />
            </div>
          )}

          {!viewLoading && selectedUser && (
            <div className="space-y-2 text-sm">
        
              <p><b>Name:</b> {selectedUser.name}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Phone:</b> {selectedUser.phone || "-"}</p>
              <p><b>Role:</b> {selectedUser.role}</p>
              <p><b>Status:</b> {selectedUser.is_active ? "Active" : "Inactive"}</p>
              <p><b>Address:</b> {selectedUser.address || "N/A"}</p>

              {/* DOCUMENTS */}
              <div className="mt-4">
                <p className="font-semibold mb-2">
                  Documents ({selectedUser.documents_count ?? 0})
                </p>

                {selectedUser.documents?.length > 0 ? (
                  <ul className="space-y-2">
                    {selectedUser.documents.map((doc) => (
                      <li
                        key={doc.id}
                        className="flex justify-between items-center border rounded px-3 py-2"
                      >
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-gray-500">
                            {doc.type.toUpperCase()} • {doc.size_formatted}
                          </p>
                        </div>

                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm hover:underline"
                        >
                          View
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm">No documents uploaded</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenView(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* ================= DELETE MODAL ================= */}
      <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button
            color="error"
            disabled={deleting}
            onClick={handleDeleteConfirm}
          >
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
