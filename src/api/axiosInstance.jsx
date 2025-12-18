import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TIMEOUT = Number(import.meta.env.VITE_TIMEOUT) || 10000;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const authExcludedPaths = ["/api/login", "/api/register"];

/* =========================
   REQUEST INTERCEPTOR
========================= */
axiosInstance.interceptors.request.use(
  (config) => {
    const isExcluded = authExcludedPaths.some((path) =>
      config.url?.includes(path)
    );

    if (!isExcluded) {
      const token = localStorage.getItem("tokenId");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* =========================
   RESPONSE INTERCEPTOR
========================= */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("tokenId");
      localStorage.removeItem("user");

      // ✅ SAFE redirect
      if (window.location.pathname !== "/login") {
        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);
