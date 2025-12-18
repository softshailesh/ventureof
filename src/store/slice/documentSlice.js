import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { UPLOAD_DOCUMENTS_URL } from "../../api/constant/contant";

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
            "Content-Type": "multipart/form-data",
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

const documentSlice = createSlice({
  name: "documents",
  initialState: {
    loading: false,
    error: null,
    documents: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocumentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadDocumentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = action.payload;
      })
      .addCase(uploadDocumentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default documentSlice.reducer;
