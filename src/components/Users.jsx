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
  const [loading, setLoading] = useState(true);

  /* VIEW MODAL */
  const [openView, setOpenView] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  /* DELETE */
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  /* ================= FETCH USERS ================= */
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(
        `https://venturesyou.com/api/admin/users?page=${page}`
      );

      setUsers(res.data.users.data);
      setPagination(res.data.users);
    } catch (error) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

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

  const perPage = pagination.per_page || 15;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="p-3 border w-14">S.No</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Documents</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* SKELETON */}
            {loading &&
              [...Array(5)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {[...Array(7)].map((_, j) => (
                    <td key={j} className="p-3 border">
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </td>
                  ))}
                </tr>
              ))}

            {/* EMPTY */}
            {!loading && users.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}

            {/* DATA */}
            {!loading &&
              users.map((user, index) => (
                <tr key={user.id} className="text-sm hover:bg-gray-50">
                  {/* S.NO */}
                  <td className="p-3 border">
                    {(page - 1) * perPage + index + 1}
                  </td>

                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.phone}</td>

                  {/* DOCUMENT COUNT */}
                  <td className="p-3 border text-center">
                    {user.documents_count ?? 0}
                  </td>

                  {/* STATUS */}
                  <td className="p-3 border">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        user.is_active
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  {/* ACTION */}
                  <td className="p-3 border text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleView(user.id)}
                        className="text-blue-600"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => setDeleteId(user.id)}
                        className="text-red-600"
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

      {/* PAGINATION */}
      {pagination.last_page > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            disabled={!pagination.prev_page_url}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-sm text-gray-600">
            Page {pagination.current_page} of {pagination.last_page}
          </span>

          <button
            disabled={!pagination.next_page_url}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* VIEW USER MODAL */}
      <Dialog open={openView} onClose={() => setOpenView(false)}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <div className="space-y-2 text-sm">
              <p><b>Name:</b> {selectedUser.name}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Phone:</b> {selectedUser.phone}</p>
              <p><b>Address:</b> {selectedUser.address}</p>
              <p><b>Documents:</b> {selectedUser.documents_count ?? 0}</p>
              <p><b>Last Login:</b> {selectedUser.last_login_at}</p>
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
        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>
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
