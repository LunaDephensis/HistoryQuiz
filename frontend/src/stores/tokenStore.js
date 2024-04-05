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
            try {
                const resp = await axios.post('/logout');
                if(resp.status === 200) {
                    this.accessToken = undefined;
                    axios.defaults.headers.common['Authorization'] = undefined;
                    return true;
                }
            } catch(err) {
                return false;
            }
        },
        async refresh() {
            try {
                const resp = await axios.post('/refresh');
                if(resp.status === 200) {
                    const token = resp.data;
                    this.setToken(token.accessToken);
                    return true;
                }
            } catch(err) {
                return false;
            }
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