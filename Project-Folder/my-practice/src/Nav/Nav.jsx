import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>
        <a href="">Tripay</a>
      </h1>

      <ul>
        <li>
          <a href="">Business</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>

      <div>
        <button className={styles.button}>
          <a href="">Login</a>
        </button>
        <button className={styles.button}>
          <a href="">Sign Up</a>
        </button>
      </div>
    </nav>
  );
}
export default Nav;
