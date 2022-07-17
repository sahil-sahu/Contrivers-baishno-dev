import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

// import AlertDialogSlide from './progressPrompt';
import UserProjects from './userProject';

import styles from './progress.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import { Swiper, SwiperSlide } from "myswiper/react";
import "myswiper/css";
import "myswiper/css/pagination";
import { Pagination } from "myswiper";


import React, { useRef, useState, useEffect } from "react";

export default function ShowCase(props){

    const [height, setHeight ] = useState(1000);
    const [width, setWidth ] = useState(1000);
    const [prompt, setPrompt ] = useState(false);
    
    const projects = props.userProjects;
    // console.log(projects);

    // let drive = "https://drive.google.com/drive/folders/1LRSNbfQ_I8NtX2prfLXfKgFB32bq-gnm?usp=sharing";

    return(
        <div className={styles.accordian}>
            {projects && projects.map((item)=>{
                return(
                    <div key={item.route} className={styles.accContainer}>
                        {/* <AlertDialogSlide open={prompt} settings={setPrompt}/>     */}
                        <Accordion className={styles.card}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={styles.summary}
                            >
                                <div className={styles.imgcheck}>
                                    {/* <Checkbox className={styles.checkbox} onClick={()=>{
                                        setPrompt(true)
                                    }}/> */}
                                    <img src={props.projects[item.id].cover} alt={item.name} />
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressline} style={{
                                        backgroundImage: `linear-gradient(to right, #EFA37F ${item.percent}%, transparent 0%)`,
                                        width:`10rem`,
                                        height: `1.5rem`,
                                        border: "1px solid #EFA37F",
                                        borderRadiius: "1rem",
                                    }}></div>
                                    <p>{item.percent}%</p>
                                </div>
                                <Typography>{item.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={styles.AccDetails}>

                                <h3>
                                    Description
                                </h3>
                                <Typography>
                                    {props.projects[item.id].descrip}
                                </Typography>
                                <h3>
                                    Progress
                                </h3>
                                <p className={styles.progressUpdate}>
                                    {item.comment}
                                </p>
                                <UserProjects drive={item.drive} />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            })}
        </div>
    );

}