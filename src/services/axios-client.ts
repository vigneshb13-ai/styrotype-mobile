import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://styrotype.onrender.com/api";
const LOCAL_URL = "http://169.254.213.227:3000/api";

const axiosClient: AxiosInstance = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

let authToken: string | null = null;

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const getAuthToken = () => {
  return authToken;
};

export const clearAuthToken = () => {
  authToken = null;
};

// Request Interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    if (authToken) {
      if (!config.headers) {
        config.headers = {} as any;
      }
      // Use type assertion or check to avoid TS errors with specific Axios versions
      (config.headers as any).Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Error Response:", error.response.data);

      if (error.response.status === 401) {
        console.warn("Unauthorized access - 401");
      }
    } else if (error.request) {
      console.error("API No Response:", error.request);
    } else {
      console.error("API Request Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// Generic GET method
export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  console.log("######### GET", url, config);
  const response = await axiosClient.get<T>(url, config);
  return response.data;
};

// Generic POST method
export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosClient.post<T>(url, data, config);
  return response.data;
};

// Generic PUT method
export const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosClient.put<T>(url, data, config);
  return response.data;
};

// Generic DELETE method
export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosClient.delete<T>(url, config);
  return response.data;
};

export default axiosClient;
