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
                        <Image className={styles.heroImage} priority={true} src={`https://firebasestorage.googleapis.com/v0/b/baishnodev-20b6c.appspot.com/o/siteData%2Fbg_1_.webp?alt=media&token=4e494365-a6af-41d8-8596-b00a45a487bd`} alt="Baisnhodevi Projects Scenery" width={width} height={height*.80}></Image>
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