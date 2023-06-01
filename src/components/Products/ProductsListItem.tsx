import { Button, Card, CardActions, CardContent } from "@mui/material"
import "./ProductsListItem.scss"

type Props = {
  title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string

}
const ProductsListItem = ({title,description,type,capacity,price,image}: Props) => {
  return (
    <Card className="product" variant="outlined">
        <CardContent>
          <div className="product-img">
            <img src={image} alt="" />
          </div>
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}</div>
                <div className="product-price">Price: ${price}</div>
            <CardActions className="bnt-wrap">
                <Button variant="outlined"> Add to cart  </Button>
            </CardActions>

        </CardContent>
    </Card>
  )
}
export default ProductsListItem