import { useDispatch, useSelector } from "react-redux";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import {
  setActiveNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, onInputChange, formState, date } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };
  const onInputFileChange = ({ target }) => {
    dispatch(startUploadingFiles(target.files));
  };
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography>{dateString}</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden multiple onChange={onInputFileChange} />
        </Button>
        <Button
          color="primary"
          sx={{ padding: 1 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio el dia de hoy?"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery images={note.imagesUrl} />
    </Grid>
  );
};
