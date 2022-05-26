import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Display from "./components/Display";
import { DataContext } from "./components/Blog_Context";
import "./components/style.css"
import Header from "./components/Header";
import Home from "./components/Home";





const App = () => {
    return (
        <>
            <DataContext>
                <div>
                    <Router>
                        <Logo />
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home/>} />
                            <Route path="/category/:selected" element={<Display />}>

                            </Route>
                            <Route path="/category/:selected/:selectedID" element={<Article />} />
                        </Routes>
                        <Footer />
                    </Router>
                </div>
            </DataContext>
        </>
    );
};

export default App;