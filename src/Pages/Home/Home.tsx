import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCart:(count:number,price:number)=>void
    // ProductsInCart :{    [id:number]:Number } 
  }
const Home = ({addProductToCart}: Props) => {
    return (
        <>
            <ProductList  
            // ProductsInCart={ProductsInCart}
            addProductToCart={addProductToCart}
            />
        </>
    )
}
export default Home
