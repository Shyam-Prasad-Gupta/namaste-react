import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
      <Footer />
    </div>
  );
}



const appRoot = ReactDOM.createRoot(document.getElementById("root"));
appRoot.render(<AppLayout/>);
