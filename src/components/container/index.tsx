import { Box } from "@mui/material";


interface ContainerProps {
    children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            "@media (max-width: 850px)": {
                width: "90%",
            }
        }}
        >
            {children}
        </Box>
    )
}