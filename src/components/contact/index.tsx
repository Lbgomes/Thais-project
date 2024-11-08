import { Box, FormControl, TextareaAutosize, TextField, Typography } from "@mui/material";
import { FormInput } from "../input";


export default function Contact() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            padding: "0 16px",
            marginTop: "4rem",
            maxWidth: "800px",
            width: "100%",
        }}>
            <Typography sx={{
                fontFamily: "Shadows Into Light Two, cursive",
                fontSize: "calc(0.4 * 4rem)",
            }}>
                Contact me
            </Typography>
            <FormControl sx={{
                maxWidth: "800px",
                width: "100%"
            }}>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px"
                }}>

                    <FormInput onChange={() => { }} name="name" label="Name" type="text" placeholder="Name" />
                    <FormInput onChange={() => { }} name="name" label="Email" type="text" placeholder="Email" />

                    <TextareaAutosize placeholder="Message" id="time" style={{
                        height: "150px",
                        borderRadius: "8px",
                        padding: "16px",
                        border: "1px solid #0000003b",

                    }} />
                </Box>
            </FormControl>

        </Box>
    )
}