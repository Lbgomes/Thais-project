import { Box, Typography } from "@mui/material";


interface ItemProps {
    title: string
}
const Item = ({ title }: ItemProps) => {
    return (
        <Box sx={{
            cursor: "pointer",
        }}>
            <Typography sx={{
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "3px",
            }}>{title}</Typography>
        </Box>
    )
}

export default function Header() {

    return (
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center", margin: "1.5rem 0" }}>
            <Item title="Home" />
            <Item title="About" />
            <Item title="Samples" />
            <Item title="Faq" />
            <Item title="Contact" />
        </Box>
    )
}