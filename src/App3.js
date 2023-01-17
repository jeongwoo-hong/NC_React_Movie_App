import React from "react";

class App3 extends React.Component{
    state = {
        isLoading: true
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000)
    }
    render() {
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? "Loading" : "We are ready"}
            </div>
        ) 
    }

}

export default App3;