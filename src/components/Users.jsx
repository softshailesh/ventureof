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

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [perPage] = useState(15);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  /* STATUS LOADER (PER USER) */
  const [statusLoadingId, setStatusLoadingId] = useState(null);

  /* VIEW MODAL */
  const [openView, setOpenView] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  /* DELETE */
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  /* ================= FETCH ACTIVE USERS ================= */
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(
        "https://venturesyou.com/api/admin/users/active",
        {
          params: {
            page,
            per_page: perPage,
            ...(search && { search }),
          },
        }
      );

      setUsers(res.data.active_users.data || []);
      setPagination(res.data.active_users || {});
    } catch {
      toast.error("Failed to load active users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  /* ================= VIEW USER ================= */
  const handleView = async (id) => {
    try {
      const res = await axiosInstance.get(
        `https://venturesyou.com/api/admin/users/${id}`
      );
      setSelectedUser(res.data.user);
      setOpenView(true);
    } catch {
      toast.error("Failed to load user details");
    }
  };

  /* ================= DELETE USER ================= */
  const handleDeleteConfirm = async () => {
    try {
      setDeleting(true);
      await axiosInstance.delete(
        `https://venturesyou.com/api/admin/users/${deleteId}`
      );
      toast.success("User deleted successfully");
      setDeleteId(null);
      fetchUsers();
    } catch {
      toast.error("Failed to delete user");
    } finally {
      setDeleting(false);
    }
  };

  /* ================= UPDATE USER STATUS ================= */
  const handleStatusToggle = async (user) => {
    try {
      setStatusLoadingId(user.id);

      const res = await axiosInstance.put(
        `https://venturesyou.com/api/admin/users/${user.id}/status`,
        { is_active: false }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Status updated");

        // remove from active list
        setUsers((prev) => prev.filter((u) => u.id !== user.id));
      }
    } catch {
      toast.error("Failed to update status");
    } finally {
      setStatusLoadingId(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Active Users</h2>

        {/* SEARCH */}
        <div className="mb-4">
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
            {loading && (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            )}

            {!loading && users.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No active users found
                </td>
              </tr>
            )}

            {!loading &&
              users.map((user, index) => (
                <tr key={user.id} className="text-sm hover:bg-gray-50">
                  <td className="p-3 border">
                    {(pagination.from || 1) + index}
                  </td>

                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.phone}</td>

                  <td className="p-3 border text-center">
                    {user.documents_count ?? 0}
                  </td>

                  {/* STATUS */}
                  <td className="p-3 border text-center">
                    <button
                      disabled={statusLoadingId === user.id}
                      onClick={() => handleStatusToggle(user)}
                      className={`px-3 py-1 rounded text-xs font-medium ${statusLoadingId === user.id
                          ? "opacity-60 cursor-not-allowed"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                        }`}
                    >
                      {statusLoadingId === user.id ? "Updating..." : "Active"}
                    </button>
                  </td>

                  {/* ACTION */}
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

      {/* PAGINATION */}
      {pagination.last_page > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            disabled={!pagination.prev_page_url}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-sm">
            Page {pagination.current_page} of {pagination.last_page}
          </span>

          <button
            disabled={!pagination.next_page_url}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* VIEW MODAL */}
      <Dialog open={openView} onClose={() => setOpenView(false)}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <div className="space-y-2 text-sm">
              <p><b>Name:</b> {selectedUser.name}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Phone:</b> {selectedUser.phone}</p>
              <p><b>Address:</b> {selectedUser.address}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenView(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* DELETE CONFIRM */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button
            color="error"
            onClick={handleDeleteConfirm}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
