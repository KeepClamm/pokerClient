import { defineStore } from 'pinia';

export const useUserStore = defineStore({
	id: 'userInfo',
	state: () => {
		return {
			token: '123',
			info: null
		};
	},
	getters: {},
	actions: {
		loginOut() {
			return new Promise((resolve, reject) => {});
		}
	}
});
