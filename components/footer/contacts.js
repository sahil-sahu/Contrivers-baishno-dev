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
              <iframe className={contacts.gmap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.1668052519894!2d85.76509244986447!3d20.251915719153352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a76c7f77de83%3A0xa37048a377386e4d!2sContrivers!5e0!3m2!1sen!2sin!4v1655140852663!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
    )
}

export default Contacts;