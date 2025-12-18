import React, { useRef } from "react";
import { Plus, FileText, Image } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { uploadDocumentsThunk } from "../../store/slice/documentSlice";

const User_dashboard = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  // ✅ USER FROM AUTH SLICE
  const user = useSelector((state) => state.auth.user);

  // ✅ FALLBACK (SAFE)
  const userName =
    user?.name ||
    JSON.parse(localStorage.getItem("user"))?.name ||
    "User";

  const { documents, loading, error } = useSelector(
    (state) => state.documents
  );

  const handleAddFilesClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      dispatch(uploadDocumentsThunk(files));
    }
    e.target.value = "";
  };

  const getIcon = (type) => {
    if (["png", "jpg", "jpeg"].includes(type)) {
      return <Image size={18} className="text-indigo-500" />;
    }
    return <FileText size={18} className="text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-10 py-6">

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Hi, <span className="font-medium">{userName}</span>
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Welcome to AIN Members Portal
        </h1>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 max-w-4xl">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Shared Files
          </h2>

          <button
            onClick={handleAddFilesClick}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            <Plus size={16} />
            Add Files
          </button>

          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <div className="p-6">
          {loading && (
            <p className="text-sm text-gray-500">
              Uploading documents...
            </p>
          )}

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {!documents.length && !loading && (
            <div className="flex flex-col items-center py-14">
              <p className="text-sm text-gray-500">
                You don’t have any!
              </p>
            </div>
          )}

          {documents.length > 0 && (
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    {getIcon(doc.type)}
                    <div>
                      <p className="text-sm font-medium">
                        {doc.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(doc.size / 1024).toFixed(1)} KB • {doc.status}
                      </p>
                    </div>
                  </div>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    View
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default User_dashboard;
