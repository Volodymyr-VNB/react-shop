import { Button, Card, CardActions, CardContent } from "@mui/material"
import "./ProductsListItem.scss"

type Props = {
  title: string
    description: string
    capacity: string
    type: string
    price: number

}
const ProductsListItem = ({title,description,type,capacity,price}: Props) => {
  return (
    <Card className="product" variant="outlined">
        <CardContent>
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">{capacity}</div>
                <div className="product-price">{price}</div>
            <CardActions className="bnt-wrap">
                <Button variant="outlined"> Add to cart  </Button>
            </CardActions>

        </CardContent>
    </Card>
  )
}
export default ProductsListItem