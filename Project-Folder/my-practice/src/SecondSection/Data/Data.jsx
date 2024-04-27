import styles from "./data.module.css";
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
            <img src={"src/assets/surface1.png"} alt="guaranteed image" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataComponent;
