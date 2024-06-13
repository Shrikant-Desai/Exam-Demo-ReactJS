import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UseRouterHooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return { navigate, dispatch };
};

export default UseRouterHooks;
