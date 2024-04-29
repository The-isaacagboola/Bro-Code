import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h2>Tripay</h2>
        <p>
          Financial transactions without interet using a mobile device such as a
          smartphone or tablet with bluetooth.{" "}
        </p>
        <div className={styles.media}>
          <a href="">
            <img src={"src/assets/facebook.png"} alt="facebook" />
          </a>
          <a href="">
            <img src={"src/assets/x.png"} alt="twitter" />
          </a>
          <a href="">
            <img src={"src/assets/linkedIn.png"} alt="Linked in" />
          </a>
        </div>
        <div>Copyright &copy; {new Date().getFullYear()} Isaac Agboola</div>
      </div>
      <div>
        <h3>Tripay</h3>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">How it Works</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li>
            <a href="">Support Career</a>
          </li>
          <li>
            <a href="">24hr Service</a>
          </li>
          <li>
            <a href="">Quick Chat</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="">WhatsApp</a>
          </li>
          <li>
            <a href="">Support 24</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
