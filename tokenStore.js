import { create } from "zustand";

export const useTokenStore = create((set) => ({
	token: '',
	updateToken: (token) => set(() => ({ token: token })),
	deleteToken: () => set(() => ({ token: '' }))
}))