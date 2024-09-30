import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return(
        <div className="app">
            <Header />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);