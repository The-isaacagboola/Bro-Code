import styles from "./information.module.css";
import imgVector from "../../assets/Vector.png";

function InformationComponent() {
  return (
    <div className={styles.info}>
      <div className={styles.spanDiv}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.compDiv}>
        <div className={styles.imageDiv}>
          <img src={imgVector} alt="computing image" />
        </div>
        <span></span>
      </div>
    </div>
  );
}
export default InformationComponent;
