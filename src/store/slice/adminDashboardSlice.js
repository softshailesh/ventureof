import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { ADMIN_DASHBOARD_URL } from "../../api/constant/contant";

/* =========================
   FETCH ADMIN DASHBOARD
========================= */
export const fetchAdminDashboardThunk = createAsyncThunk(
  "adminDashboard/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(ADMIN_DASHBOARD_URL);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to load dashboard"
      );
    }
  }
);

/* =========================
   SLICE
========================= */
const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    loading: false,
    error: null,
    stats: null,
    recentUsers: [],
    recentContacts: [],
    topDocumentUsers: [],
    monthlyRegistrations: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminDashboardThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminDashboardThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.recentUsers = action.payload.recent_users;
        state.recentContacts = action.payload.recent_contacts;
        state.topDocumentUsers = action.payload.top_document_users;
        state.monthlyRegistrations = action.payload.monthly_registrations;
      })
      .addCase(fetchAdminDashboardThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminDashboardSlice.reducer;
