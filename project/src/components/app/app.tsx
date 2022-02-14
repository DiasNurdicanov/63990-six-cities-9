import MainScreen from '../views/main-screen/main-screen';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return <MainScreen placesCount={placesCount}  />;
}

export default App;
