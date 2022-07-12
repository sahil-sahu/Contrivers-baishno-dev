import Header from '../components/header';
import Footer from '../components/footer/footer';

import Link from 'next/link';
import { NextSeo } from 'next-seo';

import styles from "../components/terms.module.css"

export default function Terms(){

    return(
        <>
            <NextSeo 
                title="BEC : Terms & Conditions"
                description="Baishnodevi Builder company policies and Terms and Condtions."
            />
            <main className={styles.terms}>
                <Header></Header>
                <div className={styles.termsContainer}>
                    <h1 className={styles.termsHeading}>Terms & Conditions</h1>
                    <ul>
                        <li>*Cancellation during construction period - 15% of total cost (cancellation charge).</li>
                        <li>*Registration will be done only after the total amount has been received by the company including GST.</li>
                        <li>*Registration charges and expenses will be borne by the buyer in actuality.</li>
                    </ul>
                    <h1 className={styles.Payment}>Payment Schedule</h1>
                    <ul>
                        <li>1st Installment On Booking - 10%</li>
                        <li>2nd Installment On Agreement - 10%</li>
                        <li>3rd Installment on compleation of piling work/ open foundation - 25%</li>
                        <li>4th Installment on compleation of stilt(including plinth (parking Area) slab - 10%</li>
                        <li>5th Installment on compleation of schedule flat slab/roof casting - 15%</li>
                        <li>6th Installment on compleation of schedule flat brick work and plastering - 15%</li>
                        <li>7th Installment on compleation of floors sanitary fitting and colours - 10%</li>
                        <li>8th Installment on possession - 05%</li>
                    </ul>
                </div>
                <Footer />
            </main>
        </>
    );

};