import {Link} from 'react-router-dom';

import Layout from '../../common/layout/layout';

function NotFoundScreen(): JSX.Element {
  return (
    <Layout
      pageClassName='page--gray page--login'
      mainElementClassName='page__main--login'
      showNav={false}
    >
      <div className='page__login-container container'>
        <section className='login form'>
          <h1 className='login__title'>404. Page not found</h1>
          <Link to='/' className='button form__submit'>Go to main page</Link>
        </section>
      </div>
    </Layout>
  );
}

export default NotFoundScreen;
