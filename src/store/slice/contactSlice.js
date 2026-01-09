import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
<<<<<<< HEAD
import {
  ADMIN_CONTACTS_URL,
  CONTACT_FORM_URL,
} from "../../api/constant/contant";
=======
import { ADMIN_CONTACTS_URL, CONTACT_FORM_URL } from "../../api/constant/contant";

>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c

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
<<<<<<< HEAD
   GET ADMIN CONTACTS (PAGINATED)
=======
   GET ADMIN CONTACTS
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
========================= */
export const getAdminContactsThunk = createAsyncThunk(
  "contact/admin/list",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
<<<<<<< HEAD
        `${ADMIN_CONTACTS_URL}?page=${page}&per_page=10`
      );

      // 🔥 IMPORTANT: return contacts object
      return response.data.contacts;
=======
        `${ADMIN_CONTACTS_URL}?page=${page}`
      );
      return response.data.contacts; // 🔥 pagination object
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contacts"
      );
    }
  }
);

/* =========================
<<<<<<< HEAD
   GET SINGLE CONTACT (VIEW)
========================= */
export const getContactByIdThunk = createAsyncThunk(
  "contact/admin/view",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${ADMIN_CONTACTS_URL}/${id}`
      );
      return response.data.contact;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contact"
      );
    }
  }
);

/* =========================
=======
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
   SLICE
========================= */
const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    error: null,
<<<<<<< HEAD
    success: false,

    submittedContact: null,

    contacts: [],
    pagination: {
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: 0,
    },

    selectedContact: null,
=======

    // Contact submit
    submittedContact: null,

    // Admin contact list
    contacts: [],
    pagination: {},
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
  },

  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.error = null;
<<<<<<< HEAD
      state.success = false;
      state.submittedContact = null;
      state.selectedContact = null;
=======
      state.submittedContact = null;
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
    },
  },

  extraReducers: (builder) => {
    builder

<<<<<<< HEAD
      /* SUBMIT CONTACT */
=======
      /* ================= SUBMIT CONTACT ================= */
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
      .addCase(submitContactThunk.pending, (state) => {
        state.loading = true;
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

<<<<<<< HEAD
      /* ADMIN CONTACT LIST */
      .addCase(getAdminContactsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminContactsThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.contacts = action.payload.data || [];
        state.pagination = {
          current_page: action.payload.current_page,
          last_page: action.payload.last_page,
          per_page: action.payload.per_page,
          total: action.payload.total,
=======
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
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
        };
      })
      .addCase(getAdminContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
<<<<<<< HEAD
      })

      /* VIEW CONTACT */
      .addCase(getContactByIdThunk.pending, (state) => {
        state.loading = true;
        state.selectedContact = null;
      })
      .addCase(getContactByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedContact = action.payload;
      })
      .addCase(getContactByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
=======
>>>>>>> 8313ffbf6b9265aeb2c17c4ca1cab12ad1ba568c
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
