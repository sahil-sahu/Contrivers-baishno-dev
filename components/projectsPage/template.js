import styles from './template.module.css';
import Image from 'next/image';
import Link from 'next/link';

import React, { useRef, useState, useEffect } from "react";
import Cross from './cross';

import { Swiper, SwiperSlide } from "myswiper/react";
import "myswiper/css";
import "myswiper/css/pagination";

export default function Template(props){

    const [originalData, setData] = useState(props.data);
    // const [param.index, setIndex] = useState(0);
    let data = originalData.slice();
    // const [activeData, setActive] = useState(data[0]);
    data.shift(0);
    if (data.length==0){
        data = props.data;
    }
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
        
        if (datum.length > 1){
            setparam({
                index: i,
                activeData: datum.splice(param.index,1)[0],
                dataSet: datum,
            });
        } else {
            setparam({
                index: i,
                activeData: datum[0],
                dataSet: datum,
            });
        }

    }

    setTimeout(()=>{
        if(param.index+1 == originalData.length){
            flipper(0);
        } else{
            flipper(param.index+1);
        }
    },5000);

    useEffect(()=> {

        if(originalData.length==0){
            console.log(originalData.length)
            return (<></>);
        } else {
            setHeight(window.innerHeight*.5);
            setWidth(window.innerWidth*.4);
    
            if(window.innerWidth < 801){
                setHeight(window.innerHeight*.5);
                setWidth(window.innerWidth*.9);
            }

        }
        
      },
       [])

    return(
        <>
        <div className={styles.projectContainer}>

            <div className={styles.CardWrapper}>
                <div className={styles.Card}>
                    <Image src={param.activeData.cover} width={width} height={height} priority={true} alt="BaishnoDevi Builder Projects" />
                    <div className={styles.content}>
                        <h2>{param.activeData.name}</h2>
                        <p>{param.activeData.descrip}</p>
                        <Link href={`/projects/${param.activeData.route}`}><a href={`/projects/${param.activeData.route}`}>DISCOVER WORK</a></Link>
                    </div>
                </div>
                {!props.switch ? (<Link href={`/projects/all/${props.heading}`}>
                    <a className={styles.button} href={`/projects/all/${props.heading}`}>SEE ALL</a>
                </Link>) : ``}
                <Link target={`_blank`} href={param.activeData.link}>
                    <a className={styles.button} target={`_blank`}  href={param.activeData.link}>DOWNLOAD<br />BROUCHER</a>
                </Link>
            </div>
            <div className={styles.allprojects}>
                <h1>
                    {props.heading}
                </h1>
                <div className={styles.smallWrapper}>
                    {param.dataSet.map((item, index) => {

                        if(index > props.end){
                            return;
                        }

                        if(index%2 == 0){
                            return(
                                <Link href={`/projects/${item.route}`}>
                                    <div key={item.route} className={styles.smallCard}>
                                        <Image src={item.cover} width={300} height={150} priority={true} alt={item.descrip} />
                                    </div>
                                </Link>
                            );
                        } else{

                            return(
                                <Link href={`/projects/${item.route}`}>
                                    <div key={item.route} className={styles.smallCardAlt}>
                                        <Image src={item.cover} width={300} height={150} priority={true} alt={item.descrip} />
                                    </div>
                                </Link>
                            );
                        }
                    })}
                </div>

            </div>

        </div>
        
        </>
    );
    
};