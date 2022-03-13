import {RouteProps} from 'react-router-dom';
import classNames from 'classnames';
import SvgSprite from '../svg-sprite/svg-sprite';
import Header from '../header/header';
import Footer from '../footer/footer';

type LayoutProps = RouteProps & {
  showNav?: boolean;
  pageClassName?: string;
  mainElementClassName?: string;
  children: JSX.Element;
  hasFooter?: boolean;
}

function Layout(props: LayoutProps): JSX.Element {
  const {
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
        <Header showNav={showNav} />

        <main className={classNames('page__main', mainElementClassName)}>
          {children}
        </main>

        {hasFooter && <Footer />}
      </div>
    </>
  );
}

export default Layout;
