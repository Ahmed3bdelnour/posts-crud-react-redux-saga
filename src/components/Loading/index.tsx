import { Spin } from "antd";
import { useSelector } from "react-redux";
import { getLoading } from "../../store/selectors/posts";
import "./style.scss";

export const Loading = () => {
  const loading = useSelector(getLoading);

  if (!loading) return null;

  return (
    <div className="loading-wrapper">
      <Spin size="large" />
    </div>
  );
};
