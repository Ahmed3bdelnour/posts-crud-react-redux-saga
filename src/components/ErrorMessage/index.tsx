import { WarningFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getError } from "../../store/selectors/posts";
import "./style.scss";

export const ErrorMessage = () => {
  const error = useSelector(getError);

  if (!error) return null;

  return (
    <div className="error-message-container">
      <h2>
        <WarningFilled /> OOPS!
      </h2>
      <p>Error happened, please try again later</p>
      <p>Error message: {error}</p>
    </div>
  );
};
