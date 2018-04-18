import React from 'react'
import Header from './Header'
import ReviewForm from './ReviewForm'

const SubmitReviewStyle = {
    width: "50%",
    margin: "0 auto"
}

const SubmitReview = () => (
    <div style={SubmitReviewStyle}>
        <Header />
        <ReviewForm />
    </div>
);

export default SubmitReview;