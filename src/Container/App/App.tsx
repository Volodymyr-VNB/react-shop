import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Container/Main/Main'
import { useState } from 'react'

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })
    const [man, setMan] = useState(5)
    // App => Header => CartHeader
    // =====================
    // App => Main => Home =>
    // ProductList => ProductListItem
    const addProductToCart = (count:number,price:number) => {
        setCartData((prevState)=>({
            totalCount: prevState.totalCount+count,
            totalPrice:prevState.totalPrice+count*price,
        })
            // totalCount: cartData.totalCount + 1,
            // totalPrice: cartData.totalPrice + 300,
        )
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <button onClick={() => addProductToCart(5, 500)}>
                Add to cart
            </button>
                
                <Main
                 addProductToCart={addProductToCart} 
                 />
            </StyledEngineProvider>
            

            
        </>
    )
}
export default App
