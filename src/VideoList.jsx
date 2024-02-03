import { useState, useEffect } from 'react'
import styled from 'styled-components'
import videosjson from './assets/videos.json'
import VideoCard from './VideoCard'
import { isMobile } from 'react-device-detect'

const VideoListContainer = styled.div`
	display:  ${(props) => (props.$isMobile ? 'flex' : 'grid')};
    flex-direction: column;
    grid-row-gap: 50px;
    grid-template-columns: ${(props) => (props.$isMobile ? '' : '40% 40%')};
    justify-content: ${(props) => (props.$isMobile ? '' : 'space-evenly')};
    padding: ${(props) => (props.$isMobile ? '0px' : '25px')};
    width: 100%;
`

const VideoList = () => {
    const [videos, setVideos] = useState()

    useEffect(() => {
        var temp = [].concat(videosjson.videos).reverse()
        setVideos(temp)

    }, [setVideos])

    return (
        <VideoListContainer $isMobile={isMobile}>
            {videos && videos.map((video) => (
                <VideoCard
                    key={video.id}
                    title={video.title}
                    video={'/portfolio/' + video.video}
                    thumbnail={'/portfolio/' + video.thumbnail}
                    description={video.description}
                >
                </VideoCard >
            ))}
        </VideoListContainer>
    )
}

export default VideoList