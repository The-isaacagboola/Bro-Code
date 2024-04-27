import InformationComponent from "./Information/Information";
import DataComponent from "./Data/Data";
import AddCards from "./Card/Cards";
import styles from "./section2.module.css";

function Section2() {
  return (
    <section className={styles.section2}>
      <div className={styles.heading}>
        <h2>How it works</h2>
        <p>
          Mobile banking differs from mobile payments, which involves the use of
          a mobile device
        </p>
      </div>
      <div className={styles.center}>
        <div className={styles.mainBody}>
          <div>
            <InformationComponent />
            <h3>Information</h3>
            <p className={styles.details}>
              Enter your information ensure your details safe and more secure
            </p>
          </div>
          <div>
            <DataComponent />
            <h3>Data Secure</h3>
            <p className={styles.details}>
              Sending money faster & easier with end to end encryption.
            </p>
          </div>
          <img
            className={styles.dots}
            src={"src/assets/Vector 3371.png"}
            alt="connecting dots"
          />
          <div>
            <AddCards />
            <h3>Add Cards</h3>
            <p className={styles.details}>
              Add multiple cards and track your daily expense with quality
              interface
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
