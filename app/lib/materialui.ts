import { Montserrat } from "next/font/google"
import { createTheme } from "@mui/material"

const font = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export default function useTheme() {

    return createTheme({
        palette:  {
            primary: {
                main: '#252B42',
                light: '#737373',
                contrastText: '#BDBDBD'
            },
            secondary: {
                main: '#23A6F0',
                light: '#2DC071',
                dark: '#23856D',
                contrastText: 'white'
            },
        },
        typography: {
            allVariants: {
                fontFamily: font.style.fontFamily,
                textTransform: 'none'
            },
            h2: {
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '50px',
                letterSpacing: '0.2px',
            },
            h3: {
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '32px',
                letterSpacing: '0.1px'
            },
            h4: {
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '30px',
                letterSpacing: '0.2px',
            },
            h5: {
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0.1px'
            },
            h6: {
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0.2px',
                color: '#737373'
            },
            subtitle1: {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.2px'
            },
            subtitle2: {
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.2px'
            },
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'contained' },
                        style: {
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: '22px',
                            letterSpacing: '0.2px',
                            padding: '15px 40px',
                            width: 'fit-content',
                            margin: 'auto'
                        }
                    }
                ]
            },
            MuiLink: {
                variants: [
                    {
                        props: { variant: 'h3' },
                        style: {
                            fontSize: '14px',
                            fontWeight: 700,
                            lineHeight: '24px',
                            letterSpacing: '0.2px',
                            textDecoration: 'none',
                            color: '#737373'
                        },
                    }
                ]
            },
        }
    })
}