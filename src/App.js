import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import classes from "./components/styles/CreateArea.module.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
function App() {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      let pinned = prevNotes.filter((item) => {
        return item.pinned === true;
      });
      let unPinned = prevNotes.filter((item) => {
        return item.pinned !== true;
      });
      return [...pinned, newNote, ...unPinned];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  const pinNotes = (id) => {
    console.log(notes[id].pinned);
    if (notes[id].pinned === false) {
      let changedNote = notes[id];
      changedNote.pinned = true;
      setNotes((prev) => {
        return [
          changedNote,
          ...prev.filter((noteItem, index) => {
            return index !== id;
          }),
        ];
      });
    } else {
      let changedNote = notes[id];
      changedNote.pinned = false;
      setNotes((prev) => {
        const data = prev.filter((noteItem, index) => {
          return index !== id;
        });
        return [
          ...data.filter((items) => {
            return items.pinned === true;
          }),
          changedNote,
          ...data.filter((items) => {
            return items.pinned !== true;
          }),
        ];
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.length >= 6 && (
        <div className={classes.navigator}>
          <ArrowBackIosNewRoundedIcon
            sx={{ color: page !== 0 && "#f5ba13" }}
            onClick={() => {
              if (page > 0)
                setPage((prev) => {
                  return prev - 1;
                });
            }}
          />
          <span>
            {page + 1} / {Math.floor(notes.length / 6) + 1}
          </span>
          <ArrowForwardIosRoundedIcon
            sx={{ color: page < Math.floor(notes.length / 6) && "#f5ba13" }}
            onClick={() => {
              if (page < Math.floor(notes.length / 6) + 1)
                setPage((prev) => {
                  return prev + 1;
                });
            }}
          />
        </div>
      )}
      {notes.map((noteItem, index) => {
        return (
          Math.floor(index / 6) === page && (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              pinned={noteItem.pinned}
              onDelete={deleteNote}
              onPin={pinNotes}
            />
          )
        );
      })}
    </div>
  );
}

export default App;
