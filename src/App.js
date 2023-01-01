import React from "react";
import PropTypes from "prop-types"

function Food({name, picture, rating}) {
  return (
    <div>
       <h1> I like {name} </h1>
       <h4>{rating} / 5.0</h4>
       <img src={picture} alt={name} />
    </div>
   
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
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
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
  <div>
    {foodILike.map(renderFood)}
    {foodILike.map(renderFood)}
  </div>
  )}

export default App;
