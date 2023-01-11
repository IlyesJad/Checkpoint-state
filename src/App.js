import React, { Component } from 'react';
import img1 from './image/img.jpg';
import Profile from "./Profile"
class App extends Component {
    state = {
        show: false,
    };

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>Toggle Show</button>
                {this.state.show &&
                    <Profile />
                }
                
            </div>
        );
    }
}

export default App;