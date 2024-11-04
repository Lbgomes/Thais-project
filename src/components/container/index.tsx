import { Box } from "@mui/material";


interface ContainerProps {
    children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
        >
            {children}
        </Box>
    )
}