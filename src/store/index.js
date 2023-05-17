import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/UserSlice'

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
})

export * from './thunks/FetchUser'
export * from './thunks/addUser.js'
export * from './thunks/removeUser.js'
