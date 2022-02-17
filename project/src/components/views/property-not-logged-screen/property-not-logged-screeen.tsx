import Layout from '../../common/layout/layout';
import Property from '../../common/property/property';
import NearPlaces from '../../common/near-places/near-places';
import { AuthorizationStatus } from '../../../const/auth-status';

function PropertyNotLoggedScreen(): JSX.Element {
  return (
    <Layout
      mainElementClassName='page__main--property'
      authStatus={AuthorizationStatus.NoAuth}
    >
      <>
        <Property authStatus={AuthorizationStatus.NoAuth} />
        <NearPlaces />
      </>
    </Layout>
  );
}

export default PropertyNotLoggedScreen;
