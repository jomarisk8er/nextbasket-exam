'use client'

import IconCart from '../assets/images/icon-cart.svg'
import IconMenu from '../assets/images/icon-menu.svg'
import IconSearch from '../assets/images/icon-search.svg'
import styled from "styled-components"
import { useState } from 'react'

export default function Header() {
    const [showLinks, setShowLinks] = useState(false)

    return <Container>
        <Logo>Bandage</Logo>
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
            <Menu>
            <MenuIcon src={IconCart.src}/></Menu>
            <Menu onClick={() => setShowLinks(!showLinks)}>
            <MenuIcon src={IconMenu.src}/></Menu>
        </Menus>
    </Container>
} 

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

const Menu = styled.div`
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuIcon = styled.img``
