import { useState, useEffect } from 'react'
import seathVid from './assets/seathbomb2.webm'
import seathThumb from './assets/seathThumb.png'
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

	// useEffect(() => {
	// 	axios.get('http://localhost:1337/api/videos?populate=*', {
	// 		headers: {
	// 			'Authorization': 'Bearer 62b870bf3236b0e17cee3ff03395c4594f8486cbdb70320953012f85c7882b76b05d9dba765c4ad33f10a0810660e970fb0c01d7b7401ecaa14ddcd8a7857a68e37058470d2768ac28798730436943acc8bb50439edbd8cfbd4968bce275af067d7c6d67613db2479bba4664e22501df474184f3ab3c318c95ddf055c95dcc61'
	// 		}
	// 	})
	// 		.then((res) => { console.log(res.data.data); setVideos(res.data.data) })
	// 		.catch((err) => console.error(err))

	// }, [setVideos])
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
					video={video.video}
					thumbnail={video.thumbnail}
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
