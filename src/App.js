import React from "react";
import "./styles.css";

import useSomething from "./useSomething";
// import useSomething from "./hooks/useSomething";
import useInstance from "./useInstance";

export default function App() {
  const person1 = useSomething("1");
  console.log(person1[0]);
  const person2 = useInstance("2");
  console.log(person2[0]);
  return (
    <div className="App">
      <h1>Hello Foo</h1>
    </div>
  );
}
