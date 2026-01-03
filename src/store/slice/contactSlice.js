import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { ADMIN_CONTACTS_URL, CONTACT_FORM_URL } from "../../api/constant/contant";


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
   GET ADMIN CONTACTS
========================= */
export const getAdminContactsThunk = createAsyncThunk(
  "contact/admin/list",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${ADMIN_CONTACTS_URL}?page=${page}`
      );
      return response.data.contacts; // 🔥 pagination object
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contacts"
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

    // Contact submit
    submittedContact: null,

    // Admin contact list
    contacts: [],
    pagination: {},
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.submittedContact = null;
    },
  },
  extraReducers: (builder) => {
    builder

      /* ================= SUBMIT CONTACT ================= */
      .addCase(submitContactThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.submittedContact = action.payload;
      })
      .addCase(submitContactThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ================= ADMIN CONTACT LIST ================= */
      .addCase(getAdminContactsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.data; // ✅ contacts array
        state.pagination = {
          current_page: action.payload.current_page,
          last_page: action.payload.last_page,
          total: action.payload.total,
          per_page: action.payload.per_page,
        };
      })
      .addCase(getAdminContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
