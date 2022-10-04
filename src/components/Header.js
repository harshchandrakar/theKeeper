import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import classes from "./styles/Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <h1>
        <HighlightIcon sx={{ transform: "rotate(45deg)" }} />
        theKeeper
      </h1>
    </header>
  );
}

export default Header;
