import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import FeedPostPage from "../pages/FeedPostsPage/FeedPostPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header"



const Router = () => {

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<SignUpPage/>}/>     
                <Route path="/feed" element={<FeedPostPage/>}/>   
                <Route path="/adicionar-posts" element={<AddPostPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>   
            </Routes>
        </BrowserRouter>
    )
}

export default Router;