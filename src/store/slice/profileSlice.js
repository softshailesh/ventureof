import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { UPDATE_PROFILE_URL } from "../../api/constant/contant";
import { updateUser } from "./authSlice";

/* =========================
   UPDATE PROFILE
========================= */
export const updateProfileThunk = createAsyncThunk(
  "profile/update",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const formData = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const res = await axiosInstance.post(
        UPDATE_PROFILE_URL,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // 🔥 SYNC AUTH USER
      dispatch(updateUser(res.data.user));

      return res.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetProfileState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProfileThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProfileState } = profileSlice.actions;
export default profileSlice.reducer;
