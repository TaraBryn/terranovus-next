import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import React from 'react'
import { useRouter } from 'next/router'
import content from './Navbar.content'

const SidebarContainer = styled.aside<{
    exclude?: boolean
    isOpen: boolean
}>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    display: ${props => props.exclude ? 'none' : 'grid'};
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${props => props.isOpen ? '100%' : '0'};
    top: ${props => props.isOpen ? '0' : '-100%'};
`

const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.colors.contrast};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${props => props.theme.colors.highlight};
        transition: all 0.2s ease-in-out;
    }
`

const IconWrapper = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    color: ${props => props.theme.colors.contrast};
`

const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 89px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${props => props.theme.colors.contrast};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.highlight};
        transition: all 0.2s ease-in-out;
    }
`

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const SidebarRoute = styled(Link)`
    border-radius: 50px;
    background: ${props => props.theme.colors.highlight};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${props => props.theme.colors.contrast};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.theme.colors.contrast};
        color: ${props => props.theme.colors.highlight};
    }
`
interface SidebarInterface {
    exclude?: boolean,
    isOpen: boolean,
    toggle: () => void
}

const Sidebar = ({
    exclude,
    isOpen,
    toggle
}: SidebarInterface) => {
    const location = useRouter().pathname;

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <IconWrapper onClick={toggle}>
                <CloseIcon />
            </IconWrapper>
            <SidebarWrapper>
                <SidebarMenu>
                    {
                        content.filter(e =>  (
                            e.paths
                            ? e.paths.includes(location)
                            : e.excludedPaths
                            ? !e.excludedPaths.includes(location)
                            : true
                        ))
                        .map(e => (
                            <SidebarLink
                                to={e.to}
                                onClick={toggle}
                                key={e.to + '-link'}
                            >
                                {e.content}
                            </SidebarLink>
                        ))
                    }
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href='/calendar'>
                        consultation
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar