import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'

import Header from '../components/header';

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";
import { app, auth, database } from '../firebaseConfig';
import {
    getDoc,
    doc,
    setDoc,
} from 'firebase/firestore';

import { signInWithCredential, linkWithCredential, OAuthProvider } from "firebase/auth";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useRef, useState, useEffect } from "react";

import OtpInput from 'react-otp-input';

import styles from '../components/auth.module.css';
import { async } from '@firebase/util';

function setCookie(cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (15*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "id=" + cvalue + ";" + expires + ";path=/";
  }

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

export default function Auth(){

    const [name, setName] = useState(false);
    const [phone, setPhone] = useState(`+91`);
    const [otp, setOtp] = useState([false,``]);
    const [docRef, setdocRef] = useState(null);
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

    async function createUser(){
        console.log("Chacha")
        await setDoc(docRef, {
            name: name,
            phone: phone,
        });
        router.push(`/myprojects`)
    };

    const makeUser = async id => {

        const docref = doc(database, 'users', id);
        const docSnap = await getDoc(docref);
        if (!docSnap.exists()){

            setName("");
            setOtp(['new','']);
            setdocRef(docref);

            // await setDoc(docRef, {
            //     name: name,
            //     phone: phone,
            //     });

            // return false    

        } else {
            router.push(`/myprojects`);
        }

    }

    async function submitit(event){

        event.preventDefault();
        // makeUser(id)
        if(otp[0]===true){
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp[1]).then(async (result) => {
              // User signed in successfully.
                const user = result.user;
                const id = user.reloadUserInfo.localId; 
                try {
                    setCookie(id);  
                    await makeUser(id);
                    // window.userInfo = id;
                     

                }catch(err) {
                    //bakwaas
                  }


                
                
            }).catch((error) => {
              // User couldn't sign in (bad verification code?)
              // ...
            });
        }

        if (name!=false){
            createUser();
        }else if(phone.length == 13){
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

    useEffect(()=>{
        const userId = getCookie();
        if(userId){
            router.push(`/myprojects`); 
        }
    },[])  

    return(
        <main className={styles.auth}>
            <Header />
            <div id={styles.captcha} className={styles.captcha}></div>
            <Form className={styles.form}>
                <NextSeo 
                    title="Baishnodev Builders : Login"
                    description="Real Estates Company adomed with strong fundamentals on providing real quality homes to people that conform to their taste and style for an affordable price in and a rounding Bhubaneswar since last 11 years. "
                />
                {name!==false? <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={nameValidator} value={name} type="name" placeholder="Enter your Full Name" />
                </Form.Group> : <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={phoneValidator} value={phone} maxLength={13} type="phone" placeholder="Enter phone number" />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your phone with anyone else.
                    </Form.Text>
                </Form.Group>
                }
                {otp[0]===true ? <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>OTP</Form.Label>
                            <OtpInput
                                value={otp[1]}
                                onChange={otpValidator}
                                numInputs={6}
                                separator={<span style={{margin:'.2rem',}}>-</span>}
                            />
                        </Form.Group> : ``}
                
                <Button onClick={submitit} variant="primary" type="submit">
                    {otp[0]? `Submit` : otp[0]=='new'? 'Submit' : `Get OTP`}
                </Button>
            </Form>
        </main>

    );

}