// import React, { useEffect, useRef, useState } from "react";
// import { Plus, FileText, Image, Trash2 } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadDocumentsThunk,
//   getDocumentsThunk,
//   deleteDocumentThunk,
//   clearDocumentError,
// } from "../../store/slice/documentSlice";

// /* =========================
//    SIZE FORMATTER (SAFE)
// ========================= */
// const formatSize = (bytes) => {
//   if (!bytes) return "";
//   if (bytes < 1024) return `${bytes} B`;
//   if (bytes < 1024 * 1024)
//     return `${(bytes / 1024).toFixed(1)} KB`;
//   return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
// };

// const User_dashboard = () => {
//   const dispatch = useDispatch();
//   const fileInputRef = useRef(null);

//   const [page, setPage] = useState(1); // 🔥 pagination state

//   const user =
//     useSelector((state) => state.auth.user) ||
//     JSON.parse(localStorage.getItem("user"));

//   const { documents, pagination, loading, error } = useSelector(
//     (state) => state.documents
//   );

//   /* =========================
//      FETCH DOCUMENTS (PAGE-WISE)
//   ========================= */
//   useEffect(() => {
//     dispatch(getDocumentsThunk(page));
//   }, [dispatch, page]);

//   /* =========================
//      CLEAR ERROR AUTO
//   ========================= */
//   useEffect(() => {
//     if (error) {
//       const timer = setTimeout(() => {
//         dispatch(clearDocumentError());
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [error, dispatch]);

//   const handleAddFilesClick = () => {
//     fileInputRef.current.click();
//   };

//   /* =========================
//      FILE UPLOAD
//   ========================= */
//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);

//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//     ];

//     const validFiles = selectedFiles.filter((file) =>
//       allowedTypes.includes(file.type)
//     );

//     if (!validFiles.length) {
//       alert("Only PDF, DOC, DOCX, JPG, JPEG, PNG files are allowed");
//       e.target.value = "";
//       return;
//     }

//     dispatch(uploadDocumentsThunk(validFiles));
//     e.target.value = "";
//   };

//   /* =========================
//      DELETE DOCUMENT
//   ========================= */
//   const handleDelete = (id) => {
//     if (!loading && window.confirm("Delete this document?")) {
//       dispatch(deleteDocumentThunk(id));
//     }
//   };

//   const getIcon = (type) =>
//     ["png", "jpg", "jpeg"].includes(type) ? (
//       <Image size={18} className="text-indigo-500" />
//     ) : (
//       <FileText size={18} className="text-gray-600" />
//     );

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-6">
//       <h1 className="text-2xl font-semibold mb-6">
//         Welcome, {user?.name || "User"}
//       </h1>

//       <div className="bg-white rounded-xl shadow border max-w-4xl">
//         {/* HEADER */}
//         <div className="flex justify-between items-center px-5 py-4 border-b">
//           <h2 className="font-semibold">Shared Files</h2>

//           <button
//             onClick={handleAddFilesClick}
//             disabled={loading}
//             className="flex items-center gap-2 text-sm text-indigo-600 disabled:opacity-50"
//           >
//             <Plus size={16} /> Add Files
//           </button>

//           <input
//             type="file"
//             multiple
//             accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </div>

//         {/* BODY */}
//         <div className="p-6">
//           {loading && (
//             <p className="text-sm text-gray-500 mb-3">
//               Loading documents...
//             </p>
//           )}

//           {!documents.length && !loading && (
//             <p className="text-gray-500 text-center">
//               No documents uploaded
//             </p>
//           )}

//           <ul className="space-y-3">
//             {documents.map((doc) => (
//               <li
//                 key={doc.id}
//                 className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50"
//               >
//                 <div className="flex items-center gap-3">
//                   {getIcon(doc.type)}
//                   <div>
//                     <p className="text-sm font-medium">{doc.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {doc.size_formatted || formatSize(doc.size)}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <a
//                     href={doc.url}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-indigo-600 text-sm"
//                   >
//                     View
//                   </a>

//                   <button
//                     onClick={() => handleDelete(doc.id)}
//                     disabled={loading}
//                     className="text-red-500 hover:text-red-700 disabled:opacity-40"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* =========================
//              PAGINATION
//           ========================= */}
//           {pagination && pagination.last_page > 1 && (
//             <div className="flex justify-center gap-2 mt-6">
//               <button
//                 disabled={page === 1}
//                 onClick={() => setPage((p) => p - 1)}
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>

//               {Array.from(
//                 { length: pagination.last_page },
//                 (_, i) => i + 1
//               ).map((p) => (
//                 <button
//                   key={p}
//                   onClick={() => setPage(p)}
//                   className={`px-3 py-1 border rounded ${
//                     page === p
//                       ? "bg-indigo-600 text-white"
//                       : ""
//                   }`}
//                 >
//                   {p}
//                 </button>
//               ))}

//               <button
//                 disabled={page === pagination.last_page}
//                 onClick={() => setPage((p) => p + 1)}
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User_dashboard;

import React, { useEffect, useRef, useState } from "react";
import { Plus, FileText, Image, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadDocumentsThunk,
  getDocumentsThunk,
  deleteDocumentThunk,
  clearDocumentError,
} from "../../store/slice/documentSlice";

/* =========================
   SIZE FORMATTER
========================= */
const formatSize = (bytes) => {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const User_dashboard = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [page, setPage] = useState(1);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));

  const { documents, pagination, loading, error } = useSelector(
    (state) => state.documents
  );

  /* =========================
     FETCH DOCUMENTS
  ========================= */
  useEffect(() => {
    dispatch(getDocumentsThunk(page));
  }, [dispatch, page]);

  /* =========================
     AUTO CLEAR ERROR
  ========================= */
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearDocumentError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  /* =========================
     FILE SELECT (APPEND MODE)
  ========================= */
  const handleFileSelect = (e) => {
    const newFiles = Array.from(e.target.files);

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    const validFiles = newFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (!validFiles.length) {
      alert("Only PDF, DOC, DOCX, JPG, JPEG, PNG allowed");
      return;
    }

    setSelectedFiles((prev) => {
      const combined = [...prev, ...validFiles];

      if (combined.length > 10) {
        alert("You can upload maximum 10 files only");
        return combined.slice(0, 10);
      }

      return combined;
    });

    // allow selecting same file again
    e.target.value = "";
  };

  /* =========================
     REMOVE SELECTED FILE
  ========================= */
  const removeSelectedFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  /* =========================
     DELETE DOCUMENT
  ========================= */
  const handleDelete = (id) => {
    if (!loading && window.confirm("Delete this document?")) {
      dispatch(deleteDocumentThunk(id));
    }
  };

  const getIcon = (type) =>
    ["png", "jpg", "jpeg"].includes(type) ? (
      <Image size={18} className="text-indigo-500" />
    ) : (
      <FileText size={18} className="text-gray-600" />
    );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6">
      <h1 className="text-2xl font-semibold mb-6">
        Welcome, {user?.name || "User"}
      </h1>

      <div className="bg-white rounded-xl shadow border max-w-4xl">
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-semibold">Shared Files</h2>

          <button
            onClick={() => setShowUploadModal(true)}
            disabled={loading}
            className="flex items-center gap-2 text-sm text-indigo-600 cursor-pointer"
          >
            <Plus size={16} /> Add Files
          </button>
        </div>

        {/* BODY */}
        <div className="p-6">
          {loading && (
            <p className="text-sm text-gray-500 mb-3">
              Loading documents...
            </p>
          )}

          {!documents.length && !loading && (
            <p className="text-gray-500 text-center">
              No documents uploaded
            </p>
          )}

          <ul className="space-y-3">
            {documents.map((doc) => (
              <li
                key={doc.id}
                className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  {getIcon(doc.type)}
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">
                      {doc.size_formatted || formatSize(doc.size)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 text-sm"
                  >
                    View
                  </a>

                  <button
                    onClick={() => handleDelete(doc.id)}
                    disabled={loading}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* PAGINATION */}
          {pagination && pagination.last_page > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1 border rounded"
              >
                Prev
              </button>

              {Array.from(
                { length: pagination.last_page },
                (_, i) => i + 1
              ).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 border rounded ${
                    page === p ? "bg-indigo-600 text-white" : ""
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                disabled={page === pagination.last_page}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border rounded"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =========================
          UPLOAD MODAL
      ========================= */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg">

            {/* HEADER */}
            <div className="flex justify-between items-center px-5 py-4 border-b">
              <h3 className="font-semibold text-lg">Add Files</h3>
              <button onClick={() => setShowUploadModal(false)}>✕</button>
            </div>

            {/* INFO */}
            <div className="px-5 pt-4 text-sm text-gray-600">
              Select and upload up to 10 documents
            </div>

           

            {/* DROP ZONE */}
            <div
              onClick={() => fileInputRef.current.click()}
              className="mx-5 mt-4 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50"
            >
              <div className="flex justify-center mb-2">
                <div className="bg-indigo-50 p-3 rounded-full">⬆️</div>
              </div>
              <p className="text-sm text-gray-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mt-1">
                DOC, PNG, JPG or PDF (max 100MB)
              </p>

              <input
                type="file"
                multiple
                ref={fileInputRef}
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
              />
            </div>

            {/* FILE PREVIEW */}
            {selectedFiles.length > 0 && (
              <div className="px-5 mt-4 space-y-2">
                {selectedFiles.map((file, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border rounded px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <Image size={18} className="text-indigo-500" />
                      <span className="text-sm">{file.name}</span>
                    </div>

                    <button
                      onClick={() => removeSelectedFile(i)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* FOOTER */}
            <div className="flex justify-end gap-3 px-5 py-4 border-t mt-5">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFiles([]);
                }}
                className="px-4 py-2 border rounded text-sm cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  dispatch(uploadDocumentsThunk(selectedFiles));
                  setShowUploadModal(false);
                  setSelectedFiles([]);
                }}
                disabled={!selectedFiles.length || loading}
                className="px-5 py-2 bg-indigo-600 text-white rounded text-sm disabled:opacity-50 cursor-pointer"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User_dashboard;
