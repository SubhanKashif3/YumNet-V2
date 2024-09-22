import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/auth", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome Home</h1>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home;