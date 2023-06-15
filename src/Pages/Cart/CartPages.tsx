import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Grid } from '@mui/material'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    
}

const CartPage = ({ productsInCart}: Props) => {
    return (
        <div>
          <br /><br /><br /><br />
          <Grid container spacing={4}>
            <CartProductList 
            productsInCart={productsInCart} 
            CartItem={CartProductListItemExtended}
            />
           </Grid> 

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
