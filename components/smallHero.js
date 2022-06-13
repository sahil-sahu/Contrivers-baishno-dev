import Header from './header';
import styles from "./smallHero.module.css";
import Image from 'next/image';

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
                        <Image className={styles.heroImage} src={`/assets/slider/4.jpg`} width={width} height={height*.75}></Image>
                    </div>
                </div>
    );

};