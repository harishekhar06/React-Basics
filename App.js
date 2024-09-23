import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex={"5"}>
        Namaskaaram 
    </h1>
);

// React Component
const HeadingComponenet = () => (
    <div id="container">
        <Title />
        <h1 className="heading">React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet />);