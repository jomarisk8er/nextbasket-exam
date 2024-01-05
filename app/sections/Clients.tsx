'use client';

import { Container, Stack } from '@mui/material';

import ClientImageAws from '../assets/images/fa-brands_aws.svg'
import ClientImageHat from '../assets/images/fa-brands_pied-piper-hat.svg'
import ClientImageHooli from '../assets/images/fa-brands_hooli.svg'
import ClientImageLyft from '../assets/images/fa-brands_lyft.svg'
import ClientImageReddit from '../assets/images/fa-brands_reddit-alien.svg'
import ClientImageStripe from '../assets/images/fa-brands_stripe.svg'
import styled from "styled-components";

export default function Clients() {
    return <Container>
        <Stack gap={7} justifyContent='space-between' alignItems='center' paddingY={{ xs: 5, md: 10}} paddingX={{ xs: 5, md: 0}} direction={{ xs: 'column', md: 'row'}}>
            <Client>
                <Image alt='image' src={ClientImageHooli.src}/>
            </Client>
            <Client>
                <Image alt='image' src={ClientImageLyft.src}/>
            </Client>
            <Client>
                <Image alt='image' src={ClientImageHat.src}/>
            </Client>
            <Client>
                <Image alt='image' src={ClientImageStripe.src}/>
            </Client>
            <Client>
                <Image alt='image' src={ClientImageAws.src}/>
            </Client>
            <Client>
                <Image alt='image' src={ClientImageReddit.src}/>
            </Client>
        </Stack>
    </Container>
}

const Client = styled.div`
    width: 120px;
`

const Image = styled.img`
    width: 100%;
`

