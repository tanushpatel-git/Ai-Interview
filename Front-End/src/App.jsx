import React from 'react'
import {Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import Auth from "./Pages/Auth.jsx";


const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>

        </>
    )
}
export default App
