import BestSellers from './components/BestSellers'
import BestServices from './components/BestServices'
import CTA from './components/CTA'
import Categories from './components/Categories'
import FeatureProducts from './components/FeaturedProducts'
import Image from 'next/image'
import Testimonies from './components/Testimonies'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Categories />
      <BestSellers />
      <BestServices />
      <FeatureProducts />
      <Testimonies />
      <CTA />
    </>
  )
}
