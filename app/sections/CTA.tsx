'use client'

import { Button, Stack, Typography } from '@mui/material'

import BackgroundImage from '../assets/images/unsplash_XEmaJaM-4nE.png'
import styled from "styled-components"

export default function CTA() {
    return <Container>
        <Background src={BackgroundImage.src}/>
        <Stack gap={4} maxWidth='571px' margin='auto'>
            <Typography variant='h4' color='secondary.main'>Designing Better Experience</Typography>
            <Typography variant='h2'>Problems trying to resolve the conflict between </Typography>
            <Typography variant='subtitle1'>Problems trying to resolve the conflict between the two major realms of Classical physics: </Typography>
            <Typography variant='h3' color='secondary.dark'>$16.48</Typography>
            <Button variant='contained' color='secondary'>ADD YOUR CALL TO ACTION</Button>
        </Stack>
    </Container>
}

const Container = styled.div`
    padding: 112px 28px;
    text-align: center;
    position: relative;
`

const Background = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`