import Navbar from "../../NavBar/Navbar";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Values from "../Values/Values";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Footer />
    </div>
  );
}
export default Home;
