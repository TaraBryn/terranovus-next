import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import styled from "styled-components";
import hexRgb from "hex-rgb";
import Link from "next/link";
import { 
        Link as LinkScroll, 
        animateScroll as scroll 
} from "react-scroll";
import { FaBars } from 'react-icons/fa';
import content from './Navbar.content';
import { StaticImageData } from 'next/image';
import { RequireAtLeastOne } from '..';

const Nav = styled.nav<{
  alpha: number;
  scrolled: boolean;
  exclude?: boolean;
}>`
  background: ${({ theme: { colors }, alpha, scrolled }) => (
    scrolled
      ? hexRgb(colors.primary, { alpha, format: "css" })
      : "transparent"
  )};
  height: 80px;
  /* margin-top: -80px; */
  display: ${(props) => (props.exclude ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.highlight};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const NavLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.contrast};
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
      transition: all 0.2s ease-in-out;
    }
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavLink = styled(LinkScroll)`
  color: ${(props) => props.theme.colors.contrast};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: ${({ theme }) => `3px solid ${theme.colors.highlight}`};
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: ${(props) => props.theme.colors.highlight};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${(props) => props.theme.colors.contrast};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme.colors.contrast};
    color: ${(props) => props.theme.colors.highlight};
  }
`

interface NavbarInterface {
    toggleSidebar: () => void,
    exclude: boolean,
    logoImg?: StaticImageData,
    logoText?: string,
    opacity: number
}

const NavBar = ({
    toggleSidebar,
    exclude,
    logoImg,
    logoText,
    opacity
}: RequireAtLeastOne<NavbarInterface, 'logoImg' | 'logoText'>) => {
    const location = useRouter().pathname;

    const [scrolled, setScrolled] = useState(false);
    const changeScrolled = () => window.scrollY >= 80 ? setScrolled(true) : setScrolled(false);
    useEffect(() => {window.addEventListener('scroll', changeScrolled)}, []);

    var logoElement = logoImg ? <NavLogoImg src={logoImg.src} alt='logo' /> : logoText;

    return (
        <Nav alpha={opacity} scrolled={scrolled} exclude={exclude}>
            <NavContainer>
                <NavLogo
                    href='/'
                    onClick={location == '/' ? scroll.scrollToTop : () => {}}
                >
                    {logoElement}
                </NavLogo>
                <MobileIcon onClick={toggleSidebar}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {
                        content
                        .filter(e => (
                            e.paths
                            ? e.paths.includes(location)
                            : e.excludedPaths
                            ? !e.excludedPaths.includes(location)
                            : true
                        ))
                        .map(e => (
                            <NavItem key={e.to + '-link'}>
                                <NavLink
                                    to={e.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                >
                                    {e.content}
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href='/calendar'>
                        Consultation
                    </NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>
    )
}

export default NavBar;