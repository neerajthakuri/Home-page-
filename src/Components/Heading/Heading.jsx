function Heading(props) {
  return (
    <div className="py-17 my-6">
      <div className="w-fit mx-auto text-center">
        <h2 className="text-5xl font-bold">
          <span className="text-orange-500">{props.highlights} </span>
          {props.heading}
        </h2>
        <div className="w-34 h-1 bg-orange-400 mt-5"></div>
      </div>
    </div>
  );
}
export default Heading;
