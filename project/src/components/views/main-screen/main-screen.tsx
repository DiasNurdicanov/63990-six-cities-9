import Locations from '../../common/locations/locations';
import Cities from '../../common/cities/cities';

type MainScreenProps = {
  placesCount: number;
}

function MainScreen({placesCount}: MainScreenProps): JSX.Element {
  return (
    <>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <Locations />
      </div>
      <Cities placesCount={placesCount} />
    </>
  );
}

export default MainScreen;
