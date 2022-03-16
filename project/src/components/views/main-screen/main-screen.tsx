import {useEffect, useState} from 'react';

import LoadingScreen from '../loading-screen/loading-screen';
import MainScreenEmpty from '../main-empty-screen/main-empty-screen';
import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';
import Layout from '../../common/layout/layout';

import {CitiesCoords} from '../../../const/cities';
import {useAppSelector} from '../../../hooks/';
import {getOffers} from '../../../utils';

function MainScreen(): JSX.Element {
  const {hotels, isDataLoaded} = useAppSelector(({DATA}) => DATA);
  const {sortType, city} = useAppSelector(({MAIN_SCREEN}) => MAIN_SCREEN);
  const [selectedHotels, setSelectedHotels] = useState(getOffers(hotels, sortType, city));

  useEffect(() => {
    setSelectedHotels(getOffers(hotels, sortType, city));
  }, [hotels, sortType, city]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return selectedHotels.length ?
    (
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
    )
    : <MainScreenEmpty />;
}

export default MainScreen;
