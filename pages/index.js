import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import styles from '../components/index.module.css';
import Header from '../components/header';
import webhault from '../components/webhault.module.css';
import About from "../components/about";
import Projects from '../components/Projects/projects';
import People from '../components/people/people';
import Contacts from '../components/footer/contacts';
import Footer from '../components/footer/footer';


import React, { useRef, useState, useEffect } from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Instagram, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

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
        <section className="hero">
          <div className={styles.heroConatiner}>
            <Header />
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
                    </h1>
                    <span>
                      architecture at it&apos;s best
                    </span>
                    
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
                    </h1>
                    <span>
                      architecture at it&apos;s best
                    </span>
                    
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
                      architecture at it&apos;s best
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
            <div className={styles.Social}>
              <ul>
                <li><Instagram /></li>
                <li><Facebook /></li>
                <li><Twitter /></li>
                <li><Linkedin /></li>
              </ul>
            </div>
          </div>
        </section>
        <section className={webhault.webhault}>
          <div className={webhault.webHaultContainer}>
            Make Your <span>Dreams</span> come true
          </div>
        </section>
        <About />
        <section className={styles.Projects}>
          <div className={styles.projectsContainer}>
            <h2>Aesthetics</h2>
            <Projects />
          </div>
        </section>
        <People />
        <Contacts />
        <Footer />
      </main>  
    </>
  )
}
