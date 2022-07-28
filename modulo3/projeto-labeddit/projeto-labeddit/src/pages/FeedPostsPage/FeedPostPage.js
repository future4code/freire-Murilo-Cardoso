import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPostPage = () => {

    
    useProtectedPage()

    return (
        <div>
            <h1>FeedPostPage</h1>
        </div>
    )
}
export default FeedPostPage; 