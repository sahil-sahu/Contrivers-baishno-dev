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
                title="Know About Baishnodev Builders"
                description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
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
                                        16
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
                                <img src={`/assets/cool.jpg`} />
                            </div>
                            <div className={styles.down}>
                                <div className={styles.item}>
                                    <span>
                                        1
                                    </span>
                                    cities with BEC project
                                </div>
                                <div className={styles.item}>
                                    <span>
                                        2
                                    </span>
                                    Real Estate Farms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <People />
                <Footer />
            </main>
        </>
    )

}