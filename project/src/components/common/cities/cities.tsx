import {useState, MouseEvent} from 'react';
import {useAppSelector} from '../../../hooks/';
import PlaceCardsList from '../place-cards-list/place-cards-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import {Hotel} from '../../../types/hotel';


type CitiesProps = {
  selectedHotels: Hotel[]
}

function Cities({selectedHotels}: CitiesProps): JSX.Element {
  const {city} = useAppSelector(({MAIN_SCREEN}) => MAIN_SCREEN);
  const [activeCard, setActiveCard] = useState(0);

  const handleSetActiveCard = (e: MouseEvent<HTMLDivElement>, id: number) => setActiveCard(id);
  const handleResetActiveCard = (e: MouseEvent<HTMLDivElement>) => setActiveCard(0);

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{selectedHotels.length} places to stay in {city.name}</b>
          <Sorting />
          <div className='cities__places-list places__list tabs__content'>
            <PlaceCardsList cards={selectedHotels} onCardHover={handleSetActiveCard} onCardHoverReset={handleResetActiveCard} />
          </div>
        </section>
        <div className='cities__right-section'>
          <section className='cities__map map'>
            <Map hotels={selectedHotels} city={city} activeMarkerIndex={activeCard} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
