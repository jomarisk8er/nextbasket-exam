'use client'

import { Avatar, Container, Stack, Typography } from '@mui/material'
import { Star, StarBorder } from '@mui/icons-material'

import AvatarImage from '../assets/images/user.1.jpg'
import Image1 from '../assets/images/unsplash_0y8p69vwIYM.png'
import Image2 from '../assets/images/unsplash_ah7yIXWrtKs.png'
import Image3 from '../assets/images/unsplash_6_dx4H4yi1Y.png'
import Image4 from '../assets/images/unsplash_GHztzvLLOdQ.png'
import Image5 from '../assets/images/unsplash_UUTOuXqaExk.png'
import Image6 from '../assets/images/unsplash_rhn8ff1G_QY.png'
import Image7 from '../assets/images/unsplash_jo40QKbxUP0.png'
import Image8 from '../assets/images/unsplash_QLGA5Zv3doo.png'
import Image9 from '../assets/images/unsplash_1R1ecHV4i0Y.png'
import styled from "styled-components"

export default function Testimonies() {
    
    return <Section>
        <Container>
           <Stack gap={7} justifyContent='space-between' textAlign='center' direction={{ xs: 'column', md: 'row'}}>
                <Stack gap={4} alignItems='center' maxWidth='451px'>
                    <Typography variant='h3' maxWidth={{ xs: '185px', md: 'unset'}}>What they say about us</Typography>
                    <Stack gap={2} alignItems='center' padding={3.5}>
                        <Avatar sx={{ width: '90px', height: '90px'}} src={AvatarImage.src} alt='avatar'/>
                        <Stack gap={0.6} direction='row'>
                            <Star sx={{ color: '#F3CD03'}}/>
                            <Star sx={{ color: '#F3CD03'}}/>
                            <Star sx={{ color: '#F3CD03'}}/>
                            <Star sx={{ color: '#F3CD03'}}/>
                            <StarBorder sx={{ color: '#F3CD03'}}/>
                        </Stack>
                        <Typography variant='h6'>Slate helps you see how many more days you need to work to reach your financial goal.</Typography>
                        <Author>
                            <Typography variant='h6' color='secondary.main'>Regina Miles</Typography>
                            <Typography variant='h6' color='primary.main'>Designer</Typography>
                        </Author>
                    </Stack>
                </Stack>
                
                <Images>
                    <Image src={Image1.src} alt='image'/>
                    <Image src={Image2.src} alt='image'/>
                    <Image src={Image3.src} alt='image'/>
                    <Image src={Image4.src} alt='image'/>
                    <Image src={Image5.src} alt='image'/>
                    <Image src={Image6.src} alt='image'/>
                    <Image src={Image7.src} alt='image'/>
                    <Image src={Image8.src} alt='image'/>
                    <Image src={Image9.src} alt='image'/>
                </Images>
           </Stack>
        </Container>
    </Section>
}

const Section = styled.div`
    padding: 55px 28px;
    
    background: #FAFAFA;
`

const Author = styled.div`
    display: flex;
    flex-direction: column;
`

const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px 3.5%;
    @media (min-width: 1024px) {
        width: 45%;
    }
`

const Image = styled.img`
    width: 31%;
`
