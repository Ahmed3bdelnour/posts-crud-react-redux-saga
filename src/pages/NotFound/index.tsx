import { Button } from "antd";
import { WarningFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useCallback } from "react";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => navigate("/"), [navigate]);

  return (
    <div className="page-not-found-container">
      <h2>
        <WarningFilled /> OOPS!
      </h2>

      <p>Error 404, Page Not Found</p>

      <Button type="primary" onClick={handleNavigate}>
        Home page
      </Button>
    </div>
  );
};
