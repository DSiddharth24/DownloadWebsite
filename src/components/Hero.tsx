import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Mechanizing the Future of <span className={styles.highlight}>Plantations</span>
                    </h1>
                    <p className={styles.description}>
                        Empower your workforce with CrewLeaf. The all-in-one digital solution for smart plantation management,
                        labour coordination, and real-time operations.
                    </p>
                    <div className={styles.actions}>
                        <a href="#download" className={styles.primaryBtn}>
                            Download APK
                            <span className={styles.btnIcon}>↓</span>
                        </a>
                        <a href="#features" className={styles.secondaryBtn}>
                            Explore Features
                        </a>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>100%</span>
                            <span className={styles.statLabel}>Digitized</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>24/7</span>
                            <span className={styles.statLabel}>Monitoring</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>Real-time</span>
                            <span className={styles.statLabel}>Insights</span>
                        </div>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.mockupWrapper}>
                        <Image
                            src="/images/app-mockup.png"
                            alt="CrewLeaf App Mockup"
                            width={500}
                            height={1000}
                            className={styles.mockup}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
