import BestSellers from './sections/BestSellers'
import BestServices from './sections/BestServices'
import CTA from './sections/CTA'
import Categories from './sections/Categories'
import FeatureProducts from './sections/FeaturedPosts'
import Image from 'next/image'
import Testimonies from './sections/Testimonies'
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
