import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../../Components/Navbar";
import NewArrivals from "../../Components/NewArrivals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import carouselImg from "../../assets/Group 1172.png";
import logo from "../../assets/Group 1122.svg";
import snapchat from "../../assets/snapchat.svg";
import twitter from "../../assets/circletwitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/Subtraction 3.svg";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const items = [
    {
      id: 1,
      image: carouselImg,
      title: "First Item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: carouselImg,
      title: "Second Item",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      image: carouselImg,
      title: "Third Item",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <Box>
      <Navbar />
      <Box width="100%" sx={{ padding: "0 2rem", boxSizing: "border-box" }}>
        <Box sx={{ position: "relative", height: "100%" }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={item.image}
                  alt={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Box
            sx={{
              position: "absolute",
              top: 360,
              left: 50,
              zIndex: 1,
            }}
          >
            <NewArrivals />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "16rem",
        }}
      >
        <Typography
          sx={{ marginLeft: "5rem" }}
          fontWeight={"bold"}
          fontSize={isNonMobileScreens ? "1.5rem" : "1.2rem"}
        >
          Shop by category
        </Typography>
        <Box
          sx={{ marginLeft: "5rem", padding: ".6rem", display: "flex", gap: 3 }}
        >
          <Box
            sx={{
              padding: "0.75rem",
              backgroundColor: "white",
              borderRadius: "10rem",
              display: "flex",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>MEN</Typography>
          </Box>
          <Box
            sx={{
              padding: "0.75rem",
              backgroundColor: "white",
              borderRadius: "10rem",
              display: "flex",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>WOMEN</Typography>
          </Box>
          <Box
            sx={{
              padding: "0.75rem",
              backgroundColor: "white",
              borderRadius: "2rem",
              display: "flex",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>UNISEX</Typography>
          </Box>
        </Box>
        <NewArrivals suggestion="true" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"3rem",
            marginBottom:"1rem",
            // height: "20vh",
          }}
        >
          <img src={logo} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Socialmedia Icons</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={snapchat} alt="snapchat" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"white",
            padding:".7rem",
            marginTop:'1rem',
            color:"#AC2D11",
          }}
        >
            
          <Typography sx={{fontSize:".7rem"}}>Copyright © 2021 Fetch. All rights reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
