import styles from "./data.module.css";
import imgSurface from "../../assets/surface1.png";
function DataComponent() {
  return (
    <div style={{ height: "162px" }}>
      <div className={styles.data}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className={styles.topImage}>
          <div>
            <img src={imgSurface} alt="guaranteed image" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataComponent;
