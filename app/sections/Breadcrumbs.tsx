'use client'

import ArrowRightImage from '../assets/images/icn arrow-right icn-xs.svg'
import Link from 'next/link';
import { Stack } from '@mui/material';
import styled from "styled-components";

type Props = {
    breadcrumbs: {
        title: string;
        link: string;
        active?: boolean
    }[]
}

export default function Breadcrumbs({ breadcrumbs } : Props) {
    return <Stack gap={2} direction='row' alignItems='center' marginRight={{ md: 'auto'}}>
            {breadcrumbs.map((breadcrumb) =><Breadcrumb key={breadcrumb.title} href={breadcrumb.link} $active={breadcrumb.active}>
                    {breadcrumb.title}
                    {!breadcrumb.active && <Image src={ArrowRightImage.src} alt='test'/>}
            </Breadcrumb>)}
        </Stack>
}


const Breadcrumb = styled(Link)<{$active?: boolean}>`
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
    cursor: pointer;
    padding: 24px 0;
`

const Image = styled.img`
    height: 9px;
`