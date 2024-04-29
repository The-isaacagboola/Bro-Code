import styles from "./newsletter.module.css";
function Newsletter() {
  return (
    <div className={styles.centerDiv}>
      <section className={styles.newsLetter}>
        <h2>Subscribe Newsletter</h2>
        <p>
          Financial transactions without interet using a mobile device such as a
          smartphone or tablet with bluetooth.{" "}
        </p>

        <div className={styles.inputBox}>
          <input
            type="email"
            name="subscribe"
            id="subscribe"
            placeholder="Enter your email..."
          />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
}
export default Newsletter;
