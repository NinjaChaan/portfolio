import { useState } from 'react'
import seathVid from './assets/seathbomb2.webm'
import seathThumb from './assets/seathThumb.png'
import styled from 'styled-components'
import VideoCard from './VideoCard'

const VideoList = styled.div`
	display: flex;
	flex: auto;
	justify-content: center;

`

function App() {

	return (
		<>
			<VideoList>
				<VideoCard video={seathVid} thumbnail={seathThumb}></VideoCard>
				<VideoCard video={seathVid} thumbnail={seathThumb}></VideoCard>
			</VideoList>
		</>
	)
}

export default App
