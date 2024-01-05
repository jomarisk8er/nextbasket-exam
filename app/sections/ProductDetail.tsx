'use client'

import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { FavoriteBorder, ShoppingCartOutlined, Star, StarBorder, VisibilityOutlined } from "@mui/icons-material";

import Breadcrumbs from "./Breadcrumbs";
import ChevronLeft from '../assets/images/ChevronLeft.svg'
import ChevronRight from '../assets/images/ChevronRight.svg'
import { ProductType } from "./types";
import { addToCart } from "../lib/cart";
import { addToWishlist } from "../lib/wishlist";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ProductDetail({product}: {product: ProductType}) {
    const breadcrumbs = [
        { title: 'Home', link: '/' },
        { title: 'Shop', link: `/product/${product.id}`, active: true }
    ]
    const [active, setActive] = useState(0);
    const dispatch = useDispatch()

    const prev = () => {
        let index = active;
    
        index--;
    
        index = index < 0 ? product.images.length - 1 : index;
    
        setActive(index);
    
        document.getElementsByClassName(`carousel-${index}`)[0].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      };
    
      const next = () => {
        let index = active;
    
        index++;
        index = index > product.images.length - 1 ? 0 : index;
    
        setActive(index);
    
        document.getElementsByClassName(`carousel-${index}`)[0].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      };

      const thumbnailClick = (i: number) => {
        document.getElementsByClassName(`carousel-${i}`)[0].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      };

    return <Background>
        <Container >
            <Stack alignItems='center' paddingX={{ xs: 3, md: 0}}>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <Stack gap={4} direction={{ xs: 'column', md: 'row'}} width='100%'>
                    <Stack gap={2} position='relative' width={{ md: '50%'}}>
                        <Prev src={ChevronLeft.src} onClick={prev}/>
                        <Images>
                            {product.images.map((image, i) => <Image className={`carousel-${i}`} key={image} alt={image} src={image}/>)}
                        </Images>
                        <Next src={ChevronRight.src} onClick={next}/>
                        <Stack gap={2.5} direction='row' paddingY='10px' sx={{ overflowX: 'auto'}}>
                            {product.images.map((image, i) => <Thumbnail key={image} onClick={() => thumbnailClick(i)} alt={image} src={image}/>)}
                        </Stack>
                    </Stack>
                    <Stack gap={3} padding='11px 16px'>
                    <Stack gap={1}>
                        <Typography variant='h4'>{product.title}</Typography>
                        <Stack gap={1} direction='row'>
                            <Stack gap={0.5} direction='row'>
                                {[1,2,3,4,5].map(star => {
                                    if(star > product.rating)
                                    return  <StarBorder key={`star-${star}`} sx={{ color: '#F3CD03' }}/>
                                    else return  <Star key={`star-${star}`} sx={{ color: '#F3CD03' }}/>
                                })}
                            </Stack>
                            <Reviews>
                                10 Reviews
                            </Reviews>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Typography variant='h3'>${product.price.toFixed(2)}</Typography>
                        <Stack gap={1} direction='row'>
                            <Typography variant='h6'>Availability</Typography> :
                            <Typography variant='h6'>{product.stock > 0 ? 'In Stock' : 'Out of stock'}</Typography>
                        </Stack>
                    </Stack>
                    
                    <Typography variant='h6'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </Typography>
                    <Divider />
                    <Stack gap={6}>
                        <Stack gap={1} direction='row'>
                            {['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map(color => <Color key={color} $color={color}/>)}
                        </Stack>
                        <Stack gap={1} direction='row' alignItems='center'>
                            <Button variant="contained" color='secondary' sx={{ margin: 0}}>Select Options</Button>
                            <CircleButtons>
                                <CircleButton onClick={() => {
                                        dispatch(addToWishlist({
                                            id: product.id,
                                            name: product.title,
                                            thumbnail: product.thumbnail
                                        }))
                                    }}>
                                    <FavoriteBorder />
                                </CircleButton>
                                <CircleButton onClick={() => {
                                        dispatch(addToCart({
                                            id: product.id,
                                            name: product.title,
                                            quantity: 1,
                                            price: product.price - (product.price * product.discountPercentage / 100),
                                            thumbnail: product.thumbnail
                                        }))
                                    }}>
                                    <ShoppingCartOutlined />
                                </CircleButton>
                                <CircleButton>
                                    <VisibilityOutlined />
                                </CircleButton>
                            </CircleButtons>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
        </Container>
    </Background>
}

const Background = styled.div`
    background: #FAFAFA;
`
const Images = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;

    @media (min-width: 1024px) {
        height: 450px;
    }
`

const Image = styled.img`
    min-width: 100%;
  height: 100%;
  object-fit: contain;`

const Prev = styled.img`
    position: absolute;
    left: 30px;
    top: calc(30% - 24px);
    cursor: pointer;
`

const Next = styled.img`
    position: absolute;
    right: 30px;
    top: calc(30% - 24px);
    cursor: pointer;
`


const Thumbnail = styled.img`
    width: 100px;
    height: 75px;
    cursor: pointer;
`

const Reviews = styled.span`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #737373;
`

const Color = styled.div<{$color: string}>`
    width: 30px;
    height: 30px;
    background: ${({ $color }) => $color};
    border-radius: 100%;
`

const CircleButtons = styled.div`
    display: flex;
    gap: 10px;
`

const CircleButton = styled.div`
    height: 40px;
    width: 40px;
    border: 1px solid #E8E8E8;
    background: white;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    align-items: center;
`