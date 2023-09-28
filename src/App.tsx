import { Box } from "@mui/material";
import Header from "./components/Header";
import SubmitionPage from "./components/Submition/SubmitionPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Header />

      <SubmitionPage />

      <Footer />
    </Box>
  );
}

export default App;
