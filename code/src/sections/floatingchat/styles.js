import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    mainDiv: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
    },
    badge: {
        "& .MuiBadge-dot": {
            backgroundColor: "#34a853",
        },
    },
    fab: {
        width: 56,
        height: 56,
        backgroundColor: "#1a73e8",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        "&:hover": {
            backgroundColor: "#0c56b2",
        },
    },
    icon: {
        fontSize: "28px",
        color: "#ffffff"
    }
}));

export default useStyles;