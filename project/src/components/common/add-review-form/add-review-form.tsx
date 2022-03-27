import {useState, ChangeEvent, FormEvent, useEffect} from 'react';

import {addReviewAction} from '../../../store/api-actions';

import RatingStarItem from '../rating-star-item/rating-star-item';

import {useAppDispatch, useAppSelector} from '../../../hooks/';
import {AddReview} from '../../../types/add-review';
import {setFormState} from '../../../store/app-data/app-data';
import {FormState} from '../../../const/form-state';

const RATING_STAR_COUNT = 5;
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

type AddReviewProps = {
  hotelId: number;
}

function AddReviewForm({hotelId}: AddReviewProps): JSX.Element {
  const {formState} = useAppSelector(({DATA}) => DATA);

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

    dispatch(setFormState(FormState.Blocked));

    onSubmit({
      hotelId,
      reviewData: {
        comment: review,
        rating: rating,
      },
    });
  };

  useEffect(() => {
    const isBlocked = rating === 0 || review.length < MIN_REVIEW_LENGTH || review.length > MAX_REVIEW_LENGTH;
    dispatch(setFormState(isBlocked ? FormState.Blocked : FormState.Unblocked));

    if (formState === FormState.Cleared) {
      setReview('');
      setRating(0);
    }
  }, [review, rating, dispatch, formState]);

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
        maxLength={MAX_REVIEW_LENGTH}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button className='reviews__submit form__submit button' type='submit' disabled={formState === FormState.Blocked}>Submit</button>
      </div>
    </form>
  );
}

export default AddReviewForm;
