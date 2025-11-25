import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section>
      <div className="bg-white min-h-screen  max-w-[1400px] m-auto md:p-25 pt-35  flex md:flex-row flex-col items-center pt-25">
        {/* Hero content */}
        <div className="flex-1 pt-10">
          <span className="bg-orange-100 text-orange-500 text-2xl px-5 py-2 rounded-full ">
            Explort Best Quality..
          </span>
          <h1 className="md:text-7xl text-2xl font-bold mt-10 ">
            Tasty Organic <span className="text-orange-400">Fruits</span> &
            <span className="text-orange-400">Veggies</span>
            <br /> In Your City
          </h1>
          <p className="text-zinc-500 md:text-lg text-md mx-w-[530px] mt-5 sm:mb-2 ">
            Bred for a high Content of benefical substances. Our products are
            all fresh and Healthy
          </p>
          <Button content="Shop Now" />
        </div>

        {/* Hero image */}
        <div className="flex-1 pt-24">
          <img src={Grocery} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
