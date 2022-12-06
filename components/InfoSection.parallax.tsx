import { Route } from "next/dist/server/router";
import { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import { Button, ScrollButton } from "./SharedStyles";

const InfoContainer = styled.div<{
    fg?: string,
    bg?: string
}>`
    color: ${({theme: {colors}, fg}) => (
        colors[fg] || colors.contrast
    )};
    background: ${({theme: {colors}, bg}) => (
        colors[bg] || colors.primary
    )};
    position: relative;
    z-index: 1;

        @media screen and (max-width: 768px) {
            padding-top: 40px;
        }
`

const InfoSpacer = styled.div`
    background-color: black;

    @media screen and (max-width: 768px) {
        height: 90px;
    }
    
`

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

const InfoRow = styled.div<{
    imgOnLeft?: boolean
}>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-column-gap: 5px;
    align-items: center;
    grid-template-areas: ${({imgOnLeft}) => (
        imgOnLeft ? `'col2 col1'` : `'col1 col2'`
    )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgOnLeft}) => (
            imgOnLeft 
            ? `'col1' 'col2'` 
            : `'col1 col1' 'col2 col2'`
        )};
        width: 75vw;
    }
`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 40px;
    grid-area: col1;
`

const Column2 = styled.div<{
    img: StaticImageData
}>`
    /* margin-bottom: 15px; */
    /* padding: 0 15px; */
    grid-area: col2;
    height: 400px;
    background-image: ${props => `url(${props.img.src})`};
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;

    /* @media screen and (max-width: 768px) {
        height: 50vh;
    } */
`

const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

const TopLine = styled.p`
    color: ${({theme}) => theme.colors.highlight};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Heading = styled.h1<{
    color?: string
}>`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({theme: {colors}, color}) => (
        colors[color] || colors.contrast
    )};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const Description = styled.p<{
    color?: string
}>`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: ${({theme: {colors}, color}) =>  (
        colors[color] || colors.contrast
    )};
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const Hr = styled.hr`
    border-color: ${({theme}) => theme.colors.highlight};
    background-color: ${({theme}) => theme.colors.highlight};
    border-radius: 50px;
    height: 3px;
`

const InfoSection: React.FC<{
    id: string,
    to: string,
    route?: boolean,
    imgOnLeft?: boolean,
    topLine: string,
    headline: string,
    description: string,
    buttonLabel: string,
    img: StaticImageData,
    alt: string,
    bg?: string,
    fg?: string
}> = ({
    id,
    to,
    route,
    imgOnLeft,
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    bg,
    fg
}) => {
    var buttonElement = route
    ? <Button href={to}>{buttonLabel}</Button>
    : <ScrollButton
        to={to}
        smooth='true'
        duration={500}
        spy={true}
        // exact={true}
        offset={-80}
    >
        {buttonLabel}
    </ScrollButton>

    return (
        <InfoContainer id={id} bg={bg} fg={fg}>
            <InfoWrapper>
                <InfoRow imgOnLeft={imgOnLeft}>
                    <Column1>
                        <TopLine>{topLine}</TopLine>
                        <Heading color={fg}>{headline}</Heading>
                        <Description color={fg}>
                            {description}
                        </Description>
                    </Column1>
                    <Column2 img={img} />
                </InfoRow>
            </InfoWrapper>
            {/* <Hr /> */}
        </InfoContainer>
    )
}

export default InfoSection;
