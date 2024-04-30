import styles from "./section3.module.css";
import imgAppstore from "../assets/appStore.png";
import imgPhone1 from "../assets/Phone1.png";
import imgPlaystore from "../assets/playStore.png";
import imgPhone2 from "../assets/Phone2.png";

function Section3() {
  return (
    <section className={styles.section3}>
      <hr width="960px" />

      <div className={styles.upperSec}>
        <img src={imgPhone1} alt="phone image" />
        <div className={styles.download}>
          <h2>Download Mobile App</h2>
          <p className={styles.details}>
            Download Tripay mobile banking app for IOS and android. It helps you
            banking quickly and more smartly.
          </p>
          <div className={styles.flexCta}>
            <img src={imgAppstore} alt="app Store" />
            <a href="">
              {" "}
              <p>App Store</p>
            </a>
          </div>
          <div style={{ marginTop: "15px" }} className={styles.flexCta}>
            <img
              style={{ width: "68px", height: "58px" }}
              src={imgPlaystore}
              alt="play Store"
            />
            <a href="">
              {" "}
              <p>Play Store</p>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.lowerSec}>
        <div>
          <h2>Connecting all your banking needs.</h2>
          <p>
            Financial transactions remotely using a mobile device such as a
            smartphone or tablet.{" "}
          </p>
          <button>Get Started</button>
        </div>
        <img src={imgPhone2} alt="Phone app image" />
      </div>
    </section>
  );
}
export default Section3;
