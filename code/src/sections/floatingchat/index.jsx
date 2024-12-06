import React, { useEffect } from "react";
import { Fab, Badge } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useState } from "react";
import useStyles from "./styles";

const FloatingChat = () => {
  const [messageCount, setMessageCount] = useState(0);
  const classes = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setMessageCount(1)
    }, 2000)
  }, [])

  return (
    <div className={classes.mainDiv} >
      <Badge
        badgeContent={messageCount}
        color="error"
        className={classes.badge}
      >
        <Fab
          color="primary"
          aria-label="chat"
          className={classes.fab}
          onClick={() => alert("Chat opened!")}
        >
          <ChatIcon className={classes.icon} />
        </Fab>
      </Badge>
    </div>
  );
};

export default FloatingChat;
