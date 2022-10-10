import { useDispatch } from "react-redux";

const Button = ({ children, newPokemon }) => {
  const dispatch = useDispatch();
  return <button onClick={() => newPokemon(dispatch)}>{children}</button>;
};

export default Button;
