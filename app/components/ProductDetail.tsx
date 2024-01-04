'use client'

import Breadcrumbs from "./Breadcrumbs";
import CartIcon from '../assets/images/icn favorite (3).svg'
import ChevronLeft from '../assets/images/ChevronLeft.svg'
import ChevronRight from '../assets/images/ChevronRight.svg'
import EmptyStarIcon from '../assets/images/icn bxs-star.svg'
import FavoriteIcon from '../assets/images/icn favorite (5).svg'
import MoreIcon from '../assets/images/icn favorite (4).svg'
import { ProductType } from "./types";
import StarIcon from '../assets/images/icn bx-star.svg'
import { addToCart } from "../lib/cart";
import { addToWishlist } from "../lib/wishlist";
import styled from "styled-components";
import { toast } from "react-toastify";
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

    return <Container>
        <Wrapper>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProductContainer>
                <Carousel>
                    <Prev src={ChevronLeft.src} onClick={prev}/>
                    <Images>
                        {product.images.map((image, i) => <Image className={`carousel-${i}`} key={image} alt={image} src={image}/>)}
                    </Images>
                    <Next src={ChevronRight.src} onClick={next}/>
                    <Thumbnails>
                        {product.images.map((image, i) => <Thumbnail key={image} onClick={() => thumbnailClick(i)} alt={image} src={image}/>)}
                    </Thumbnails>
                </Carousel>
                <ProductDetails>
                <Title>{product.title}</Title>
                <Ratings>
                    <Stars>
                        {[1,2,3,4,5].map(star => {
                            if(star > product.rating)
                            return  <Star key={`star-${star}`} src={StarIcon.src} />
                            else return  <Star key={`star-${star}`} src={EmptyStarIcon.src} />
                        })}
                    </Stars>
                    <Reviews>
                        10 Reviews
                    </Reviews>
                </Ratings>
                <Price>${product.price.toFixed(2)}</Price>
                <Availablity>
                    <b>Availability</b> :
                    <span>{product.stock > 0 ? 'In Stock' : 'Out of stock'}</span>
                </Availablity>
                <Description>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </Description>
                <Interactions>
                    <Colors>
                        {['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map(color => <Color key={color} $color={color}/>)}
                    </Colors>
                    <Buttons>
                        <SelectOptions>Select Options</SelectOptions>
                        <CircleButtons>
                            <CircleButton>
                                <CircleButtonIcon src={FavoriteIcon.src} onClick={() => {
                                    dispatch(addToWishlist({
                                        id: product.id,
                                        name: product.title,
                                        thumbnail: product.thumbnail
                                    }))
                                }}/>
                            </CircleButton>
                            <CircleButton>
                                <CircleButtonIcon src={CartIcon.src} onClick={() => {
                                    dispatch(addToCart({
                                        id: product.id,
                                        name: product.title,
                                        quantity: 1,
                                        price: product.price - (product.price * product.discountPercentage / 100),
                                        thumbnail: product.thumbnail
                                    }))
                                }}/>    
                            </CircleButton>
                            <CircleButton>
                                <CircleButtonIcon src={MoreIcon.src} />
                            </CircleButton>
                        </CircleButtons>
                    </Buttons>
                </Interactions>
            </ProductDetails>
            </ProductContainer>
            
        </Wrapper>
    </Container>
}

const Container = styled.div`
    padding: 40px;
    background: #FAFAFA;
`

const Wrapper = styled.div`
    max-width: 1114px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 72px;

    @media (min-width: 1024px) {
        gap: 34px;
    }
`

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

const Carousel = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1024px) {
        width: 50%;
    }
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
`

const Next = styled.img`
    position: absolute;
    right: 30px;
    top: calc(30% - 24px);
`

const Thumbnails = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 19px;
    padding: 10px 0;
`

const Thumbnail = styled.img`
    width: 100px;
    height: 75px;
`

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 11px 24px;

    @media (min-width: 1024px) {
        width: 50%;
    }
`

const Title = styled.h4`
    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.2px;
`

const Ratings = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Stars = styled.div`
    display: flex;
    gap: 5px;
`

const Star = styled.img``

const Reviews = styled.span`
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #737373;
`

const Price = styled.h3``

const Availablity = styled.div`
    margin-top: -20px;
    display: flex;
    gap: 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.2px;
    color: #737373;

    span {
        color: #23A6F0;
    }
`

const Description = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
`;

const Interactions = styled.div`
    padding: 19px 0;
    border-top: 1px solid #BDBDBD;
    gap: 48px;
    display: flex;
    flex-direction: column;
`

const Colors = styled.div`
    display: flex;
    gap: 10px;
`

const Color = styled.div<{$color: string}>`
    width: 30px;
    height: 30px;
    background: ${({ $color }) => $color};
    border-radius: 100%;
`

const Buttons = styled.div`
    display: flex;
    gap: 10px;
`

const SelectOptions = styled.button`
    all: unset;
    padding: 10px 20px;
    background: #23A6F0;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.2px;
    white-space: nowrap;
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
    align-items: center;
`

const CircleButtonIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`