import { Link } from "react-router-dom";

const Chips = () => {
  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"
        alt="bag of lays original chips"
      />
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Chips;
