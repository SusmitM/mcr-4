import { AppBar, Box, Toolbar, Typography } from "@mui/material"


export const Navbar = () => {
  return (
   <Box mb={2}>
  <AppBar position="static"  sx={{backgroundColor:"white",color:"#5348c6"}}>
    <Toolbar>
      <Typography fontWeight={600}>MyForum</Typography>
    </Toolbar>
  </AppBar>
   </Box>
  )
}
