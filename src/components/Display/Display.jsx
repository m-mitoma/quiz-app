import styles from "./Display.module.css";
export default function Display({ children }) {
  return (
    <div className={styles.Display}>
      {children}
    </div>
  )
}
