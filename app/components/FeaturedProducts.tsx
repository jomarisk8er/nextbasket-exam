'use client'

import ArrowRightIcon1 from '../assets/images/icon arrow-next.svg'
import CommentIcon1 from '../assets/images/icon ant-design-area-chart-outlined.svg'
import DateIcon1 from '../assets/images/icon cool-icon-1.svg'
import PostImage1 from '../assets/images/unsplash_gEZkP23pLZ4.png'
import PostImage2 from '../assets/images/unsplash_CuEvrPd3NYc.png'
import PostImage3 from '../assets/images/unsplash_k0rVudBoB4c.png'
import styled from "styled-components"

export default function FeatureProducts() {
    
    return <Container>
        <Wrapper>
            <Texts>
                <H4>Practive Advice</H4>
                <Title>Featured Posts</Title>
            </Texts>
            <Posts>
                <Post>
                    <New>New</New>
                    <Image src={PostImage1.src} alt='image'/>
                    <PostDetails>
                        <Tags>
                            <Tag $active>Google</Tag>
                            <Tag>Trending</Tag>
                            <Tag>New</Tag>
                        </Tags>
                        <PostTitle>Loudest à la Madison #1 (L'integral)</PostTitle>
                        <PostDescription>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</PostDescription>
                        <DateAndComments>
                            <Date>
                                <DateIcon src={DateIcon1.src}/> 22 April 2021
                            </Date>
                            <Comments><CommentIcon src={CommentIcon1.src}/> 10 comments</Comments>
                        </DateAndComments>
                        <LearnMore>Learn More <ArrowRightIcon src={ArrowRightIcon1.src}/></LearnMore>
                    </PostDetails>
                </Post>

                <Post>
                    <New>New</New>
                    <Image src={PostImage2.src} alt='image'/>
                    <PostDetails>
                        <Tags>
                            <Tag $active>Google</Tag>
                            <Tag>Trending</Tag>
                            <Tag>New</Tag>
                        </Tags>
                        <PostTitle>Loudest à la Madison #1 (L'integral)</PostTitle>
                        <PostDescription>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</PostDescription>
                        <DateAndComments>
                            <Date>
                                <DateIcon src={DateIcon1.src}/> 22 April 2021
                            </Date>
                            <Comments><CommentIcon src={CommentIcon1.src}/> 10 comments</Comments>
                        </DateAndComments>
                        <LearnMore>Learn More <ArrowRightIcon src={ArrowRightIcon1.src}/></LearnMore>
                    </PostDetails>
                </Post>

                <Post>
                    <New>New</New>
                    <Image src={PostImage3.src} alt='image'/>
                    <PostDetails>
                        <Tags>
                            <Tag $active>Google</Tag>
                            <Tag>Trending</Tag>
                            <Tag>New</Tag>
                        </Tags>
                        <PostTitle>Loudest à la Madison #1 (L'integral)</PostTitle>
                        <PostDescription>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</PostDescription>
                        <DateAndComments>
                            <Date>
                                <DateIcon src={DateIcon1.src}/> 22 April 2021
                            </Date>
                            <Comments><CommentIcon src={CommentIcon1.src}/> 10 comments</Comments>
                        </DateAndComments>
                        <LearnMore>Learn More <ArrowRightIcon src={ArrowRightIcon1.src}/></LearnMore>
                    </PostDetails>
                </Post>
            </Posts>
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
    text-align: center;
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 10px;
    }
`

const Post = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
    position: relative;
`

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

const PostDetails = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Tags = styled.div`
    display: flex;
    gap: 15px;
`

const Tag = styled.span<{$active?: boolean}>`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: ${({ $active }) => $active ? '#8EC2F2' : '#737373'};
`

const PostTitle = styled.h4`
    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.2px;
`

const PostDescription = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
`

const DateAndComments = styled.div`
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
`

const Date = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Comments = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    gap: 5px;
`

const LearnMore = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    gap: 12px;
`

const DateIcon = styled.img``

const CommentIcon = styled.img``

const ArrowRightIcon = styled.img``

