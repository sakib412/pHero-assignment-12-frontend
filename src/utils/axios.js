import axios from "axios";
export const ACCESS_TOKEN = "ACCESS_TOKEN"
const baseURL = process.env.NODE_ENV === 'development' ?
    "http://localhost:5000" :
    process.env.REACT_APP_SERVER_URL;
let access_token = localStorage.getItem(ACCESS_TOKEN);

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

if (access_token) {
    axiosInstance.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${access_token}`;
} else {
    delete axiosInstance.defaults.headers.common["Authorization"];
}

axiosInstance.interceptors.request.use(
    async (config) => {
        // check header config
        // get Token from authorization
        access_token = localStorage.getItem(ACCESS_TOKEN);
        if (access_token) {
            if (!config.headers.common.Authorization) {
                axiosInstance.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${access_token}`;
                config.headers.common.Authorization = `Bearer ${access_token}`;
            }

        } else {
            delete axiosInstance.defaults.headers.common["Authorization"];
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default axiosInstance;