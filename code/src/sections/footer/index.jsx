import React from "react";
import { Box, Typography, TextField, Button, Link, Grid2 as Grid } from "@mui/material";
import useStyles from "./styles";

const FooterSection = () => {
  const classes = useStyles()

  return (
    <Box component="footer" className={classes.mainDiv}>
      <Typography variant="h5" fontWeight="bold" mb={2} className={classes.footerTypography}>
        Sign up and try Hexnode free for 14 days!
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className={classes.outerGrid}
      >
        <Grid item xs={12} sm={8}>
          <TextField
            placeholder="Your Work Email"
            variant="outlined"
            fullWidth
            className={classes.gridText}
            InputProps={{
              style: {
                borderRadius: 2
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            className={classes.button}
          >
            GET STARTED
          </Button>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        className={classes.creditsText}
      >
        No credit cards required.{" "}
        <Link href="#" color="error" underline="hover">
          Request a demo
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterSection;
