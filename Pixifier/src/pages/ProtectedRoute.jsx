import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.pixify);

  if (!isLoggedIn) {
    navigate('/login');
  }
  return children;
};

export default ProtectedRoute;
