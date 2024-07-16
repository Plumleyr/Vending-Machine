import { Link } from "react-router-dom";

const Chocolate = () => {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Green_and_Black%27s_dark_chocolate_bar_2.jpg"
        alt="Bar of Chocolate"
      />
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Chocolate;
