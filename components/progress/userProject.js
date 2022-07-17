import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

import styles from './progress.module.css';

import { Swiper, SwiperSlide } from "myswiper/react";
import "myswiper/css";
import "myswiper/css/pagination";
import { Pagination } from "myswiper";

import React, { useRef, useState, useEffect } from "react";



export default function UserProjects(props){

    const [driveData, setDrive] = useState(false);

    useEffect(()=>{
        async function driveLoad(link){
    
            let response = await fetch(`https://contrivers-drive-api.herokuapp.com/drive?link=${link}`,{mode: 'cors'})
            let data = await response.json()
            // console.log(data.images);
            setDrive(data.images);
        
        }
        driveLoad(props.drive);
    },[props.drive]);


    return(
        <Swiper
            pagination={{
                type: "fraction",
            }}
            spaceBetween={50}
            modules={[Pagination]}
            className={styles.CardSlider}  
        >
            {driveData ? driveData.map((i,index) => {
                return(
                    <SwiperSlide key={index}>
                        <Image src={i} layout="fill" priority={true} alt={`Baishodevi Raw Images`} />
                    </SwiperSlide>
                );
            }) : ""}
        </Swiper>
    );

} ;