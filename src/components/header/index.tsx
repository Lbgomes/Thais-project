import { Box, Collapse, Typography } from "@mui/material";
import { useState } from "react";


interface ItemProps {
    title: string
}
const Item = ({ title }: ItemProps) => {
    return (
        <Box sx={{
            cursor: "pointer",
            color: 'white',
            position: 'relative',
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '0',
                height: '1.4px',
                bottom: '-3px',
                left: '0%',
                transform: 'translate(0%,0%)',
                backgroundColor: '#000',
                visibility: 'hidden',
                transition: 'all 0.3s ease-in-out',
            },
            '&:hover:before': {
                visibility: 'visible',
                width: '100%',
            },
        }}>
            <Typography sx={{
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "12px",
            }}>{title}</Typography>
        </Box >
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