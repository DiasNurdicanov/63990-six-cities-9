import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';
import Layout from '../../common/layout/layout';
import { PlaceCardProps } from '../../../types/place-card';

type MainScreenProps = {
  placesCount: number;
  cards: PlaceCardProps[];
}

function MainScreen({placesCount, cards}: MainScreenProps): JSX.Element {
  return (
    <Layout
      pageClassName='page--gray page--main'
      mainElementClassName='page__main--index'
    >
      <>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <Locations />
        </div>
        <Cities placesCount={placesCount} cards={cards} />
      </>
    </Layout>
  );
}

export default MainScreen;
