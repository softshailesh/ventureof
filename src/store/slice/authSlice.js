import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import {
  REGISTER_USER_URL,
  LOGIN_USER_URL,
} from "../../api/constant/contant";

/* =========================
   REGISTER USER
========================= */
export const registerUserThunk = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(REGISTER_USER_URL, payload);

      if (res.data?.token) {
        localStorage.setItem("tokenId", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

/* =========================
   LOGIN USER
========================= */
export const loginUserThunk = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(LOGIN_USER_URL, payload);

      if (res.data?.token) {
        localStorage.setItem("tokenId", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

const storedUser = localStorage.getItem("user");

/* =========================
   AUTH SLICE
========================= */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    success: false,
    isAuthenticated: !!localStorage.getItem("tokenId"),
    user: storedUser ? JSON.parse(storedUser) : null,
  },
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },

    logout: (state) => {
      localStorage.removeItem("tokenId");
      localStorage.removeItem("user");
      state.isAuthenticated = false;
      state.user = null;
    },

    /* =========================
       🔥 IMPORTANT
       Used when profile updates
    ========================= */
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      /* REGISTER */
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  resetAuthState,
  logout,
  updateUser, // ✅ EXPORT THIS
} = authSlice.actions;

export default authSlice.reducer;
