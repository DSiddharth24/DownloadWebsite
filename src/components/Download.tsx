import styles from './Download.module.css';

export default function Download() {
    return (
        <section id="download" className={styles.download}>
            <div className={styles.container}>
                <div className={`${styles.card} glass`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Ready to Transform Your <span className={styles.highlight}>Plantation?</span></h2>
                        <p className={styles.description}>
                            Download the CrewLeaf APK today and experience the power of digital mechanization.
                            Version 1.0.4 is now available for early access.
                        </p>
                        <div className={styles.downloadBox}>
                            <a href="/apk/CrewLeaf_v1.0.4.apk" download className={styles.downloadBtn}>
                                <span className={styles.btnIcon}>📥</span>
                                <div className={styles.btnText}>
                                    <span className={styles.top}>Download Now</span>
                                    <span className={styles.bottom}>CrewLeaf_v1.0.4.apk (24 MB)</span>
                                </div>
                            </a>
                            <p className={styles.apkDisclaimer}>
                                *Please provide the APK keys to activate the download link.
                            </p>
                        </div>
                    </div>
                    <div className={styles.badges}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>🛡️</span>
                            <span className={styles.badgeText}>Secure Download</span>
                        </div>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>🔄</span>
                            <span className={styles.badgeText}>Auto Updates</span>
                        </div>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>📱</span>
                            <span className={styles.badgeText}>Android 8.0+</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
