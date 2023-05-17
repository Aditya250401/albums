import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
	reducerPath: 'albums',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005',
	}),
	endpoints(builder) {
		return {
			fetchAlbums: builder.query({
				providesTags: (result, error, user) => {
					return [{ type: 'Album', id: user.id }]
				},
				query: (user) => {
					return {
						url: '/albums',
						params: {
							user_id: user.id,
						},
						method: 'GET',
					}
				},
			}),
			addAlbum: builder.mutation({
				invalidatesTags: (result, error, user) => {
					return [{ type: 'Album', id: user.id }]
				},
				query: (user) => {
					return {
						url: '/albums',
						method: 'POST',
						body: {
							user_id: user.id,
							title: faker.lorem.sentence(),
						},
					}
				},
			}),
			removeAlbum: builder.mutation({
				query: (album) => {
					return {
						url: `/albums/${album.id}`,
						method: 'DELETE',
					}
				},
			}),
		}
	},
})

export const {
	useFetchAlbumsQuery,
	useAddAlbumMutation,
	useRemoveAlbumMutation,
} = albumsApi
export { albumsApi }
