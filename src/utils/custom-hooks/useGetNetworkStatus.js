import { useEffect, useState } from "react";

const useGetNetworkStatus = () => {

    const[networkAvailableFlag, setNetworkAvailableFlag] = useState(true);

    useEffect(() => {
        window.addEventListener("online", (event) => {
            console.log("Network is available");
            setNetworkAvailableFlag(true);
        });
            //OR
        window.ononline = (event) => {
            console.log("You are now connected to the network.");
            setNetworkAvailableFlag(true);
        };

        window.addEventListener("offline", (event) => {
            console.log("Network is not available");
            setNetworkAvailableFlag(false);
        });
            //OR
        window.onoffline = (event) => {
            console.log("You are not connected to the network.");
            setNetworkAvailableFlag(true);
        }
    }, []);

    return networkAvailableFlag;
}

export default useGetNetworkStatus;