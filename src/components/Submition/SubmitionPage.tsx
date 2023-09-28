import { Box, Container } from "@mui/material";
import Menu from "./Menu";
import PersonalInformationForm from "./PersonalInformationForm/PersonalInformationForm";
import { SubmitionPageWrapper } from "./SubmitionPageStyledComponents";

const SubmitionPage = () => {
  return (
    <Box>
      <Container sx={{ my: 4 }}>
        <SubmitionPageWrapper>
          <Box sx={{ display: "flex", flex: 1 }}>
            <Menu />
          </Box>

          <Box sx={{ display: "flex", flex: 3 }}>
            <PersonalInformationForm />
          </Box>
        </SubmitionPageWrapper>
      </Container>
    </Box>
  );
};

export default SubmitionPage;
