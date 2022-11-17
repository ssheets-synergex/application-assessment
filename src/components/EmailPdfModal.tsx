import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";

export const EmailPdfModal = ({
  open,
  handleClickClose,
}: {
  open: boolean;
  handleClickClose: () => void;
}) => {
  const handleClose = () => {
    handleClickClose();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email address")
        .required("Email Address is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      handleClickClose();
      resetForm();
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        component="form"
        marginTop={3}
        marginBottom={3}
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <DialogTitle>Send Results (*Functionality Coming Soon!)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let's start a conversation! Email yourself a copy of your results
            and Synergex will also receive a copy.
          </DialogContentText>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            multiline={true}
            rows={10}
            id="message"
            label="Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </DialogContent>
        <DialogActions style={{ marginRight: 15 }}>
          <Button variant="outlined" onClick={handleClose} type="reset">
            Cancel
          </Button>
          <LoadingButton variant="contained" type="submit">
            Send
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
