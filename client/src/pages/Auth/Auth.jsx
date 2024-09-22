import useStore from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>I am Auth</h1>
      
    </div>
  );
};

export default Auth;