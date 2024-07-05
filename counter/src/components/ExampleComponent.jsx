import { useState,useEffect } from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // This code runs when the component mounts and when `count` changes
      console.log(`The count is now: ${count}`);
  
      // Cleanup function (optional)
      return () => {
        console.log('Cleanup code can go here if needed');
      };
    }, [count]); // Dependency array: only run the effect when `count` changes
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
  
  export default ExampleComponent;
  