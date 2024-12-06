import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import sliderImage from '../../assets/web-based-kiosk-image.webp';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery, useTheme } from "@mui/material";
import { kioskDetails } from "../../constants/usecase";

const UseCases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: isMobile ? "100%" : "75%", backgroundColor: "#ffffff", padding: "40px 20px", marginLeft: "auto", marginRight: "auto" }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: 600,
          fontSize: "28px",
          color: "#1a1a1a",
          marginBottom: "20px",
        }}
      >
        Specific kiosk modes for unique use cases
      </Typography>
      {!isMobile && (
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 400,
              fontSize: "16px",
              padding: "10px 20px",
              backgroundColor: "#f4f4f4",
              color: "#1a1a1a",
              transition: "background-color 0.3s, font-weight 0.3s",
            },
            "& .Mui-selected": {
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
            },
          }}
        >
          {kioskDetails.map((kiosk, index) => (
            <Tab label={kiosk.title} key={index} />
          ))}
        </Tabs>
      )}
      {!isMobile && (
        <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#1a1a1a",
                marginBottom: "20px",
              }}
            >
              {kioskDetails[tabValue].title} Features
            </Typography>
            <List>
              {kioskDetails[tabValue].description.map((text, index) => (
                <ListItem key={index} sx={{ padding: "5px 0" }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#34a853", fontSize: "20px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      color: "#1a1a1a",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={sliderImage}
              alt="Kiosk Type"
              sx={{
                maxWidth: "100%",
                width: "300px",
                borderRadius: "8px",
                display: "block",
                margin: "0 auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      )}
      {isMobile && (
        <Box sx={{ mt: 4 }}>
          {kioskDetails.map((kiosk, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#f4f4f4",
                  color: "#1a1a1a",
                  fontWeight: 600,
                }}
              >
                <Typography>{kiosk.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ fontWeight: 400, color: "#1a1a1a" }}>
                  {kiosk.description.map((text, idx) => (
                    <Typography key={idx} sx={{ marginBottom: "10px" }}>
                      <CheckIcon sx={{ color: "#34a853", fontSize: "20px" }} /> {text}
                    </Typography>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default UseCases;
