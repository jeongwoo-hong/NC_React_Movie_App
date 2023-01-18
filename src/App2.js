import React from "react";
// import PropTypes from "prop-types";

class App2 extends React.Component{
    state = {
        count: 0
    }
    add = () => {
        this.setState(current => ({count: current.count + 1}))
    }
    minus = () => {
        this.setState(current => ({count: current.count - 1}))
    }
    componentDidUpdate() {
        console.log("i just updated")
    }
    componentDidMount(){
        console.log("component rendered")
    }
    componentWillUnmount(){
        console.log("goodbye")
    }
    render() {
        return (
            <div>
                <h1>The number is :{this.state.count}</h1>
                <button onClick={this.add}>Add</button> 
                <button onClick={this.minus}>Minus</button>
            </div>
        ) 
    }

}

export default App2;