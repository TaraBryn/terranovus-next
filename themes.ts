import { DefaultTheme } from "styled-components";

interface themeInterface {
    [key: string]: DefaultTheme
}

interface colorArrayInterface {
    [key: string]: string
}

export const colors: colorArrayInterface = {
    bloodred: '#880808',
    black: '#000',
    white: '#fff',
    grey1: '#191919',
    darkGrey1: '#111',
    metallicGold: '#d4af37'
}

const themes: themeInterface = {
    dark: {
        colors: {
            type: 'dark',
            primary: colors.black,
            contrast: colors.white,
            shade: colors.grey1,
            darkShade: colors.darkGrey1,
            highlight: colors.bloodred,
            highlight2: colors.metallicGold
        }
    }
}

export default themes;