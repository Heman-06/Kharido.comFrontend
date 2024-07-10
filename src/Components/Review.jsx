import './Review.css'
import { Rating } from 'react-simple-star-rating'
import React, { useState } from 'react'

const Review = () => {
    const [rating, setRating] = useState();
    const [review, setReview] = useState("");

    const reviewStore = (e) => {
        setReview(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rating) {
            alert("Please rate the product.");
            return;
        }

        alert(`Rating: ${rating}\nReview: ${review}`);

        setRating(null);
        setReview("");
    }

    const handleRating = (rate) => {
        setRating(rate);
    }

    const onPointerEnter = () => console.log('Enter');
    const onPointerLeave = () => console.log('Leave');
    const onPointerMove = (value, index) => console.log(value, index);

    return (
        <div className='rate1'>
            <h1>Write Your Review About Product</h1>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form onSubmit={handleSubmit}>
                <span>Your Rating: </span>
                <Rating
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    size={30}
                />
                <br />
                <label>Your review: </label>
                <textarea value={review} onChange={reviewStore} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Review;
