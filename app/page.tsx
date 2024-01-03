import BestSellers from './components/BestSellers'
import Categories from './components/Categories'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Categories />
      <BestSellers />
    </>
  )
}
