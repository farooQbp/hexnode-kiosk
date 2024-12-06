import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const platforms = [
  { name: "Android", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
  { name: "Windows", icon: "https://images.seeklogo.com/logo-png/26/2/windows-10-icon-logo-png_seeklogo-267364.png" },
  { name: "iOS", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_gray_logo.png" },
  { name: "Android TV", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
  { name: "Apple TV", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Fire", icon: "https://seeklogo.com/images/A/amazon-fire-tv-logo-7E98E594FE-seeklogo.com.png" },
];

const Platforms = () => {

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        backgroundColor: "#fff",
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 3,
          color: "#000",
          position: "relative",
        }}
      >
        Platforms supported
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {platforms.map((platform) => (
          <Card
            key={platform.name}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia
              component="img"
              src={platform.icon}
              alt={platform.name}
              sx={{
                width: 48,
                height: 48,
                mb: 1,
                objectFit: "contain",
              }}
            />
            <Typography variant="body1" fontWeight="bold" color="#000">
              {platform.name}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Platforms;
