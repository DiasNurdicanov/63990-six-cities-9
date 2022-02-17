import Layout from '../../common/layout/layout';

function FavoritesEmptyScreen(): JSX.Element {
  return (
    <Layout
      pageClassName='page--favorites-empty'
      mainElementClassName='page__main--favorites page__main--favorites-empty'
      hasFooter
    >
      <section className='favorites favorites--empty'>
        <h1 className='visually-hidden'>Favorites (empty)</h1>
        <div className='favorites__status-wrapper'>
          <b className='favorites__status'>Nothing yet saved.</b>
          <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
        </div>
      </section>
    </Layout>
  );
}

export default FavoritesEmptyScreen;
