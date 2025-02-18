import { useSearchParams } from "react-router"

const ProductListPage = () =>{
    const [params , getParams ] = useSearchParams()

    const handleGetEtalase = () => {
        
        params.set("etalase", "Populer")
        getParams(params)
    }

    const handleGetName = (buah : string) => {
        params.set("name", buah)
        getParams(params)
    }
    
    return(
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li>
                Name :{params.get("name")}
                </li>
                <li>
                Etalase :{params.get("etalase")}
                </li>
            </ul>
            
           <button style={{display :"inline-block", marginRight:"10px"}} onClick={handleGetEtalase}>Change params Etalase</button>
           <button style={{display :"inline-block"}} onClick={()=> handleGetName("buah")}>Change Params Name</button>

        </div>
    )
}

export default ProductListPage