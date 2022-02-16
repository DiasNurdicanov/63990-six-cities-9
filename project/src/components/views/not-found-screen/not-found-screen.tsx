import SvgSprite from '../../common/svg-sprite/svg-sprite';
import Header from '../../common/header/header';
import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <SvgSprite />

      <div className='page page--gray page--login'>
        <Header showNav={false} />

        <main className='page__main page__main--login'>
          <div className='page__login-container container'>
            <section className='login form'>
              <h1 className='login__title'>404. Page not found</h1>
              <Link to='/' className='button form__submit'>Go to main page</Link>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default NotFoundScreen;
