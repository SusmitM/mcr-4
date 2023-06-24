import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const Sidebar = () => {
  return (
    <Box
      flex={2}
      p={1}
      sx={{ display: { xs: "none", sm: "block" }, justifyContent: "center" }}
    >
      <Box position="fixed">
        <List sx={{ cursor: "pointer" }}>
          <ListItem>
            <ListItemIcon>
              <HomeIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Home" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <RocketLaunchIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Explore" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BookmarkIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Bookmarks" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Profile" />
          </ListItem>
        </List>
        <Box  mt={30} sx={{display:"flex",flexDirection:"row"}}>
        <Box><Avatar>T</Avatar></Box>
        <Box ml={1} sx={{display:"flex",flexDirection:"column"}}>
          <Typography>Tanay Pratap</Typography>
          <Typography>@TanayPratap</Typography>
        </Box>
      </Box>
      </Box>
     
    </Box>
  );
};
