import React from 'react'
import {Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import Auth from "./Pages/Auth.jsx";
import { Toaster } from 'react-hot-toast';


const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
            <Toaster/>
        </>
    )
}
export default App
