import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    mainDiv: {
        backgroundColor: "#030D25",
        color: "#fff",
        py: 4,
        textAlign: "center",
    },
    footerTypography: {
        fontSize:
            { xs: "1.2rem", sm: "1.5rem" }
    },
    outerGrid: {
        maxWidth: { xs: 350, sm: 600 },
        mx: "auto",
        mb: 2,
    },
    gridText: {
        maxWidth: { xs: "80%", sm: "100%" },
        mx: "auto",
        backgroundColor: "#fff",
        borderRadius: 2,
    },
    button: {
        height: "100%",
        maxWidth: { xs: "80%", sm: "100%" },
        mx: "auto",
        borderRadius: 2,
        fontWeight: "bold",
        fontSize: { xs: "0.8rem", sm: "1rem" },
    },
    creditsText: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: { xs: "0.9rem", sm: "1rem" },
    }
}));

export default useStyles;