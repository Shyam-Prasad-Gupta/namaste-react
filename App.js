const rootDiv = React.createElement("div", {id: "rootDiv"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "h1Tag"}, "H1 Tag Here"),
        React.createElement("h2", {id: "h2Tag"}, "H2 Tag Here")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h3", {id: "h3Tag"}, "H3 Tag Here"),
        React.createElement("h4", {id: "h4Tag"}, "H4 Tag Here")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(rootDiv);