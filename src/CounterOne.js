import axios from "axios";
import React, { useEffect, useState } from "react";

function CounterOne() {
  const [countValues, setCountValues] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setCountValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <ul>
      {countValues.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <h4>Title: {item.title}</h4>
              <h6>userId:{item.userId}</h6>
            </div>
          </li>
        );
      })}
      {JSON.stringify(countValues)}
    </ul>
  );
}

export default CounterOne;
