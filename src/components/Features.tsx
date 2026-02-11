import styles from './Features.module.css';

const features = [
    {
        title: 'Digital Labor Management',
        description: 'Track attendance, tasks, and efficiency in real-time. Say goodbye to manual records.',
        icon: '👥'
    },
    {
        title: 'Smart Mechanisation',
        description: 'Integrated IoT and drone support for precision agriculture and field monitoring.',
        icon: '🛰️'
    },
    {
        title: 'Real-time Analytics',
        description: 'Gain deep insights into plantation productivity with interactive dashboards.',
        icon: '📊'
    },
    {
        title: 'Offline Operations',
        description: 'Seamlessly work in remote locations with robust offline data synchronization.',
        icon: '📶'
    }
];

export default function Features() {
    return (
        <section id="features" className={styles.features}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Precision. <span className={styles.highlight}>Efficiency.</span> Growth.</h2>
                    <p className={styles.subtitle}>Powerful features designed for the modern plantation manager.</p>
                </div>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={`${styles.card} glass`}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
