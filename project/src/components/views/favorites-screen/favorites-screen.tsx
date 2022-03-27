import classNames from 'classnames';
import {useEffect} from 'react';

import {store} from '../../../store';
import {fetchFavorites} from '../../../store/api-actions';

import LoadingScreen from '../loading-screen/loading-screen';
import Layout from '../../common/layout/layout';
import PlaceCard from '../../common/place-card/place-card';

import {Hotel} from '../../../types/hotel';
import {Cities} from '../../../const/cities';
import {useAppSelector} from '../../../hooks/';
import {isCheckedAuth} from '../../../utils';

type Hotels = {
  [keyof in Cities]: Hotel[]
}

function FavoritesScreen(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavorites());
  }, []);

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {favorites, isDataLoaded} = useAppSelector(({DATA}) => DATA);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const hotels: Hotels = {
    [Cities.Paris]: [],
    [Cities.Cologne]: [],
    [Cities.Brussels]: [],
    [Cities.Amsterdam]: [],
    [Cities.Hamburg]: [],
    [Cities.Dusseldorf]: [],
  };

  const cities = favorites.reduce((acc, current) => {
    const {name: currentCity} = current.city;

    acc[currentCity].push(current);

    return acc;
  }, hotels);

  const wrapClass = classNames('favorites', {
    'favorites--empty': !favorites.length,
  });

  const mainClass = classNames('page__main--favorites', {
    'page__main--favorites-empty': !favorites.length,
  });

  return (
    <Layout
      mainElementClassName={mainClass}
      pageClassName={!favorites.length ? 'page--favorites-empty' : ''}
      hasFooter
    >
      <div className='page__favorites-container container'>
        <section className={wrapClass}>
          {favorites.length ? (
            <>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {Object.values(Cities).map((hotel) => cities[hotel].length ? (
                  <li key={hotel} className='favorites__locations-items'>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <a className='locations__item-link' href='#!'>
                          <span>{hotel}</span>
                        </a>
                      </div>
                    </div>

                    <div className='favorites__places'>
                      {cities[hotel].map((card) => (
                        <PlaceCard
                          key={card.id}
                          hotel={card}
                          wrapClass='favorites__card'
                          imageClass='favorites__image-wrapper'
                          infoClass='favorites__card-info'
                          imageSize='small'
                        />))}
                    </div>
                  </li>
                ) : null)}
              </ul>
            </>
          ): (
            <>
              <h1 className='visually-hidden'>Favorites (empty)</h1>
              <div className='favorites__status-wrapper'>
                <b className='favorites__status'>Nothing yet saved.</b>
                <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
              </div>
            </>
          )}
        </section>
      </div>
    </Layout>
  );
}

export default FavoritesScreen;
