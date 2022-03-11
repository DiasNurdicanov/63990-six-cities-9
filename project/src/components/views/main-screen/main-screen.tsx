import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';
import Layout from '../../common/layout/layout';
import {CitiesCoords} from '../../../const/cities';
import {useAppSelector} from '../../../hooks/';
import {getOffers} from '../../../utils';
import { useEffect, useState } from 'react';

function MainScreen(): JSX.Element {
  const {hotels, sortType, city} = useAppSelector((state) => state);

  const [selectedHotels, setSelectedHotels] = useState(getOffers(hotels, sortType, city));

  useEffect(() => {
    setSelectedHotels(getOffers(hotels, sortType, city));
  }, [hotels, sortType, city]);

  return (
    <Layout
      pageClassName='page--gray page--main'
      mainElementClassName='page__main--index'
    >
      <>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <Locations cities={CitiesCoords} />
        </div>
        <Cities selectedHotels={selectedHotels} />
      </>
    </Layout>
  );
}

export default MainScreen;
