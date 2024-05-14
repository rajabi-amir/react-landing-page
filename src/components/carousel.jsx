import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Slider from "react-slick";

export default function Carousel(props) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <ArrowBackIosOutlined color="action" />,
    prevArrow: <ArrowForwardIosOutlined color="action" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows:true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows:true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          arrows:false
        },
      },
    ],
  };
  return (
    <Slider {...sliderSettings}>
      {props.items.map((item, index) => {
        return (
          <div key={index}>
            <Card sx={{ margin: 1, borderRadius: 5 }}>
              <CardMedia sx={{ height: 185 }} image={item.image} />
              <CardContent>
                <Typography variant="h6" style={{ textAlign: "right" }}>
                  {item.title}
                </Typography>
                <Typography
                  color={"GrayText"}
                  mt={1}
                  variant="body1"
                  style={{ textAlign: "right" }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </Slider>
  );
}
