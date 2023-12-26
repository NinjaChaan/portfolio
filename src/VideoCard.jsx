import { useState } from 'react'
import styled, { css } from 'styled-components'
import {isMobile} from 'react-device-detect'

const VideoContainer = styled.div`
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: ${(props) => (props.$isMobile ? '5px' : '25px')};
    margin-right: ${(props) => (props.$isMobile ? '5px' : '25px')};
    max-width: 490px;
    max-height: 370px;
    width: 100%;
    height: ${(props) => (props.$isMobile ? 'auto' : '100%')};
    min-height: 300px;
    background-color: #1c1c1c;
    
`

const Video = styled.video`
    position: absolute;
    max-height: 360px;
    max-width: 480px;
    height: 100%;
    width: 100%;
    margin: ${(props) => (props.$isMobile ? '0px' : '5px')};
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

    return (
        <VideoContainer $isMobile={isMobile} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Title $active={(isMobile || hovered)} >{title}</Title>
            <Video $isMobile={isMobile} src={video} poster={thumbnail} controls={(isMobile || hovered)}></Video>
        </VideoContainer>
    )
}

export default VideoCard