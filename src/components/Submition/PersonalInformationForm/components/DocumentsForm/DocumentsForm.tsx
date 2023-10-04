import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useFormikContext } from "formik";
import {
  FilePayload,
  PersonalInformation,
} from "../../usePersonalInfomationForm";
import { FileName, UploadedArea } from "./DicumentsFormStyledComponents";
import PDFIcon from "../../../../../icons/PDFIcon";
import ImageFormatIcon from "../../../../../icons/ImageFormatIcon";
import DeleteIcon from "../../../../../icons/DeleteIcon";
import { useDropzone } from "react-dropzone";
import AddIcon from "../../../../../icons/AddIcon";

const DocumentsForm = () => {
  const { values, setFieldValue, setErrors } =
    useFormikContext<PersonalInformation>();
  const [files, setFiles] = useState<FilePayload[]>(values.files);

  const onDrop = async (acceptedFiles: File[]) => {
    if (!acceptedFiles || !acceptedFiles.length) return;

    setErrors({});

    const filesPayload: FilePayload[] = [];

    const promises = Array.from(acceptedFiles).map((file) => {
      return new Promise<FilePayload>((resolve) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = btoa(reader.result as string);

          resolve({ name: file.name, body: base64String });
        };

        reader.readAsBinaryString(file);
      });
    });

    const resolvedStrings = await Promise.all(promises);

    filesPayload.push(...resolvedStrings);

    setFiles((prev) =>
      [...prev, ...filesPayload].filter((object, index, array) => {
        return index === array.findIndex((obj) => obj.name === object.name);
      })
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".png"],
      "application/pdf": [".pdf"],
    },
  });

  const removeFile = (fileName: string) => {
    const filteredFileArray = files.filter(
      (file: FilePayload) => file.name !== fileName
    );

    setFiles(filteredFileArray);
  };

  useEffect(() => {
    setFieldValue("files", files);
  }, [files]);

  return (
    <Box>
      <Box sx={{ mt: 4 }}>
        <UploadedArea isDragActive={isDragActive} {...getRootProps()}>
          <input
            name="files"
            {...getInputProps()}
            accept="application/pdf, image/jpeg, image/png"
          />
          <AddIcon fill={isDragActive ? "#273d97" : "#a2a4a6"} />
        </UploadedArea>
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
                  <DeleteIcon sx={{ fontSize: "16px" }} />
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
