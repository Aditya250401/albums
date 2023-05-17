import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/UserSlice'
import { albumsApi } from './Api/albumsApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		users: userReducer,
		[albumsApi.reducerPath]: albumsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(albumsApi.middleware)
	},
})

setupListeners(store.dispatch)

export * from './thunks/FetchUser'
export * from './thunks/addUser.js'
export * from './thunks/removeUser.js'
export {
	useFetchAlbumsQuery,
	useAddAlbumMutation,
	useRemoveAlbumMutation,
} from './Api/albumsApi'
