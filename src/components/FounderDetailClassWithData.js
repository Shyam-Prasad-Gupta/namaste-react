import React from "react";

class FounderDetailCardWithData extends React.Component {


    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 1,
            founderData: {
                name: "",
                url: "", 
                avatar_url: "",
                id: ""
            },
        }
        console.log("Construtor-api is called.")
    }

    async componentDidMount(){
        console.log("Component-api Did Mount is called.")
        const data = await fetch("https://api.github.com/users/Shyam-Prasad-Gupta");
        const json = await data.json();
        console.log(json);
        this.setState({
            founderData: {
                name: json.name,
                url: json.url,
                avatar_url: json.avatar_url,
                id: json.id,
            },
        });
    }

    componentDidUpdate(){
        console.log("Component-api Did Update called!");
    }

    componentWillUnmount(){
        console.log("Component-api will Unmount!");
    }

    render() {

        const {nameX, location, contact} = this.props;
        console.log("Render-api is called.");
        const {avatar_url, url, name, id} = this.state.founderData;

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
            <img src={avatar_url} alt="founder_image" />
            <a href={url} >LinkedIn</a>
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

export default FounderDetailCardWithData;