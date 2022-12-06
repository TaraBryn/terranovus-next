import React from "react";
import content from '../components/Portfolio.content';
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { fadeInUp } from 'react-animations';

const PortfolioContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
    padding-top: 110px;
`

const PortfolioHeader = styled.h1`
    display: flex;
    justify-content: center;
    color: ${({theme}) => theme.colors.contrast};
`

const PortfolioLinkWrap = styled.div<{num: number}>`
    background: ${({theme}) => theme.colors.shade};
    border-radius: 15px;
    animation: ${({num}) => `${num/2}s`} ${keyframes `${fadeInUp}`};
    margin-bottom: 10px;
`

const PortfolioImg = styled.img`
    max-width: 100%;
    border-radius: 15px;
`

const PortfolioLink = styled(Link)`
    color: ${({theme}) => theme.colors.contrast};
    text-align: center;
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    display: grid;
    grid-gap: 20px;
    padding-bottom: 20px;
    box-shadow: ${({theme}) => `15px 15px 8px ${theme.colors.highlight}`};

    &:hover {
        background: ${({theme}) => theme.colors.highlight};
        box-shadow: ${({theme}) => `15px 15px 8px ${theme.colors.shade}`};
    }
`

const PortfolioWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
    row-gap: 50px;
    width: 100%;
    background: transparent;
    padding: 80px 100px 0;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 40px;
        padding: 80px 75px 0;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        padding: 80px 110px 0;
    }

    @media screen and (max-width: 725px) {
        padding: 80px 90px 0;
    }

    @media screen and (max-width: 700px) {
        padding: 80px 80px 0;
    }

    @media screen and (max-width: 420px) {
        padding: 80px 60px 0;
    }

    @media screen and (max-width: 340px) {
        padding: 80px 40px 0;
    }
`

const Portfolio = () => (
    <PortfolioContainer>
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioWrapper>
            {
                content.map((e,i) => (
                    <PortfolioLinkWrap key={e.id} num={i+1}>
                        <PortfolioLink href={e.link} target='_blank'>
                            <PortfolioImg src={e.img.src} alt={`Home page for ${e.text}`} />
                            {e.text}
                        </PortfolioLink>
                    </PortfolioLinkWrap>
                ))
            }
        </PortfolioWrapper>
    </PortfolioContainer>
)

export default Portfolio