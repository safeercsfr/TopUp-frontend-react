import { IconButton, InputBase, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import logo from "../assets/Group 1122.svg";
import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <FlexBetween
      padding="1rem 6%"
      sx={{ position: "sticky", top: 0, zIndex: 10 }}
      backgroundColor="white"
    >
      <FlexBetween gap="1.75rem">
        <img src={logo} alt="sj" />
    {/* search bar  */}
        <FlexBetween
          backgroundColor="#ebebeb"
          borderRadius="5px"
          gap="2rem"
          padding="0rem 1.5rem"
        >
          <InputBase placeholder="Search Product..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>

        <FlexBetween>
          <Box
            sx={{
              padding: "0.75rem",
              backgroundColor: "#ebebeb",
              borderRadius: "0.75rem",
              display: "flex",
              justifyContent: "space-between", // set justify-content to space-between
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>EN</Typography>
          </Box>

          <Box
            sx={{
              padding: "0.5rem",
              backgroundColor: "#ebebeb",
              borderRadius: "0.75rem",
              display: "flex",
              justifyContent: "space-between", // set justify-content to space-between
            }}
          >
            <Box>
              <Typography color={"gray"} sx={{ fontSize: "10px" }}>
                12 Products
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>QR 123.00</Typography>
            </Box>
            <ShoppingCartIcon />
          </Box>
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
