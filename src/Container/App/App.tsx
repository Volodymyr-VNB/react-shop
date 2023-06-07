import Header from "Container/Header/Header"
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import Main from "Container/Main/Main";
import { useState } from "react";
import { count } from "console";
type CartData = {
    totalCount: number
    totalPrice: number
    
}

const App = () => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 221,
        totalPrice: 300,
    })
    // App => Header => CartHeader
    // =====================
    // App => Main => Home => 
    // ProductList => ProductListItem

const addProdictToCard =() =>{
    setCartData((prevState) => prevState )
}   



    return  (
    <>
    <StyledEngineProvider injectFirst>
    <CssBaseline />
    <Header
    cartData={cartData}
    
    />
    <Main/>
    </StyledEngineProvider>
    </>
    )
    
   
    
}
export default App