import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    featureBox: {
        maxWidth: "75%",
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    innerBox: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 2,
    },
    imageBox: {
        flex: "1 1 33%",
        width: { xs: "100%", md: "33%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
    },
    imageStyle: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        objectFit: "cover",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    accordtionBox: {
        flex: "2 1 67%",
        width: { xs: "100%", md: "67%" },
    },
    accordtion: {
        boxShadow: "none",
        borderBottom: "1px solid #eee",
        "&:before": { display: "none" },
    },
    accordtionSummary: {
        padding: 0,
        "& .MuiAccordionSummary-content": {
            margin: 0,
        },
    },
    accordtionText: {
        fontWeight: 600,
        color: "#333",
        fontSize: "18px",
    },
    accordtionDetails: {
        padding: 0,
        paddingTop: 1
    },
    accordtionDetailsText: {
        color: "#666",
        fontSize: "16px",
    }
}));

export default useStyles;