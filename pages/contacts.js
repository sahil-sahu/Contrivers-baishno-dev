import styles from "../components/contactsPage.module.css";
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Header from '../components/header';
import SmallHero from "../components/smallHero";
import Contacts from "../components/footer/contacts";
import Footer from '../components/footer/footer';
import React, { useRef, useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactPage(){

    const [height, setHeight ] = useState(1000);
    const [width, setWidth ] = useState(1000);

    useEffect(()=> {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      },
       [])

    return(
        <>
            <NextSeo 
                title="Contacts us Now at Baishnodev Builders"
                description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
            />
            <main>
                <SmallHero />
                <Contacts />
                <Form className={styles.message}>
                    <Form.Group className={styles.inputBox}>
                        <Form.Control type="text" 
                                        placeholder="Name" />
                    </Form.Group>
                    <Form.Group className={styles.inputBox}>
                        <Form.Control type="email" 
                                        placeholder="Email" />
                    </Form.Group>
                    <Form.Group className={styles.inputBox}>
                        <Form.Control type="number" 
                                        placeholder="Phone" />
                    </Form.Group>
                    <Form.Group className={styles.inputBox}>
                        <Form.Control as="textarea" rows={5} placeholder="Enter your age" />
                    </Form.Group>
                    <Button className={styles.sumbit} variant="primary" type="submit">
                        SEND MESSAGE
                    </Button>
                </Form>
                <Footer />
            </main>
        </>
    )

}