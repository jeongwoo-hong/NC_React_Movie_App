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

function renderFood(dish) {
  console.log(dish)
  return <Food name={dish.name} picture={dish.image}/>
}

function App() {
  return (
  <div>
    {foodILike.map(renderFood)}
  </div>
  )}

export default App;
