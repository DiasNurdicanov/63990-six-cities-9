import Layout from '../../common/layout/layout';
import Property from '../../common/property/property';
import NearPlaces from '../../common/near-places/near-places';
import {Review} from '../../../types/review';
import {Hotel} from '../../../types/hotel';
import {City} from '../../../types/hotel';

type PropertyScreenProps = {
  reviews: Review[];
  cards: Hotel[];
  city: City;
}

function PropertyScreen({reviews, cards, city}: PropertyScreenProps): JSX.Element {
  return (
    <Layout
      mainElementClassName='page__main--property'
    >
      <>
        <Property reviews={reviews} cards={cards} city={city} />
        <NearPlaces cards={cards} />
      </>
    </Layout>
  );
}

export default PropertyScreen;
