import React from "react";

function Food({name}) {
  return <h1> I like {name} </h1>
}

const foodILike = [
  {
    name: "kimchi",
  },
  {
    name: "bulgogi",
  },
  {
    name: "ramen",
  },
  {
    name: "bibimbap",
  },
  {
    name: "naengmyeon",
  },
]

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food name={dish.name}/>
    ))}
  </div>
  )}

export default App;
