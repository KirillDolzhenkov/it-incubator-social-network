import axios from "axios";
import {getUserProfile} from "../redux/profile-reducer";

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "2f53ebc7-6e0c-44af-b6eb-a755cbe3639f",
	},
});

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},

	follow(userId: number) {
		return instance.post(`follow/${userId}`);
	},
	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`);
	},
	getProfile(userId: number) {
		console.warn('Obsolete method. Please use profileAPI object');
		return profileAPI.getProfile(userId);
	},
};

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`);
	},
	getUserStatus(userId: number) {
		return instance.get(`/profile/status/${userId}`);
	},
	updateUserStatus(status: string) {
		return instance.put(`/profile/status`, {status: status});
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
};
