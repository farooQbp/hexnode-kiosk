import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import { getRequest } from "../../core";
import { companyLogo, testimonial } from "../../constants/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([])
  const [companyLogos, setCompanyLogos] = useState([])

  useEffect(() => {
    const fetchAppSettings = async () => {
      const result = await getRequest('/config/settings.json')
      if (result) {
        const data = JSON.parse(JSON.stringify(result))
        setTestimonials(data?.testimonials ?? testimonial)
        setCompanyLogos(data?.companyLogos ?? companyLogo)
      }
    }
    fetchAppSettings()
  }, [])


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f8f8f8",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Why should you choose Hexnode?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        {testimonials.length ? (
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              width: { xs: "100%", sm: "60%" },
              padding: 2,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Avatar
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              sx={{
                width: 200,
                height: 200,
                marginBottom: { xs: 2, sm: 0 },
                marginRight: { sm: 2 },
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography
                variant="body1"
                fontStyle="italic"
                mb={2}
                sx={{ color: "#333", textAlign: { xs: "center", sm: "justify" }, fontSize: "1.6rem" }}
              >
                "{testimonials[currentIndex].feedback}"
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#000", textAlign: { xs: "center", sm: "justify" } }}
                >
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="medium"
                  sx={{ color: "#666", textAlign: { xs: "center", sm: "justify" } }}
                >
                  {testimonials[currentIndex].company}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ) : null}
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box mt={6} sx={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
        <Slider {...logoSettings}>
          {companyLogos.length && companyLogos.map((logo, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <img
                src={logo}
                alt={`Logo ${index}`}
                style={{ maxWidth: "100%", maxHeight: "80px", objectFit: "contain" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
