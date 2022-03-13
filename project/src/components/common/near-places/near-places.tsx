import PlaceCard from '../place-card/place-card';
import {useAppSelector} from '../../../hooks/';

function NearPlaces(): JSX.Element {
  const {nearbyHotels} = useAppSelector((state) => state);

  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>Other places in the neighbourhood</h2>
        <div className='near-places__list places__list'>
          {nearbyHotels.map((card) => (
            <PlaceCard
              key={card.id}
              hotel={card}
              wrapClass='near-places__card'
              imageClass='near-places__image-wrapper'
              imageSize='medium'
            />))}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
