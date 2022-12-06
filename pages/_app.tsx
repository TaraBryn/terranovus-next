import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/GlobalStyles'
import themes from '../themes'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import logo from '../media/TerraNovus_logo_01_REDROSES.png';
import { Container } from '../components/SharedStyles'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const theme: DefaultTheme = themes.dark

export const AppContext = React.createContext({
  excludeNav: false,
  setExcludeNav: undefined,
  excludeFooter: false,
  setExcludeFooter: undefined
})

export default function App({ Component, pageProps }: AppProps) {
  const location = useRouter().pathname;
  useEffect(() => {window.scrollTo(0,0)}, [location]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navAlpha, setNavAlpha] = useState(1);
  const [excludeNav, setExcludeNav] = useState(false);
  const [excludeFooter, setExcludeFooter] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleNavAlpha = () => setNavAlpha(navAlpha ? 0 : 1);

  return (
    <AppContext.Provider value={{
      excludeNav, 
      setExcludeNav,
      excludeFooter,
      setExcludeFooter
    }}>
    <ThemeProvider theme={theme}>
        <Sidebar
            exclude={excludeNav}
            isOpen={sidebarOpen}
            toggle={toggleSidebar}
          />
          <NavBar 
            toggleSidebar={toggleSidebar}
            exclude={excludeNav}
            logoImg={logo}
            opacity={navAlpha}
          />
        <GlobalStyle />
        <Container>
            <Component {...pageProps} />
        </Container>
        <Footer exclude={excludeFooter} />
      </ThemeProvider>
    </AppContext.Provider>
  )
}
