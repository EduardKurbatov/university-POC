import { Box, IconButton, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { File, PersonalInformation } from "../../usePersonalInfomationForm";
import { AddFileLabel, FileName } from "./DicumentsFormStyledComponents";
import PDFIcon from "../../../../../icons/PDFIcon";
import ImageFormatIcon from "../../../../../icons/ImageFormatIcon";
import CrossIcon from "../../../../../icons/CrossIcon";

const DocumentsForm = () => {
  const { values, setFieldValue, setErrors } =
    useFormikContext<PersonalInformation>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const isFileAdded = values.files.find(
        (existingFile: File) => file.name === existingFile.name
      );

      if (!file || isFileAdded) return;

      const reader = new FileReader();

      reader.onload = () => {
        const base64String = btoa(reader.result as string);
        setErrors({});
        setFieldValue("files", [
          ...values.files,
          {
            name: file.name,
            body: base64String,
          },
        ]);
      };

      reader.readAsBinaryString(file);
    }
  };

  const removeFile = (fileName: string) => {
    const filteredFileArray = values.files.filter(
      (file: File) => file.name !== fileName
    );

    setFieldValue("files", filteredFileArray);
  };

  return (
    <Box>
      <Box sx={{ mt: 4 }}>
        <AddFileLabel htmlFor="fileInput">Add file</AddFileLabel>
        <TextField
          id={"fileInput"}
          sx={{ display: "none" }}
          name="files"
          variant="outlined"
          type="file"
          inputProps={{
            accept: ["application/pdf", "image/jpeg", "image/png"],
          }}
          onChange={handleFileChange}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "400px",
          my: 2,
          px: 1,
        }}
      >
        {values.files.map((file) => (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              my: 1,
              alignItems: "center",
            }}
            key={file.name}
          >
            {file.name.includes("pdf") ? <PDFIcon /> : <ImageFormatIcon />}
            <Box display={"flex"} width={"100%"} alignItems={"center"}>
              <FileName>{file.name}</FileName>

              <Box
                sx={{
                  ml: 1,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconButton onClick={() => removeFile(file.name)}>
                  <CrossIcon sx={{ fontSize: "14px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DocumentsForm;
