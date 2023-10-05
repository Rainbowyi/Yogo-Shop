import * as styles from "./Footer.css";

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      &copy; {getCurrentYear()} The Fashion Online Clothes Store
    </div>
  )
}

export default Footer