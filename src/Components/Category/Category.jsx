import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DiaryCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
function Category() {
  const renderCards = category.map((card) => {
    return (
      <div className="flex-1 gap-10 basis-[300px]" key={card.id}>
        <div className="bg-white min-h-[30vh] relative -mb-4">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        {/* card content */}
        <div className="bg-zinc-200 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlights="Shop" heading="by Category" />
        {/* Catogary Cards */}
        <div className="flex flex-row gap-10">{renderCards}</div>
      </div>
    </section>
  );
}

export default Category;

const category = [
  {
    id: 1,
    title: "fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses",
    image: DiaryCat,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more",
    image: SeaFoodCat,
  },
];
