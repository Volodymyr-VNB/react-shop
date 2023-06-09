import productsArray, { Product, getProductsObject } from 'utils/productArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    //   console.log((Object.keys(productsInCart),Object.keys(productsInCart)))
    // console.log(productsArray)
    
    let total=0;
    
    for ( let key in productsInCart){
        total= total + productsObject[parseInt(key)].price *
            productsInCart[parseInt(key)]
    }
    //    console.log('productsInCart=',productsInCart)
       
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{' '}
                        {productsInCart[parseInt(productId)]}
                        
                    </div>
                
                )
                ) }
            </div>
            
            <div>Total: $ {total}</div>
            
        </div>
    )
}

export default CartHeader
