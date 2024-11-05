import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import imagem_1 from '@/assets/20240830_171335.jpg'
import imagem_2 from '@/assets/20240929_113749.jpg'
import imagem_3 from '@/assets/20241001_070514_0.jpg'
import imagem_4 from '@/assets/20241001_200631.jpg'
import imagem_5 from '@/assets/20241023_174834.jpg'
export default function Gallery() {

    const galleryItems = [
        { src: imagem_1, title: "Camera Film", category: "Showcase" },
        { src: imagem_2, title: "Coffee", category: "Showcase" },
        { src: imagem_5, title: "Wrist Watch", category: "Showcase" },
        { src: imagem_4, title: "Keyboard", category: "Showcase", fullWidth: true },
        { src: imagem_3, title: "Phone", category: "Showcase", fullWidth: true },
    ];
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        }}>
            <Box sx={{
                display: "grid",
                width: "100%",
                height: "100%",
                gap: "2rem",
                gridTemplateColumns: "repeat(2,1fr)",
                gridTemplateRows: "repeat(3,1fr)",

            }}>

                {galleryItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: "450px",
                            aspectRatio: "3/4",
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "8px",
                            "&:hover img": {

                            },
                            ":last-child": {
                                gridColumn: "span 2",
                                width: "100%",
                                aspectRatio: "4/3",
                            }
                        }

                        }>
                        <Image src={item.src} alt={item.title} fill
                        />
                    </Box>
                ))
                }

            </Box>
        </Box>
    )
};