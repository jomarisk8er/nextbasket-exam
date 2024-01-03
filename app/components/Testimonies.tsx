'use client'

import AvatarImage from '../assets/images/user.1.jpg'
import EmptyStarIcon from '../assets/images/icn bx-star.svg'
import Image1 from '../assets/images/unsplash_0y8p69vwIYM.png'
import Image2 from '../assets/images/unsplash_ah7yIXWrtKs.png'
import Image3 from '../assets/images/unsplash_6_dx4H4yi1Y.png'
import Image4 from '../assets/images/unsplash_GHztzvLLOdQ.png'
import Image5 from '../assets/images/unsplash_UUTOuXqaExk.png'
import Image6 from '../assets/images/unsplash_rhn8ff1G_QY.png'
import Image7 from '../assets/images/unsplash_jo40QKbxUP0.png'
import Image8 from '../assets/images/unsplash_QLGA5Zv3doo.png'
import Image9 from '../assets/images/unsplash_1R1ecHV4i0Y.png'
import StarIcon from '../assets/images/icn bxs-star.svg'
import styled from "styled-components"

export default function Testimonies() {
    
    return <Container>
        <Wrapper>
           <Testimony>
                <AuthorDetails>
                    <Title>What they say about us</Title>
                    <Avatar src={AvatarImage.src} />
                    <Rating>
                        <Star src={StarIcon.src}/>
                        <Star src={StarIcon.src}/>
                        <Star src={StarIcon.src}/>
                        <Star src={StarIcon.src}/>
                        <Star src={EmptyStarIcon.src}/>
                    </Rating>
                    <Comment>Slate helps you see how many more days you need to work to reach your financial goal.</Comment>
                    <Author>
                        <Name>Regina Miles</Name>
                        <Position>Designer</Position>
                    </Author>
                </AuthorDetails>
                
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
           </Testimony>
        </Wrapper>
    </Container>
}

const Container = styled.div`
    padding: 55px 28px;
    
    background: #FAFAFA;
`

const Wrapper = styled.div`
    max-width: 1129px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 56px;
`

const Testimony = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const Title = styled.h3`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.1px;
    max-width: 70%;
    text-align: center;
    margin: auto auto 38px auto;
`

const AuthorDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 30px 35px;

    @media (min-width: 1024px) {
        width: 40%;
    }
`

const Avatar = styled.img`
    width: 90px;
    height: 90px;
`

const Rating = styled.div`
    display: flex;
    gap: 5px;
`

const Star = styled.img``

const Comment = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #737373;
`

const Author = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.a`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #23A6F0;
`

const Position = styled.h6`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #252B42;
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
