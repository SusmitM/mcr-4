import {
  Avatar,
  Box,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  Divider,
  IconButton
} from "@mui/material";
import { styled } from "@mui/material/styles";


import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: "3px",
  fontSize: "0.6rem",
  color: "#5348c6",
  fontWeight: 600,
}));
export const Card = ({postData}) => {
  
  const {postId,username, name,picUrl,post,postDescription,upvotes,downvotes,tags,comments,isBookmarked}=postData
    const [bookmark,setBookmark]=useState(isBookmarked);
    const handelBookmarkPost=()=>{
        setBookmark(prev=>!prev)

    }
    const voteCount=upvotes-downvotes

    const [votes,setVotes]=useState(voteCount)

    const upvote=()=>{
      setVotes(prev=>prev+1)
    }
    const downvote=()=>{
      setVotes(prev=>prev-1)
    }

    const navigate=useNavigate()
  return (
    <Paper
    
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 15,
        maxWidth: 450,
        minHeight: 250,
        marginBottom:"20px"
        
      }}
      elevation={10}
    >
      <Box flex={1}>
        <List>
          <ListItem>
            <ListItemIcon onClick={upvote}>
              <ArrowCircleUpIcon sx={{color:votes>0 ?"#5348c6":"" }} />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText primary={votes} />
          </ListItem>
          <ListItem>
            <ListItemIcon onClick={downvote}>
              <ArrowCircleDownIcon  sx={{color:votes<0 ?"red":"" }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
      <Box flex={4}>
        <Box sx={{ display: "flex", marginTop: "11px", gap: "13px" }}>
          <Avatar sx={{ height: "20px", width: "20px" }}>{name}</Avatar>
          <Typography sx={{fontSize:"0.6rem"}}>Posted by @{username} 1m</Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            {post}
          </Typography>
          <Stack direction="row" spacing={2}>
            {tags.map(tag=><Item>{tag}</Item>)}
            
          </Stack>
          <CardContent sx={{margin:"0px",padding:"2px",justifyContent:"left"}}>
            <Typography sx={{fontSize:"0.75rem",textAlign:"left"}} color="text.secondary">
              {postDescription}
            </Typography>
          </CardContent>
          <Divider/>
         <Box sx={{display:"flex",
        justifyContent:"space-between",marginTop:"5px"}}>
             <Box onClick={()=> navigate(`/singlePost/${postId}`)}>
            <ModeCommentIcon/>

          </Box>
          <Box>
            <ShareIcon/>

          </Box>
          <Box onClick={() => handelBookmarkPost()}>
          {bookmark? (
            <Box>
              <BookmarkIcon style={{ color: "skyblue" }} />
            </Box>
          ) : (
            <Box>
              <BookmarkBorderIcon />
            </Box>
          )}
        </Box>
          
        </Box>
        </Box>
      </Box>
    </Paper>
  );
};
