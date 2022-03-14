import {useState, ChangeEvent, FormEvent} from 'react';
import {useAppDispatch} from '../../../hooks/';
import Layout from '../../common/layout/layout';
import {loginAction} from '../../../store/api-actions';
import {AuthData} from '../../../types/auth-data';

function LoginScreen(): JSX.Element {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const handleAuthDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setAuthData({
      ...authData,
      [name]: value,
    });
  };

  const dispatch = useAppDispatch();

  const onSubmit = (authorizationData: AuthData) => {
    dispatch(loginAction(authorizationData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: authData.email,
      password: authData.password,
    });
  };

  return (
    <Layout
      pageClassName='page--gray page--login'
      mainElementClassName='page__main--login'
      showNav={false}
    >
      <div className='page__login-container container'>
        <section className='login'>
          <h1 className='login__title'>Sign in</h1>
          <form
            className='login__form form'
            action='#'
            method='post'
            onSubmit={handleSubmit}
          >
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>E-mail</label>
              <input
                className='login__input form__input'
                type='email'
                name='email'
                placeholder='Email'
                value={authData.email}
                onChange={handleAuthDataChange}
                required
              />
            </div>
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>Password</label>
              <input
                className='login__input form__input'
                type='password'
                name='password'
                placeholder='Password'
                value={authData.password}
                onChange={handleAuthDataChange}
                required
              />
            </div>
            <button className='login__submit form__submit button' type='submit'>Sign in</button>
          </form>
        </section>
        <section className='locations locations--login locations--current'>
          <div className='locations__item'>
            <a className='locations__item-link' href='#!'>
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default LoginScreen;
