import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Locations from '../locations/locations';
import Cities from '../cities/cities';

type MainScreenProps = {
  placesCount: number;
}

function MainScreen({placesCount}: MainScreenProps): JSX.Element {
  return (
    <>
      <SvgSprite />

      <div className='page page--gray page--main'>
        <Header isAuth showNav />

        <main className='page__main page__main--index'>
          <h1 className='visually-hidden'>Cities</h1>
          <div className='tabs'>
            <Locations />
          </div>
          <Cities placesCount={placesCount} />
        </main>
      </div>
    </>
  );
}

export default MainScreen;
