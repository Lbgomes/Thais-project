import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import imagem_1 from '@/assets/20240830_171335.jpg'
import imagem_2 from '@/assets/20240929_113749.jpg'
import imagem_3 from '@/assets/20241001_070514_0.jpg'
import imagem_4 from '@/assets/20241001_200631.jpg'
import imagem_5 from '@/assets/20241023_174834.jpg'
import { motion, Variants } from "framer-motion";
export default function Gallery() {

    const galleryItems = [
        { src: imagem_1, title: "Camera Film", category: "Showcase" },
        { src: imagem_2, title: "Coffee", category: "Showcase" },
        { src: imagem_5, title: "Wrist Watch", category: "Showcase" },
        { src: imagem_4, title: "Keyboard", category: "Showcase", fullWidth: true },
        { src: imagem_3, title: "Phone", category: "Showcase", fullWidth: true },
    ];
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 150
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "linear",
                bounce: 0.4,
                duration: 0.3
            }
        }
    };

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            marginTop: "5rem",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
            }}>
                <Typography sx={{
                    fontSize: "calc(0.6 * 4rem)",
                    fontFamily: "Shadows Into Light Two, cursive",
                    alignSelf: "center",
                }}>
                    Lorem ipsum


                </Typography>
                <Typography>
                    Cras porttitor massa id dolor vestibulum ultricies id a quam. Proin tempus porta arcu ornare tristique. Vestibulum feugiat augue eleifend, viverra tortor et, iaculis erat. Vestibulum justo nulla, pellentesque in malesuada sit amet, iaculis in enim. Integer euismod auctor porttitor. Quisque consectetur turpis lacus, non fermentum sem dignissim sed.

                </Typography>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    gap: "3rem",
                    placeContent: "center",
                }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                }}>

                    {galleryItems.slice(0, 2).map((item, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            style={{
                                width: "450px"
                            }}
                        >
                            <motion.div variants={cardVariants}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "3 / 4",
                                        position: "relative",
                                        overflow: "hidden",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Image src={item.src} alt={item.title} fill style={{ objectFit: "cover" }} />
                                </Box>
                            </motion.div>
                        </motion.div>
                    ))}
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    marginTop: "25%"
                }}>

                    {galleryItems.slice(2, 4).map((item, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            style={{
                                width: "450px"
                            }}
                        >
                            <motion.div variants={cardVariants}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "3 / 4",
                                        position: "relative",
                                        overflow: "hidden",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Image src={item.src} alt={item.title} fill style={{ objectFit: "cover" }} />
                                </Box>
                            </motion.div>
                        </motion.div>
                    ))}
                </Box>

            </Box>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{
                    width: "100%",
                    borderRadius: "8px",

                }}
            >
                <motion.div variants={cardVariants}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "950px",
                            justifySelf: "center",
                            aspectRatio: "6 / 3",
                            borderRadius: "8px",
                        }}
                    >
                        borderRadius: "8px",
                        <Image src={galleryItems[4].src} alt={galleryItems[4].title} fill style={{ objectFit: "cover", borderRadius: "8px" }} />
                    </Box>
                </motion.div>
            </motion.div>
        </Box >
    )
};