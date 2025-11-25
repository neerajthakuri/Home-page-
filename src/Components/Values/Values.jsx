import Heading from "../Heading/Heading";
import { IoMdHeart } from "react-icons/io";
import { FaLeaf, FaShieldAlt } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import Basket from "../../assets/basket-full-vegetables.png";

const Value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icons: <IoMdHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icons: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icons: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "Always Fresh",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icons: <PiPlantFill />,
  },
];

function Values() {
  // LEFT SIDE (0,1)
  const LeftValues = Value.slice(0, 2).map((item) => (
    <div key={item.id} className="flex gap-4 py-20 items-start">
      <div className="text-orange-500 text-3xl">{item.icons}</div>
      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-zinc-600 text-sm">{item.para}</p>
      </div>
    </div>
  ));

  // RIGHT SIDE (2,3)
  const RightValues = Value.slice(2, 4).map((item) => (
    <div key={item.id} className="flex gap-4 py-20 items-start">
      <div className="text-orange-500 text-3xl">{item.icons}</div>
      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-zinc-600 text-sm">{item.para}</p>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlights="Our" heading="Values" />

        <div className="flex items-center justify-between gap-10">
          {/* LEFT (0,1) */}
          <div className="flex-1">{LeftValues}</div>

          {/* CENTER IMAGE */}
          <div className="flex-1 flex justify-center">
            <img src={Basket} alt="basket" className="w-[100%]" />
          </div>

          {/* RIGHT (2,3) */}
          <div className="flex-1">{RightValues}</div>
        </div>
      </div>
    </section>
  );
}

export default Values;
