import React from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProductsPage from "./pages/ProductsPage"
import ErrPage from "./pages/ErrPage"

const Router = () => {
    return (
        <React.Fragment> 
            <Routes>
                <Route path ='/' element={<MainPage/>}></Route>                                                        
                <Route path="/Products/:id" element={<ProductsPage/>} />                               
                <Route path="*" element={<ErrPage/>} />          
            </Routes>
        </React.Fragment>
    )
}

export default Router;