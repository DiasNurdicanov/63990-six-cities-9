import classNames from 'classnames';
import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import { PlaceCardProps } from '../../../types/place-card';
import { RATING_STAR_PERCENT } from '../../../const/common';

const IMAGE_SIZES = {
  small: {
    width: 150,
    height: 260,
  },
  medium: {
    width: 260,
    height: 200,
  },
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {
    hotel: {
      id,
      title,
      rating,
      previewImage,
      price,
      type,
      isFavorite,
      isPremium,
    },
    wrapClass,
    imageClass,
    infoClass = '',
    imageSize,
    onCardHover,
    onCardHoverReset,
  } = props;

  return (
    <article
      className={classNames('place-card', wrapClass)}
      onMouseOver={onCardHover ? (e: MouseEvent<HTMLDivElement>) => onCardHover(e, id) : undefined}
      onMouseOut={onCardHoverReset ? (e: MouseEvent<HTMLDivElement>) => onCardHoverReset(e) : undefined}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}

      <div className={classNames('place-card__image-wrapper', imageClass)}>
        <a href='#!'>
          <img
            className='place-card__image'
            src={previewImage}
            width={IMAGE_SIZES[imageSize].width}
            height={IMAGE_SIZES[imageSize].height}
            alt='Place'
          />
        </a>
      </div>
      <div className={classNames('place-card__info', infoClass)}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active': isFavorite})} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${RATING_STAR_PERCENT * rating}%`}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
