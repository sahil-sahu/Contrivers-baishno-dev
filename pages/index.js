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
import Popup from '../components/popup';

import Gallery from "react-photo-gallery";


import React, { useRef, useState, useEffect } from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Instagram, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

import { app, database } from '../firebaseConfig';
import {
    getDocs,
    collection,
    where,
    orderBy,
    query,
    limit
  } from 'firebase/firestore';

const HeroSliderConfigs = {
  containerClass: `${['swiper-container', styles.heroSlide]}`,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 5000,
  },
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

const photos = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/phot%20Gallery%2Fimage%25204(1).webp?alt=media&token=63fccbc4-aa45-4aca-acc6-c280e3fa2c17",
    width: 3,
    height: 4
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/phot%20Gallery%2Fimage%25207.webp?alt=media&token=f51a0584-99dc-4ba2-9e39-13373599f209",
    width: 4,
    height: 3
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/phot%20Gallery%2Fimage%25206.webp?alt=media&token=cc1f60ab-b537-473f-abe5-645e9ff81abb",
    width: 3,
    height: 4
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/phot%20Gallery%2Fimage%25205.webp?alt=media&token=677116ee-339b-465a-b385-aaeac058826c",
    width: 3,
    height: 4
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/phot%20Gallery%2Fimage%25209.webp?alt=media&token=5b2c4d7e-d174-4838-acd4-89761a60d420",
    width: 4,
    height: 3
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/phot%20Gallery%2Fimage%25208.webp?alt=media&token=18790b1f-2361-43be-84d7-58633ce59c16",
    width: 4,
    height: 3
  },
];

export default function Home({ projects }) {

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  var parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.3 : 0;
  const parallaxOpacity = 0.5;
  
  const [popStarter, setPopup] = useState(false);

  const [height, setHeight ] = useState(1000);
  const [width, setWidth ] = useState(1000);

  // if (width < 600){

  //   parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.5 : 0;

  // }

  useEffect(()=> {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    if(!window.popup){
      setTimeout(()=>{
        setPopup(true);
        window.popup = true;
      },5000);
    }
  },
   [])


  return (
    <>
      <NextSeo 
        title="BEC Pvt. Ltd. | Best Luxury Apartments & Flats For Sale In Bhubaneswar."
        description="Baishnodevi Engineers and Consultancy Pvt. Ltd. is a real estate company with a sister concern of Sri Bhulaxmi Infratech LLP adorned with solid fundamentals on providing high-quality homes and flats to people that confirm their taste and style for an affordable price in and around Bhubaneswar. We are among Odisha's leading groups, serving customers across real estate and infrastructure. The company’s evolution from its humble origins in 2008 to becoming the trusted and leading group of companies in Odisha tells an inspiring story. We are here to redefine the Nation with unparalleled trust, faith, and confidence from our customers and employees. Honoured to have pioneered the cause of modern gated communities for over years in Bhubaneswar. We believe in – reiterating it with a touch of warmth and love in everything we create—staying true to our belief that spaces created with love become places that are home to happiness. We provide you with one-stop solution for FOUNDATION , SUPERSTRUCTURE , WALL , PLASTERING , Internal , External , FLOORING , KITCHEN , DOOR , WINDOWS , PAINTING , ELECTRICAL, WATER SUPPLY. Baishnodevi Engineers and Consultancy Pvt. Ltd. are the best builders in Bhubaneswar and provide new luxury apartments, 2BHK, 3BHK, and 4BHK Flats for sale in Bhubaneswar with all sorts of amenities."
      />
      <main>
        {popStarter ? <Popup closer={setPopup} /> : null}
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
                  <Image alt="BaishnoDev Construct projects Images" priority={true} src={'https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/siteData%2F1.webp?alt=media&token=118187e4-dd18-4fed-97d2-21a437bb4eb8'} layout={'fill'}/>
                  <div className={styles.slideContainer}>
                    <h1>
                      Elegant & Unique Design
                    </h1>
                    <span>
                      as per your choice.
                    </span>
                    
                    <Link href={`projects`}>
                      <a className={styles.Discover} href="./projects">
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
                   <Image alt="BaishnoDev Construct projects Images" priority={true} src={'https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/siteData%2F2-1.webp?alt=media&token=dd92d8fa-c12b-4021-a835-dc0e5f6f146f'} layout={'fill'} />
                   <div className={styles.slideContainer}>
                    <h1>
                      Innovative Interior
                    </h1>
                    <span>
                      evaluated as pure.
                    </span>
                    
                    <Link href={`projects`}>
                      <a className={styles.Discover} href="./projects">
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
                   <Image alt="BaishnoDev Construct projects Images" priority={true} src={'https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/siteData%2F3.webp?alt=media&token=762eb36e-87bd-4afa-af75-bbe910d1f197'} layout={'fill'} />
                   <div className={styles.slideContainer}>
                    <h1>
                      Classic & Modern
                    </h1>
                    <span>
                      architecture at it&apos;s best.
                    </span>
                    <div className={styles.DiscoverContainer}>
                      <Link href={`projects`}>
                      <a className={styles.Discover} href="./projects" >
                        DISCOVER WORK
                      </a>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.heroSlide}>
                <div
                  className={styles.slideImage}
                  data-swiper-parallax={parallaxAmount}
                  data-swiper-parallax-opacity={parallaxOpacity}
                >
                   <Image alt="BaishnoDev Construct projects Images" priority={true} src={'https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/siteData%2F4.webp?alt=media&token=7ebcc78b-14cb-47ce-b31a-7a399164ee83'} layout={'fill'} />
                   <div className={styles.slideContainer}>
                    <h1>
                      Homely Designs
                    </h1>
                    <span>
                      make your mood awesome.
                    </span>
                    <div className={styles.DiscoverContainer}>
                      <Link href={`projects`}>
                      <a className={styles.Discover} href="./projects" >
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
            The <span>Best Address</span> You Can Get
          </div>
        </section>
        <About index={true} />
        <section className={styles.Projects}>
          <div className={styles.projectsContainer}>
            <h2>Aesthetics</h2>
            <Projects data={decoder(projects)} />
          </div>
        </section>
        <People />
        <section className={styles.Gallery}>
          <div className={styles.galleryContainer}>
            <h2>Project Gallery</h2>
            <Gallery photos={photos} direction={"column"} />
          </div>
        </section>
        <Contacts />
        <Footer />
      </main>  
    </>
  )
}

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

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=100, stale-while-revalidate=600'
  );
  
  const dbInstance = collection(database, 'projects');


  const projects = await encoder(query(dbInstance, where("category","!=","review"), limit(10)));
  // const projects = await encoder(query(dbInstance, where("tags","array-contains","completed")));

  return { props: { projects } }
}
