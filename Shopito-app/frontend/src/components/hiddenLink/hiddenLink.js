import { useSelector } from "react-redux";

const ShowOnLogin = ({ children }) => {
  const { isLogged } = useSelector((state) => state.auth);

  if (isLogged) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const { isLogged } = useSelector((state) => state.auth);

  if (!isLogged) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
