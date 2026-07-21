import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import localforage from 'localforage';

interface AppState {
  isOffline: boolean;
  setOffline: (status: boolean) => void;
  pendingSyncCount: number;
  incrementSync: () => void;
  resetSync: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isOffline: !navigator.onLine,
      setOffline: (status) => set({ isOffline: status }),
      pendingSyncCount: 0,
      incrementSync: () => set((state) => ({ pendingSyncCount: state.pendingSyncCount + 1 })),
      resetSync: () => set({ pendingSyncCount: 0 }),
    }),
    {
      name: 'solum-storage',
      storage: createJSONStorage(() => localforage as any),
    }
  )
);
