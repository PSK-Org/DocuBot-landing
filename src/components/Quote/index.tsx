import React from 'react'
import { Typography } from '@mui/material'
import style from './style.module.css'

export default function Quote() {
  return (
    <div className={style.out}>
        <Typography variant="h2" component="p" gutterBottom align="left" className={style.quote}>
            WORK HARD,
        </Typography>
        <Typography variant="h2" component="p" gutterBottom align="center" className={style.quote}>
            PLAY HARD,
        </Typography>
        <Typography variant="h2" component="p" gutterBottom align="right" className={style.quote}>
            <em style={{color: "#e92c81"}}>STUDY</em> HARD.
        </Typography>
        <div style={{display: "flex", justifyContent:"space-between", color: "#888"}}>
            <div></div>
            <Typography variant="body1" component="p" gutterBottom align="left">
                DocuBot will not help with the first two. But for the last one, we got you covered {":)"}
            </Typography>
        </div>
    </div>
  )
}
