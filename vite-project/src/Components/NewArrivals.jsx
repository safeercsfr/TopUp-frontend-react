import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";
import carouselImg from "../assets/Group 1172.png";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";

const NewArrivals = ({ suggestion = false }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:600px)");
  const items = [
    {
      id: 1,
      image: carouselImg,
      ID: "ID334490",
      name: "Nike Sports Shoes",
      actualPrice: "QR 54.67",
      offerPrice: "QR 48.00",
      offerPercentage: "(-100%)",
      category:'Footwears',
    },
    {
      id: 2,
      image: carouselImg,
      ID: "ID334490",
      name: "Nike Sports Shoes",
      actualPrice: "QR 54.67",
      offerPrice: "QR 48.00",
      offerPercentage: "(-100%)",
      category:'Clothings',

    },
    {
      id: 3,
      image: carouselImg,
      ID: "ID334490",
      name: "Nike Sports Shoes",
      actualPrice: "QR 54.67",
      offerPrice: "QR 48.00",
      offerPercentage: "(-100%)",
      category:'Watches',

    },
    {
      id: 4,
      image: carouselImg,
      ID: "ID334490",
      name: "Nike Sports Shoes",
      actualPrice: "QR 54.67",
      offerPrice: "QR 48.00",
      offerPercentage: "(-100%)",
      category:'Accessories',

    },
  ];

  return (
    <WidgetWrapper>
      {!suggestion&&<Typography
        fontWeight={"bold"}
        fontSize={isNonMobileScreens ? "1.5rem" : "1.2rem"}
      >
        New Arrrivals
      </Typography>}
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                border:"none",
                maxWidth: {
                  xs: 180,
                  sm: 250,
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={item.image}
                  alt="green iguana"
                />
                {suggestion ? (
                  <CardContent>
                    <Typography
                      fontWeight={"bold"}
                      sx={{
                        fontSize: isNonMobileScreens ? "1.6rem" : "1.3rem",
                      }}
                    >
                      {item.category}
                    </Typography>
                  </CardContent>
                ) : (
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      fontSize={isNonMobileScreens ? ".8rem" : ".7rem"}
                    >
                      {item.ID}
                    </Typography>
                    <Typography
                      fontWeight={"bold"}
                      sx={{
                        fontSize: isNonMobileScreens ? "1.2rem" : "1rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <FlexBetween>
                      <Typography
                        fontSize={isNonMobileScreens ? ".9rem" : ".7rem"}
                      >
                        {item.actualPrice}
                      </Typography>
                      <Typography
                        color={"#AC2D11"}
                        fontWeight={"bold"}
                        fontSize={isNonMobileScreens ? "1rem" : ".8rem"}
                      >
                        {item.offerPrice}
                      </Typography>
                      <Typography
                        fontSize={isNonMobileScreens ? ".9rem" : ".7rem"}
                      >
                        {item.offerPercentage}
                      </Typography>
                    </FlexBetween>
                  </CardContent>
                )}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </WidgetWrapper>
  );
};

export default NewArrivals;
