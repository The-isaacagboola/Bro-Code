import { ArrowDown } from "react-bootstrap-icons";
import styles from "./cards.module.css";
function AddCards() {
  return (
    <div className={styles.card}>
      <div style={{ marginBottom: "32px", display: "flex" }}>
        <div className={styles.arrowDownBox}>
          <ArrowDown color="hsla(0, 0%, 100%, 1)" size={"10"} />
        </div>
        <div>
          <p style={{ fontSize: "10px", fontWeight: "500" }}>Income</p>
          <p
            style={{
              fontSize: "15px",
              fontFamily: "Roboto",
              fontWeight: "700",
              position: "relative",
            }}
          >
            5600
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                zIndex: "1",
                position: "absolute",
                top: "1px",
                left: "12px",
              }}
            >
              e
            </span>
          </p>
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: "10px",
            fontWeight: "500",
            position: "relative",
          }}
        >
          * * * * 508{" "}
          <span
            style={{
              position: "absolute",
            }}
          >
            3
          </span>
        </p>
        <p
          style={{
            fontSize: "21px",
            fontWeight: "700",
            fontFamily: "Roboto",
          }}
        >
          8,000
        </p>
      </div>
      <button className={styles.addBtn}>+ Add New</button>
    </div>
  );
}
export default AddCards;
