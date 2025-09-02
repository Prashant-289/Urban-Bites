import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>
                    Craving something delicious? Explore a wide variety of dishes from different cuisines, freshly prepared and delivered right to your doorstep. Fast, easy, and convenient – your next meal is just a click away!{" "}
                </p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;
