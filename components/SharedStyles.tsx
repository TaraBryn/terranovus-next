import styled from 'styled-components'
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

export interface AppContainerInterface {
  flex?: boolean,
  flexDirection?: string,
  justify?: string,
  align?: string
}

export const AppContainer = styled.div<AppContainerInterface>`
  width: 100vw;
  max-width: 100%;
  min-height: calc(100vh - 80px);
  display: ${({flex}) => flex ? 'felx' : 'block'};
  flex-direction: ${({flexDirection}) => flexDirection || 'column'};
  justify-content: ${({justify}) => justify || 'center'};
  align-items: ${({align}) => align || 'center'};
`

export const Spacer = styled.div<{
  width?: string,
  height?: string,
  bg?: string
}>`
  height: ${({height}) => height || '1rem'};
  width: ${({width}) => width || '100%'};
  background-color: ${({bg, theme}) => bg || theme.colors.primary};
`

export const TextWrapper = styled.div<{
  bg?: string
  height?: string,
}>`
  width: 100%;
  height: ${({height}) => height ||'initial'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  background-color: ${({theme, bg}) => bg || theme.colors.primary};
`

export const TextP = styled.p<{
  fg?: string
  align?: string
}>`
  color: ${({theme, fg}) => fg || theme.colors.contrast};
  width: 90%;
  text-align: ${({align}) => align || 'justify'};
`

export const TextH1 = styled.h1<{fg?: string}>`
  color: ${({theme, fg}) => fg || theme.colors.highlight};
  width: 100%;
  text-align: center;
`

export const TextOutline: React.FC<{
  h1: string,
  content: string[]
}> = ({ h1, content }) => {
  const spacerHeight = '2rem';
  return (
    <TextWrapper>
      <Spacer height='15vh' />
      <TextH1>{h1}</TextH1>
      <Spacer height={spacerHeight} />
      {
        content.map((e,i) => (
          <>
            <TextP key={`paragraph-${i}`}>{e}</TextP>
            <Spacer height={spacerHeight} />
          </>
        ))
      }
    </TextWrapper>
  )
}

export const Button = styled(Link)<{
    bg?: string,
    fg?: string
    hoverBg?: string,
    hoverFg?: string
    large?: boolean,
    padding?: string,
    largeFont?: boolean,
    fontSize?: string
}>`
    background: ${({theme: {colors}, bg}) => (
      colors[bg] || colors.highlight
    )};
    color: ${({theme: {colors}, fg}) => (
      colors[fg] || colors.contrast
    )};
    padding: ${({large, padding}) => (
      large 
      ? '14px 48px' 
      : padding || '12px 30px'
    )};
    font-size: ${({largeFont, fontSize}) => (
      largeFont 
      ? '20px' 
      : fontSize || '16px'
    )};
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: ${({theme: {colors}, hoverBg}) => (
          colors[hoverBg] || colors.contrast
        )};
        color: ${({theme: {colors}, hoverFg}) => (
          colors[hoverFg] || colors.highlight
        )};
    }
`

export const ScrollButton = styled(LinkScroll)<{
    bg?: string,
    fg?: string,
    hoverBg?: string,
    hoverFg?: string
    large?: boolean,
    largeFont?: boolean,
}>`
  border-radius: 50px;
  background: ${({theme: {colors}, bg}) => (
    colors[bg] || colors.highlight
  )};
  color: ${({theme: {colors}, fg}) => (
    colors[fg] || colors.contrast
  )};
  padding: ${({large}) => (large ? '14px 48px' : '12px 30px')};
  font-size: ${({largeFont}) => largeFont ? '20px' : '16px'};
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({theme: {colors}, hoverBg}) => (
      colors[hoverBg] || colors.contrast
    )};
    color: ${({theme: {colors}, hoverFg}) => (
      colors[hoverFg] || colors.highlight
    )};
  }
`

export const CodeTag = styled.code`
  background: ${({theme}) => (
    theme.colors.type == 'dark'
      ? theme.colors.darkShade || theme.colors.shade
      : theme.colors.type == 'light'
      ? theme.colors.lightShade || theme.colors.shade
      : theme.colors.shade
  )};
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`
