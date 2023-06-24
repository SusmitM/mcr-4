import { Box, Typography } from "@mui/material"
import { Card } from "../Components/Card"
import { useDataContext } from "../Context/DataContext"


export const Home = () => {
  const {data}=useDataContext();
  return (
   <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
    <Typography fontWeight={700}>Latest Posts</Typography>
    {
      data.posts.map(postData=><Card postData={postData}/>)
    }
  
   </Box>
  )
}
