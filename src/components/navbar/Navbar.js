// styles
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={`${styles.navHeader}`}>
        <img src="site-icon.png" alt="site-icon" height={60} width={60} />
        <h1>DT</h1>
      </div>
    </nav>
  );
};

export { Navbar };
