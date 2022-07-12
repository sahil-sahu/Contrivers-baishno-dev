import about from "./about.module.css";
import Link from 'next/link';

const About = (props) => {
    return(
        <section className={about.about}>
          <div className={about.aboutContainer}>
            <ul className={about.Services} >
              <li>01. Construction</li>
              <li>02. Engineering</li>
              <li>03. Builders</li>
              <li className={about.terms}><Link href={'./terms-and-conditions'}>Terms and Conditions</Link></li>
            </ul>
            <div className={about.aboutText}>
              <h2>
                About
              </h2>
              <p>Baishnodevi Engineers and Consultancy Pvt. Ltd. is a real estate company with a sister concern of Sri Bhulaxmi Infratech LLP adorned with strong fundamentals on providing high-quality homes and flats to people that confirm their taste and style for an affordable price in and around Bhubaneswar. In this endeavor, we believe in transparency and provide our esteemed customers with 2 BHK, 3 BHK, and 4 BHK apartments with clear titles and hassle-free ownership, where quality is of utmost priority. If you are looking for exotic living with an affordable economy, then your search ends with Sri Bhulaxmi Infratech LLP or Baishnodevi Engineers and Consultancy Pvt. Ltd. Oh, yes we really mean it. Contact Us on our website to book visitors for ongoing and completed projects and make our houses your dream homes.</p>
              {props.index? <div className={about.know}>
              <Link className={about.know} href={'./about'}>
                KNOW MORE
              </Link>
              </div> : null}
            </div>
          </div>
        </section>
    )
}

export default About;