import {Hotel} from '../../../types/hotel';
import Layout from '../../common/layout/layout';
import PlaceCard from '../../common/place-card/place-card';
import {Cities} from '../../../const/cities';
import {useAppSelector} from '../../../hooks/';

import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../../../utils';

type Hotels = {
  [keyof in Cities]: Hotel[]
}

function FavoritesScreen(): JSX.Element {
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

  return (
    <Layout
      mainElementClassName='page__main--favorites'
      hasFooter
    >
      <div className='page__favorites-container container'>
        <section className='favorites'>
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
        </section>
      </div>
    </Layout>
  );
}

export default FavoritesScreen;
