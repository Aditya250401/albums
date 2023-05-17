import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
	const response = await axios.get('http://localhost:3005/user')
	await pause(1000)
	return response.data
})

//dev only
const pause = (duration) =>
	new Promise((resolve) => setTimeout(resolve, duration))
