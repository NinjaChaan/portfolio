import { useState } from 'react'
import styled, { css } from 'styled-components'

const VideoContainer = styled.div`
    position: relative;
    margin: 10px;
    flex-direction: vertical;
    width: 480px;
    height: 360px;
    overflow: hidden;
`

const Video = styled.video`
    height: 360px;
    width: 480px;
`

const Title = styled.div`
    position: absolute;
    top: ${(props) => (props.$active ? '0px' : '-35px')};
    color: white;
    background-color: #0000004c;
    padding: 5px;
    text-align: center;
    transition: 0.3s ease-out;
    width: 100%;
`

const VideoCard = ({ video, thumbnail, title }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <VideoContainer>
            <Title $active={hovered}>{title}</Title>
            <Video src={video} poster={thumbnail} controls={hovered} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></Video>
        </VideoContainer>
    )
}

export default VideoCard