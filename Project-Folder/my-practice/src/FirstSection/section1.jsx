import { ArrowDown, Apple } from "react-bootstrap-icons";

function Section1() {
  return (
    <section>
      <div className="left-div">
        <h2>Banking Should Be Easy.</h2>
        <p>
          financial transactions without interet using a mobile device such as a
          smartphone or tablet with bluetooth.
          <button>Get Started</button>
        </p>
      </div>
      <div className="right-div">
        <div>
          <div>
            <ArrowDown color="#3d50e1" />
            <div>
              <p>Income</p>
              <p>
                2123 <span>e</span>
              </p>
            </div>
          </div>

          <div>
            <p>
              ****564 <span>3</span>
            </p>
            <p>3345</p>
          </div>
        </div>

        <div>
          <div>
            <Apple color="black" />
            <div>
              <h3>Apple Pay</h3>
              <p>Debit</p>
              <p>Card</p>
            </div>
          </div>
          <p>-$2,000</p>
        </div>

        <div>
          <div>
            <ArrowDown color="#3d50e1" />
            <div>
              <p>Income</p>
              <p>$5,600</p>
            </div>
          </div>

          <div>
            <p>****5080</p>
            <p>8000</p>
          </div>
        </div>

        <div>
          <img src="<img src=../assets/Group1000001393.svg" alt="card image" />
        </div>
        <div></div>
      </div>
    </section>
  );
}
export default Section1;
