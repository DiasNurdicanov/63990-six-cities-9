import {Hotel} from '../../../types/hotel';
import Layout from '../../common/layout/layout';
import PlaceCard from '../../common/place-card/place-card';

type FavoritesScreenProps = {
  cards: Hotel[];
}

type Citys = {
  [key: string]: Hotel[]
}

function FavoritesScreen({cards}: FavoritesScreenProps): JSX.Element {
  const citys = cards.reduce((acc, current) => {
    const city = current.city.name;

    if (acc[city]) {
      acc[city].push(current);
    } else {
      acc[city] = [current];
    }

    return acc;
  }, {} as Citys);

  return (
    <Layout
      mainElementClassName='page__main--favorites'
      hasFooter
    >
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>
            {Object.keys(citys).map((city) => (
              <li key={city} className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#!'>
                      <span>{city}</span>
                    </a>
                  </div>
                </div>

                <div className='favorites__places'>
                  {citys[city].map((card) => (
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
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default FavoritesScreen;
