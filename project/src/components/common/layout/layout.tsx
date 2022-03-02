import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AuthorizationStatus } from '../../../const/auth-status';
import { RouteProps } from 'react-router-dom';
import classNames from 'classnames';

type LayoutProps = RouteProps & {
  authStatus?: AuthorizationStatus;
  showNav?: boolean;
  pageClassName?: string;
  mainElementClassName?: string;
  children: JSX.Element;
  hasFooter?: boolean;
}

function Layout(props: LayoutProps): JSX.Element {
  const {
    authStatus = AuthorizationStatus.Auth,
    showNav = true,
    pageClassName = '',
    mainElementClassName = '',
    hasFooter = false,
    children,
  } = props;

  return (
    <>
      <SvgSprite />

      <div className={classNames('page', pageClassName)}>
        <Header authStatus={authStatus} showNav={showNav} />

        <main className={classNames('page__main', mainElementClassName)}>
          {children}
        </main>

        {hasFooter && <Footer />}
      </div>
    </>
  );
}

export default Layout;
