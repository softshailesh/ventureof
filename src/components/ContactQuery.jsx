import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminContactsThunk } from "../store/slice/contactSlice";


const ContactQuery = () => {
  const dispatch = useDispatch();
  const { contacts, pagination, loading } = useSelector(
    (state) => state.contact
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAdminContactsThunk(page));
  }, [page, dispatch]);

  return (
    <div className="bg-white rounded-xl p-6 border">
      <h2 className="text-xl font-semibold mb-4">Contact Queries</h2>

      {/* LOADER */}
      {loading && (
        <div className="text-center py-6 text-gray-500">Loading contacts...</div>
      )}

      {/* EMPTY STATE */}
      {!loading && contacts.length === 0 && (
        <p className="text-gray-500">No contact queries found.</p>
      )}

      {/* TABLE */}
      {!loading && contacts.length > 0 && (
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
                <th className="p-3 border">Date</th>
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
                  <td className="p-3 border">
                    {new Date(item.created_at).toLocaleDateString()}
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
  );
};

export default ContactQuery;
