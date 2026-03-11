import React, { useEffect, useState } from "react";
import axios from "axios";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import CloseIcon from "@mui/icons-material/Close";

const RaiseCapital = () => {

  const [raiseCapital, setRaiseCapital] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedData, setSelectedData] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const token = localStorage.getItem("tokenId");

  // LIST API
  const fetchRaiseCapital = async (pageNumber = 1) => {

    try {

      setLoading(true);

      const res = await axios.get(
        `https://venturesyou.com/api/admin/raiseCapitals?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      setRaiseCapital(res.data.contacts.data || []);
      setPage(res.data.contacts.current_page);
      setLastPage(res.data.contacts.last_page);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // VIEW API
  const viewRaiseCapital = async (id) => {

    try {

      setViewLoading(true);
      setDrawerOpen(true);

      const res = await axios.get(
        `https://venturesyou.com/api/admin/raiseCapitals/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      setSelectedData(res.data.contact || res.data.data);

    } catch (error) {

      console.log(error);

    } finally {

      setViewLoading(false);

    }

  };

  useEffect(() => {

    fetchRaiseCapital(page);

  }, [page]);

  const formatDate = (date) => {

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  };

  const Field = ({ label, value }) => {

    if (!value) return null;

    return (
      <p className="mb-2">
        <strong>{label}:</strong> {value}
      </p>
    );

  };

  return (
    <div className="p-4 md:p-6">

      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Raise Capital List
      </h2>

      {/* TABLE */}

      <div className="overflow-x-auto bg-white rounded-lg shadow">

        <table className="min-w-[900px] w-full border border-gray-200">

          <thead className="bg-gray-100 text-sm">

            <tr>

              <th className="p-3 border">S.No</th>
              <th className="p-3 border">Startup</th>
              <th className="p-3 border">Sector</th>
              <th className="p-3 border">Stage</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Fundraising</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Action</th>

            </tr>

          </thead>

          <tbody>

            {loading
              ? Array.from({ length: 6 }).map((_, index) => (

                  <tr key={index}>

                    {Array.from({ length: 9 }).map((_, i) => (

                      <td key={i} className="p-3 border">

                        <Skeleton height={25} />

                      </td>

                    ))}

                  </tr>

                ))
              : raiseCapital.map((item, index) => (

                  <tr key={item.id} className="text-sm">

                    <td className="p-3 border">
                      {(page - 1) * 15 + index + 1}
                    </td>

                    <td className="p-3 border font-medium">
                      {item.startup_name}
                    </td>

                    <td className="p-3 border">
                      {item.sector}
                    </td>

                    <td className="p-3 border">

                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">

                        {item.startup_stage}

                      </span>

                    </td>

                    <td className="p-3 border">
                      {item.email}
                    </td>

                    <td className="p-3 border">
                      {item.country_code} {item.contact_number}
                    </td>

                    <td className="p-3 border font-medium">
                      ₹{item.fundraising_amount}
                    </td>

                    <td className="p-3 border">
                      {formatDate(item.created_at)}
                    </td>

                    <td className="p-3 border">

                      <button
                        onClick={() => viewRaiseCapital(item.id)}
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

      <div className="flex justify-end gap-2 mt-6">

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
              page === i + 1 ? "bg-blue-500 text-white" : ""
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

      {/* DRAWER */}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >

        <Box sx={{ width: 420, p: 3 }}>

          <div className="flex justify-between items-center mb-4">

            <h3 className="text-lg font-semibold">
              Startup Details
            </h3>

            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>

          </div>

          {viewLoading ? (

            <div className="space-y-3">

              {Array.from({ length: 10 }).map((_, i) => (

                <Skeleton key={i} height={25} />

              ))}

            </div>

          ) : (

            <div className="text-sm">

              <Field label="Startup" value={selectedData?.startup_name} />
              <Field label="Website" value={selectedData?.website} />
              <Field label="Sector" value={selectedData?.sector} />
              <Field label="Stage" value={selectedData?.startup_stage} />
              <Field label="HQ Location" value={selectedData?.hq_location} />
              <Field label="Email" value={selectedData?.email} />
              <Field label="Phone" value={`${selectedData?.country_code || ""} ${selectedData?.contact_number || ""}`} />
              <Field label="Connection With Company" value={selectedData?.connection_with_company} />
              <Field label="Founded Year" value={selectedData?.company_founded_year} />
              <Field label="Employees" value={selectedData?.company_employees} />
              <Field label="Fundraising" value={`₹${selectedData?.fundraising_amount}`} />
              <Field label="Monthly Run Rate" value={`₹${selectedData?.monthly_run_rate}`} />
              <Field label="Raised Funds" value={selectedData?.raised_funds} />
              <Field label="Funding Details" value={selectedData?.funding_details} />
              <Field label="Description" value={selectedData?.description} />
              <Field label="Startup Solution" value={selectedData?.startup_solution} />
              <Field label="Problem Solving" value={selectedData?.problem_startup_solving} />
              <Field label="Unique Solution" value={selectedData?.solution_different_from_others} />
              <Field label="Primary Consumers" value={selectedData?.primary_consumers} />
              <Field label="Other Information" value={selectedData?.other_information} />

            </div>

          )}

        </Box>

      </Drawer>

    </div>
  );
};

export default RaiseCapital;