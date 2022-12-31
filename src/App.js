import React from "react";

function Food({name, picture}) {
  return (
    <div>
       <h1> I like {name} </h1>
       <img src={picture} alt={name} />
    </div>
   
  )
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
  },
  {
    id: 2,
    name: "bulgogi",
  },
  {
    id: 3,
    name: "ramen",
  },
  {
    id: 4,
    name: "bibimbap",
  },
  {
    id: 5,
    name: "naengmyeon",
  },
]

function renderFood(dish) {
  console.log(dish)
  return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}

function App() {
  return (
  <div>
    {foodILike.map(renderFood)}
    {foodILike.map(renderFood)}
  </div>
  )}

export default App;
