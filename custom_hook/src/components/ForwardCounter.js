import Card from "./Card";
import useCounter from "../hooks/use-count";
const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
