import styles from './template.module.css';
import Image from 'next/image';
import Link from 'next/link';

import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "myswiper/react";
import "myswiper/css";
import "myswiper/css/pagination";

export default function Template(props){

    const [originalData, setData] = useState(props.data);
    // const [param.index, setIndex] = useState(0);
    let data = originalData.slice();
    // const [activeData, setActive] = useState(data[0]);
    data.shift(0);
    // const [dataSet, setvData] = useState(data);
    const [param, setparam] = useState({
        index:0,
        activeData: data[0],
        dataSet: data,
    });
    const [height, setHeight ] = useState(600);
    const [width, setWidth ] = useState(1000);

    function flipper(i){

        let datum = originalData.slice();
        setparam({
            index: i,
            activeData: datum.splice(param.index,1)[0],
            dataSet: datum,
        });

    }

    setTimeout(()=>{
        if(param.index+1 == originalData.length){
            flipper(0);
        } else{
            flipper(param.index+1);
        }
    },5000);

    useEffect(()=> {
        setHeight(window.innerHeight*.5);
        setWidth(window.innerWidth*.4);

        if(window.innerWidth < 801){
            setHeight(window.innerHeight*.5);
            setWidth(window.innerWidth*.9);
        }
        
      },
       [])

    return(
        <div className={styles.projectContainer}>

            <div className={styles.CardWrapper}>
                <div className={styles.Card}>
                    <Image src={param.activeData.image} width={width} height={height} alt="BaishnoDevi Builder Projects" />
                    <div className={styles.content}>
                        <h2>{param.activeData.name}</h2>
                        <p>{param.activeData.description}</p>
                        <Link href={`/projects/{route}`}><a href={`/projects/${param.activeData.route}`}>DISCOVER WORK</a></Link>
                    </div>
                </div>
                <Link href={`./`}>
                    <a className={styles.button} href={`#`}>SEE ALL</a>
                </Link>
                <Link href={`./`}>
                    <a className={styles.button} href={`#`}>DOWNLOAD<br />BROUCHER</a>
                </Link>
            </div>
            <div className={styles.allprojects}>
                <h1>
                    {props.heading}
                </h1>
                <div className={styles.smallWrapper}>
                    {param.dataSet.map((item, index) => {

                        if(index > 3){
                            return;
                        }

                        if(index%2 == 0){
                            return(
                                <div key={item.route} className={styles.smallCard}>
                                    <Image src={item.image} width={300} height={150} alt={item.description} />
                                </div>
                            );
                        } else{

                            return(
                                <div key={item.route} className={styles.smallCardAlt}>
                                    <Image src={item.image} width={300} height={150} alt={item.description} />
                                </div>
                            );
                        }
                    })}
                </div>

            </div>

        </div>
    );
    
};