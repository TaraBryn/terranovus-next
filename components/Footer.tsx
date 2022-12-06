import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';
import { useRouter } from "next/router";
import content from './Footer.content'
import socials from './Footer.socials';
import logo from '../media/TerraNovus_logo_01_REDTEXT.png';

const FooterContainer = styled.footer<{exclude?: boolean}>`
    background: ${props => props.theme.colors.primary};
    display: ${({exclude}) => exclude ? 'none' : 'block'};
    width: 100%;
    position: relative;
`

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${props => props.theme.colors.contrast};

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: ${props => props.theme.colors.contrast};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: ${({theme: {colors}}) => colors.highlight2 || colors.highlight};
        transition: 0.3s ease-out;
    }
`

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SocialLogo = styled(Link)`
    color: ${props => props.theme.colors.contrast};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

const SocialImage = styled.img`
    max-width: 200px;
`

const WebsiteRights = styled.small`
    color: ${props => props.theme.colors.contrast};
    margin-bottom: 16px
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const SocialIconLink = styled.a`
    color: ${props => props.theme.colors.contrast};
    font-size: 24px;
`
const Footer = ({exclude}: {exclude?: boolean}) => {
    const location = useRouter().pathname;

    return (
        <FooterContainer exclude={exclude}>
            <FooterWrap>
                <FooterLinksContainer>
                    {
                        content.map((e,i) => (
                            <FooterLinksWrapper key={`footer-column-${i}`}>
                                {
                                    e.map(e2 => (
                                        <FooterLinkItems key={`footer-section-${e2.id}`}>
                                            <FooterLinkTitle>{e2.header}</FooterLinkTitle>
                                            {
                                                e2.items.map(e3 => (
                                                    <FooterLink key={`footer-item-${e3.id}`} href={e3.to || '/'}>
                                                        {e3.content}
                                                        {e3.content2 ? <p>{e3.content2}</p>: ''}
                                                    </FooterLink>
                                                ))
                                            }
                                        </FooterLinkItems>
                                    ))
                                }
                            </FooterLinksWrapper>
                        ))
                    }
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo href={location} onClick={scroll.scrollToTop}>
                            <SocialImage src={logo.src} />
                        </SocialLogo>
                        <WebsiteRights>
                            Terra Novus LLC @ {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            {
                                socials.map(e => (
                                    <SocialIconLink
                                        key={`social-${e.id}`}
                                        href={e.href}
                                        target='_blank'
                                    >
                                        {e.icon}
                                    </SocialIconLink>
                                ))
                            }
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;