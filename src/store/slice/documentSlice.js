import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  GET_DOCUMENTS_URL,
  DELETE_DOCUMENT_URL,
  UPLOAD_DOCUMENTS_URL,
} from "../../api/constant/contant";

/* =========================
   GET DOCUMENTS (WITH PAGE)
========================= */
export const getDocumentsThunk = createAsyncThunk(
  "documents/get",
  async (page = 1, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `${GET_DOCUMENTS_URL}?per_page=10&page=${page}`
      );

      return {
        documents: res.data.documents,
        pagination: res.data.pagination,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch documents"
      );
    }
  }
);

/* =========================
   UPLOAD DOCUMENTS
========================= */
export const uploadDocumentsThunk = createAsyncThunk(
  "documents/upload",
  async (files, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("documents[]", file);
      });

      const res = await axiosInstance.post(
        UPLOAD_DOCUMENTS_URL,
        formData,
        {
          headers: {
            "Content-Type": undefined, // ✅ LET AXIOS HANDLE IT
          },
        }
      );

      return res.data.documents;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Upload failed"
      );
    }
  }
);

/* =========================
   DELETE DOCUMENT
========================= */
export const deleteDocumentThunk = createAsyncThunk(
  "documents/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(DELETE_DOCUMENT_URL(id));
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Delete failed"
      );
    }
  }
);

/* =========================
   SLICE
========================= */
const documentSlice = createSlice({
  name: "documents",
  initialState: {
    documents: [],
    pagination: null, // ✅ ADDED
    loading: false,
    error: null,
  },
  reducers: {
    clearDocumentError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* ================= GET ================= */
      .addCase(getDocumentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDocumentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = action.payload.documents;
        state.pagination = action.payload.pagination;
      })
      .addCase(getDocumentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= UPLOAD ================= */
      .addCase(uploadDocumentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadDocumentsThunk.fulfilled, (state, action) => {
        state.loading = false;

        action.payload.forEach((uploadedDoc) => {
          const index = state.documents.findIndex(
            (doc) => doc.id === uploadedDoc.id
          );

          if (index !== -1) {
            // 🔁 UPDATED
            state.documents[index] = {
              ...state.documents[index],
              ...uploadedDoc,
            };
          } else {
            // 🆕 CREATED
            state.documents.unshift(uploadedDoc);
          }
        });
      })
      .addCase(uploadDocumentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= DELETE ================= */
      .addCase(deleteDocumentThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDocumentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = state.documents.filter(
          (doc) => doc.id !== action.payload
        );
      })
      .addCase(deleteDocumentThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDocumentError } = documentSlice.actions;
export default documentSlice.reducer;
