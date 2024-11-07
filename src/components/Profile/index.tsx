import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Imagem from '@/assets/1000167439.jpg'
export default function Profile() {
    return (
        <Box sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "4rem",
            "@media (max-width: 850px)": {
                flexDirection: "column",
                alignItems: "center",
                gap: "3rem"
            }
        }}>
            <Box sx={{
                display: "flex",
                maxWidth: "500px",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "8px",
                "img": {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",

                }
            }}>

                <Image
                    src={Imagem}
                    alt="profile"
                />
            </Box>

            <Box sx={{

                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "0 16px",
                maxWidth: "600px",
                width: "100%",
            }}>
                <Typography sx={{
                    fontSize: "calc(0.7 * 4rem)",
                    fontFamily: "Shadows Into Light Two, cursive",
                    alignSelf: "center",
                }}>
                    About Thaís
                </Typography>
                <Typography sx={{
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem turpis, varius ac lacus vel, gravida condimentum nisl. Pellentesque semper tellus egestas venenatis laoreet.
                </Typography>

                <Typography sx={{

                }}>
                    Cras porttitor massa id dolor vestibulum ultricies id a quam. Proin tempus porta arcu ornare tristique. Vestibulum feugiat augue eleifend, viverra tortor et, iaculis erat. Vestibulum justo nulla, pellentesque in malesuada sit amet, iaculis in enim. Integer euismod auctor porttitor. Quisque consectetur turpis lacus, non fermentum sem dignissim sed.
                </Typography>
            </Box>
        </Box>
    )
}