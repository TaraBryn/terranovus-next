import styled from 'styled-components';
import React from 'react';
import content from './ServicesSection.content'

const ServicesContainer = styled.div`
   height: 550px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: ${({theme}) => theme.colors.primary}; 
   position: relative;

   @media screen and (max-width: 768px) {
        height: 1100px;
   }

   @media screen and (max-width: 480px) {
    height: 1300px;
   }
`

const ServiceWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
const ServicesCard = styled.div`
    background: ${({theme}) => theme.colors.contrast};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`

const ServicesIcon = styled.img`
    width: 160px;
    height: 160px;
    margin-bottom: 10px;
`

const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.contrast};
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: ${({theme}) => theme.colors.highlight};
`

const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
`

const ServicesSection: React.FC<{id: string}> = ({id}) => {
    return (
        <ServicesContainer id={id}>
            <ServicesH1>Our Services</ServicesH1>
            <ServiceWrapper>
                {
                    content.map((e,i) => (
                        <ServicesCard key={`service-${i}`}>
                            <ServicesIcon src={e.img.src} />
                            <ServicesH2>{e.heading}</ServicesH2>
                            <ServicesP>{e.description}</ServicesP>
                        </ServicesCard>
                    ))
                }
            </ServiceWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection;