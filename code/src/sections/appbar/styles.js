import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: "#0A0C23 !important",
        boxShadow: "none !important",
        '&:hover': {
            backgroundColor: '#FFFFFF !important'
        }
    },
    toolBar: {
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 6 }
    },
    appBarBox: {
        display: "flex",
        alignItems: "center"
    }
}));

export default useStyles;