import { NextSeo } from 'next-seo';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../components/index.module.css';
import React, { useRef, useState, useEffect } from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const HeroSliderConfigs = {
  containerClass: `${['swiper-container', styles.heroSlide]}`,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1500,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  spaceBetween: 0,
  effect: 'slide'
};

export default function Home() {

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  const [height, setHeight ] = useState(1000);
  const [width, setWidth ] = useState(1000);

  useEffect(()=> {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  },
   [])


  return (
    <>
      <NextSeo 
        title="Baishnodev Builders"
        description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
      />
      <main>
        <div className="hero">
          <div className="heroConatiner">
            <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
              <div className={styles.heroSlide}>
                <div
                  className={styles.slideImage}
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                >
                  <Image alt="BaishnoDev Construct projects Images" src={'/assets/slider/1.jpg'} width={width} height={height} />
                  <div className={styles.slideContainer}>
                    <h1>
                      Classic & Modern
                      <span>
                        architecture at it's best
                      </span>
                    </h1>
                    
                    <Link href={`#`}>
                      <a className={styles.Discover} href="http://">
                        DISCOVER WORK
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.heroSlide}>
                <div
                  className={styles.slideImage}
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                >
                   <Image alt="BaishnoDev Construct projects Images" src={'/assets/slider/2.jpg'} width={width} height={height} />
                   <div className={styles.slideContainer}>
                    <h1>
                      Classic & Modern
                      <span>
                        architecture at it's best
                      </span>
                    </h1>
                    
                    <Link href={`#`}>
                      <a className={styles.Discover} href="http://">
                        DISCOVER WORK
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.heroSlide}>
                <div
                  className={styles.slideImage}
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                >
                   <Image alt="BaishnoDev Construct projects Images" src={'/assets/slider/3.jpg'} width={width} height={height} />
                   <div className={styles.slideContainer}>
                    <h1>
                      Classic & Modern
                    </h1>
                    <span>
                      architecture at it's best
                    </span>
                    <div className={styles.DiscoverContainer}>
                      <Link href={`#`}>
                      <a className={styles.Discover} href="http://">
                        DISCOVER WORK
                      </a>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </main>  
    </>
  )
}
