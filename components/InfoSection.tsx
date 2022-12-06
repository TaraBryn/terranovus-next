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
    grid-column-gap: 4rem;
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
    }
`

const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
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

const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
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
                        <BtnWrap>
                            {buttonElement}
                        </BtnWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img.src} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection;