import { useParams } from "react-router-dom"
import { useDataContext } from "../Context/DataContext";
import { Card } from "../Components/Card";
import { Box } from "@mui/material";


export const SinglePost = () => {
  const {data}=useDataContext();
  
  const postID=useParams('postId');
  console.log(postID.postId)

 
  const selectedPost= data.posts.find(d=>d.postId===postID.postId)
  console.log(selectedPost)
  return (
   <Box>
    <Card postData={selectedPost}/>
   </Box>
  )
}
