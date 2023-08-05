import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../constants/Route";
import { styled, alpha } from "@mui/material/styles";

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(5),
      minWidth: 180,
      marginLeft: 220,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  return (
    <StyledMenu
      id="basic-menu"
      anchorE1={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{ "aria-labelledby": "basic-button" }}
    >
      <Link
        to={`${routePath.categories}?category=popular`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link>
      <Link
        to={`${routePath.categories}?category=toprated`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link
        to={`${routePath.categories}?category=upcoming`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Link>
    </StyledMenu>
  );
};

export default HeaderMenu;
