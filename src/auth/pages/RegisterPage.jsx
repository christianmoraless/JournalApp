import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value >= 6,
    "La constraseña debe de tener mas de 6 caracteres",
  ],
  displayName: [(value) => value >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const {
    formState,
    displayName,
    email,
    password,
    isValidDisplayName,
    isValidEmail,
    isValidPassword,
    isFormValid,
    onInputChange,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!isValidDisplayName}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!isValidEmail}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!isValidPassword}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ir a login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
