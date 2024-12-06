import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const FooterLinks = () => {
    return (
        <Box
            sx={{
                mt: 0,
                py: 2,
                backgroundColor: "#F5F5F5",
            }}
        >
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    px: { xs: 1, sm: 2 },
                    flexDirection: { xs: "column", sm: "row" },
                    textAlign: { xs: "center", sm: "left" },
                }}
                spacing={2}
            >
                <Grid item>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(0, 0, 0, 0.7)",
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                        }}
                    >
                        Terms of Use &nbsp;-&nbsp; Privacy &nbsp;-&nbsp; Cookies
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(0, 0, 0, 0.7)",
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                        }}
                    >
                        Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FooterLinks