'use client'

import { Container, Link, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react'

import { ProductType } from './types';
import styled from "styled-components"
import { useRouter } from 'next/navigation';

type Props = {
    increment?: number;
    initialLimit?: number;
    loadMore?: boolean
}

export default function BestSellers({increment = 5, initialLimit = 10, loadMore = true} : Props) {
    const router = useRouter()
    
    const [products, setProducts] = useState<ProductType[]>([])
    const [limit, setLimit] = useState(initialLimit)
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
            <Stack gap={7} paddingY={{xs: 5, md: 10}} paddingX={{xs: 3, md: 0}} alignItems='center'>
                <Stack gap={1} alignItems='center' width={{xs: '239px', md: 'unset'}}>
                    <Typography variant='h4' textAlign='center' color='primary.light'>Featured Products</Typography>
                    <Typography variant='h3' textAlign='center'>BESTSELLER PRODUCTS</Typography>
                    <Typography variant='subtitle1' textAlign='center'>Problems trying to resolve the conflict between </Typography>
                </Stack>
                <Stack gap={2} direction={{ xs: 'column', md: 'row'}} flexWrap='wrap'>
                    {products.map((product) => <Product key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
                        <Image src={product.thumbnail} alt={product.title}/>
                        <Stack gap={1} padding='25px' alignItems='center'>
                            <Typography variant='h5' textAlign='center'>{product.title}</Typography>
                            <Link variant='h3' textAlign='center'>{product.description}</Link>
                            <Stack gap={0.5} direction='row'>
                                <Typography variant='h5' color='primary.contrastText'>${product.price}</Typography>
                                <Typography variant='h5' color='secondary.dark'>${(product.price - (product.price * product.discountPercentage/100)).toFixed(2)}</Typography>
                            </Stack>
                        </Stack>
                    </Product>)}
                </Stack>
                {loadMore && showLoadMore && <LoadMoreProduct onClick={() => setLimit(limit + increment)}>
                LOAD MORE PRODUCTS
                </LoadMoreProduct>}
            </Stack>
        </Container>
}

const Product = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background: white;

    @media (min-width: 900px) {
        width: 18.4%;
    }
`

const Image = styled.img`
    width: 100%;
    height: 360px;
    object-fit: cover;

    @media (min-width: 900px) {
        height: 238px;
    }
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
    margin: auto;
    width: fit-content;
    cursor: pointer;
`