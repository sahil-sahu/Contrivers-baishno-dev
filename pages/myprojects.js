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

import { getAuth, signInWithCredential, linkWithCredential, OAuthProvider } from "firebase/auth";

import React, { useRef, useState, useEffect } from "react";
import { WindowX } from 'react-bootstrap-icons';

function getCookie() {
    let name = "id=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return null
  } 

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

function SPdecoder(mainData){


    if(mainData.length == 0){
        
        return [];
        
    } 
    var obj = JSON.parse(mainData);
    // var arr = [];
    // for (var i in obj) 
    // {   
    //     obj[i].route = i;
    //     arr.push(obj[i]);
    // };

    return obj;
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
    

    const [projects, setProjects] = useState(false);
    const [userprojects, setuserProjects] = useState(false);

    useEffect(() => {

        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        // setUser(userId);
        async function callProj(){
            
            const dbInstance = collection(database, 'projects');
            let yoprojects = await encoder(dbInstance);
            let projects = SPdecoder(yoprojects);
            setProjects(projects);
            
        }

        // https://contrivers-drive-api.herokuapp.com/drive?link=https://drive.google.com/drive/folders/1LRSNbfQ_I8NtX2prfLXfKgFB32bq-gnm?usp=sharing

        async function userfetch(){

            const docRef = doc(database, 'users', userId);
            const docSnap = await getDoc(docRef);
            const myprojects = collection(docRef, 'projects');
            let projSnap = await encoder(myprojects);
            let projSnapshot = decoder(projSnap);
            // console.log(projSnapshot);
            setuserProjects(projSnapshot);
            // projSnap.forEach(i => {
            //     console.log(i.data().percent);
            // })
            setUser(docSnap.data().name);

        }
        const userId = getCookie();
        if (userId){
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
                {userprojects && projects ? <ShowCase projects={projects} userProjects={userprojects}/> : ""}

            </div>
        </main>

        </>
    );
    

}