import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'

type Props = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>("green")

    const onIncrementClick = () =>{
      setCount((prevState)=>prevState+1)
    }
    const onDecrementClick = () =>{
      setCount((prevState)=>prevState-1)
    }
    const onChengColor = () =>{
      setColor((prevState)=> prevState==="green"? "red":"green" )
    }

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
                <div className={color}>Color: {color}</div>
                <button 
                onClick={()=> onChengColor()}>Change color</button>
                <div className="product-price">Price: ${price}</div>
                <div className="product-quantity">
                    <Button variant="outlined"
                    onClick={()=> onDecrementClick()}
                    disabled={count <=1}
                    >-</Button>
                    <TextField value={count} size="small"></TextField>
                    <Button variant="outlined"
                    onClick={()=> onIncrementClick()}
                    disabled={count >=10}
                    >+</Button>
                </div>
                <CardActions className="bnt-wrap">
                    <Button variant="outlined"> Add to cart </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductsListItem
