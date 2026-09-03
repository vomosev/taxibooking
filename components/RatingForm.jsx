import { useState } from 'react';
import axios from 'axios';

const RatingForm = ({ bookingId, userType }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (rating < 1 || rating > 5) {
      setError('Rating must be between 1 and 5.');
      return;
    }

    try {
      const response = await axios.post('/api/ratings', {
        bookingId,
        userType,
        rating,
        comment,
      });

      if (response.status === 200) {
        setSuccess('Rating submitted successfully.');
        setRating(0);
        setComment('');
      }
    } catch (err) {
      setError('Failed to submit rating. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Rate {userType === 'passenger' ? 'Driver' : 'Passenger'}</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <div>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value="0">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment"
          />
        </label>
      </div>
      <button type="submit">Submit Rating</button>
    </form>
  );
};

export default RatingForm;