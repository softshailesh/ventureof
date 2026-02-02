import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  ADMIN_CONTACTS_URL,
  CONTACT_FORM_URL,
  DELETE_CONTACT_URL,
  VIEW_CONTACT_URL,
} from "../../api/constant/contant";

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
      return response.data.contacts;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contacts"
      );
    }
  }
);

/* =========================
   VIEW CONTACT
========================= */
export const viewContactThunk = createAsyncThunk(
  "contact/admin/view",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(VIEW_CONTACT_URL(id));
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contact details"
      );
    }
  }
);

/* =========================
   DELETE CONTACT
========================= */
export const deleteContactThunk = createAsyncThunk(
  "contact/admin/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(DELETE_CONTACT_URL(id));
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete contact"
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
    /* loaders */
    listLoading: false,
    viewLoading: false,
    deleteLoading: false,

    success: false,
    error: null,

    /* submit */
    submittedContact: null,

    /* list */
    contacts: [],
    pagination: {},

    /* view */
    selectedContact: null,
  },

  reducers: {
    resetContactState: (state) => {
      state.listLoading = false;
      state.viewLoading = false;
      state.deleteLoading = false;
      state.error = null;
      state.success = false;
      state.submittedContact = null;
      state.selectedContact = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* ================= SUBMIT CONTACT ================= */
      .addCase(submitContactThunk.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(submitContactThunk.fulfilled, (state, action) => {
        state.listLoading = false;
        state.success = true;
        state.submittedContact = action.payload;
      })
      .addCase(submitContactThunk.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload;
      })

      /* ================= CONTACT LIST ================= */
      .addCase(getAdminContactsThunk.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(getAdminContactsThunk.fulfilled, (state, action) => {
        state.listLoading = false;
        state.contacts = action.payload.data;
        state.pagination = {
          current_page: action.payload.current_page,
          last_page: action.payload.last_page,
          total: action.payload.total,
          per_page: action.payload.per_page,
        };
      })
      .addCase(getAdminContactsThunk.rejected, (state, action) => {
        state.listLoading = false;
        state.error = action.payload;
      })

      /* ================= VIEW CONTACT ================= */
      .addCase(viewContactThunk.pending, (state) => {
        state.viewLoading = true;
      })
      .addCase(viewContactThunk.fulfilled, (state, action) => {
        state.viewLoading = false;
        state.selectedContact = action.payload;
      })
      .addCase(viewContactThunk.rejected, (state, action) => {
        state.viewLoading = false;
        state.error = action.payload;
      })

      /* ================= DELETE CONTACT ================= */
      .addCase(deleteContactThunk.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.deleteLoading = false;
        state.contacts = state.contacts.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
