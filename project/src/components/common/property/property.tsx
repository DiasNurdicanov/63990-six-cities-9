import classNames from 'classnames';

import Map from '../map/map';
import AddReviewForm from '../add-review-form/add-review-form';
import ReviewList from '../review-list/review-list';

import {useAppSelector} from '../../../hooks/';
import {RATING_STAR_PERCENT} from '../../../const/common';
import {AuthorizationStatus} from '../../../const/auth-status';

const MAX_IMAGES_COUNT = 6;

function Property(): JSX.Element | null {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {hotel, reviews, nearbyHotels} = useAppSelector(({DATA}) => DATA);

  if (hotel === null) {
    return null;
  }

  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
    id,
  } = hotel;

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const bookmarkBtnClassname = classNames('property__bookmark-button', 'button', {'property__bookmark-button': isFavorite});
  const hostAvatarClassname = classNames('property__avatar-wrapper user__avatar-wrapper', {'property__avatar-wrapper--pro': host.isPro});
  const ratingWidth = `${RATING_STAR_PERCENT * rating}%`;

  return (
    <section className='property'>
      <div className='property__gallery-container container'>
        <div className='property__gallery'>
          {images.slice(0, MAX_IMAGES_COUNT).map((image) => (
            <div key={image} className='property__image-wrapper'>
              <img
                className='property__image'
                src={image}
                alt='studio'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='property__container container'>
        <div className='property__wrapper'>
          {isPremium && (
            <div className='property__mark'>
              <span>Premium</span>
            </div>
          )}
          <div className='property__name-wrapper'>
            <h1 className='property__name'>
              {title}
            </h1>
            <button className={bookmarkBtnClassname} type='button'>
              <svg className='property__bookmark-icon' width='31' height='33'>
                <use xlinkHref='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>To bookmarks</span>
            </button>
          </div>
          <div className='property__rating rating'>
            <div className='property__stars rating__stars'>
              <span style={{width: ratingWidth}}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
            <span className='property__rating-value rating__value'>{rating}</span>
          </div>
          <ul className='property__features'>
            <li className='property__feature property__feature--entire'>
              {type}
            </li>
            <li className='property__feature property__feature--bedrooms'>
              {bedrooms} Bedrooms
            </li>
            <li className='property__feature property__feature--adults'>
              Max {maxAdults} adults
            </li>
          </ul>
          <div className='property__price'>
            <b className='property__price-value'>&euro;{price}</b>
            <span className='property__price-text'>&nbsp;night</span>
          </div>
          <div className='property__inside'>
            <h2 className='property__inside-title'>What&apos;s inside</h2>
            <ul className='property__inside-list'>
              {goods.map((good) => (
                <li key={good} className='property__inside-item'>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className='property__host'>
            <h2 className='property__host-title'>Meet the host</h2>
            <div className='property__host-user user'>
              <div className={hostAvatarClassname}>
                <img
                  className='property__avatar user__avatar'
                  src={host.avatarUrl}
                  width='74'
                  height='74'
                  alt='Host avatar'
                />
              </div>
              <span className='property__user-name'>
                {host.name}
              </span>
              {host.isPro && (
                <span className='property__user-status'>
                  Pro
                </span>
              )}
            </div>
            <div className='property__description'>
              <p className='property__text'>
                {description}
              </p>
            </div>
          </div>
          <section className='property__reviews reviews'>
            <h2 className='reviews__title' data-testid='title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>

            <ReviewList items={reviews} />

            {isAuth && <AddReviewForm hotelId={id} />}
          </section>
        </div>
      </div>
      <section className='property__map map'>
        <Map hotels={nearbyHotels} city={city} />
      </section>
    </section>
  );
}

export default Property;
