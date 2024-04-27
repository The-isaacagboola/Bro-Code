import { ArrowDown, Apple } from "react-bootstrap-icons";
import styles from "./section1.module.css";
function Section1() {
  return (
    <section className={styles.section1}>
      <div className={styles.leftDiv}>
        <div className={styles.innerDiv}>
          <h2>Banking Should Be Easy.</h2>
          <p>
            Financial transactions without interet using a mobile device such as
            a smartphone or tablet with bluetooth.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.firstDiv}>
          <div style={{ marginBottom: "38px" }}>
            <div className={styles.arrowDownBox}>
              <ArrowDown color="hsla(0, 0%, 100%, 1)" size={"14"} />
            </div>
            <div>
              <p style={{ fontSize: "12px" }}>Income</p>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  position: "relative",
                }}
              >
                2123{" "}
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
                fontSize: "12px",
                fontWeight: "500",
                position: "relative",
              }}
            >
              * * * * 564{" "}
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
                fontSize: "25px",
                fontWeight: "700",
                fontFamily: "Roboto",
              }}
            >
              3,345
            </p>
          </div>
        </div>

        {/* SECNOD DIV */}
        <div className={styles.secondDiv}>
          <div>
            <div className={styles.appleDiv}>
              <Apple color="black" size={"20"} />
            </div>

            <div style={{ marginLeft: "14px" }}>
              <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "hsla(222, 46%, 14%, 1)",
                }}
              >
                Apple Pay
              </h3>
              <p>Debit</p>
              <p>Card</p>
            </div>
          </div>
          <p
            style={{
              color: "hsla(11, 100%, 54%, 1)",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            -$2,000
          </p>
        </div>

        {/* THIRD DIV */}
        <div className={styles.middleDiv}>
          <div style={{ marginBottom: "50px" }}>
            <div className={styles.arrowDownBox}>
              <ArrowDown color="#fff" size={"18px"} />
            </div>
            <div>
              <p style={{ fontSize: "18px", fontWeight: "500" }}>Income</p>
              <p style={{ fontSize: "28px", fontWeight: "500" }}>5,600</p>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                position: "relative",
              }}
            >
              * * * * 5080
            </p>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "500",
              }}
            >
              8,000
            </p>
          </div>
        </div>

        <div className={styles.fourthDiv}>
          <img src={"/src/assets/graph.png"} alt="income graph" />
        </div>

        {/*last Guy  */}
        <div className={styles.lastDiv}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "hsla(226, 27%, 19%, 1)",
              height: "60px",
              width: "138px",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                background: "hsla(325, 91%, 47%, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                marginRight: "10px",
              }}
            >
              <img
                style={{ width: "21px", height: "14px" }}
                src={"/src/assets/lyaLogo.png"}
                alt="card logo"
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                Month/Year
              </p>
              <p style={{ fontSize: "14px", fontWeight: "500" }}>06/20</p>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "14px", fontWeight: "400" }}>* * * * 5080</p>
            <p style={{ fontSize: "20px", fontWeight: "500" }}>2334.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
