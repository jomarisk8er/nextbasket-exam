'use client'

import { Container, Stack, Typography } from '@mui/material'

import Background1 from '../assets/images/card-cover-5.jpg'
import Background2 from '../assets/images/card-cover-6.jpg'
import Background3 from '../assets/images/card-cover-7.jpg'
import Background4 from '../assets/images/card-cover-8.jpg'
import styled from "styled-components"

export default function Categories() {
    return <Container>
        <Stack paddingY={{xs: 5, md: 10}} paddingX={{ xs: 3, md: 0}} gap={2} direction={{ xs: 'column', md: 'row'}}>
            <MainCategory>
                <Category>
                    <Background src={Background1.src}/>
                    <Typography variant='h6' color='secondary.light'>5 Items</Typography>
                    <Typography variant='h2' fontSize={{ xs: '24px', md: '40px'}} lineHeight={{ xs: '32px', md: '50px'}}>FURNITURE</Typography>
                    <Typography variant='h6' color='primary'>Read More</Typography>
                </Category>
            </MainCategory>
            
            <SecondCategory>
                <Category>
                    <Background src={Background4.src}/>
                    <Typography variant='h6' color='secondary.light'>5 Items</Typography>
                    <Typography variant='h3'>FURNITURE</Typography>
                    <Typography variant='h6' color='primary'>Read More</Typography>
                </Category>
                <Stack gap={2} direction={{ xs: 'column', md: 'row'}}>
                    <Category>
                        <Background src={Background2.src}/>
                        <Typography variant='h6' color='secondary.light'>5 Items</Typography>
                        <Typography variant='h3'>FURNITURE</Typography>
                        <Typography variant='h6' color='primary'>Read More</Typography>
                    </Category>
                    <Category>
                        <Background src={Background3.src}/>
                        <Typography variant='h6' color='secondary.light'>5 Items</Typography>
                        <Typography variant='h3'>FURNITURE</Typography>
                        <Typography variant='h6' color='primary'>Read More</Typography>
                    </Category>
                </Stack>
            </SecondCategory>
        </Stack>
    </Container>
}


const Category = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    @media (min-width: 900px) {
        max-width: 331px;
    }
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1; 
    object-fit: cover;
`

const MainCategory = styled.div`
    display: flex;

    @media (min-width: 900px) {
        width: 40%;
    
        & > ${Category} {
            max-width: unset;
            height: 616px;
        }
    }
`

const SecondCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 900px) {
        width: 60%;

        & > ${Category} {
            max-width: unset;
        }
    }
`