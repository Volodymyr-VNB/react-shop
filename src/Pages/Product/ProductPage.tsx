import { useParams } from "react-router"
import productsArray, { Product, getProductsObject } from "utils/productArray"

type Props = {
    productsObjects?:{
        [id:number]:Product
    }
}
const ProductPage = ({productsObjects=getProductsObject(productsArray),
}: Props) => {
    const {id} = useParams();
    console.log(id)
    const productid = id||"" // це щоб показати що немає андефанд
  return (
    <div>
        {productsObjects[parseInt(productid)].title}
        
        </div>
  )
}
export default ProductPage