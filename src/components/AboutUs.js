import FounderDetailCard from "./FounderDetailCard";
import FounderDetailClass from "./FounderDetailClass";
import FounderDetailCardWithData from "./FounderDetailClassWithData";

const AboutUs = () => {


    return (
        <div>
            <h1>About Smart School Cab:</h1>
            <p>We are simple people who want to revolutionize the students commute with the help of technology, 
                wanted to make it enjoyable fast and secure.</p>

            <FounderDetailCard name="Shyam Prasad Gupta" location="Delhi" contact="shyampra5380@gmail.com" />
            <FounderDetailClass name="Shyam Prasad Gupta - Class" location="Delhi" contact="shyampra5380@gmail.com" />
            <FounderDetailCardWithData />
        </div>
    );
};

export default AboutUs;