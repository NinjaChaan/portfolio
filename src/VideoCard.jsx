import { useState } from 'react'
import styled, { css } from 'styled-components'
import { isMobile } from 'react-device-detect'

const VideoContainer = styled.div`
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: ${(props) => (props.$isMobile ? '0px' : '25px')};
    margin-right: ${(props) => (props.$isMobile ? '0px' : '25px')};
    width: 100%;
    height: ${(props) => (props.$isMobile ? 'fit-content' : '100%')};
    min-height: ${(props) => (props.$isMobile ? '300px' : '500px')};
    max-height: 500px;
    background-color: #1c1c1c;
    flex: ${(props) => (props.$isMobile ? '100%' : '40%')};
    display: flex;
    justify-content: center;
    padding: ${(props) => (props.$isMobile ? '0px 5px 5px 5px' : '0')};
    flex-direction: column;
    
`

const Video = styled.video`
    height: 100%;
    width: 100%;
    max-height: 480px;
    max-width: 720px;
    margin: ${(props) => (props.$isMobile ? '0px' : '5px')};
    padding: ${(props) => (props.$isMobile ? '10px 0px 5px 0' : '0')};
    position: ${(props) => (props.$isMobile ? '' : 'absolute')};
    align-self: center;
`

const InfoText = styled.div`
    position: ${(props) => (props.$isMobile ? 'initial' : 'absolute')};
    top: ${(props) => (props.$active ? '-32px' : '5px')};
    transition: 0.3s ease-out;
    color: white;
    padding: 5px;
    text-align: center;
    width: 100%;
    background-color: #1c1c1c;
`

const Title = styled.div`

`

const Description = styled.div`
    padding-top: 10px;
`

const VideoCard = ({ video, thumbnail, title, description }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <VideoContainer $isMobile={isMobile} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <InfoText $isMobile={isMobile} $active={(isMobile || hovered)}>
                <Title>{title}</Title>
                <Description>{description}</Description>
                
            </InfoText>
            <Video $isMobile={isMobile} src={video} poster={thumbnail} controls={(isMobile || hovered)} loop></Video>
        </VideoContainer>
    )
}

export default VideoCard