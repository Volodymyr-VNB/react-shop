import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import { Container } from '@mui/material'

import CartPages from 'Pages/Cart/CartPages'
import { type } from 'os'

import { createContext } from 'react'
import { omit } from 'lodash'


type ProductsInCart = {
    [id: number]: number
}
type Context = {
    removeProductFromCart: (id: number) => void
    changeProductQuantity:(id: number, count:number) => void
}

export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
         1: 5,
         2: 1,
        
    })

    const addProductToCart = (id:number, count: number) => {
        setProductsInCart ((prevState) => ({
            ...prevState,
            [id]: (prevState[id] ||0) +count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit (prevState,id) 
           
        )
    }
    // const onIncrementClick = (count:number) =>{
    //     setProductsInCart((prevState)=>count +1)
    //   }
    //   const onDecrementClick1 = () =>{
    //     setProductsInCart((prevState)=>prevState-1)
    //   }
    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <AppContext.Provider value={{removeProductFromCart:removeProductFromCart,
            changeProductQuantity:changeProductQuantity

            }}
            >


            <CssBaseline />
            <Header productsInCart={productsInCart} />
            
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="/cart" element={<CartPages 
                    productsInCart={productsInCart} 
                    
                    />} />
                </Routes>
            </Container>

            </AppContext.Provider>
        </StyledEngineProvider>
    )
}

export default App