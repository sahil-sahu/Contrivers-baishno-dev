import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'

import Header from '../components/header';

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber,PhoneAuthProvider } from "firebase/auth";
import { app, auth, database } from '../firebaseConfig';
import {
    getDoc,
    doc,
    setDoc,
} from 'firebase/firestore';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useRef, useState, useEffect } from "react";

import OtpInput from 'react-otp-input';

import styles from '../components/auth.module.css';
import { async } from '@firebase/util';

export default function Auth(){

    const [name, setName] = useState(``);
    const [phone, setPhone] = useState(`+91`);
    const [otp, setOtp] = useState([false,``]);
    const router = useRouter()


    function nameValidator(event){

        setName(event.target.value);

    }

    function phoneValidator(event){

        if (!isNaN(event.target.value)){
            setPhone(event.target.value);
        }

    }

    function otpValidator(otp){

        if (!isNaN(otp)){
            setOtp([true,otp]);
        }

    }

    const makeUser = async id => {

        const docRef = doc(database, 'users', id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()){

            await setDoc(docRef, {
                name: name,
                phone: phone,
                });

        }

    }

    async function submitit(event){

        event.preventDefault();
        if(otp[0]){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp[1]).then(async (result) => {
              // User signed in successfully.
                const user = result.user;
                const id = user.reloadUserInfo.localId; 
                try {
                    await makeUser(id);
                    window.userInfo = id;  
                    router.push(`/myprojects`);  

                }catch(err) {
                    //bakwaas
                  }


                
                
            }).catch((error) => {
              // User couldn't sign in (bad verification code?)
              // ...
            });
        }

        if(name && phone.length == 13){
            await phoneAuth();
            setOtp([true,``]);
        }

    }

    const recaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier( styles.captcha , {
            'size': 'invisible',
            'callback': (response) => {
            }
          }, auth);
    }

    function phoneAuth(){

        recaptcha();
        let appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phone, appVerifier).then((confirmationResult) => {

                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                  console.log(error);
            });
      }

    return(
        <main className={styles.auth}>
            <Header />
            <div id={styles.captcha} className={styles.captcha}></div>
            <Form className={styles.form}>
                <NextSeo 
                    title="Baishnodev Builders : Login"
                    description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={nameValidator} value={name} type="name" placeholder="Enter your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={phoneValidator} value={phone} maxLength={13} type="phone" placeholder="Enter phone number" />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your phone with anyone else.
                    </Form.Text>
                </Form.Group>
                {otp[0] ? <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>OTP</Form.Label>
                            <OtpInput
                                value={otp[1]}
                                onChange={otpValidator}
                                numInputs={6}
                                separator={<span style={{margin:'.2rem',}}>-</span>}
                            />
                        </Form.Group> : ``}
                
                <Button onClick={submitit} variant="primary" type="submit">
                    {otp[0]? `Submit` : `Get OTP`}
                </Button>
            </Form>
        </main>

    );

}