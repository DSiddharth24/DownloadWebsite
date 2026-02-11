import styles from './Gallery.module.css';
import Image from 'next/image';

const items = [
    {
        src: '/images/hero-bg.png',
        title: 'Lush Plantations',
        category: 'Environment'
    },
    {
        src: '/images/mechanization-feature.png',
        title: 'Smart Drones',
        category: 'Technology'
    },
    {
        src: '/images/app-mockup.png',
        title: 'Seamless Control',
        category: 'App Interface'
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className={styles.gallery}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Visualizing <span className={styles.highlight}>Innovation</span></h2>
                    <p className={styles.subtitle}>A glimpse into the digital transformation of plantation management.</p>
                </div>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.category}>{item.category}</span>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
