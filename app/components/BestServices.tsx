'use client'

import { useEffect, useState } from 'react'

import styled from "styled-components"

export default function BestServices() {
    
    const [products, setProducts] = useState<ProductType[]>([])
    const [limit, setLimit] = useState(5)
    const [showLoadMore, setShowLoadMore] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}`)
        .then((data) => data.json())
        .then((data) => {
            if(data['products'].length < limit) setShowLoadMore(false)
            setProducts(data['products'])
            
        })
    }, [limit])

    return <Container>
        <Wrapper>
            <Texts>
                <H4>Featured Products</H4>
                <Title>BESTSELLER PRODUCTS</Title>
                <Subtitle>Problems trying to resolve the conflict between </Subtitle>
            </Texts>
            <Products>
                {products.map((product) => <Product key={product.id}>
                    <Image src={product.thumbnail} alt={product.title}/>
                        <ProductDetails>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductDescription>{product.description}</ProductDescription>
                        <Price>
                            <OriginalPrice>${product.price}</OriginalPrice>
                            <CurrentPrice>${(product.price - (product.price * product.discountPercentage/100)).toFixed(2)}</CurrentPrice>
                        </Price>
                    </ProductDetails>
                </Product>)}
            </Products>
            {showLoadMore && <LoadMoreProduct onClick={() => setLimit(limit + 5)}>
            LOAD MORE PRODUCTS
            </LoadMoreProduct>}
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
    line-height: 30px; /* 150% */
    letter-spacing: 0.2px;
    color: #737373;
`

const Title = styled.h3`
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.1px;
    text-align: center;
`

const Subtitle = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.2px;
    text-align: center;
    padding: 0 16px;
    color: #737373;
`

const Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2%;
    }
`

const Product = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        width: 18.4%;
    }
`

const Image = styled.img`
    width: 100%;
    height: 360px;
    object-fit: cover;

    @media (min-width: 1024px) {
        height: 238px;
    }
`

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    gap: 16px;
`

const ProductTitle = styled.h5`
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.1px;
`

const ProductDescription = styled.p`
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.2px;
    text-align: center;
`

const Price = styled.div`
    display: flex;
    gap: 5px;
`

const OriginalPrice = styled.h5`
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.1px;
    color: #BDBDBD;
`

const CurrentPrice = styled.h5`
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.1px;
    color: #23856D;
`

const LoadMoreProduct = styled.button`
    all: unset;
    padding: 15px;
    text-align: center;
    border: 1px solid #23A6F0;
    border-radius: 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.2px;
    color: #23A6F0;

    @media (min-width: 1024px) {
        width: fit-content;
        margin: auto;
    }
`