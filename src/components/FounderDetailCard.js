import { useState } from "react";

const FounderDetailCard = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    console.log("Founder Details Card Rerendered.")

    return (
        <div className="founder-card-class">
            <button className="btn" onClick={
                () => setCount(count+1)
            }>Increase Count</button>
            <button className="btn" onClick={
                () => setCount(count-1)
            }>Decrease Count</button>
            <h3>Shyam Prasad Gupta</h3>
            <img src="" alt="founder_image" />
            <h4>About: </h4>
            <p>Name: {props.name}</p>
            <p>Location: {props.location}</p>
            <p>Contact: {props.contact}</p>
            <p><b>Mantra: </b>Jiyo aur jeene do.</p>
            <p>Count: {count}</p>
            <p>Count: {count2}</p>
        </div>
    );
};

export default FounderDetailCard;