import BestSellers from "@/app/sections/BestSellers"
import Clients from "@/app/sections/Clients"
import ProductDetail from "@/app/sections/ProductDetail"
import { ProductType } from "@/app/sections/types"
import Tabs from "@/app/sections/Tabs"

export default async function Product({ params }: {params: { id: number}}) {
    const product: ProductType = await fetch(`https://dummyjson.com/products/${params.id}`).then(data => data.json())

    return <>
        <ProductDetail product={product} />
        <Tabs />
        <BestSellers loadMore={false}/>
        <Clients />
    </>
}