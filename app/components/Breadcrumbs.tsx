'use client'

import ArrowRightImage from '../assets/images/icn arrow-right icn-xs.svg'
import styled from "styled-components";

type Props = {
    breadcrumbs: {
        title: string;
        link: string;
        active?: boolean
    }[]
}

export default function Breadcrumbs({ breadcrumbs } : Props) {
    return <BreadcrumbList>
            {breadcrumbs.map((breadcrumb) =><Breadcrumb key={breadcrumb.title} href={breadcrumb.link} $active={breadcrumb.active}>
                    {breadcrumb.title}
                    {!breadcrumb.active && <Image src={ArrowRightImage.src} alt='test'/>}
            </Breadcrumb>)}
        </BreadcrumbList>
}

const BreadcrumbList = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Breadcrumb = styled.a<{$active?: boolean}>`
    all: unset;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: ${({ $active }) => $active && '#BDBDBD'};
    pointer-events: ${({ $active }) => $active && 'none'};
`

const Image = styled.img`
    height: 9px;
`