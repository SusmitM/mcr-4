import { Box, Typography } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import { useDataContext } from "../Context/DataContext";

export const RightBar = () => {
  const { sortPost}=useDataContext();
  const sortPosts=(value)=>{
    console.log(value)
    sortPost(value)
  }
  return (
    <Box
      flex={3}
      sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center" }}
    >
      <Box position="fixed">
        <Box>
          <Typography fontWeight={700}>Sort By</Typography>

          <NativeSelect onChange={(e)=>sortPosts(e.target.value)} defaultValue="latest">

            <option value="latest">Latest Post</option>
            <option value="upvote">Most Upvoted post</option>
          </NativeSelect>
        </Box>
      </Box>
    </Box>
  );
};
