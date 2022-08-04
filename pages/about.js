import styles from "../components/aboutPage.module.css";
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Header from '../components/header';
import SmallHero from "../components/smallHero";
import About from "../components/about";
import People from '../components/people/people';
import Footer from '../components/footer/footer';
import React, { useRef, useState, useEffect } from "react";

import { app, database } from '../firebaseConfig';
import {
    getDocs,
    collection,
    where,
    orderBy,
    query,
    limit
  } from 'firebase/firestore';

export default function AboutPage(){

    const [height, setHeight ] = useState(1000);
    const [width, setWidth ] = useState(1000);
    const [numProjects, setnumProjects ] = useState(10);

    useEffect(()=> {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);

        async function projectsNum(){

            const dbInstance = collection(database, 'projects');
            const projects = query(dbInstance, where("category","!=","review"));
            const data = await getDocs(projects);
            setnumProjects(data.size)

        }

        projectsNum();

      },
       [])

    return(
        <>
            <NextSeo 
                title="BEC Pvt. Ltd. | About us"
                description="Baishnodevi Engineers and Consultancy Pvt. Ltd. is a real estate company with a sister concern of Sri Bhulaxmi Infratech LLP adorned with solid fundamentals on providing high-quality homes and flats to people that confirm their taste and style for an affordable price in and around Bhubaneswar. We are among Odisha's leading groups, serving customers across real estate and infrastructure. The company’s evolution from its humble origins in 2008 to becoming the trusted and leading group of companies in Odisha tells an inspiring story. We are here to redefine the Nation with unparalleled trust, faith, and confidence from our customers and employees. Honoured to have pioneered the cause of modern gated communities for over years in Bhubaneswar. We believe in – reiterating it with a touch of warmth and love in everything we create—staying true to our belief that spaces created with love become places that are home to happiness. We provide you with one-stop solution for FOUNDATION , SUPERSTRUCTURE , WALL , PLASTERING , Internal , External , FLOORING , KITCHEN , DOOR , WINDOWS , PAINTING , ELECTRICAL, WATER SUPPLY. Baishnodevi Engineers and Consultancy Pvt. Ltd. are the best builders in Bhubaneswar and provide new luxury apartments, 2BHK, 3BHK, and 4BHK Flats for sale in Bhubaneswar with all sorts of amenities."
            />
            <main>
                <SmallHero />
                <About />
                <div className={styles.global}>
                    <div className={styles.globalContainer}>
                        <h2>
                            We Believe In Ideas
                        </h2>
                        <div className={styles.amazing}>
                            <div className={styles.up}>
                                <div className={styles.item}>
                                    <span>
                                        50+
                                    </span>
                                    employees
                                </div>
                                <div className={styles.item}>
                                    <span>
                                        {numProjects}
                                    </span>
                                    Ideas & Projects
                                </div>
                            </div>
                            <div className={styles.cool}>
                                <img alt="Innovation in hands of BEC Pvt. Ltd." priority={true} src={`/assets/cool.jpg`} />
                            </div>
                            <div className={styles.down}>
                                <div className={styles.item}>
                                    <span>
                                        5+
                                    </span>
                                    cities with BEC project
                                </div>
                                <div className={styles.item}>
                                    Baishnodevi Engineers <br />
                                    & Group of Companies
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Cng}>
                    <div className={styles.CngContainer}>
                        <div className={styles.commitment}>
                            <h2>Commitment</h2>
                            <p>At Baishnodevi Engineers and Consultancy Pvt. Ltd. and Sri Bhulaxmi Infratech LLP, the objective of our construction team is to adopt durable construction methods using high-quality materials and the latest technical know-how. Unique beautiful elevation, maximum space utilization, quality construction, and timely delivery with all clear documents are our commitments. The company invites suggestions from every buyer in designing their respective units according to their needs and satisfaction.</p>
                        </div>
                        <div className={styles.guarantee}>
                            <h2>Guarantee</h2>
                            <p>Each and every flats unit undergo several checks and tests before being handed over to our customer routine quality inspection is carried out at all stages. Our company scrutinizes property titles minutely, Indemnifies the buyers, and protects them from any loss and damages in respect of the titles. The cost of each flat unit is fixed irrespective of fluctuations in the input cost.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )

}