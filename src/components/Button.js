import styles from './Button.module.css';

export default function Button({ children, color, large }) {
  return (
    <a href="/" style={{ '--color': color }} className={large ? styles.buttonLarge : styles.buttonPink}>{children}</a>
  )
}