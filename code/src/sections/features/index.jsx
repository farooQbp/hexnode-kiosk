import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import sliderImage from "../../assets/web-based-kiosk-image.webp";
import { accordionData } from "../../constants/accordtion";
import useStyles from "./styles";

const Features = () => {
  const [expanded, setExpanded] = useState("panel0");
  const [imageSrc, setImageSrc] = useState(sliderImage);
  const classes = useStyles()

  const handleChange = (panel, image) => (event, isExpanded) => {
    if (expanded !== panel) {
      setExpanded(panel);
      setImageSrc(image);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "75%",
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        What additional possibilities does the Kiosk mode offer?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }} >
        <Box
          sx={{
            flex: "1 1 33%",
            width: { xs: "100%", md: "33%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }} >
          <img
            src={imageSrc}
            alt="Accordion Visual"
            className={classes.imageStyle}
          />
        </Box>
        <Box
          sx={{
            flex: "2 1 67%",
            width: { xs: "100%", md: "67%" },
          }}>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`, item.image)}
              className={classes.accordtion}
            >
              <AccordionSummary className={classes.accordtionSummary} >
                <Typography variant="h6" className={classes.accordtionText}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordtionDetails}>
                <Typography variant="body1" className={classes.accordtionDetailsText}>
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
