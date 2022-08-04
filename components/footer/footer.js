import styles from "./footer.module.css";
import { Instagram, Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';
import Image from 'next/image';

function Footer(){

    return(
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h3 className={styles.company}>
                    <span>
                        BAISHNODEVI
                    </span>
                     ENGINEERS AND CONSULTANCY PVT. LTD.
                </h3>
                <div className={styles.socialWrap}>
                    <div className={styles.Social}>
                        <ul>
                            <li><Instagram /></li>
                            <li><Facebook /></li>
                            <li><Twitter /></li>
                            <li><Linkedin /></li>
                        </ul>
                    </div>
                    <div className={styles.rating}>
                        <a href="">
                            <Image src={`/assets/google.png`} width={50} height={50} alt="Google" />
                        </a>
                        <a href="">
                            <Image src={`/assets/jd.png`} width={50} height={50} alt="Justdial" />
                        </a>
                        <a href="">
                            <Image src={`/assets/sulekha.png`} width={50} height={50} alt="Sulekha" />
                        </a>
                    </div>
                </div>
                <div className={styles.credits}>
                    <span>BEC</span> ©{new Date().getFullYear()}. All rights reserved. Designed with ❤️ by <a href="https://contrivers.tk">Contrivers</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;