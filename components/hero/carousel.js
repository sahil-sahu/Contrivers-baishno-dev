import Image from 'next/image';
import Link from 'next/link'
import styles from './caro.module.css';

const Carousel = (props) => {

    const parallaxAmount = props.parallaxAmount;
    const parallaxOpacity = props.parallaxOpacity;
    const width = props.width;
    const height = props.height;
    const h1 = props.h1;
    const span = props.span;
    const atag = props.atag;
    const route = props.route;
    const image = props.image;

    return(
        <div className={styles.heroSlide}>
            <div
                className={styles.slideImage}
                data-swiper-parallax={parallaxAmount}
                data-swiper-parallax-opacity={parallaxOpacity}
            >
                <Image alt="BaishnoDev Construct projects Images" src={image} width={width} height={height} />
                <div className={styles.slideContainer}>
                <h1>
                    {h1}
                    <span>
                    {span}
                    </span>
                </h1>
                
                <Link href={route}>
                    <a className={styles.Discover}>
                    {atag}
                    </a>
                </Link>
                </div>
            </div>
        </div>
    );

};

export default Carousel;