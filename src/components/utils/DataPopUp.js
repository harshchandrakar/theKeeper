import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import classes from "../styles/utils.module.css";

function DataPopUp(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    pinned: false,
  });
  useEffect(() => {
    setNote({
      title: props.title,
      content: props.content,
      pinned: false,
    });
    console.log(note);
  }, [props]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  const handleUpdate = () => {
    props.onUpdate(note.title, note.content, props.id);
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.updateNote}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />

          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={3}
          />

          <button onClick={handleUpdate}>Update</button>
        </div>
      </Dialog>
    </div>
  );
}

export default DataPopUp;
