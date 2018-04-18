import React from 'react'
import ReviewTextInput from './ReviewTextInput'
import ReviewSubmitButton from './ReviewSubmitButton'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewPlaceholderText: "Leave your review here...",
            inputButtonText: "Submit your review"
        }
    }

    handleSubmission(event) {
        window.alert("Form submitted!");
    }

    render() {
        const { reviewPlaceholderText, inputButtonText } = this.state;
        return (
            <form>
                <ReviewTextInput reviewPlaceholderText={reviewPlaceholderText} />
                <ReviewSubmitButton inputButtonText={inputButtonText} inputSubmitHandler={this.handleSubmission} />
            </form>
        )
    }
}

export default ReviewForm;