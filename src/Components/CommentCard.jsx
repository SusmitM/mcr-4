import { Avatar, Box, Paper, Typography } from "@mui/material";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const CommentCard = ({data,commentData}) => {
    
    const {username,picUrl,comment}=commentData
  return (
    <Paper sx={{ display: "flex", maxWidth: "450px" }}>
      <Box  sx={{
              display: "flex",
              justifyContent: "center",
              
            }} flex={1}>
        <Avatar src={picUrl} sx={{ height: "50px", width: "50px" }} />
      </Box>
      <Box flex={4}>
        <Box sx={{ display: "flex",flexDirection:"column", gap: "5px" }}>
          <Box sx={{ display: "flex",alignItems:"baseline"}}>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {username}
          </Typography>
          <Typography sx={{ fontSize: "0.6rem" }}>@{username}</Typography>
          </Box>
          <Typography sx={{ fontSize: "0.6rem" }}>Replying To {data.username}</Typography>

          <Typography
            sx={{ fontSize: "0.75rem", textAlign: "left" }}
            color="text.secondary"
          >
           {comment}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <Box>
              <FavoriteBorderIcon />
            </Box>
            <Box>
              <ModeCommentIcon />
            </Box>
            <Box>
              <ShareIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
