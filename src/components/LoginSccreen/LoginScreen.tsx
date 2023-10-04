import { LoginContainer } from "./LoginScreenStyledComponents";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { FormFieldContainer } from "../Styled/Form";
import { validationSchema } from "./validationSchema";
import React, { useState } from "react";

interface LoginSccreenProps {
  setIsLoggined: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginScreen: React.FC<LoginSccreenProps> = ({ setIsLoggined }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLoggined", "true");
      setIsLoggined(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <LoginContainer>
        <Box>
          <Typography
            fontSize={"32px"}
            color={"#000"}
            fontFamily={"Montserrat"}
            fontWeight={600}
          >
            Sign In
          </Typography>
        </Box>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={() => {
            handleLogin();
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
        >
          {(props) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={4}
              width={"100%"}
              sx={{ mt: 4 }}
            >
              <FormFieldContainer>
                <TextField
                  sx={{ width: "100%" }}
                  name="email"
                  label="Email address"
                  onChange={(e) => {
                    props.setErrors({});
                    props.handleChange(e);
                  }}
                  variant="standard"
                  required
                  error={Boolean(props.errors.email)}
                  helperText={props.errors.email}
                />
              </FormFieldContainer>

              <FormFieldContainer>
                <TextField
                  sx={{ width: "100%" }}
                  type="password"
                  name="password"
                  label="Password"
                  onChange={(e) => {
                    props.setErrors({});
                    props.handleChange(e);
                  }}
                  variant="standard"
                  required
                  error={Boolean(props.errors.password)}
                  helperText={props.errors.password}
                />
              </FormFieldContainer>

              <Box>
                <Button
                  variant="contained"
                  color="inherit"
                  disabled={isLoading}
                  sx={{
                    bgcolor: "#273d97",
                    color: "#fff",
                    width: "100%",
                    "&:hover": {
                      color: "#273d97",
                    },
                  }}
                  onClick={() => props.handleSubmit()}
                >
                  Sign In
                  {isLoading && (
                    <Box display={"flex"} alignItems={"center"} sx={{ ml: 2 }}>
                      <CircularProgress color={"warning"} size={"14px"} />
                    </Box>
                  )}
                </Button>
              </Box>
            </Box>
          )}
        </Formik>
      </LoginContainer>
      ;
    </Box>
  );
};

export default LoginScreen;
