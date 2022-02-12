import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Property from '../property/property';
import NearPlaces from '../near-places/near-places';

function PropertyNotLoggedScreen(): JSX.Element {
  return (
    <>
      <SvgSprite />

      <div className='page'>
        <Header isAuth={false} showNav />

        <main className='page__main page__main--property'>
          <Property isAuth={false} />

          <NearPlaces />
        </main>
      </div>
    </>
  );
}

export default PropertyNotLoggedScreen;
