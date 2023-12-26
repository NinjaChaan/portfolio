import { useState } from 'react'
import styled, { css } from 'styled-components'

const VideoContainer = styled.div`
    position: relative;
    margin: 15px;
    width: 490px;
    height: 370px;    
    background-color: #1c1c1c;
    
`

const Video = styled.video`
    position: absolute;
    height: 360px;
    width: 480px;
    margin: 5px;
`

const Title = styled.div`
    position: absolute;
    top: ${(props) => (props.$active ? '-32px' : '0px')};
    transition: 0.3s ease-out;
    color: white;
    padding: 5px;
    text-align: center;
    width: 100%;
    background-color: #1c1c1c;
    z-index: -1;
`

const VideoCard = ({ video, thumbnail, title }) => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    return (
        <VideoContainer onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Title $active={(hovered || clicked)} >{title}</Title>
            <Video src={video} poster={thumbnail} controls={hovered} onClick={() => setClicked(true)}></Video>
        </VideoContainer>
    )
}

export default VideoCard