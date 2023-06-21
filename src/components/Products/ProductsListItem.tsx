import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'


import { useAppDispatch, useAppSelector } from 'redux/hooks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
type Props = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
    id:number
    addProductToCart:(id:number, count: number)=>void
    // ProductsInCart :{    [id:number]:Number }
}
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
    id,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    
    
    

    const onIncrementClick = () =>{
      setCount((prevState)=>prevState+1)
    }
    const onDecrementClick = () =>{
      setCount((prevState)=>prevState-1)
    }
    // const onSumClick = () =>{
    //   setCountall((prevState)=>prevState + {this.state.count})
    // }
    const isLikes = useAppSelector((state)=> state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button variant='outlined'
                onClick={()=> dispatch({
                    type: "TOGGLE_LIKE",
                    id, //=>id:id
                })}>
                    {isLikes? <FavoriteIcon/>: <FavoriteBorderIcon/>}
                </Button>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">
                    <Link to={`/product/${id}`}>{title}</Link></h4>
                <p className="product-description"
                dangerouslySetInnerHTML={{__html:description}}
                ></p>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}</div>
                
                <div className="product-price">Price: ${price}</div>
                <Quantity count={count} 
                onDecrementClick={onDecrementClick}
                onIncrementClick={onIncrementClick}
                mincount={1}
                />
                {/* <div className="product-quantity">
                    <Button variant="outlined"
                    onClick={()=> onDecrementClick()}
                    disabled={count <=1}
                    >-</Button>
                    <TextField value={count} size="small"></TextField>
                    <Button variant="outlined"
                    onClick={()=> onIncrementClick()}
                    disabled={count >=10}
                    >+</Button>
                </div> */}
                <CardActions className="bnt-wrap">
                    <Button variant="outlined"
                    onClick={()=> addProductToCart(id,count)}
                    > 
                    Add to cart </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductsListItem
