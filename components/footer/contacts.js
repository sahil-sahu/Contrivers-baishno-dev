import contacts from "./contacts.module.css";
import Link from 'next/link';

import { Envelope, TelephoneFill, GeoFill } from 'react-bootstrap-icons';

const Contacts = () => {
    return(
        <section className={contacts.contacts}>
          <div className={contacts.contactsContainer}>
            <ul className={contacts.Services} >
                <Link href={`mailto:mail@baishnodevibuilder.com`}>
                <li>
                    <Envelope className={contacts.icon} />
                    <span>
                        : mail@baishnodevibuilder.com
                    </span>
                </li>
                </Link>
                <Link href={`tel:+919040091803`}>
                <li>
                    <TelephoneFill className={contacts.icon} />
                    <span>
                        : +919040091803
                    </span>
                </li>
                </Link>
                <Link href={`https://g.page/contrivers?share`}>
                <li>
                    <GeoFill className={contacts.icon} />
                    <span>
                    : Plot No. 278/3181,
                    AIIMS Nagar,
                    Near SBI Aiginia Branch, 
                    Bhubaneswar, Odisha,
                    India 751019
                    </span>
                </li>
                </Link>
            </ul>
            <div className={contacts.contactsText}>
              <h2>
                Contacts Us
              </h2>
              <iframe className={contacts.gmap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.4855274950974!2d85.7820416!3d20.238688900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7cbffffffff%3A0x39e3e1892cd7e32f!2sBaishnodevi%20Engineer%20%26%20Consultancy!5e0!3m2!1sen!2sin!4v1656285363404!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
    )
}

export default Contacts;