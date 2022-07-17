import styles from "../../../components/projects.module.css";

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import Cross from "../../../components/projectsPage/cross";
import Template from "../../../components/projectsPage/template";

import { app, database } from '../../../firebaseConfig';
import {
    getDocs,
    collection,
    where,
    query,
    limit
} from 'firebase/firestore';


import React, { useRef, useState, useEffect } from "react";



const dataSet = [
    {
        name : "projectX",
        descrip : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        cover : "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kjdkjkgjdfklj",
        
    },
    {
        name : "projectX",
        descrip : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        cover : "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kjdkjkggfjdfklj",
        
    },
    {
        name : "projectX",
        descrip : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        cover : "https://images.pexels.com/photos/144632/pexels-photo-144632.jpeg?auto=compress&cs=tinysrgb&w=600",
        route : "kkjkgjdfklj",
    },
    {
        name : "projectX",
        descrip : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        cover : "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kkjkgjdgfgdfgffklj",
    },
    {
        name : "projectX",
        descrip : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        cover : "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kkjkgjdgfgdfkdfjkodfi",
    },
]

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

export default function Projects({ projects, category }){

    return(

        <>
        <NextSeo 
          title="Successful Projects under Baishnodev Builders"
          description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
        />
        <main className={styles.Projects}>
            <Header />
            <section className={styles.completed}>
                <Template switch={true} heading={category} end={decoder(projects).length} data={decoder(projects)} />
            </section>
            <Cross />
            <Footer />
        </main>
        </>

    )

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


export async function getServerSideProps(context) {
    const { category } = context.query;

    const dbInstance = collection(database, 'projects');

    const projects = await encoder(query(dbInstance, where("tags","array-contains",category)));
    return { props: { projects, category } }
  }