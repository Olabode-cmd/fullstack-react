import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login')
  }, [])
    
  return null
}

export default Homepage;