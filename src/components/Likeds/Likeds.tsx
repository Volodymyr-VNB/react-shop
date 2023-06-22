
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';


type Props = {
    id:number
}
const Likeds = ({id}: Props) => {
    const isLikes = useAppSelector((state)=> state.productsLikeState[id])

const dispatch = useAppDispatch()
  return (
    <Button variant='outlined'
                onClick={()=> dispatch({
                    type: "TOGGLE_LIKE",
                    id, //=>id:id
                })}>
                    {isLikes? <FavoriteIcon/>: <FavoriteBorderIcon/>}
                </Button>
  )
}
export default Likeds