import { useState } from "react";
import { Button, Dialog, DialogContent, TextField, Grid } from "@mui/material";
import { storeMovie } from "../../service/movies";


const MovieCreate = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    director: "",
    gender: "",
    video_link: "",
    wallpaper: "",
  });

  const handleChangeUInmput= (e) => {
    const {value, name} = e.target;

    setValues({
        ...values, [name]:value,
    })
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  const fetchStoreMovie = async () => {
      //llamando la pelicula
      await storeMovie(values);
      //actualizando los valores
      await props.fetchMovies();
      //cerrando el dialog
      handleOpenDialog();
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Crear pelicula
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField label="Nombre de la peli" name="name" fullWidth onChange={handleChangeUInmput}/>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Nombre del director"
                name="director"
                fullWidth
                onChange={handleChangeUInmput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField label="Genero" name="gender" fullWidth onChange={handleChangeUInmput}/>
            </Grid>
            <Grid item md={6}>
              <TextField label="Link del video" name="video_link" fullWidth onChange={handleChangeUInmput}/>
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Link de la portada"
                name="wallpaper"
                fullWidth
                onChange={handleChangeUInmput}
              />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" onClick={fetchStoreMovie}>Crear</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieCreate;
