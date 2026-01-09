import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  ADMIN_CONTACTS_URL,
  CONTACT_FORM_URL,
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
   GET ADMIN CONTACTS (PAGINATED)
========================= */
export const getAdminContactsThunk = createAsyncThunk(
  "contact/admin/list",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${ADMIN_CONTACTS_URL}?page=${page}&per_page=10`
      );

      // 🔥 IMPORTANT: return contacts object
      return response.data.contacts;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch contacts"
      );
    }
  }
);

/* =========================
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
   SLICE
========================= */
const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    error: null,
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
  },

  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.submittedContact = null;
      state.selectedContact = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* SUBMIT CONTACT */
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
        };
      })
      .addCase(getAdminContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
