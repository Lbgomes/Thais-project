import { Box, FormControl, TextareaAutosize, TextField, Typography } from "@mui/material";


export default function Contact() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "0 16px",
            width: "100%",
            marginTop: "4rem",

        }}>
            <Typography>
                Contact me
            </Typography>
            <FormControl>
                <TextField label="Name" variant="outlined" />
                <TextField label="Email" variant="outlined" />
                <TextareaAutosize placeholder="Message" id="time" />
            </FormControl>

        </Box>
    )
}