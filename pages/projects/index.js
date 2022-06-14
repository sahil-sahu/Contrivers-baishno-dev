import styles from "../../components/projects.module.css";

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Cross from "../../components/projectsPage/cross";
import Template from "../../components/projectsPage/template";

import React, { useRef, useState, useEffect } from "react";

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
    {
        name : "projectX",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image : "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        route : "kkjkgjdgfgdfkdfjkodfi",
    },
]

export default function Projects(){

    return(

        <>
        <NextSeo 
          title="Successful Projects under Baishnodev Builders"
          description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
        />
        <main className={styles.Projects}>
            <Header />
            <section className={styles.completed}>
                <Template heading={`completed`} data={dataSet} />
            </section>
            <Cross />
            <section className={styles.completed}>
                <Template heading={`ongoing`} data={dataSet} />
            </section>
            <Cross />
            <section className={styles.completed}>
                <Template heading={`upcoming`} data={dataSet} />
            </section>
            <Footer />
        </main>
        </>

    )

}