import { Link } from "react-router-dom";

const NextInput = (props) => {
  return (
    <div className={`buttonContainer ${props.ButtonClassContainer}`}>
      <Link to={`${props.Linked}`}>
        <button className={props.ButtonClass}>{props.ButtonText}</button>
      </Link>
    </div>
  );
};

export default NextInput;
