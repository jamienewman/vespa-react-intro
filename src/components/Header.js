import React from 'react'

const HeaderStyle = {
    fontWeight: "bold",
    color: "blue",
    fontSize: "36px",
    fontFamily: "Arial, Sans-serif"
}

const Header = () => (
    <div>
        <h1 style={HeaderStyle}>Leave a review</h1>
    </div>
);

export default Header;