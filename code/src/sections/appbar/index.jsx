import React from "react";
import { AppBar, Toolbar, Box, Container } from "@mui/material";
import HexLogo from "../../assets/hexlogo";
import CustomButton from "../../components/button";
import useStyles from "./styles";

const Header = () => {
    const [hovered, setHovered] = React.useState(false);
    const classes = useStyles()

    return (
        <AppBar position="fixed" className={classes.appBar}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Container maxWidth='xl'>
                <Toolbar className={classes.toolBar}>
                    <Box className={classes.appBarBox}>
                        <HexLogo color={hovered ? "#000000" : "#FFFFFF"} />
                    </Box>
                    <CustomButton content='14 DAY FREE TRIAL' size='medium' />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
