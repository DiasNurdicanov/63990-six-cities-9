import Layout from '../../common/layout/layout';
import Locations from '../../common/locations/locations';
import {CitiesCoords} from '../../../const/cities';

function MainScreen(): JSX.Element {
  return (
    <Layout
      pageClassName='page--gray page--main'
      mainElementClassName='page__main--index page__main--index-empty'
    >
      <>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <Locations cities={CitiesCoords} />
        </div>
        <div className='cities'>
          <div className='cities__places-container cities__places-container--empty container'>
            <section className='cities__no-places'>
              <div className='cities__status-wrapper tabs__content'>
                <b className='cities__status'>No places to stay available</b>
                <p className='cities__status-description'>We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className='cities__right-section'></div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default MainScreen;
