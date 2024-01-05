'use client'

import { Container, Stack, Typography } from '@mui/material'
import { FavoriteBorder, Menu as MenuIcon, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { FocusEvent, useEffect, useState } from 'react'
import { removeToCart, updateCart } from '../lib/cart'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../lib/store'
import { removeToWishlist } from '../lib/wishlist'
import styled from "styled-components"
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter();
    const cartProducts = useSelector((state: RootState) => state.cart.products)
    const wishlistProducts = useSelector((state: RootState) => state.wishlist.products)
    const dispatch = useDispatch()

    const [showLinks, setShowLinks] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showWishlist, setShowWishlist] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let total = 0;
        cartProducts.map(product => total += product.price * product.quantity)
        
        setCartTotal(total)
    }, [cartProducts])

    const handleOnBlur = (e: FocusEvent<HTMLDivElement, Element>, callback: () => void) => {
        const currentTarget = e.currentTarget;

        requestAnimationFrame(() => {
        if (currentTarget && !currentTarget.contains(document.activeElement)) {
            callback()
        }
        });
    }

    return <Container>
                <Stack justifyContent='space-between' alignItems='center' direction='row' padding={3}>
                    <Logo onClick={() => router.push('/')}>Bandage</Logo>
                    <Links $show={showLinks}>
                        <Link>Home</Link>
                        <Link>Product</Link>
                        <Link>Pricing</Link>
                        <Link>Contact</Link>
                    </Links>
                    <Stack gap={3} direction='row'>
                        <Menu>
                            <Search color='secondary'/>
                        </Menu>
                        <Menu tabIndex={0} onBlur={(e) => handleOnBlur(e, () => setShowCart(false))}>
                            <ShoppingCartOutlined color='secondary' onClick={() => setShowCart(!showCart)} />
                            {showCart && <CartContainer>
                                <Stack gap={2} direction='column'>
                                    {cartProducts.length === 0 && <b>Your cart is empty</b>}
                                    {cartProducts.map(product => <CartProduct key={`cart-product-${product.id}`}>
                                        <Stack gap={2} direction='row' onClick={() => router.push(`/product/${product.id}`)}>
                                            <Thumbnail src={product.thumbnail} />
                                            <Typography variant='h5'>{product.name}</Typography>
                                        </Stack>
                                        <Stack justifyContent='space-between' direction='row'>
                                            <div>x
                                            <Quantity type='number' defaultValue={product.quantity} onBlur={(e) => product.quantity !== Number(e.currentTarget.value) && dispatch(updateCart({id: product.id, quantity: Number(e.currentTarget.value)}))}/></div>
                                            <Typography variant='h6'>${product.price.toFixed(2)}</Typography>
                                        </Stack>
                                        <RemoveProduct onClick={() => dispatch(removeToCart({id: product.id}))}>x</RemoveProduct>
                                    </CartProduct>)}
                                </Stack>
                                <Total>
                                    <b>Total</b>
                                    <b>${cartTotal.toFixed(2)}</b>
                                </Total>
                            </CartContainer>}
                        </Menu>
                        <Menu tabIndex={0} onBlur={(e) => handleOnBlur(e, () => setShowWishlist(false))}>
                            <FavoriteBorder color='secondary' onClick={() => setShowWishlist(!showWishlist)}/>
                            {showWishlist && <CartContainer >
                                <CartList>
                                    {wishlistProducts.length === 0 && <b>Your wishlist is empty</b>}
                                    {wishlistProducts.map(product => <CartProduct key={`cart-product-${product.id}`}>
                                        <Stack gap={2} direction='row' onClick={() => router.push(`/product/${product.id}`)}>
                                            <Thumbnail src={product.thumbnail} />
                                            <Typography variant='h5'>{product.name}</Typography>
                                        </Stack>
                                        <RemoveProduct onClick={() => dispatch(removeToWishlist({id: product.id}))}>x</RemoveProduct>
                                    </CartProduct>)}
                                </CartList>
                            </CartContainer>}
                        </Menu>
                        <Menu $mobileOnly={true} onClick={() => setShowLinks(!showLinks)}>
                            <MenuIcon />
                        </Menu>
                    </Stack>
                </Stack>
                
            </Container>
} 

const Total = styled.div`
    display: flex;
    justify-content: space-between;
`

const CartContainer = styled.div`
    position: absolute;
    right: 7%;
    top: 80px;
    background: white;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
    padding: 12px;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 500px;
    gap: 30px;
    z-index: 11;
`

const CartList = styled.div`
    display: flex;
    flex-direction: column;
`

const CartProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    padding: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #E6E6E6;
`

const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
`

const Quantity = styled.input`
    border: 1px solid #E6E6E6;
    width: 30px;
`

const RemoveProduct = styled.span`
    all: unset;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    font-weight: 700;
`

const Logo = styled.a`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
    cursor: pointer;
`

const Links = styled.div<{$show: boolean}>`
    padding: 83px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    display: ${({ $show }) => !$show && 'none'};
    background: white;
    z-index: 10;

    @media (min-width: 900px) {
        position: static;
        display: flex;
        flex-direction: row;
        width: 50%;
        padding: 0;
    }
`

const Link = styled.a`
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0.2px;
    color: #737373;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; 
        letter-spacing: 0.2px;
    }
`

const Menu = styled.div<{$mobileOnly?: boolean}>`
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    @media (min-width: 900px) {
        display: ${({ $mobileOnly }) => $mobileOnly && 'none'}
    }
`
