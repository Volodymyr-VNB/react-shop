import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart:(id:number, count: number)=>void
    // ProductsInCart :{    [id:number]:Number } 
  }
const Home = ({addProductToCart}: Props) => {
    return (
        <>
        <br /><br /><br /><br />
            <ProductList  
            
            addProductToCart={addProductToCart}
            />
            <Reviews/>
        </>
    )
}
export default Home
