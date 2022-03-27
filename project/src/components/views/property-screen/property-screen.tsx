import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {store} from '../../../store';
import {fetchHotelByIdAction, fetchReviewsAction, fetchNearbyHotelsAction} from '../../../store/api-actions';

import Layout from '../../common/layout/layout';
import Property from '../../common/property/property';
import NearPlaces from '../../common/near-places/near-places';
import {useAppSelector} from '../../../hooks/';

function PropertyScreen(): JSX.Element {
  const { id = '' } = useParams();
  const {hotel, reviews, nearbyHotels} = useAppSelector(({DATA}) => DATA);

  useEffect(() => {
    store.dispatch(fetchHotelByIdAction(id));
    store.dispatch(fetchReviewsAction(id));
    store.dispatch(fetchNearbyHotelsAction(id));
  }, [id]);

  return (
    <Layout
      mainElementClassName='page__main--property'
    >
      <>
        {hotel ? <Property hotel={hotel} reviews={reviews} nearbyHotels={nearbyHotels} /> : null}
        <NearPlaces />
      </>
    </Layout>
  );
}

export default PropertyScreen;
