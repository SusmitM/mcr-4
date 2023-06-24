import { Box, Stack} from "@mui/material";
import { Navbar } from "./Navbar";
import { RightBar } from "./RightBar";
import { Sidebar } from "./Sidebar";



export const Layout = ({ children }) => {
  return (
   
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
       <Box flex={4} p={{ xs: 0, md: 2 }} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
       {children}
       </Box>
        <RightBar />
        </Stack>
        
      </Box>

  );
};
