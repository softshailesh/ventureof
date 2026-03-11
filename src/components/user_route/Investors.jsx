import React, { useEffect, useState } from "react";
import axios from "axios";

const Investors = () => {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const token = localStorage.getItem("tokenId");

  const fetchInvestors = async (pageNumber = 1) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://venturesyou.com/api/admin/investors?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      setInvestors(res.data.contacts.data || []);
      setPage(res.data.contacts.current_page);
      setLastPage(res.data.contacts.last_page);

    } catch (error) {
      console.log("API Error:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const viewInvestor = (item) => {
    setSelectedInvestor(item);
    setShowModal(true);
  };

  useEffect(() => {
    fetchInvestors(page);
  }, [page]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 md:p-6">

      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Investors List
      </h2>

      {/* TABLE */}

      <div className="overflow-x-auto bg-white rounded-lg shadow">

        <table className="min-w-[900px] w-full border border-gray-200">

          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3 border">S.No</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">City</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>

            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="animate-pulse">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <td key={i} className="p-3 border">
                        <div className="h-4 bg-gray-300 rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))
              : investors.map((item, index) => (
                  <tr key={item.id} className="text-sm">

                    <td className="p-3 border">
                      {(page - 1) * 15 + index + 1}
                    </td>

                    <td className="p-3 border font-medium">
                      {item.first_name} {item.last_name}
                    </td>

                    <td className="p-3 border break-all">
                      {item.email}
                    </td>

                    <td className="p-3 border">
                      {item.country_code} {item.contact_number}
                    </td>

                    <td className="p-3 border">{item.city}</td>

                    <td className="p-3 border max-w-[200px] break-words">
                      {item.message}
                    </td>

                    <td className="p-3 border">
                      {formatDate(item.created_at)}
                    </td>

                    <td className="p-3 border">

                      <button
                        onClick={() => viewInvestor(item)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        View
                      </button>

                    </td>

                  </tr>
                ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      <div className="flex flex-wrap justify-end gap-2 mt-6">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded text-sm disabled:opacity-40"
        >
          Prev
        </button>

        {Array.from({ length: lastPage }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded text-sm ${
              page === i + 1
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === lastPage}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded text-sm disabled:opacity-40"
        >
          Next
        </button>

      </div>

      {/* MODAL */}

      {showModal && selectedInvestor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">

          <div className="bg-white p-6 rounded-lg w-full max-w-md">

            <h3 className="text-lg font-semibold mb-3">
              Investor Details
            </h3>

            <div className="space-y-2 text-sm">

              <p>
                <strong>Name:</strong>{" "}
                {selectedInvestor.first_name} {selectedInvestor.last_name}
              </p>

              <p>
                <strong>Email:</strong> {selectedInvestor.email}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {selectedInvestor.country_code} {selectedInvestor.contact_number}
              </p>

              <p>
                <strong>City:</strong> {selectedInvestor.city}
              </p>

              <p>
                <strong>Message:</strong> {selectedInvestor.message}
              </p>

              <p>
                <strong>Created:</strong>{" "}
                {formatDate(selectedInvestor.created_at)}
              </p>

            </div>

            <div className="mt-6 text-right">

              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Investors;