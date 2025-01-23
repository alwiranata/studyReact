import { useParams } from "react-router"

const ProductDetailPages = () => {
    const params = useParams<{productSlug : string}>()
    return(
        <div>
            <h1>Produc Detail Page</h1>
            <p>{params.productSlug}</p>
        </div>
    )
}

export default ProductDetailPages