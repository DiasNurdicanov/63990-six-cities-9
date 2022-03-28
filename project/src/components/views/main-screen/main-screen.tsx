import {useEffect, useState} from 'react';
import classNames from 'classnames';

import {store} from '../../../store';
import {fetchHotelsAction} from '../../../store/api-actions';

import LoadingScreen from '../loading-screen/loading-screen';
import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';
import Layout from '../../common/layout/layout';

import {CitiesCoords} from '../../../const/cities';
import {useAppSelector} from '../../../hooks/';
import {getOffers} from '../../../utils';

function MainScreen(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchHotelsAction());
  }, []);

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

  const mainElClassName = classNames('page__main--index', {
    'page__main--index-empty': !selectedHotels.length,
  });

  return (
    <Layout
      pageClassName='page--gray page--main'
      mainElementClassName={mainElClassName}
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
