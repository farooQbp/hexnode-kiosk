import React from 'react';
import { Button } from '@mui/material';

const CustomButton = (props) => {
    const {
        content,
        size = "large",
        paddingX,
    } = props;

    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#dc0735',
                color: "white",
                fontWeight: "bold",
                paddingY: paddingX,
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                textTransform: "none",
                px: { xs: 2, sm: 3, md: 4 },
                "&:hover": {
                    backgroundColor: "#e62e5a",
                },
            }}
            size={size}
        >
            {content}
        </Button>
    )
}

export default CustomButton