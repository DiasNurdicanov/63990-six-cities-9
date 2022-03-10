import PlaceCardsList from '../place-cards-list/place-cards-list';
import Map from '../map/map';
import {useAppSelector} from '../../../hooks/';
import Sorting from '../sorting/sorting';
import {SortingTypes} from '../../../const/sorting';
import { useState, MouseEvent } from 'react';

function Cities(): JSX.Element {
  const {city, hotels, sortType} = useAppSelector((state) => state);
  const cards = hotels.filter((hotel) => hotel.city.name === city.name).sort(SortingTypes[sortType].fn);

  const [activeCard, setActiveCard] = useState(0);
  const onCardHover = (e: MouseEvent<HTMLDivElement>, id: number) => setActiveCard(id);
  const resetActiveCard = (e: MouseEvent<HTMLDivElement>) => setActiveCard(0);

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{cards.length} places to stay in {city.name}</b>
          <Sorting />
          <div className='cities__places-list places__list tabs__content'>
            <PlaceCardsList cards={cards} onCardHover={onCardHover} resetActiveCard={resetActiveCard} />
          </div>
        </section>
        <div className='cities__right-section'>
          <section className='cities__map map'>
            <Map hotels={cards} city={city} activeMarkerIndex={activeCard} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
