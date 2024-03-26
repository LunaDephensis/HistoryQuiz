import { defineStore } from "pinia";

export const useLoaderStore = defineStore('loader', {
    state: () => {
        return {
            isLoading: false
        }
    },
    actions: {
        startLoading() {
            this.isLoading = true;
            document.documentElement.style.overflow = "hidden";
        },
        stopLoading() {
            this.isLoading = false;
            document.documentElement.style.overflow = "auto";
        }
    },
    getters: {
        getLoader(state) {
            return state.isLoading;
        }
    }
});