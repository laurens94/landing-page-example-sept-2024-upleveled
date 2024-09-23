import styles from './App.module.css';
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as LogoLarge } from './svg/logo-large.svg';
import Button from './components/Button.js';
import Section from './components/Section.js';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.header}>
          <Logo className={styles.logo} />
          <nav>
            <ul>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Learn</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Downloads</a>
              </li>
            </ul>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main>
        <Section large>
          <div className={styles.firstSection}>
            <LogoLarge />
            <hgroup>
              <h1>Empower designers,<br />
                slash dev times</h1>
              <a href="/">Build better products together</a>
            </hgroup>
            <p>With Rive, complex designer-developer <a href="/">handoff is a thing of the past</a>.<br />
              Reduce development times by empowering designers to build functional graphics with rich interactivity and animation.</p>
            <Button large>Get Started</Button>
            <div className={styles.videoWrapper}>
              <video src="https://cdn.rive.app/framer/rive_hero_compressed.mp4" autoPlay muted loop />
              <div className={styles.button}>Watch Video</div>
            </div>
          </div>
        </Section>
        <Section />
        <Section />
        <Section />
      </main>
    </>
  );
}
