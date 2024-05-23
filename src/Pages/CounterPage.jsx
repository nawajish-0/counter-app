import { useState } from "react";
import { Button } from "../Components/Button";
import { Message } from "../Components/Message";
export const CounterPage = () => {
  //hook(state)
  const [count, setCount] = useState(0);

  const updateCount = (val) => {
    if (val === "+") {
      setCount(count + 1); //state change
    } else {
      if (count !== 0) {
        setCount(count - 1); //state change
      }
    }
    console.log("count is", count);
  };
  return (
    <div className="container">
      <Message classname="alert alert-info" msg="Counter App" />
      <Message
        value={count}
        classname="alert alert-danger"
        msg="Counter Value Is: "
      />
      <Button fn={updateCount} val="+" classname="btn btn-success me-2" />
      <Button fn={updateCount} val="-" classname="btn btn-danger" />
    </div>
  );
};
