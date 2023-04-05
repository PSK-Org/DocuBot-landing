import React from "react";
import style from "./style.module.css";
import Grid2 from "@mui/material/Unstable_Grid2";
import Card from "@/components/partials/Card";
import { Typography } from "@mui/material";
import { HiLightningBolt } from "react-icons/hi";
import { FaGlobe, FaExpandArrowsAlt, FaLock, FaFeather, FaLightbulb } from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

export default function Features() {
    return (
        <div className={style.outside}>
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                className={style.title}
                align="center"
            >
                Why use DocuBot?
            </Typography>
            <Grid2 container spacing={5}>
            <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={HiLightningBolt}
                        title="Math Support"
                        description="DocuBot uses revolutionary Optical Character Recognition (OCR) technology to extract text and math equations from user-uploaded documents, with support for a wide range of math symbols and equations and surprisingly high accuracy. This allows users to study math problems and equations from their textbooks, notes, and other documents."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={FaLightbulb}
                        title="AI Powered"
                        description="DocuBot utilizes advanced AI algorithms to analyze and understand the context of user-uploaded documents. It employs Natural Language Processing (NLP) techniques to identify key concepts, relationships, and entities within the document. This allows DocuBot to provide accurate and relevant answers to user questions, based on the content of the document."
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4} style={{display: "flex"}}>
                    <Card
                        Icon={RiOpenSourceFill}
                        title="Mobile Accessible"
                        description="DocuBot is accessible on mobile devices, allowing users to study on-the-go and at their convenience. The system is optimized for mobile devices, ensuring that users can access all of the features and functionality of the system from their smartphones and tablets. This means that users can study whenever and wherever they want, making it easier to fit studying into their busy lives."
                    />
                </Grid2>
            </Grid2>
        </div>
    );
}
