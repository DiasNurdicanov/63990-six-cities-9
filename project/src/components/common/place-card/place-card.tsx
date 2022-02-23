import {MouseEvent} from 'react';
import { PlaceCardProps } from '../../../types/place-card';
import {Link} from 'react-router-dom';

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    rating,
    image,
    imageWidth = 260,
    imageHeight = 200,
    isFavorite,
    isPremium,
    wrapMod = 'cities__place-card',
    imageMod = 'cities__image-wrapper',
    infoMod = '',
    onCardHover,
  } = props;

  return (
    <article className={`${wrapMod} place-card`} onMouseOver={onCardHover ? (e: MouseEvent<HTMLDivElement>) => onCardHover(e, id) : undefined}>
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}

      <div className={`${imageMod} place-card__image-wrapper`}>
        <a href='#!'>
          <img
            className='place-card__image'
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt='Place'
          />
        </a>
      </div>
      <div className={`${infoMod} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${100 / 5 * rating}%`}}></span>
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
