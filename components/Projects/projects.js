import styles from "./projects.module.css";
import Project from "./project";

import { Swiper, SwiperSlide } from 'myswiper/react';
import 'myswiper/css';

import React, { useRef, useState, useEffect } from "react";

function Projects(){

    const data = [
        {
            date:"BEC April 2k19",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"/assets/timepass1.png",
            id:1,
        },
        {
            date:"BEC April 2k19",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"/assets/timepass1.png",
            id:23,
        },
        {
            date:"BEC April 2k19",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"/assets/timepass1.png",
            id:3,
        },
        {
            date:"BEC April 2k19",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"/assets/timepass1.png",
            id:4,
        },
    ];

    let slidesNum = 1;

    const size = useWindowSize();

    if (size.width > 1100){
        slidesNum = 3;
    }else if (size.width > 600){
        slidesNum = 2;
    }

    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={slidesNum}
            grabCursor={true}
            >
            {data.map((item) => {return(
                <SwiperSlide key={item.id}>
                    <Project packet={item} />
                </SwiperSlide>
            )})}
            </Swiper>
    );

}


function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
          });
        }
      
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

export default Projects;