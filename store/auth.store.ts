import { create } from 'zustand';
import {User} from "@/type";
import * as async_hooks from "node:async_hooks";
import {getCurrentUser, signOut} from "@/lib/appwrite";

type AuthStore = {
    isAuthenticated: boolean,
    user: User | null
    isLoading: boolean

    setIsAuthenticated: (value: boolean) => void
    setUser: (user: User | null) => void
    setLoading: (loading: boolean) => void

    fetchAuthenticatedUser: () => Promise<void>
    signOut: () => Promise<void>
}

const useAuthStore = create<AuthStore>((set) => ({
   isAuthenticated: false,
   user: null,
   isLoading: true,

   setIsAuthenticated: (value) => set({ isAuthenticated: value }),
   setUser: (user) => set({user}),
   setLoading: (value) => set({isLoading: value}),

   fetchAuthenticatedUser: async ()=> {
      set({isLoading: true})

      try {
          const user = await getCurrentUser()

          if(user) set({isAuthenticated: true, user: user as User})
          else set({isAuthenticated: false, user: null})

      }catch (e) {
          set({isAuthenticated: false, user: null})
      } finally {
          set({isLoading: false})
      }
    },

    signOut: async () => {
        set({isLoading: true})

        try {
            await signOut()
            set({isAuthenticated: false, user: null})
        } catch (e) {
            console.log('signOut error:', e)
        } finally {
            set({isLoading: false})
        }
    }
}))

export default useAuthStore