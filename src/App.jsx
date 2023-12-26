import { useState, useEffect } from 'react'
import videosjson from './assets/videos.json'
import styled from 'styled-components'
import VideoCard from './VideoCard'

const VideoList = styled.div`
	display: flex;
	flex: auto;
	justify-content: center;

`

function App() {
	const [videos, setVideos] = useState()

	useEffect(() => {
		setVideos(videosjson.videos)

	}, [setVideos])


	return (
		<>
			<VideoList>
			{videos && videos.map((video) => (
				<VideoCard
					key={video.id}
					title={video.title}
					video={'/portfolio/' + video.video}
					thumbnail={'/portfolio/' + video.thumbnail}
				>
				</VideoCard >
			))}
		</VideoList>
		</>
	)
}

export default App
