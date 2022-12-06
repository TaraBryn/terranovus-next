import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body
  {
    background: ${({ theme }) => theme.colors.primary};
    color: ${props => props.theme.colors.contrast};
  }

  * {
    font-family: Encode Sans Expanded, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    background: ${props => props.theme.colors.highlight}
  }

  a {
    color: ${props => props.theme.colors.highlight2 || 'inherit'};
    text-decoration: none;
  }
`

export default GlobalStyle
