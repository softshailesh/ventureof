import axios from "axios";

// 🌐 Base setup
const BASE_URL = import.meta.env.VITE_BASE_URL;
const TIMEOUT = Number(import.meta.env.VITE_TIMEOUT) || 10000;

// 🔹 Create axios instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Paths where token should NOT be attached
const authExcludedPaths = ["/api/login", "/api/register"];

// 🔹 Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if current request URL matches any excluded path
    const isExcluded = authExcludedPaths.some((path) =>
      config.url?.includes(path)
    );

    if (!isExcluded) {
      const token = localStorage.getItem("tokenId");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor (optional but useful)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiry or unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem("tokenId");
      localStorage.removeItem("user");
      // Redirect to login page if needed
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
