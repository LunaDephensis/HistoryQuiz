import { defineStore } from "pinia";

export const useAchieNotification = defineStore('achieNot', {
    state: () => {
        return {
            newAchie: JSON.parse(localStorage.getItem("newAchie")) || false
        }
    },
    actions: {
        addNewAchie() {
            this.newAchie = true;
            localStorage.setItem("newAchie", "true");
        },
        removeNotification() {
            this.newAchie = false;
            localStorage.setItem("newAchie", "false");
        }
    }
});