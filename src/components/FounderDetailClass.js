import React from "react";

class FounderDetailCard extends React.Component {


    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 1,
        }
        console.log("Construtor is called.")
    }

    componentDidMount(){
        console.log("Component Did Mount is called.")
    }

    render() {

        const {name, location, contact} = this.props;
        console.log("Render is called.")

        return (
            <div className="founder-card-class">
            <button className="btn" onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }
            }>Increase Count</button>
            <button className="btn" onClick={
                () => {
                    this.setState({
                        count: this.state.count - 1,
                    });
                }
            }>Decrease Count</button>
            <h3>Shyam Prasad Gupta - Class</h3>
            <img src="" alt="founder_image" />
            <h4>About: </h4>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Contact: {contact}</p>
            <p><b>Mantra: </b>Jiyo aur jeene do.</p>
            <p>Count: {this.state.count}</p>
            <p>Count: {this.state.count2}</p>
        </div>
        );
    }

}

export default FounderDetailCard;