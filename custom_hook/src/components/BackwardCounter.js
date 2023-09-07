import Card from "./Card";
import useCounter from "../hooks/use-count";

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
