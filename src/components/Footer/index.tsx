import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'
import style from './style.module.css'
import { FaStar, FaBookOpen } from 'react-icons/fa'

export default function index() {
  return (
    <div className={style.out}>
        <div className={style.columns}>
            <div className={style.column} style={{gap: "2rem"}}>
                <Link href="/">
                    <Image src="/logo.svg" alt="DocuBot" width={200} height={100}/>
                </Link>
                <Typography variant="body1" gutterBottom align="left" style={{color: "#888"}}>
                    DocuBot is a study assistant that uses AI to help you to study more efficiently!
                </Typography>
            </div>
            <div className={style.column}>
                <Typography variant="h6" component="span" gutterBottom align="left" fontWeight={900}> 
                    Resources
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                    <Link href="/DocuBot_v2.pdf" className={style.link}>
                        <FaBookOpen size="1.5rem" />
                        <span style={{marginTop: "0.3rem"}}>White Paper</span>
                    </Link>
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                    <Link href="" className={style.link}>
                        <FaStar size="1.5rem"/>
                        <span style={{marginTop: "0.3rem"}}>Try it here</span>
                        </Link>
                </Typography>
            </div>
        </div>
        <div style={{height: "1px", width: "100%", backgroundColor: "#666", margin: "1rem 0"}} />
        <Typography variant="body2" gutterBottom align="center" style={{color: "#888", marginTop: "50px"}}>
            PSK {new Date().getFullYear()} &copy; All rights reserved.
        </Typography>
    </div>
  )
}
