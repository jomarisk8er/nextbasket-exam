'use client'

import SampleImage from '../assets/images/unsplash_gEZkP23pLZ4.png'
import styled from "styled-components"
import { useState } from "react"

export default function Tabs() {
    const tabs = [
        'Description',
        'Additional Information',
        'Reviews'
    ]
    const content = [
        <Flex key='sample-key'>
            <TextContainer>
                <Title>Description</Title>
                <Paragraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Paragraph>
                <IndentedParagraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</IndentedParagraph>
                <Paragraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Paragraph>
            </TextContainer>
            <Image alt='image' src={SampleImage.src}/>
        </Flex>
        ,
        <Flex key='sample-key'>
            <TextContainer>
                <Title>Additional Information</Title>
                <Paragraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Paragraph>
                <IndentedParagraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</IndentedParagraph>
                <Paragraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Paragraph>
            </TextContainer>
            <Image alt='image' src={SampleImage.src}/>
        </Flex>,
        <Flex key='sample-key'>
        <TextContainer>
            <Title>Reviews</Title>
            <Paragraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Paragraph>
            <IndentedParagraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</IndentedParagraph>
            <Paragraph>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</Paragraph>
        </TextContainer>
        <Image alt='image' src={SampleImage.src}/>
    </Flex>
    ]

    const [activeTab, setActiveTab] = useState(0)

    
    return <Container>
        <Wrapper>
            <TabHeaders>
                {tabs.map((tab, i) => <TabHeader key={tab} $active={i === activeTab}onClick={() => setActiveTab(i)}>{tab}</TabHeader>)}
            </TabHeaders>
            <Content>{content[activeTab]}</Content>
        </Wrapper>
    </Container>
}

const Container = styled.div`
    padding: 40px 30px;
`

const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const TabHeaders = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    border-bottom: 1px solid #ECECEC;
    width: 100%;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

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

const Content = styled.div`
    display: flex;
    flex-direction: column;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const TextContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
`

const Title = styled.h2`
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
`

const Paragraph = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
`

const IndentedParagraph = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
    padding: 0 0 0 24px;
    border-left: 2px solid #23856D;
`

const Image = styled.img``