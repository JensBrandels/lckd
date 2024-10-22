import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
function navigation(path) {
  navigate(path);
}

export default navigation;
