import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCart:(id:number, count: number)=>void
    // ProductsInCart :{    [id:number]:Number } 
  }
const Home = ({addProductToCart}: Props) => {
    return (
        <>
        <br /><br /><br /><br />
            <ProductList  
            
            // ProductsInCart={ProductsInCart}
            addProductToCart={addProductToCart}
            />
        </>
    )
}
export default Home
