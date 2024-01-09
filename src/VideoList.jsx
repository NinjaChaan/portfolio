import { useState, useEffect } from 'react'
import styled from 'styled-components'
import videosjson from './assets/videos.json'
import VideoCard from './VideoCard'
import {isMobile} from 'react-device-detect'

const VideoListContainer = styled.div`
	display: flex;
	flex: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: ${(props) => (props.$isMobile ? '25px 0px' : '25px')};
`

const VideoList = () => {
    const [videos, setVideos] = useState()

    useEffect(() => {
        setVideos(videosjson.videos)
        console.log("get videos");
    }, [])

    return (
        <VideoListContainer $isMobile={isMobile}>
            {videos && videos.map((video) => (
                <VideoCard
                    key={video.id}
                    title={video.title}
                    video={video.video}
                    loop={video.loop === 1 ? true : false}
                >
                </VideoCard >
            ))}
        </VideoListContainer>
    )
}

export default VideoList