'use client';

import ClientImageAws from '../assets/images/fa-brands_aws.svg'
import ClientImageHat from '../assets/images/fa-brands_pied-piper-hat.svg'
import ClientImageHooli from '../assets/images/fa-brands_hooli.svg'
import ClientImageLyft from '../assets/images/fa-brands_lyft.svg'
import ClientImageReddit from '../assets/images/fa-brands_reddit-alien.svg'
import ClientImageStripe from '../assets/images/fa-brands_stripe.svg'
import styled from "styled-components";

export default function Clients() {
    return <Container>
        <Wrapper>
            <ClientList>
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
            </ClientList>
        </Wrapper>
    </Container>
}

const Container = styled.div`
    padding: 40px;
`

const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
`

const ClientList = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
        gap: 30px;
    }
`

const Client = styled.div`
    width: 120px;
`

const Image = styled.img`
    width: 100%;
`

