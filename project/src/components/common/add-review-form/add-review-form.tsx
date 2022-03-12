import { useState, ChangeEvent } from 'react';
import RatingStarItem from '../rating-star-item/rating-star-item';

const RATING_STAR_COUNT = 5;

function AddReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value);
  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => setRating(evt.target.value);

  return (
    <form className='reviews__form form' action='#' method='post'>
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {
          Array.from({length: RATING_STAR_COUNT}, (el, i) => ++i).reverse().map((i) => (
            <RatingStarItem
              key={i}
              id={i}
              onChangeHandler={handleRatingChange}
              isChecked={i === Number(rating)}
            />
          ))
        }
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={review}
        onChange={handleTextareaChange}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled>Submit</button>
      </div>
    </form>
  );
}

export default AddReviewForm;
