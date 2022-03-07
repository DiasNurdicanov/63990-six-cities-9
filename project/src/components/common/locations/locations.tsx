import {Cities, CitiesCoords} from '../../../const/cities';
import {useAppDispatch, useAppSelector} from '../../../hooks/';
import classNames from 'classnames';
import {setCity} from '../../../store/action';

type LocationProps = {
  cities: typeof Cities
}

function Locations({cities}: LocationProps): JSX.Element {
  const {city} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onClick = (newCity: string) =>  {
    const newActiveCity = CitiesCoords.find((el) => el.name === newCity);

    if (newActiveCity) {
      dispatch(setCity(newActiveCity));
    }
  };

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {Object.keys(cities).map((citiesItem) => (
          <li key={citiesItem} className='locations__item'>
            <a className={
              classNames(
                'locations__item-link',
                'tabs__item',
                {
                  'tabs__item--active': city.name === citiesItem,
                },
              )
            }
            onClick={() => onClick(citiesItem)}
            href='#!'
            >
              <span>{citiesItem}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
