import { Alert, Box, Container, LinearProgress } from "@mui/material";
import Menu from "./Menu";
import PersonalInformationForm from "./PersonalInformationForm/PersonalInformationForm";
import { SubmitionPageWrapper } from "./SubmitionPageStyledComponents";
import { usePersonalInfomationForm } from "./PersonalInformationForm/usePersonalInfomationForm";

const SubmitionPage = () => {
  const { isLoading, isSubmited, error } = usePersonalInfomationForm();

  console.log(error);
  return (
    <Box>
      {isLoading && <LinearProgress color={"warning"} />}

      {error && <Alert severity="error">Something went wrong!</Alert>}
      {isSubmited && <Alert severity="success">Submited!</Alert>}

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
