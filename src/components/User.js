import { useEffect, useState } from "react";

const User = ({ name }) => {

  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    //Api Calls

  }, []);

  // async function getUserInfo() {
  //   const data = ;
  // }

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button onClick={increment}>count badhao chlo</button>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bhilwara</h3>
      <h4>Contact: @kasara614</h4>
    </div>
  );
};

export default User;