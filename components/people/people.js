import styles from "./people.module.css";
import Person from "./person";

import { Swiper, SwiperSlide } from 'myswiper/react';
import 'myswiper/css';
import React, { useRef, useState, useEffect } from "react";

function People(){

    const data = [
        {
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id:1,
        },
        {
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id:23,
        },
        {
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id:3,
        },
        {
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id:4,
        },
    ];

    let slidesNum = 1;

    const size = useWindowSize();

    if (size.width > 800){
        slidesNum = 2;
    }

    return(
        <section className={styles.People}>
          <div className={styles.peopleContainer}>
              <h2>
                People
              </h2>
              <Swiper
                spaceBetween={50}
                slidesPerView={slidesNum}
                grabCursor={true}
                >
                {data.map((item) => {return(
                    <SwiperSlide key={item.id}>
                        <Person packet={item} />
                    </SwiperSlide>
                )})}
                </Swiper>
          </div>
        </section>
    )
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

export default People;