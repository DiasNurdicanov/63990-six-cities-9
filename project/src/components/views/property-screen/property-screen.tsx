import SvgSprite from '../../common/svg-sprite/svg-sprite';
import Header from '../../common/header/header';
import Property from '../../common/property/property';
import NearPlaces from '../../common/near-places/near-places';

function PropertyScreen(): JSX.Element {
  return (
    <>
      <SvgSprite />

      <div className='page'>
        <Header />

        <main className='page__main page__main--property'>
          <Property isAuth />

          <NearPlaces />
        </main>
      </div>
    </>
  );
}

export default PropertyScreen;
