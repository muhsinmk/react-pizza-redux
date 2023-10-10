/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const clasName = "text-sm text-blue-500 hover:text-blue-600 ";
  const navigate = useNavigate();
  if (to === -1)
    return (
      <button className={clasName} onClick={() => navigate(-1)}>
        &larr; {children}
      </button>
    );

  return (
    <Link to={to} className={clasName}>
      {children}
    </Link>
  );
};

export default LinkButton;
