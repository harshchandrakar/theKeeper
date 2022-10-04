import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./styles/Header.module.css";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  const handlePin = () => {
    props.onPin(props.id);
  };

  return (
    <div className={props.pinned ? classes.pinned : classes.note}>
      <div>
        <div className={classes.title}>
          <h1>{props.title}</h1>
          <PushPinRoundedIcon
            sx={{
              color: props.pinned ? "#f5ba13" : "gray",
              transform: "rotate(45deg)",
            }}
            onClick={handlePin}
          />
        </div>

        <p>{props.content}</p>
      </div>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
