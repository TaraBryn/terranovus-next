import React, { useState } from 'react';
import Video from '../media/HeroVideo1-Red-Compressed.m4v'
import { Button } from './SharedStyles';
import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import hexRgb from 'hex-rgb';
import themes from '../themes';

const HeroContainer = styled.div`
    display: flex;
    background: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 0;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            transparent
        );
        z-index: 2;
    }
`

const HeroBg = styled.div`
    position: fixed;
    z-index: -999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    position: fixed;
    z-index: -998;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${({theme}) => theme.colors.primary};

`

const HeroContent = styled.div<{opacity: number}>`
    z-index: 3;
    border-radius: 20px;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme, opacity}) => hexRgb(theme.colors.primary, {alpha:opacity, format:'css'})};
`

const HeroH1 = styled.h1`
    color: ${({theme}) => theme.colors.contrast};
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-dize: 32px;
    }
`

const HeroP = styled.p`
    font-size: 24px;
    margin-top: 24px;
    color: ${({theme}) => theme.colors.contrast};
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const HeroSubtitle = styled.p`
    font-size: 24px;
    margin-top: 24px;
    color: ${({theme}) => theme.colors.contrast};
    text-align: center;
    max-width: 600px;
    font-style: italic;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

const HeroSection: React.FC<{id: string, opacity: number}> = ({
    id, 
    opacity
}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {setHover(!hover)}

    return (
        <HeroContainer id={id}>
            <HeroBg>
                <VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                />
            </HeroBg>
            <HeroContent opacity={opacity}>
                <HeroH1>Terra Novus</HeroH1>
                <HeroSubtitle>
                    Simple and Clean Website Solutions
                </HeroSubtitle>
                <HeroP>
                    Contact me to get your new website up and running today.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        href='/calendar'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;