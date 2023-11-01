import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorInfo = useRouteError();
    console.log(errorInfo);
    return (
        <div>
            <h1>Oops.....</h1>
            <h2>Something went wrong. Please come again after sometime.</h2>
            <h3>{errorInfo.status}: {errorInfo.statusText}</h3>
        </div>
    );
};

export default Error;