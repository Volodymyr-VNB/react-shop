import { Grid, Typography } from "@mui/material"
import ProductsListItem from "./ProductsListItem"
import productsArray from "utils/productArray"

type Props = {}
const ProductList = (props: Props) => {
  return (
    <>
    <Typography component="h2" variant="h3" 
    align="center" sx={{marginBottom:'30px'}}>
        List of Product</Typography>
        <Grid container spacing={4}>
          
          { productsArray.map(({id,title,description,type,capacity,price,image}) =>(
            <Grid item xs={12} sm={6} md={4} key={id}>
            <ProductsListItem 
            image={image}
            title={title}
            description={description}
            capacity={capacity}
            type={type}
            price={price}
            />
            </Grid>
          )
            )
          }
        </Grid>
    
    </>
  )
}
export default ProductList