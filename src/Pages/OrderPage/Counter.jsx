import { useState } from "react";


const Counter = () => {

    const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
        setCount(count - 1);
      }
  };


    return (
        <div>
      <h2>Order: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
    );
};

export default Counter;