import styles from './Section.module.css';

export default function Section({ children, large }) {
  return (
    <section className={large ? styles.largeSection : styles.section}>{children} </section>
  )
}