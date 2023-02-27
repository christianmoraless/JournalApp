import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const addNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
      <IconButton
        onClick={addNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { background: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
