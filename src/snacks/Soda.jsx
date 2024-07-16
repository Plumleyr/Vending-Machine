import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div>
      <img
        src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206_p/208206"
        alt="Can of Coca Cola"
      />
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default Soda;
