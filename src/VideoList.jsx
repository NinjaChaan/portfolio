import { useState, useEffect } from 'react'
import styled from 'styled-components'
import videosjson from './assets/videos.json'
import VideoCard from './VideoCard'

const VideoListContainer = styled.div`
	display: flex;
	flex: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 25px;
`

const VideoList = () => {
    const [videos, setVideos] = useState()

    useEffect(() => {
        setVideos(videosjson.videos)

    }, [setVideos])

    return (
        <VideoListContainer>
            {videos && videos.map((video) => (
                <VideoCard
                    key={video.id}
                    title={video.title}
                    video={'/portfolio/' + video.video}
                    thumbnail={'/portfolio/' + video.thumbnail}
                >
                </VideoCard >
            ))}
        </VideoListContainer>
    )
}

export default VideoList