import Header from './header';
import styles from "./smallHero.module.css";
import Image from 'next/image';

import { Instagram, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';

import React, { useRef, useState, useEffect } from "react";

export default function SmallHero(){

    const [height, setHeight ] = useState(1000);
    const [width, setWidth ] = useState(1000);

    useEffect(()=> {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      },
       [])

    return(
        <div className={styles.hero}>
                    <div className={styles.heroConatiner}>
                        <Header />
                        <Image className={styles.heroImage} src={`https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/siteData%2F4.webp?alt=media&token=bac02038-52df-4f0f-bf81-1e03c841c90e`} alt="Baisnhodevi Projects Scenery" width={width} height={height*.80}></Image>
                        <div className={styles.Social}>
                        <ul>
                            <li><Instagram /></li>
                            <li><Facebook /></li>
                            <li><Twitter /></li>
                            <li><Linkedin /></li>
                        </ul>
                        </div>
                    </div>
                </div>
    );

};