import styles from "./section3.module.css";

function Section3() {
  return (
    <section className={styles.section3}>
      <hr width="960px" />

      <div className={styles.upperSec}>
        <img src="src/assets/Phone1.png" alt="phone image" />
        <div className={styles.download}>
          <h2>Download Mobile App</h2>
          <p>
            Download Tripay mobile banking app for IOS and android. It helps you
            banking quickly and more smartly.
          </p>
          <div className={styles.flexCta}>
            <img src={"src/assets/appStore.png"} alt="app Store" />
            <a href="">
              {" "}
              <p>App Store</p>
            </a>
          </div>
          <div className={styles.flexCta}>
            <img
              style={{ width: "68px", height: "58px" }}
              src={"src/assets/playStore.png"}
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
        <img src={"src/assets/Phone2.png"} alt="Phone app image" />
      </div>
    </section>
  );
}
export default Section3;
