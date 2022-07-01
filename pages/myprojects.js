import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

import AlertDialogSlide from '../components/progress/progressPrompt';
import Header from '../components/header';
import ShowCase from '../components/progress/showcase';

import styles from '../components/progress/progress.module.css';
import styles2 from '../components/projects.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import { Swiper, SwiperSlide } from "myswiper/react";
import "myswiper/css";
import "myswiper/css/pagination";
import { Pagination } from "myswiper";

import { app, database } from '../firebaseConfig';
import {
    getDoc,
    getDocs,
    collection,
    doc,
    where,
    query,
} from 'firebase/firestore';

import React, { useRef, useState, useEffect } from "react";
import { WindowX } from 'react-bootstrap-icons';

function decoder(mainData){


    if(mainData.length == 0){
        
        return [];
        
    } 
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


export default function Progress(){

    const [height, setHeight ] = useState(1000);
    const [width, setWidth ] = useState(1000);
    const [user, setUser] = useState(null);
    const router = useRouter();
    

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        // setUser(window.userInfo);
        async function callProj(){
            
            const dbInstance = collection(database, 'projects');
            let yoprojects = await encoder(query(dbInstance, where("tags","array-contains-any",['completed','ongoing'])));
            let projects = decoder(yoprojects);
            setProjects(projects);
            
        }

        async function userfetch(){

            const docRef = doc(database, 'users', window.userInfo);
            const docSnap = await getDoc(docRef);
            setUser(docSnap.data().name);

        }

        if (window.userInfo){
            userfetch();
            callProj();
        } else {

            router.push(`/auth`);

        }
        
    },[])


    return(
        <>
        <NextSeo 
            title="BEC : DashBoard"
            description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
        />

        <main className={`${styles2.Projects} ${styles.projects}`}>
            <Header />
            <div className={styles.Container}>

                <h1>
                   Hi! {user}
                </h1>
                <ShowCase projects={projects} />

            </div>
        </main>

        </>
    );
    

}