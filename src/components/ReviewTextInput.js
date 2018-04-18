import React from 'react'

const ReviewTextInputStyle = {
    width: "100%",
    height: "100px"
}

class ReviewTextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { reviewPlaceholderText } = this.props;
        return (
            <textarea style={ReviewTextInputStyle} placeholder={reviewPlaceholderText}></textarea>
        )
    }
}

export default ReviewTextInput;