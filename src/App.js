import React from "react";
import ProoTypes from "prop-types"

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
    rating : 5,
  },
  {
    id: 2,
    name: "bulgogi",
    rating : 4,
  },
  {
    id: 3,
    name: "ramen",
    rating :1,
  },
  {
    id: 4,
    name: "bibimbap",
    rating : 4,
  },
  {
    id: 5,
    name: "naengmyeon",
    rating : 2,
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
