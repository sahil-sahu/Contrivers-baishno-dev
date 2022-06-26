import styles2 from "../../components/single.module.css";
import styles from "../../components/projectsPage/template.module.css";


import { NextSeo } from 'next-seo';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Swiper, SwiperSlide } from "myswiper/react";
import "myswiper/css";
import "myswiper/css/pagination";
import { Pagination } from "myswiper";

import Header from '../../components/header';
import Footer from '../../components/footer/footer';

import React, { useRef, useState, useEffect } from "react";

import { app, database } from '../../firebaseConfig';
import {
    getDoc,
    getDocs,
    collection,
    doc,
    where,
    query,
} from 'firebase/firestore';


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

const dataSet = [
    {
        name : "projectX",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image : "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kjdkjkgjdfklj",
        
    },
    {
        name : "projectX",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image : "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kjdkjkggfjdfklj",
        
    },
    {
        name : "projectX",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image : "https://images.pexels.com/photos/144632/pexels-photo-144632.jpeg?auto=compress&cs=tinysrgb&w=600",
        route : "kkjkgjdfklj",
    },
    {
        name : "projectX",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image : "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kkjkgjdgfgdfgffklj",
    },
]

export default function SingleProject({ mainData, extra }){

    console.log(mainData)

    const [height, setHeight ] = useState(600);
    const [width, setWidth ] = useState(1000);

    const mainProject ={

        name: `Project`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore`,
        images:[
            "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
            "https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
            "https://images.unsplash.com/photo-1619994121345-b61cd610c5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        ]

    }

    useEffect(()=> {
        setHeight(window.innerHeight*.6);
        setWidth(window.innerWidth*.5);

        if(window.innerWidth < 801){
            setHeight(window.innerHeight*.9);
            setWidth(window.innerWidth*.9);
        }
        
      },
       []);

    return(

        <>
        <NextSeo 
          title={`Our Projects ${mainData.name}`}
          description={mainData.descrip}
        />
        <main className={styles2.Projects}>
            <Header />
            <section className={styles2.completed}>
                <div className={styles.projectContainer} style={{paddingTop:"10%",}}>
                    <div className={styles.CardWrapper}>
                        <Swiper
                            pagination={{
                                type: "fraction",
                              }}
                              spaceBetween={50}
                            modules={[Pagination]}
                            className={styles2.CardSlider}  
                        >
                            {mainData.gallery.map((item,index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <Image src={item} width={width} height={height} alt={mainProject.description} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                <Link href={`./`}>
                    <a className={styles.button} href={`#`}>SEE ALL</a>
                </Link>
                <Link href={`./`}>
                    <a className={styles.button} href={`#`}>DOWNLOAD<br />BROUCHER</a>
                </Link>
                    </div>
                    <div className={styles.allprojects}>
                        <div className={styles2.description}>
                            <h2 className={styles2.heading}>
                                {mainData.name}
                            </h2>
                            <p className={styles2.content}>{mainData.descrip}</p>
                            <Link href={`./`}>
                                <a className={`${styles.button} ${styles2.button}`} href={`#`}>SEE MORE</a>
                            </Link>
                        </div>
                        <div className={`${styles.smallWrapper} ${styles2.smallWrapper}`}>
                            {decoder(extra).map((item, index) => {

                                if(index > 2){
                                    return;
                                }

                                if(index%2 == 0){
                                    return(
                                        <Link href={item.route}>
                                            <div key={item.route} className={styles.smallCard}>
                                                <Image src={item.cover} width={300} height={150} alt={item.descrip} />
                                            </div>
                                        </Link>
                                    );
                                } else{

                                    return(
                                        <Link href={item.route}>
                                            <div key={item.route} className={styles.smallCardAlt}>
                                                <Image src={item.cover} width={300} height={150} alt={item.descrip} />
                                            </div>
                                        </Link>
                                    );
                                }
                            })}
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
        </>

    );

};


export async function getServerSideProps(context) {
    const { id } = context.query;
    const docRef = doc(database, 'projects', id);
    const docSnap = await getDoc(docRef);
    const mainData = docSnap.data();

    const dbInstance = collection(database, 'projects');
    const extra = await encoder(query(dbInstance, where("name","!=", mainData.name)));

    return { props: { mainData, extra } }
  }