import {Hotel} from '../../../types/hotel';
import Layout from '../../common/layout/layout';
import PlaceCard from '../../common/place-card/place-card';
import {Cities} from '../../../const/cities';

type FavoritesScreenProps = {
  cards: Hotel[];
}

type Hotels = {
  [keyof in Cities]: Hotel[]
}

function FavoritesScreen({cards}: FavoritesScreenProps): JSX.Element {
  const hotels: Hotels = {
    [Cities.Paris]: [],
    [Cities.Cologne]: [],
    [Cities.Brussels]: [],
    [Cities.Amsterdam]: [],
    [Cities.Hamburg]: [],
    [Cities.Dusseldorf]: [],
  };

  const cities = cards.reduce((acc, current) => {
    const {name: currentCity} = current.city;

    acc[currentCity as keyof typeof Cities].push(current);

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
