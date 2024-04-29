import Nav from "./Nav/Nav";
import Section1 from "./FirstSection/section1";
import Section2 from "./SecondSection/section2";
import Section3 from "./ThirdSection/section3";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <div className="project-body">
        <Nav />
        <Section1 />
        <Section2 />
        <Section3 />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
