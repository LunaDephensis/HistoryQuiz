import axios from 'axios';
import { useLoaderStore } from './stores/loaderStore';
import { useTokenStore } from './stores/tokenStore';
const serverUrl = import.meta.env.VITE_SERVER_URL;

const axiosInstance = axios.create({
    baseURL: serverUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    const loaderStore = useLoaderStore();
    loaderStore.startLoading();
    return config;
}, (err) => {
    const loaderStore = useLoaderStore();
    loaderStore.stopLoading();
    return Promise.reject(err);
});

axiosInstance.interceptors.response.use((config) => {
    const loaderStore = useLoaderStore();
    loaderStore.stopLoading();
    return config;
}, async (err) => {
    console.log(err.response);
    const loaderStore = useLoaderStore();
    if(err.response && err.response.status === 401) {
        const tokenStore= useTokenStore();
        const success = await tokenStore.refresh();

        if(success) {
            return axios(err.config);
        } else {
            loaderStore.stopLoading();
            throw err;
        }
    }
    loaderStore.stopLoading();
    throw err;
});

export default axiosInstance;