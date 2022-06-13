import styles from "./projects.module.css";
import Image from 'next/image';

function Project(props){

    const {image, content, date} = props.packet;

    return(
        <div className={styles.card}>
            <Image src={image} width={350} height={230} alt={`BaishnoDev Construction`} />
            <div className={styles.content}>
                <div className={styles.date}>{date}</div>
                <p className={styles.text}>{content}</p>
            </div>
        </div>
    );

}

export default Project;