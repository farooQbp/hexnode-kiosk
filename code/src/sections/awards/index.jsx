import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import { awardsData } from "../../constants/awards";

const AwardsSection = () => {
  const classes = useStyles()

  return (
    <Box sx={{
      backgroundColor: "#1A1C2B",
      py: 6,
      mt: 0,
      px: { xs: 2, sm: 4, md: 6 },
      padding: 0,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center"
  }}>
      <Grid container spacing={4}>
        {awardsData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            key={index}
            sx={{
              textAlign: "center",
              p: 2,
              pr: 8,
              pl: 8,
              width: "30rem",
              color: "#FFFFFF",
          }}
          >
            <Typography
              variant="h4"
              component="div"
              className={classes.awardText}
            >
              {item.logo}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.awardText2}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AwardsSection;