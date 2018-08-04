import React, { Component } from 'react';
import User from './User';

class App extends Component {
    constructor(props){
        super(props);
        const isHidden = true;

        this.onClick = this.onClick.bind(this);

        this.state = {
            height : 'Initial Height'
        };

    }

    onClick(){
        console.log("tuşa basıldi1");

        this.setState({
            height: "New Height"
        });
    }

    render() {
    return (
        <div>
            <h1>Selman</h1>
            <h1>Alim</h1>
              <User onClick={this.onClick} name={"2"} height={this.state.height} />
        </div>
        );
    }




}

export default App;
