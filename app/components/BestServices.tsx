'use client'

import ServiceImage1 from '../assets/images/bx_bxs-book-reader.svg'
import ServiceImage2 from '../assets/images/carbon_book.svg'
import ServiceImage3 from '../assets/images/uil_arrow-growth.svg'
import styled from "styled-components"

export default function BestServices() {
    
    return <Container>
        <Wrapper>
            <Texts>
                <H4>Featured Services</H4>
                <Title>THE BEST SERVICES</Title>
                <Subtitle>Problems trying to resolve the conflict between </Subtitle>
            </Texts>
            <Services>
                <Service>
                    <Image src={ServiceImage1.src} alt='image'/>
                    <ServiceName>Easy Wins</ServiceName>
                    <ServiceDescription>Get your best looking smile now!</ServiceDescription>
                </Service>

                <Service>
                    <Image src={ServiceImage2.src} alt='image'/>
                    <ServiceName>Concrete</ServiceName>
                    <ServiceDescription>Defalcate is most focused in helping you discover your most beautiful smile</ServiceDescription>
                </Service>
                <Service>
                    <Image src={ServiceImage3.src} alt='image'/>
                    <ServiceName>Hack Growth</ServiceName>
                    <ServiceDescription>Overcame any hurdle or any other problem.</ServiceDescription>
                </Service>
                
            </Services>
        </Wrapper>
    </Container>
}

const Container = styled.div`
    margin: 40px;
`

const Wrapper = styled.div`
    max-width: 1129px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 56px;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const H4 = styled.h4`
    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; 
    letter-spacing: 0.2px;
    color: #737373;
`

const Title = styled.h3`
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; 
    letter-spacing: 0.1px;
    text-align: center;
`

const Subtitle = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    letter-spacing: 0.2px;
    text-align: center;
    padding: 0 16px;
    color: #737373;
`

const Services = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const Service = styled.div`
    display: flex;
    flex-direction: column;
    padding: 35px 40px;
    align-items: center;
    gap: 20px;

    @media (min-width: 1024px) {
        width: 30%;
    }
`

const Image = styled.img`
    width: 72px;
    height: 72px;
`

const ServiceName = styled.h3`
    margin: 0;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
`

const ServiceDescription = styled.p`
    margin: 0;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #737373;
`