import { useNavigate } from "react-router-dom";

const HomePageContainer = () => {
  const navigate = useNavigate();
  const startFunction = () => {
    navigate("/login");
  };

  const btnProps = {
    variant: "contained",
    value: "Start",
  };
  return { startFunction, btnProps };
};

export default HomePageContainer;
