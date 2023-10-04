import { Box } from "@mui/material";
import Header from "./components/Header";
import SubmitionPage from "./components/Submition/SubmitionPage";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./components/LoginSccreen/LoginScreen";
import { useState } from "react";

function App() {
  const [isLoggined, setIsLoggined] = useState(
    Boolean(localStorage.getItem("isLoggined"))
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      sx={{ justifyContent: "space-between" }}
    >
      <Header isLoggined={isLoggined} setIsLoggined={setIsLoggined} />

      {isLoggined ? (
        <SubmitionPage />
      ) : (
        <LoginScreen setIsLoggined={setIsLoggined} />
      )}

      <Box justifySelf={"flex-end"}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
