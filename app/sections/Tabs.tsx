'use client'

import { Container, Divider, Stack, Typography } from '@mui/material'

import SampleImage from '../assets/images/unsplash_gEZkP23pLZ4.png'
import styled from "styled-components"
import { useState } from "react"

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        'Description',
        'Additional Information',
        'Reviews'
    ]
    const content = [
        <Flex key='sample-key'>
            <Stack gap={4}>
                <Typography variant='h3'>Description</Typography>
                <Typography variant='subtitle1'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                <Typography variant='subtitle1' borderLeft='2px solid #23856D' paddingLeft={3} >Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                <Typography variant='subtitle1'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
            </Stack>
            <Image alt='image' src={SampleImage.src}/>
        </Flex>
        ,
        <Flex key='sample-key'>
            <Stack gap={4}>
                <Typography variant='h3'>Additiona Information</Typography>
                <Typography variant='subtitle1'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                <Typography variant='subtitle1' borderLeft='2px solid #23856D' paddingLeft={3} >Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
                <Typography variant='subtitle1'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
            </Stack>
            <Image alt='image' src={SampleImage.src}/>
        </Flex>,
        <Flex key='sample-key'>
        <Stack gap={4}>
            <Typography variant='h3'>Reviews</Typography>
            <Typography variant='subtitle1'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
            <Typography variant='subtitle1' borderLeft='2px solid #23856D' paddingLeft={3} >Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
            <Typography variant='subtitle1'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Typography>
        </Stack>
        <Image alt='image' src={SampleImage.src}/>
    </Flex>
    ]

    return <Container>
        <Stack gap={2.5} alignItems='center' paddingX={{ xs: 3, md: 0}} paddingY={{ xs: 1, md: 0}}>
            <Stack width='100%' alignItems='center'>
                <Stack direction={{ xs: 'column', md: 'row'}} justifyItems='center'>
                    {tabs.map((tab, i) => <TabHeader key={tab} $active={i === activeTab}onClick={() => setActiveTab(i)}>{tab}</TabHeader>)} 
                </Stack>
                <Divider flexItem/>
            </Stack>
            <Stack gap={4} direction={{ xs: 'column', md: 'row'}} width='100%'>{content[activeTab]}</Stack>
        </Stack>
    </Container>
}

const TabHeader = styled.div<{$active?: boolean}>`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: ${({ $active }) => !$active && '#737373'};
    white-space: nowrap;
    padding: 12px;
    cursor: pointer;
    text-align: center;

    @media (min-width: 1024px) {
        padding: 24px;
    }
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const Image = styled.img``