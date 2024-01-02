import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to my Music program</h1>
      <button
        onClick={() => {
          navigate("/songs");
        }}
      >
        Go To Songs
      </button>
    </div>
  );
};

export default Landing;
