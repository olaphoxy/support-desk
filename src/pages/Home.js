import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from the option below</p>
      </section>
      <div className="my-block">
        <Link to="/new-ticket" className="btn btn-reverse btn-block express">
          <FaQuestionCircle /> Create New Ticket
        </Link>
        <Link to="/ticket" className="btn btn-block express">
          <FaTicketAlt /> View My Ticket
        </Link>
      </div>
    </>
  );
};

export default Home;
