import { create } from "zustand";

const useStore = create((set) => ({
  user: null,

  setUserData: (data) => set(() => ({
    user: data,
  })),

  removeUserData: () => set(() => ({
    user: {},
  })),

  updateUserData: (data) => set((state) => ({
    user: { ...state.user, ...data },
  })),
}));

export default useStore;
