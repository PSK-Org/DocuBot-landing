import React from "react";
import HackerEffect from "@/components/hackerEffect";
import { Nunito } from "next/font/google";
import { Button } from "antd";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { ConfigProvider, theme } from "antd";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import style from "./style.module.css";

const nunitoBold = Nunito({ subsets: ["latin"], weight: "1000" });

export default function Header({ darkMode }: { darkMode: boolean }) {
    const themeHook = useTheme();
    const md = useMediaQuery(themeHook.breakpoints.down('md'));
    return (
        <>
        <div style={{display: "flex", flexDirection: "column", "alignItems": "center"}}>
            <div className={style.header}>
                <h1
                    className={classNames(nunitoBold.className, style.leadingText)}
                >
                    <HackerEffect
                        word="Docubot"
                        className={style.leadingText}
                    />{" "}
                    is the <span style={{ color: "#5fcfff" }}>dankest</span> way to
                    study <span style={{ color: "#e92c81" }}>efficiently.</span>
                </h1>
            </div>
            <Typography variant="body1" className={style.bodyText}> 
            Docubot is a revolutionary study tool that utilizes AI technology to provide answers to questions based on the context of user-uploaded documents, making studying more efficient and effective than ever before.
            </Typography>
            <div className={style.actions}>
                <ConfigProvider
                    theme={{
                        algorithm: darkMode
                            ? theme.darkAlgorithm
                            : theme.defaultAlgorithm,
                    }}
                >
                    <Button size="large" shape="round" icon={<FaBookOpen />} href="/DocuBot_v2.pdf">
                        White Paper
                    </Button>
                </ConfigProvider>
                <ConfigProvider
                    theme={{
                        algorithm: darkMode
                            ? theme.defaultAlgorithm
                            : theme.darkAlgorithm,
                    }}
                >
                    <Button size="large" shape="round" icon={<FaStar />} href="">
                        Try it here!
                    </Button>
                </ConfigProvider>
            </div>
            {/* Enable when we have a better image
            <ParallaxProvider>
                    <Parallax speed={md ? 5 : 20}>
                        <Image width={1600} height={900} className={style.parallaxImage} src="https://picsum.photos/1600/900" alt="dashboard" style={md ? {transform: "translateY(100px)"} : {} } loading="eager" />
                    </Parallax>
            </ParallaxProvider>
            <div style={md ? {height: "150px"} : {}} />
            */}
            <div style={{height: "100px"}}/>
        </div>
        </>
    );
}