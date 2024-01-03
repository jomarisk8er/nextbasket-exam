'use client'

import Background1 from '../assets/images/card-cover-5.jpg'
import Background2 from '../assets/images/card-cover-6.jpg'
import Background3 from '../assets/images/card-cover-7.jpg'
import Background4 from '../assets/images/card-cover-8.jpg'
import styled from "styled-components"

export default function Categories() {
    return <Container>
        <CategoryList>
            <MainCategory>
                <Category>
                    <Background src={Background1.src}/>
                    <ItemCount>5 Items</ItemCount>
                    <Name>FURNITURE</Name>
                    <ReadMore>Read More</ReadMore>
                </Category>
            </MainCategory>
            
            <SecondCategory>
                <Category>
                    <Background src={Background4.src}/>
                    <ItemCount>5 Items</ItemCount>
                    <Name>FURNITURE</Name>
                    <ReadMore>Read More</ReadMore>
                </Category>
                <MoreCategory>
                    <Category>
                        <Background src={Background2.src}/>
                        <ItemCount>5 Items</ItemCount>
                        <Name>FURNITURE</Name>
                        <ReadMore>Read More</ReadMore>
                    </Category>
                    <Category>
                        <Background src={Background3.src}/>
                        <ItemCount>5 Items</ItemCount>
                        <Name>FURNITURE</Name>
                        <ReadMore>Read More</ReadMore>
                    </Category>
                </MoreCategory>
            </SecondCategory>
        </CategoryList>
    </Container>
}

const Container = styled.div`
    margin: 40px;
    display: flex;
    justify-content: center;

    @media (min-width: 1024px) {
        margin: 80px;
    }
`

const CategoryList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 1129px;
    margin: auto;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    @media (min-width: 1024px) {
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

const ItemCount = styled.h6`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    margin: 0;
    color: #2DC071;
`

const Name = styled.h3`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
    margin: 0;
`

const ReadMore = styled.a`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
`

const MainCategory = styled.div`
    display: flex;

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
        width: 60%;

        & > ${Category} {
            max-width: unset;
        }
    }
`

const MoreCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`
