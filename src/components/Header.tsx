import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Stack direction="row" alignItems="center" width="100%">
          <Typography variant="h5" mr="auto">
            Taskify
          </Typography>
          <Button variant="contained"> <CommentIcon /></Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
