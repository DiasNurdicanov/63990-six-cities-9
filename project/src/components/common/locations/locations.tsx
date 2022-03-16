import classNames from 'classnames';

import {setCity} from '../../../store/main-screen/main-screen';

import {Cities} from '../../../const/cities';
import {CitiesCoordsType} from '../../../types/hotel';
import {useAppDispatch, useAppSelector} from '../../../hooks/';

type LocationProps = {
  cities: CitiesCoordsType
}

function Locations({cities}: LocationProps): JSX.Element {
  const {city} = useAppSelector(({MAIN_SCREEN}) => MAIN_SCREEN);

  const dispatch = useAppDispatch();

  const onClick = (newCity: Cities) =>  {
    const newActiveCity = cities[newCity];

    if (newActiveCity) {
      dispatch(setCity(newActiveCity));
    }
  };

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {Object.values(Cities).map((citiesItem: Cities) => (
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
