import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoURL } from "../constants/Constant";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../constants/Route";

const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-weight: 600;
      font-size: 14px;
    }
  }
  & > p {
    font-weight: 600;
    font-size: 14px;
  }
`;

const Logo = styled("img")({
  width: 64,
});

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Header = () => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const anchorRef = useRef(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar style={{ minHeight: 56 }} position="static">
      <StyledToolBar>
        <Logo
          src={logoURL}
          alt="logo"
          onClick={() => navigate(routePath.home)}
        />
        <Box onClick={handleClick} ref={anchorRef}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu
          open={open}
          handleClose={handleClose}
          handleToggle={handleToggle}
        />
        <InputSearchField />
        <Typography
          style={{
            fontFamily: "Helvetica",
          }}
        >
          IMDb
          <Box component="span" style={{ fontSize: 14, color: "skyblue" }}>
            Pro
          </Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
