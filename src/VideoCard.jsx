import { useState } from 'react'
import styled, { css } from 'styled-components'
import {isMobile} from 'react-device-detect'

const VideoContainer = styled.div`
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: ${(props) => (props.$isMobile ? '5px' : '25px')};
    margin-right: ${(props) => (props.$isMobile ? '5px' : '25px')};
    width: 100%;
    height: ${(props) => (props.$isMobile ? 'auto' : '100%')};
    min-height: ${(props) => (props.$isMobile ? '0' : '500px')};
    max-height: 500px;
    background-color: #1c1c1c;
    flex: ${(props) => (props.$isMobile ? '100%' : '40%')};
    display: flex;
    justify-content: center;
    padding-bottom: ${(props) => (props.$isMobile ? '56.25%' : '0')};
    
`

const Video = styled.video`
    position: absolute;
    height: 100%;
    width: 100%;
    max-height: 480px;
    max-width: 720px;
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
            <Video $isMobile={isMobile} src={video} poster={thumbnail} controls={(isMobile || hovered)} loop></Video>
        </VideoContainer>
    )
}

export default VideoCard