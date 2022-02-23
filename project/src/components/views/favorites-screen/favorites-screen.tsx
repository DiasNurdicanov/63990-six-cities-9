import { PlaceCardProps } from '../../../types/place-card';
import Layout from '../../common/layout/layout';
import PlaceCard from '../../common/place-card/place-card';

type FavoritesScreenProps = {
  cards: PlaceCardProps[];
}

function FavoritesScreen({cards}: FavoritesScreenProps): JSX.Element {
  const citys = [...new Set(cards.map((card) => card.city))];
  const data = citys.map((city) => ({
    city,
    cards: cards.filter((card) => card.city === city),
  }));

  return (
    <Layout
      mainElementClassName='page__main--favorites'
      hasFooter
    >
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>
            {data.map((group) => (
              <li key={group.city} className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#!'>
                      <span>{group.city}</span>
                    </a>
                  </div>
                </div>

                <div className='favorites__places'>
                  {group.cards.map((card) => (
                    <PlaceCard
                      key={card.id}
                      {...card}
                      wrapMod='favorites__card'
                      imageMod='favorites__image-wrapper'
                      infoMod='favorites__card-info'
                      imageWidth='150'
                      imageHeight='110'
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
