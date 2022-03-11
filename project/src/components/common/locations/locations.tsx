import {Cities} from '../../../const/cities';
import {useAppDispatch, useAppSelector} from '../../../hooks/';
import classNames from 'classnames';

import {setCity} from '../../../store/action';
import {CitiesCoordsType} from '../../../types/hotel';

type LocationProps = {
  cities: CitiesCoordsType
}

function Locations({cities}: LocationProps): JSX.Element {
  const {city} = useAppSelector((state) => state);

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
