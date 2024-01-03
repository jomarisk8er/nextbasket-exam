 'use client'

import FacebookLogo from '../assets/images/ant-design_facebook-filled.svg'
import InstagramLogo from '../assets/images/ant-design_instagram-outlined.svg'
import TwitterLogo from '../assets/images/ant-design_twitter-outlined.svg'
import styled from "styled-components"

export default function Footer() {
    return <Container>
            <Head>
                <HeadWrapper>
                    <Title>Bandage</Title>
                    <SocialMedias>
                        <SocialMedia>
                            <Icon src={FacebookLogo.src}/>
                        </SocialMedia>
                        <SocialMedia>
                            <Icon src={InstagramLogo.src}/>
                        </SocialMedia>
                        <SocialMedia>
                            <Icon src={TwitterLogo.src}/>
                        </SocialMedia>
                    </SocialMedias>
                </HeadWrapper>
            </Head>
        <Wrapper>
            <LinkCategories>
            <LinkCategory>
                    <CategoryTitle>Company Info</CategoryTitle>
                    <Links>
                        <Link>About Us</Link>
                        <Link>Carrier</Link>
                        <Link>We are hiring</Link>
                        <Link>Blog</Link>
                    </Links>
                </LinkCategory>
                <LinkCategory>
                    <CategoryTitle>Legal</CategoryTitle>
                    <Links>
                        <Link>About Us</Link>
                        <Link>Carrier</Link>
                        <Link>We are hiring</Link>
                        <Link>Blog</Link>
                    </Links>
                </LinkCategory>
                <LinkCategory>
                    <CategoryTitle>Features</CategoryTitle>
                    <Links>
                        <Link>Business Marketing</Link>
                        <Link>User Analytic</Link>
                        <Link>Live Chat</Link>
                        <Link>Unlimited Support</Link>
                    </Links>
                </LinkCategory>
                <LinkCategory>
                    <CategoryTitle>Resources</CategoryTitle>
                    <Links>
                        <Link>IOS & Android</Link>
                        <Link>Watch a Demo</Link>
                        <Link>Customers</Link>
                        <Link>API</Link>
                    </Links>
                </LinkCategory>

                <LinkCategory>
                    <CategoryTitle>Get In Touch</CategoryTitle>
                    <Search>
                        <Input placeholder='Your Email'/>
                        <Button>Subscribe</Button>
                    </Search>
                    <Span>Lore imp sum dolor Amit</Span>
                </LinkCategory>
            </LinkCategories>
        </Wrapper>
        <Copyright>
            <CopyrightWrapper>
                Made With Love By Finland All Right Reserved
            </CopyrightWrapper>
        </Copyright>
    </Container>
}

const Container = styled.div`
`

const Head = styled.div`
    background: #FAFAFA;
    padding: 40px;
`

const HeadWrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const Title = styled.h3`
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
`

const SocialMedias = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: 1024px) {
        padding: 0 40px;
    }
`

const SocialMedia = styled.a``

const Icon = styled.img``


const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    padding: 0 40px;
`

const LinkCategories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 70px 0;
    
    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const LinkCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const CategoryTitle = styled.h5`
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.1px;
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Link = styled.a`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #737373;
`

const Search = styled.div`
    display: flex;
`

const Input = styled.input`
    border-radius: 5px;
    border: 1px solid #E6E6E6;
    background: #F9F9F9;
    padding: 15px 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #737373;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
`

const Button = styled.button`
    all: unset;
    background: #23A6F0;
    padding: 15px 20px;
    box-sizing: border-box;
    color: white;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

const Span = styled.span`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.2px;
`

const CopyrightWrapper = styled.h6`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #737373;
    text-align: center;
    max-width: 200px;
    margin: 0;

    @media (min-width: 1024px) {
        text-align: left;
        max-width: 1114px;
        width: 100%;
    }
`

const Copyright = styled.div`
    padding: 25px;
    background: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    
`