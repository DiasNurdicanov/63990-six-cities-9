import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Property from '../property/property';
import NearPlaces from '../near-places/near-places';

function PropertyScreen(): JSX.Element {
  return (
    <>
      <SvgSprite />

      <div className='page'>
        <Header isAuth showNav />

        <main className='page__main page__main--property'>
          <Property isAuth />

          <NearPlaces />
        </main>
      </div>
    </>
  );
}

export default PropertyScreen;
