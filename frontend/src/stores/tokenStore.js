import { defineStore } from "pinia";
import axios from '../axios';

export const useTokenStore = defineStore('token', {
    state: () => {
        return {
            accessToken: undefined
        }
    },
    actions: {
        setToken(token) {
            this.accessToken = token;
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}` ;
        },
        async clearToken() {
            const resp = await axios.post('/logout');
            if(resp.status === 200) {
                this.accessToken = undefined;
                axios.defaults.headers.common['Authorization'] = undefined;
                return true;
            }
            return false;
        },
        async refresh() {
            const resp = await axios.post('/refresh');
            if(resp.status === 200) {
                const token = resp.data;
                this.setToken(token.accessToken);
                return true;
            }
            return false;
        }
    },
    getters: {
        hasToken(state) {
            return state.accessToken !== undefined;
        },
        getToken(state) {
            return state.accessToken;
        }
    }
});