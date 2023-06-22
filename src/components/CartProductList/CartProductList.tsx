import productsArray, { Product, getProductsObject } from 'utils/productArray'
import CartProductListItem from './CartProductListItem'
import Likeds from 'components/Likeds/Likeds'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?:any,
   
    
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <>
                <CartItem 
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    
                />
                
                </>
            ))}
            
        </>
    )
}
export default CartProductList
