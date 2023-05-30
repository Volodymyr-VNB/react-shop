import { Button, Card, CardActions, CardContent } from "@mui/material"
import "./ProductsListItem.scss"

type Props = {
  title: string
    description: string
    capacity: string
    type: string
    price: number

}
const ProductsListItem = (props: Props) => {
  return (
    <Card className="product" variant="outlined">
        <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <p className="product-description">{props.description}</p>
                <div className="product-features">{props.type}</div>
                <div className="product-features">{props.capacity}</div>
                <div className="product-price">{props.price}</div>
            <CardActions className="bnt-wrap">
                <Button variant="outlined"> Add to cart  </Button>
            </CardActions>

        </CardContent>
    </Card>
  )
}
export default ProductsListItem