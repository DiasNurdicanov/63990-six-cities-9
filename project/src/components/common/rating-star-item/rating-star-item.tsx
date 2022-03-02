import { ChangeEvent } from 'react';

type RatingStarItemProps = {
  id: number;
  changeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

function RatingStarItem({id, changeHandler, isChecked}: RatingStarItemProps): JSX.Element {
  return (
    <>
      <input
        className='form__rating-input visually-hidden'
        name='rating'
        value={id}
        id={`${id}-stars`}
        type='radio'
        checked={isChecked}
        onChange={changeHandler}
      />
      <label
        htmlFor={`${id}-stars`}
        className='reviews__rating-label form__rating-label'
        title='perfect'
      >
        <svg className='form__star-image' width='37' height='33'>
          <use xlinkHref='#icon-star'></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStarItem;
