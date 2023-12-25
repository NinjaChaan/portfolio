import { useState } from 'react'
import styled from 'styled-components'

const VideoContainer = styled.div`
    margin: 10px;
    height: 360px;
    width: 480px;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
`

const VideoCard = ({ video, thumbnail }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <VideoContainer>
            <Video src={video} poster={thumbnail} controls={hovered} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></Video>
        </VideoContainer>
    )
}

export default VideoCard