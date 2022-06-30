import styles from "./projects.module.css";
import Project from "./project";

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'myswiper/react';
import 'myswiper/css';

import React, { useRef, useState, useEffect } from "react";

import { app, database } from '../../firebaseConfig';
import {
    getDocs,
    collection,
    where,
    orderBy,
    query,
    limit
  } from 'firebase/firestore';
  
function decoder(mainData){

  var obj = JSON.parse(mainData);
  var arr = [];
  for (var i in obj) 
  {   
      obj[i].route = i;
      arr.push(obj[i]);
  };

  return arr;
};
function Projects(props){

    var projects = props.data;

    const data = [
        {
            date:"BEC April 2k19",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            cover:"/assets/timepass1.png",
            id:1,
        },
        {
            date:"BEC April 2k19",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            cover:"/assets/timepass1.png",
            id:2,
        },
        {
            date:"BEC April 2k19",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            cover:"/assets/timepass1.png",
            id:3,
        },
        {
            date:"BEC April 2k19",
            descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            cover:"/assets/timepass1.png",
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
            className={styles.projectWrapper}
            spaceBetween={50}
            slidesPerView={slidesNum}
            grabCursor={true}
            >
            {projects.map((item) => {
              return(
                <SwiperSlide key={item.route}>
                    <Link href={`./projects/${item.route}`}>
                     <a>
                      <Project packet={item} />
                     </a>
                    </Link>
                </SwiperSlide>
            );
          }
            )
            }
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



function mapToObj(inputMap) {
  let obj = {};

  inputMap.forEach((doc) => {
      obj[doc.id] = doc.data();
  });

  return obj;
}


async function encoder(category){

  const data = await getDocs(category);
  let mainData = JSON.stringify(mapToObj(data));
  return mainData;

}


