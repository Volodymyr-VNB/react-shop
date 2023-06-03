import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import React from 'react'
import { type } from 'os'

type Props = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}
type State= {
   count:number

}

class ProductsListItem extends React.Component <Props, State>{

  // Це класовий компонент 
  state: Readonly<State>={
    count:1,
  }

  

onInctementClick =() =>{
  this.setState((prevState) => ({
    count: prevState.count + 1,
  }))
}
onDectementClick =() =>{
  this.setState((prevState) => ({
    count: prevState.count>1? prevState.count- 1: prevState.count,
  }))
}

  render() {
    const { title, description, type, capacity, price, image } = this.props
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
              <div className="product-quantity">
                  <Button variant="outlined" onClick={() =>this.onDectementClick()}>-</Button>
                  <TextField value={this.state.count} size="small"></TextField>
                  <Button variant="outlined" onClick={() => this.onInctementClick()}>+</Button>
              </div>
              <CardActions className="bnt-wrap">
                  <Button variant="outlined"> Add to cart </Button>
              </CardActions>
          </CardContent>
      </Card>
  )
  }
}
// const ProductsListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {
//     // return (
//     //     <Card className="product" variant="outlined">
//     //         <CardContent>
//     //             <div className="product-img">
//     //                 <img src={image} alt="" />
//     //             </div>
//     //             <h4 className="product-title">{title}</h4>
//     //             <p className="product-description">{description}</p>
//     //             <div className="product-features">Type:{type}</div>
//     //             <div className="product-features">Capacity:{capacity}</div>
//     //             <div className="product-price">Price: ${price}</div>
//     //             <div className="product-quantity">
//     //                 <Button variant="outlined">-</Button>
//     //                 <TextField value={1} size="small"></TextField>
//     //                 <Button variant="outlined">+</Button>
//     //             </div>
//     //             <CardActions className="bnt-wrap">
//     //                 <Button variant="outlined"> Add to cart </Button>
//     //             </CardActions>
//     //         </CardContent>
//     //     </Card>
//     // )
// }
export default ProductsListItem
