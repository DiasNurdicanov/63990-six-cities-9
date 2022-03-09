import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';
import Layout from '../../common/layout/layout';
import {CitiesCoords} from '../../../const/cities';

function MainScreen(): JSX.Element {
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
        <Cities />
      </>
    </Layout>
  );
}

export default MainScreen;
