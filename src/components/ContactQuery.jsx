import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAdminContactsThunk } from "../store/slice/contactSlice";

const ContactQuery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { contacts, pagination, loading } = useSelector(
    (state) => state.contact
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAdminContactsThunk(page));
  }, [page, dispatch]);

  const handleView = (id) => {
    navigate(`/admin/contacts/${id}`);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Contact Queries</h2>

      {/* LOADER */}
      {loading && (
        <div className="text-center py-6 text-gray-500">Loading...</div>
      )}

      {/* EMPTY */}
      {!loading && contacts.length === 0 && (
        <p className="text-gray-500">No contact queries found.</p>
      )}

      {/* TABLE */}
      {!loading && contacts.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-sm">
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
                  <tr key={item.id} className="hover:bg-gray-50 text-sm">
                    <td className="p-3 border">
                      {item.first_name} {item.last_name}
                    </td>
                    <td className="p-3 border">{item.company_name}</td>
                    <td className="p-3 border">{item.business_email}</td>
                    <td className="p-3 border">
                      {item.country_code} {item.mobile}
                    </td>
                    <td className="p-3 border">{item.industry}</td>
                    <td className="p-3 border">{item.key_objective}</td>
                    <td className="p-3 border text-center">
                      <button
                        onClick={() => handleView(item.id)}
                        className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 cursor-pointer"
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          {pagination?.last_page > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">

              {/* LEFT: SHOWING TEXT */}
              <div className="text-sm text-gray-600">
                Showing{" "}
                <b>
                  {(pagination.current_page - 1) * pagination.per_page + 1}
                </b>{" "}
                to{" "}
                <b>
                  {Math.min(
                    pagination.current_page * pagination.per_page,
                    pagination.total
                  )}
                </b>{" "}
                of <b>{pagination.total}</b> entries
              </div>

              {/* RIGHT: PAGINATION BUTTONS */}
              <div className="flex items-center gap-1">

                {/* PREVIOUS */}
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={pagination.current_page === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Previous
                </button>

                {/* PAGE 1 */}
                <button
                  onClick={() => setPage(1)}
                  className={`px-3 py-1 rounded border ${pagination.current_page === 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white"
                    }`}
                >
                  1
                </button>

                {/* LEFT DOTS */}
                {pagination.current_page > 4 && (
                  <span className="px-2 text-gray-500">…</span>
                )}

                {/* MIDDLE PAGES */}
                {Array.from({ length: 3 }).map((_, i) => {
                  const pageNum = pagination.current_page - 1 + i;

                  if (pageNum <= 1 || pageNum >= pagination.last_page) return null;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-3 py-1 rounded border ${pagination.current_page === pageNum
                          ? "bg-indigo-600 text-white"
                          : "bg-white"
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* RIGHT DOTS */}
                {pagination.current_page < pagination.last_page - 3 && (
                  <span className="px-2 text-gray-500">…</span>
                )}

                {/* LAST PAGE */}
                {pagination.last_page > 1 && (
                  <button
                    onClick={() => setPage(pagination.last_page)}
                    className={`px-3 py-1 rounded border ${pagination.current_page === pagination.last_page
                        ? "bg-indigo-600 text-white"
                        : "bg-white"
                      }`}
                  >
                    {pagination.last_page}
                  </button>
                )}

                {/* NEXT */}
                <button
                  onClick={() =>
                    setPage((p) => Math.min(p + 1, pagination.last_page))
                  }
                  disabled={pagination.current_page === pagination.last_page}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </>
      )}
    </div>
  );
};

export default ContactQuery;
