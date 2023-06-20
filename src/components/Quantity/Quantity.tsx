import {
    Button,
    
    TextField,
} from '@mui/material'
type Props = {
    count:number,
    onDecrementClick:()=>void
    onIncrementClick:()=>void
    mincount:number
}
const Quantity = ({count,onDecrementClick,onIncrementClick,
mincount,
}: Props) => {
  return (
    <div className="product-quantity">
                    <Button variant="outlined"
                    onClick={()=> onDecrementClick()}
                    disabled={count <=mincount}
                    >-</Button>
                    <TextField value={count} size="small"></TextField>
                    <Button variant="outlined"
                    onClick={()=> onIncrementClick()}
                    disabled={count >=10}
                    >+</Button>
                </div>
  )
}
export default Quantity