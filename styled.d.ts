import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      type: string
      primary: string
      contrast: string
      contrastShade?: string
      darkContastShade?: string
      lightContrastShade?: string
      shade: string
      darkShade?: string
      lightShade?: string
      highlight: string
      highlight2?: string
    }
  }
}
