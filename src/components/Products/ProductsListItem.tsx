import { Button, Card, CardActions, CardContent } from "@mui/material"
import "./ProductsListItem.scss"

type Props = {}
const ProductsListItem = (props: Props) => {
  return (
    <Card className="product" variant="outlined">
        <CardContent>
                <h4 className="product-title">iPhone X</h4>
                <p className="product-description">This is iPhone X</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 64Gb</div>
                <div className="product-price">Prise:$ 500</div>
            <CardActions className="bnt-wrap">
                <Button variant="outlined"> Add to cart  </Button>
            </CardActions>

        </CardContent>
    </Card>
  )
}
export default ProductsListItem