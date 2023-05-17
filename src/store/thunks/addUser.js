import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { faker } from '@faker-js/faker'

const addUser = createAsyncThunk('users/addUser', async () => {
	const response = await axios.post('http://localhost:3005/user', {
		name: faker.person.firstName() + ' ' + faker.person.lastName(),
	})

	return response.data
})

export { addUser }
