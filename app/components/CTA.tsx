'use client'

import BackgroundImage from '../assets/images/unsplash_XEmaJaM-4nE.png'
import styled from "styled-components"

export default function CTA() {
    return <Container>
        <Background src={BackgroundImage.src}/>
        <Wrapper>
            <H4>Designing Better Experience</H4>
            <Title>Problems trying to resolve the conflict between </Title>
            <Subtitle>Problems trying to resolve the conflict between the two major realms of Classical physics: </Subtitle>
            <Price>$16.48</Price>
            <CTAButton>ADD YOUR CALL TO ACTION</CTAButton>
        </Wrapper>
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

const Wrapper = styled.div`
    max-width: 571px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const H4 = styled.h6`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: 0.2px;
    color: #23A6F0;
`

const Title = styled.h2`
    margin: 0;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0.2px;
`

const Subtitle = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #737373;
    max-width: 80%;
    margin: auto;
`

const Price = styled.span`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
    color: #23856D;
`

const CTAButton = styled.button`
    all: unset;
    padding: 15px 40px;
    background: #23A6F0;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
    border-radius: 5px;
`

