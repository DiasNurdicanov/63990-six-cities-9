import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';
import Layout from '../../common/layout/layout';

type MainScreenProps = {
  placesCount: number;
}

function MainScreen({placesCount}: MainScreenProps): JSX.Element {
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
        <Cities placesCount={placesCount} />
      </>
    </Layout>
  );
}

export default MainScreen;
