import React from "react";

class App3 extends React.Component{
    state = {
        isLoading: true
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