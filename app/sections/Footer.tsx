 'use client'

import { Container, Divider, Link, Stack, Typography } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'

import styled from "styled-components"

type Props = {
    title: string;
    links: {
        title: string;
        links: {
            label: string;
            link: string;
        }[]
    }[]
}

export default function Footer({title, links}: Props) {
    return <>
            <Container>
                <Stack gap={3} justifyContent='space-between' direction={{ xs: 'column', sm: 'row'}} paddingY={5} paddingX={{xs: 3, md: 0}}>
                    <Typography variant='h3'>{title}</Typography>
                    <Stack direction='row' gap={3} alignItems='center'>
                        <Facebook color='secondary'/>
                        <Instagram color='secondary'/>
                        <Twitter color='secondary' />
                    </Stack>
                </Stack>
            </Container>
            <Container>
                <Divider />
            </Container>
        <Container>
            <Stack gap={{xs: 3, md: 9}} direction={{ xs: 'column', md: 'row'}} paddingY={9} paddingX={{xs: 3, md: 0}}>
                {links.map(link => <Stack key={`footer-link-${link.title}`} gap={2.5} direction='column'>
                    <Typography variant='h5'>{link.title}</Typography>
                    <Stack gap={1.2} direction='column'>
                        {link.links.map(sublink => <Link key={`footer-sublink-${sublink.label}`} href={sublink.link} variant='h3'>{sublink.label}</Link>)}
                    </Stack>
                </Stack>)}
                <Stack gap={2} direction='column'>
                    <Typography variant='h5'>Get In Touch</Typography>
                    <Stack direction='column'>
                        <Search>
                            <Input placeholder='Your Email'/>
                            <Button>Subscribe</Button>
                        </Search>
                        <Span>Lore imp sum dolor Amit</Span>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
        <Container>
            <Typography variant='h6' paddingY='25px' paddingX={{xs: 3, md: 0}}>
                Made With Love By Finland All Right Reserved
            </Typography>
        </Container>
    </>
}


const Search = styled.div`
    display: flex;
`

const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #E6E6E6;
    background: #F9F9F9;
    padding: 15px 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #737373;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
`

const Button = styled.button`
    all: unset;
    background: #23A6F0;
    padding: 15px 20px;
    box-sizing: border-box;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
`

const Span = styled.span`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
`