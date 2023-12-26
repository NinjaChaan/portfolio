import { useState, useEffect } from 'react'
import seathVid from '/seathbomb2.webm'
import seathThumb from '/seathThumb.png'
import videosjson from './assets/videos.json'
import styled from 'styled-components'
import VideoCard from './VideoCard'
import axios from 'axios'

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
			{/* <VideoCard
					key={0}
					title={"Seath Bomb"}
					video={seathVid}
					thumbnail={seathThumb}
				>
				</VideoCard > */}
			{videos && videos.map((video) => (
				<VideoCard
					key={video.id}
					title={video.title}
					video={'/portfolio/' + video.video}
					thumbnail={'/portfolio/' + video.thumbnail}
				>
				</VideoCard >
			))}
			{/* <VideoCard video={seathVid} thumbnail={seathThumb}></VideoCard>
			<VideoCard video={seathVid} thumbnail={seathThumb}></VideoCard> */}
		</VideoList>
		</>
	)
}

export default App
