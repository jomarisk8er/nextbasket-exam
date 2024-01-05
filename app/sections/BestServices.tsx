'use client'

import { Container, Stack, Typography } from '@mui/material'

import ServiceImage1 from '../assets/images/bx_bxs-book-reader.svg'
import ServiceImage2 from '../assets/images/carbon_book.svg'
import ServiceImage3 from '../assets/images/uil_arrow-growth.svg'
import styled from "styled-components"

export default function BestServices() {
    
    return <Container >
        <Stack gap={10} paddingY={{xs: 5, md: 10}} paddingX={{xs: 3, md: 0}} alignItems='center'>
            <Texts>
                <Typography variant='h4' textAlign='center' color='primary.light'>Featured Services</Typography>
                <Typography variant='h3' textAlign='center'>THE BEST SERVICES</Typography>
                <Typography variant='subtitle1' textAlign='center'>Problems trying to resolve the conflict between </Typography>
            </Texts>
            <Stack gap={4} direction={{ xs: 'column', md: 'row'}} textAlign='center'>
                <Stack gap={2} alignItems='center' maxWidth='232px' padding='40px'>
                    <Image src={ServiceImage1.src} alt='image'/>
                    <Typography variant='h3'>Easy Wins</Typography>
                    <Typography variant='subtitle1'>Get your best looking smile now!</Typography>
                </Stack>
                <Stack gap={2} alignItems='center' maxWidth='232px' padding='40px'>
                    <Image src={ServiceImage2.src} alt='image'/>
                    <Typography variant='h3'>Concrete</Typography>
                    <Typography variant='subtitle1'>Defalcate is most focused in helping you discover your most beautiful smile</Typography>
                </Stack>
                <Stack gap={2} alignItems='center' maxWidth='232px' padding='40px'>
                    <Image src={ServiceImage3.src} alt='image'/>
                    <Typography variant='h3'>Hack Growth</Typography>
                    <Typography variant='subtitle1'>Overcame any hurdle or any other problem.</Typography>
                </Stack>
            </Stack>
        </Stack>
    </Container>
}

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const Image = styled.img`
    width: 72px;
    height: 72px;
`