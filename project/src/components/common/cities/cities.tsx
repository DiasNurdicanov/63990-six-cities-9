import {useState, MouseEvent} from 'react';
import classNames from 'classnames';

import PlaceCardsList from '../place-cards-list/place-cards-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

import {Hotel} from '../../../types/hotel';
import {useAppSelector} from '../../../hooks/';

type CitiesProps = {
  selectedHotels: Hotel[]
}

function Cities({selectedHotels}: CitiesProps): JSX.Element {
  const {city} = useAppSelector(({MAIN_SCREEN}) => MAIN_SCREEN);
  const [activeCard, setActiveCard] = useState(0);
  const hasHotels = selectedHotels.length;
  const containerClassName = classNames('cities__places-container', 'container', {
    'cities__places-container--empty': !hasHotels,
  });

  const handleSetActiveCard = (e: MouseEvent<HTMLDivElement>, id: number) => setActiveCard(id);
  const handleResetActiveCard = (e: MouseEvent<HTMLDivElement>) => setActiveCard(0);

  return (
    <div className='cities'>
      <div className={containerClassName}>
        {hasHotels ? (
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{selectedHotels.length} places to stay in {city.name}</b>
            <Sorting />
            <div className='cities__places-list places__list tabs__content'>
              <PlaceCardsList cards={selectedHotels} onCardHover={handleSetActiveCard} onCardHoverReset={handleResetActiveCard} />
            </div>
          </section>
        ) : (
          <section className='cities__no-places'>
            <div className='cities__status-wrapper tabs__content'>
              <b className='cities__status'>No places to stay available</b>
              <p className='cities__status-description'>We could not find any property available at the moment in {city.name}</p>
            </div>
          </section>
        )}
        <div className='cities__right-section'>
          {hasHotels ? (
            <section className='cities__map map' data-testid='map'>
              <Map hotels={selectedHotels} city={city} activeMarkerIndex={activeCard} />
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Cities;
