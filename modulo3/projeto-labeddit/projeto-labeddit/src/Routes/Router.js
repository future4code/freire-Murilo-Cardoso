import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import FeedPostPage from "../pages/FeedPostsPage/FeedPostPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";




const Router = ({rightButtonText, setRightButtonText}) => {

    return(
            <Routes>
                <Route path="/" element={<LoginPage  rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/cadastro" element={<SignUpPage setRightButtonText={setRightButtonText}/>}/>     
                <Route path="/feed" element={<FeedPostPage/>}/>   
                <Route path="/adicionar-posts" element={<AddPostPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>   
            </Routes>
    )
}

export default Router;