import axios from 'axios';
import { useUserStore } from '@/stores/modules/user';
const userStore = useUserStore();
const axiosService = axios.create({
	// baseURL: import.meta.env.APP_BASE_API, // api的base_url
	baseURL: '/mock', // api的base_url
	timeout: 60000 // 请求超时时间
});
// request拦截器
axiosService.interceptors.request.use(
	(config: any) => {
		if (userStore.token) {
			config.headers['Authorization'] = `Bearer ${userStore.token}`;
		}

		config.headers['Access-Control-Allow-Origin'] = '*';
		config.headers['Access-Control-Allow-Credentials'] = true;

		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
// response拦截器
axiosService.interceptors.response.use(
);