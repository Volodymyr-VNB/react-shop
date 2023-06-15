import { Product } from 'utils/productArray'
import { Card, Grid, CardContent, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'

type Props = {
    product: Product
    productCount: number
    
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
const  [employee, setEmployee] = useState(product);


const removeKey = () => {
    setEmployee(current => {
      // 👇️ create copy of state object
      const korzina = Object.assign({}, current);
    //   const {korzina, ...korzina} = current;
      // 👇️ remove salary key from object
        // delete Object.keys.korzina[2];
         const invalue = Object.values(current)[0];
         console.log(current);

         
                //   delete korzina[current.id];
                  console.log(current);   
           
                  
                  
//  delete korzina[{invalue}];
      return employee;
    });
  };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title} </div>
                    <div className="product-festures">
                        Price for one item:{product.price}{' '}
                    </div>
                    <div className="product-festures">
                        Count:{productCount}{' '}
                    </div>
                    <Button variant="outlined" onClick={removeKey}>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
