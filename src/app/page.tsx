import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Download from '@/components/Download';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🌿</span>
          <span className={styles.logoText}>CrewLeaf</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#gallery">Gallery</a>
          <a href="#download" className={styles.navCta}>Download</a>
        </div>
      </nav>

      <Hero />
      <Features />
      <Gallery />
      <Download />

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoIcon}>🌿</span>
            <span className={styles.logoText}>CrewLeaf</span>
          </div>
          <p>© 2026 CrewLeaf. Digital mechanization for a greener future.</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
