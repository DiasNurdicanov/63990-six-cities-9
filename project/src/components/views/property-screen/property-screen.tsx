import Layout from '../../common/layout/layout';
import Property from '../../common/property/property';
import NearPlaces from '../../common/near-places/near-places';

function PropertyScreen(): JSX.Element {
  return (
    <Layout
      mainElementClassName='page__main--property'
    >
      <>
        <Property />
        <NearPlaces />
      </>
    </Layout>
  );
}

export default PropertyScreen;
