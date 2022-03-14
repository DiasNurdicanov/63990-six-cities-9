import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {AuthorizationStatus} from '../../../const/auth-status';
import {logoutAction} from '../../../store/api-actions';

type HeaderProps = {
  showNav?: boolean
}

function Header({showNav}: HeaderProps): JSX.Element {
  const authStatus = useAppSelector(({authorizationStatus}) => authorizationStatus);

  const isAuth = authStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <a className='header__logo-link header__logo-link--active' href='/'>
              <img
                className='header__logo'
                src='img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </a>
          </div>

          {showNav && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href={isAuth ? '!#' : '/login'}>
                    <div className='header__avatar-wrapper user__avatar-wrapper'>
                    </div>
                    {isAuth ?
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span> :
                      <span className='header__login'>Sign in</span>}
                  </a>
                </li>

                {isAuth && (
                  <li className='header__nav-item'>
                    <Link
                      className="header__nav-link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      to='/'
                    >
                      <span className='header__signout'>Sign out</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
