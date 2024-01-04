'use client'

import { FocusEvent, useEffect, useState } from 'react'
import { removeToCart, updateCart } from '../lib/cart'
import { useDispatch, useSelector } from 'react-redux'

import IconCart from '../assets/images/icn settings icn-xs (1).svg'
import IconMenu from '../assets/images/icon-menu.svg'
import IconSearch from '../assets/images/icn settings icn-xs.svg'
import IconWishlist from '../assets/images/icn settings icn-xs (2).svg'
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
                <Logo onClick={() => router.push('/')}>Bandage</Logo>
                <Links $show={showLinks}>
                    <Link>Home</Link>
                    <Link>Product</Link>
                    <Link>Pricing</Link>
                    <Link>Contact</Link>
                </Links>
                <Menus>
                    <Menu>
                    <MenuIcon src={IconSearch.src}/>
                    </Menu>
                    <Menu tabIndex={0} onBlur={(e) => handleOnBlur(e, () => setShowCart(false))}>
                        <MenuIcon src={IconCart.src} onClick={() => setShowCart(!showCart)} />
                        {showCart && <CartContainer>
                            <CartList>
                                {cartProducts.length === 0 && <b>Your cart is empty</b>}
                                {cartProducts.map(product => <CartProduct key={`cart-product-${product.id}`}>
                                    <ThumbnailAndProductName onClick={() => router.push(`/product/${product.id}`)}>
                                        <Thumbnail src={product.thumbnail} />
                                        <ProductName>{product.name}</ProductName>
                                    </ThumbnailAndProductName>
                                    <QuantityAndPrice>
                                        <div>x
                                        <Quantity type='number' defaultValue={product.quantity} onBlur={(e) => product.quantity !== Number(e.currentTarget.value) && dispatch(updateCart({id: product.id, quantity: Number(e.currentTarget.value)}))}/></div>
                                        <Price>${product.price.toFixed(2)}</Price>
                                    </QuantityAndPrice>
                                    <RemoveProduct onClick={() => dispatch(removeToCart({id: product.id}))}>x</RemoveProduct>
                                </CartProduct>)}
                            </CartList>
                            <Total>
                                <b>Total</b>
                                <b>${cartTotal.toFixed(2)}</b>
                            </Total>
                        </CartContainer>}
                    </Menu>
                    <Menu tabIndex={0} onBlur={(e) => handleOnBlur(e, () => setShowWishlist(false))}>
                        <MenuIcon src={IconWishlist.src}  onClick={() => setShowWishlist(!showWishlist)}/>
                        {showWishlist && <CartContainer >
                            <CartList>
                                {wishlistProducts.length === 0 && <b>Your wishlist is empty</b>}
                                {wishlistProducts.map(product => <CartProduct key={`cart-product-${product.id}`}>
                                    <ThumbnailAndProductName onClick={() => router.push(`/product/${product.id}`)}>
                                        <Thumbnail src={product.thumbnail} />
                                        <ProductName>{product.name}</ProductName>
                                    </ThumbnailAndProductName>
                                    <RemoveProduct onClick={() => dispatch(removeToWishlist({id: product.id}))}>x</RemoveProduct>
                                </CartProduct>)}
                            </CartList>
                        </CartContainer>}
                    </Menu>
                    <Menu $mobileOnly={true} onClick={() => setShowLinks(!showLinks)}>
                        <MenuIcon src={IconMenu.src}/>
                    </Menu>
                </Menus>
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

const ThumbnailAndProductName = styled.div`
    display: flex;
    gap: 6px;
`

const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
`

const ProductName = styled.h3``

const QuantityAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
`

const Quantity = styled.input`
    border: 1px solid #E6E6E6;
    width: 30px;
`

const Price = styled.b``

const RemoveProduct = styled.span`
    all: unset;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    font-weight: 700;
`

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 36px;
    box-sizing: border-box;
    background: white;
    position: relative;
    z-index: 5;

    @media (min-width: 768px) {
        gap: 12%;
    }
`

const Logo = styled.a`
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
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

    @media (min-width: 768px) {
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
    line-height: 45px; /* 150% */
    letter-spacing: 0.2px;
    color: #737373;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 171.429% */
        letter-spacing: 0.2px;
    }
`

const Menus = styled.div`
    display: flex;
    gap: 24px;
    margin-left: auto;
`

const Menu = styled.div<{$mobileOnly?: boolean}>`
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    @media (min-width: 1114px) {
        display: ${({ $mobileOnly }) => $mobileOnly && 'none'}
    }
`

const MenuIcon = styled.img``
