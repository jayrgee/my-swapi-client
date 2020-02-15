import React from "react";
import "./styles.css";

import useSomething from "./hooks/useSomething";

export default function App() {
  const person1 = useSomething("1");
  console.log(person1[0]);
  return (
    <div className="App">
      <h1>Hello Foo</h1>
    </div>
  );
}
