import React from 'react';
import styled from 'styled-components';
import underConstruction from '../media/Under_Construction_WhiteText_01.png';
import Video from '../.media/HeroVideo1-Red-Compressed.m4v';

const ConstructionContainer = styled.div`
    display: flex;
    background: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

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
            rgba(0,0,0,0.2) 100%
        ),
        linear-gradient(
            180deg,
            rgna(0,0,0,0.2 0%),
            transparent
        );
        z-index: 2;
    }
`

const ConstructionBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${({theme}) => theme.colors.primary};
`

const ConstructionContent = styled.div`
    z-index: 3;
    border-radius: 20px;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
`

const ConstructionImg = styled.img`
    width: 100%;
`

const UnderConstruction = () => (
    <ConstructionContainer>
        <ConstructionBg>
            <VideoBg 
                autoPlay
                loop
                muted
                src={Video}
            />
        </ConstructionBg>
        <ConstructionContent>
            <ConstructionImg 
                src={underConstruction.src}
                alt="Under Construction"
                aria-label='Under Construction'
            />
        </ConstructionContent>
    </ConstructionContainer>
)

export default UnderConstruction;