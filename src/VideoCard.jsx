import { useState } from 'react'
import styled, { css } from 'styled-components'
import {isMobile} from 'react-device-detect'

const VideoContainer = styled.div`
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: ${(props) => (props.$isMobile ? '5px' : '25px')};
    margin-right: ${(props) => (props.$isMobile ? '5px' : '25px')};
    max-width: 640px;
    max-height: 480px;
    width: 100%;
    height: ${(props) => (props.$isMobile ? 'auto' : '100%')};
    min-height: 300px;
    background-color: #1c1c1c;
    
`

const Video = styled.video`
    position: absolute;
    max-height: 480px;
    max-width: 640px;
    height: 100%;
    width: 100%;
    margin: ${(props) => (props.$isMobile ? '0px' : '5px')};
`

const Title = styled.div`
    position: absolute;
    top: ${(props) => (props.$active ? '-34px' : '0px')};
    transition: 0.3s ease-out;
    color: white;
    padding: ${(props) => (props.$isMobile ? '0px' : '5px')};
    text-align: center;
    width: 100%;
    background-color: #1c1c1c;
    z-index: ${(props) => (props.$isMobile ? '1' : '-1')};
    /* line-height: 45px; */
`

const VideoCard = ({ video, title, loop }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <VideoContainer $isMobile={isMobile} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {/* <iframe src={video} width="640" height="480" allowFullScreen allow="loop"></iframe> */}
            <Title $active={(isMobile || hovered)} >{title}</Title>
            <Video $isMobile={isMobile} controls={(isMobile || hovered)} loop>
                <source src={video} type='video/mp4'></source>
            </Video>
        </VideoContainer>
    )
}

export default VideoCard