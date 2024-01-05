/* eslint-disable react/no-unescaped-entities */
'use client'

import { Card, Container, Stack, Typography } from '@mui/material'

import ArrowRightIcon1 from '../assets/images/icon arrow-next.svg'
import CommentIcon1 from '../assets/images/icon ant-design-area-chart-outlined.svg'
import DateIcon1 from '../assets/images/icon cool-icon-1.svg'
import PostImage1 from '../assets/images/unsplash_gEZkP23pLZ4.png'
import PostImage2 from '../assets/images/unsplash_CuEvrPd3NYc.png'
import PostImage3 from '../assets/images/unsplash_k0rVudBoB4c.png'
import styled from "styled-components"

export default function FeaturedPosts() {
    
    return <Container>
        <Stack gap={10} paddingX={{ xs: 3, md: 0}} paddingY={{ xs: 5, md: 10}}> 
            <Stack gap={1} alignItems='center'>
                <Typography variant='h4' color='secondary.main'>Practive Advice</Typography>
                <Typography variant='h2'>Featured Posts</Typography>
            </Stack>
            <Stack gap={4} direction={{ xs: 'column', md: 'row'}} justifyContent='space-between'>
                <Card sx={{ position: 'relative'}}>
                    <New>New</New>
                    <Image src={PostImage1.src} alt='image'/>
                    <Stack gap={1} padding={3}>
                        <Stack gap={2} direction='row'>
                            <Tag $active>Google</Tag>
                            <Tag>Trending</Tag>
                            <Tag>New</Tag>
                        </Stack>
                        <Typography variant='h4'>Loudest à la Madison #1 (L'integral)</Typography>
                        <Typography variant='subtitle1'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>
                        <Stack justifyContent='space-between' direction='row' paddingY={2}>
                            <Stack gap={0.6} direction='row'>
                                <DateIcon src={DateIcon1.src}/>
                                <Typography variant='subtitle2'> 22 April 2021</Typography>
                            </Stack>
                            <Stack gap={0.6} direction='row'><CommentIcon src={CommentIcon1.src}/>
                            <Typography variant='subtitle2'>10 comments</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={1} direction='row' alignItems='center'>
                            <Typography variant='h6' color='primary.light'>Learn More</Typography>
                            <ArrowRightIcon src={ArrowRightIcon1.src}/>
                        </Stack>
                    </Stack>
                </Card>

                <Card sx={{ position: 'relative'}}>
                    <New>New</New>
                    <Image src={PostImage2.src} alt='image'/>
                    <Stack gap={1} padding={3}>
                        <Stack gap={2} direction='row'>
                            <Tag $active>Google</Tag>
                            <Tag>Trending</Tag>
                            <Tag>New</Tag>
                        </Stack>
                        <Typography variant='h4'>Loudest à la Madison #1 (L'integral)</Typography>
                        <Typography variant='subtitle1'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>
                        <Stack justifyContent='space-between' direction='row' paddingY={2}>
                            <Stack gap={0.6} direction='row'>
                                <DateIcon src={DateIcon1.src}/>
                                <Typography variant='subtitle2'> 22 April 2021</Typography>
                            </Stack>
                            <Stack gap={0.6} direction='row'><CommentIcon src={CommentIcon1.src}/>
                            <Typography variant='subtitle2'>10 comments</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={1} direction='row' alignItems='center'>
                            <Typography variant='h6' color='primary.light'>Learn More</Typography>
                            <ArrowRightIcon src={ArrowRightIcon1.src}/>
                        </Stack>
                    </Stack>
                </Card>

                <Card sx={{ position: 'relative'}}>
                    <New>New</New>
                    <Image src={PostImage3.src} alt='image'/>
                    <Stack gap={1} padding={3}>
                        <Stack gap={2} direction='row'>
                            <Tag $active>Google</Tag>
                            <Tag>Trending</Tag>
                            <Tag>New</Tag>
                        </Stack>
                        <Typography variant='h4'>Loudest à la Madison #1 (L'integral)</Typography>
                        <Typography variant='subtitle1'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</Typography>
                        <Stack justifyContent='space-between' direction='row' paddingY={2}>
                            <Stack gap={0.6} direction='row'>
                                <DateIcon src={DateIcon1.src}/>
                                <Typography variant='subtitle2'> 22 April 2021</Typography>
                            </Stack>
                            <Stack gap={0.6} direction='row'><CommentIcon src={CommentIcon1.src}/>
                            <Typography variant='subtitle2'>10 comments</Typography>
                            </Stack>
                        </Stack>
                        <Stack gap={1} direction='row' alignItems='center'>
                            <Typography variant='h6' color='primary.light'>Learn More</Typography>
                            <ArrowRightIcon src={ArrowRightIcon1.src}/>
                        </Stack>
                    </Stack>
                </Card>

            </Stack>
        </Stack>
    </Container>
}

const Image = styled.img`
    width: 100%;
    height: 300px;
`

const New = styled.span`
    position: absolute;
    left: 20px;
    top: 20px;
    padding: 0 10px;
    background: #E74040;
    color: white;
    border-radius: 3px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    z-index: 5;
`

const Tag = styled.span<{$active?: boolean}>`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: ${({ $active }) => $active ? '#8EC2F2' : '#737373'};
`

const DateIcon = styled.img`
    width: 16px;
    height: 16px;
`

const CommentIcon = styled.img`
    width: 16px;
    height: 16px;
`

const ArrowRightIcon = styled.img`
    width: 16px;
    height: 16px;
`

