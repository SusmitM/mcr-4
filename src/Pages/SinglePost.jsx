import { useNavigate, useParams } from "react-router-dom"
import { useDataContext } from "../Context/DataContext";
import { Card } from "../Components/Card";
import { Box,Typography  } from "@mui/material";
import { CommentCard } from "../Components/CommentCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const SinglePost = () => {
  const navigate=useNavigate();
  const {data}=useDataContext();
  
  const postID=useParams('postId');
  console.log(postID.postId)

 
  const selectedPost= data.posts.find(d=>d.postId===postID.postId)
 
  return (
   <Box>
     <Box sx={{display:"flex", gap:"5px"}}><ArrowBackIcon onClick={()=>navigate("/")} /> <Typography fontWeight={700}>Post</Typography></Box>
    <Card postData={selectedPost}/>
    {
      selectedPost?.comments.map(commentData=> <CommentCard data={selectedPost} commentData={commentData}/>)
    }
   
   </Box>
  )
}
