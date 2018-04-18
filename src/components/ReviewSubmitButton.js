import React from 'react'

const ReviewButtonStyle = {
    width: "80%",
    display: "block",
    borderRadius: "8px",
    borderColor: "black",
    backgroundColor: "#EE1199",
    padding: "12px 0",
    color: "white",
    textTransform: "uppercase",
    margin: "20px auto"
}

class ReviewSubmitButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { inputButtonText, inputSubmitHandler } = this.props;
        return (
            <button style={ReviewButtonStyle} onClick={inputSubmitHandler}>{inputButtonText}</button>
        )
    }
}

export default ReviewSubmitButton;