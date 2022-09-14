import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls";
import Button from "@material-ui/core/Button";
import { DivButtonPost } from "./styled";

const FeedPostPage = () => {
  useProtectedPage();
  
  const posts  = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)
  
  const postCards = posts.map((posts) =>{
    return(
      <div>
        <p>{posts.title}</p>
        <p>{posts.body}</p>
      </div>
    )
  })

    return(
      <div>  
        <h1>Feed de Post</h1>
        <input 
          placeholder="escreva seu post..."
        />
        <DivButtonPost>
          <Button 
            variant="contained"
            margin={"normal"}
            color={"primary"}
            fullWidth
            >Postar
          </Button>
        </DivButtonPost> 
        {postCards}
      </div>
    )
}

export default FeedPostPage;