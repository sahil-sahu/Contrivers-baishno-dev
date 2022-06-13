import styles from "./people.module.css";
import Image from 'next/image';

function Person(props){

    const {image, content} = props.packet;

    return(
        <div className={styles.Card}>
            <p>{content}</p>
            <div className={styles.profileIcon}>
                <Image src={image} width={100} height={100} alt={`testimonial people`} />
            </div>
        </div>
    )
}

export default Person;