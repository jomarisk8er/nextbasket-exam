import BestSellers from "@/app/components/BestSellers"
import Clients from "@/app/components/Clients"
import ProductDetail from "@/app/components/ProductDetail"
import { ProductType } from "@/app/components/types"
import Tabs from "@/app/components/Tabs"

export default async function Product({ params }: {params: { id: number}}) {
    const product: ProductType = await fetch(`https://dummyjson.com/products/${params.id}`).then(data => data.json())

    return <>
        <ProductDetail product={product} />
        <Tabs />
        <BestSellers loadMore={false}/>
        <Clients />
    </>
}