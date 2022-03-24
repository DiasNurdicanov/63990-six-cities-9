import {useState, ChangeEvent, FormEvent} from 'react';

import {addReviewAction} from '../../../store/api-actions';

import RatingStarItem from '../rating-star-item/rating-star-item';

import {useAppDispatch} from '../../../hooks/';
import {AddReview} from '../../../types/add-review';

const RATING_STAR_COUNT = 5;

type AddReviewProps = {
  hotelId: number;
}

function AddReviewForm({hotelId}: AddReviewProps): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value);
  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value));

  const dispatch = useAppDispatch();

  const onSubmit = (reviewData: AddReview) => {
    dispatch(addReviewAction(reviewData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      hotelId,
      reviewData: {
        comment: review,
        rating: rating,
      },
    });
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleSubmit}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {
          Array.from({length: RATING_STAR_COUNT}, (el, i) => ++i).reverse().map((i) => (
            <RatingStarItem
              key={i}
              id={i}
              onChangeHandler={handleRatingChange}
              isChecked={i === rating}
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
        data-testid='review'
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={rating === 0 || review.length === 0}>Submit</button>
      </div>
    </form>
  );
}

export default AddReviewForm;
