import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'

export default function AlbumsList({ user }) {
	const { data, error, isLoading } = useFetchAlbumsQuery(user)
	const [addAlbum, results] = useAddAlbumMutation()

	const handleAddAlbum = () => {
		addAlbum(user)
	}

	let content
	if (isLoading) {
		content = <Skeleton times={3} />
	} else if (error) {
		content = <div>Error fetching albums.</div>
	} else if (data) {
		content = data.map((album) => {
			const header = <div>{album.title}</div>
			console.log('album.title', album)
			return (
				<ExpandablePanel key={album.id} header={header}>
					list of albums {album.title}
				</ExpandablePanel>
			)
		})

		return (
			<>
				albums for {user.name}
				<Button onClick={handleAddAlbum}>+ Add Album</Button>
				<div>{content}</div>
			</>
		)
	}
}
