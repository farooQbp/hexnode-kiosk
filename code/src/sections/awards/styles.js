import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    awardBox: {
        backgroundColor: "#1A1C2B",
        py: 6,
        mt: 0,
        px: { xs: 2, sm: 4, md: 6 },
        padding: 0,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
    },
    gridItem: {
        textAlign: "center",
        p: 2,
        pr: 8,
        pl: 8,
        width: "30rem",
        color: "#FFFFFF",
    },
    awardText: {
        fontWeight: "bold",
        marginBottom: 1,
        textAlign: "justify",
        mt: 1
    },
    awardText2: {
        lineHeight: 1.6,
        fontSize: "0.9rem",
        textAlign: "justify",
        mb: 2
    }
}));

export default useStyles;