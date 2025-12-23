import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { CONTACT_FORM_URL } from "../../api/constant/contant";


/* =========================
   SUBMIT CONTACT FORM
========================= */
export const submitContactThunk = createAsyncThunk(
  "contact/submit",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(CONTACT_FORM_URL, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Form submission failed"
      );
    }
  }
);

/* =========================
   SLICE
========================= */
const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    success: false,
    error: null,
    contact: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.contact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contact = action.payload.contact;
      })
      .addCase(submitContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
