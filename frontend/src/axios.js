import axios from 'axios';
import { useLoaderStore } from './stores/loaderStore';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
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
}, (err) => {
    const loaderStore = useLoaderStore();
    loaderStore.stopLoading();
    return Promise.reject(err);
});

export default axiosInstance;