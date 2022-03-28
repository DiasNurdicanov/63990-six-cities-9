import {useState, MouseEvent} from 'react';
import classNames from 'classnames';

import {setSortType} from '../../../store/main-screen/main-screen';

import {SortingType} from '../../../const/sorting';
import {useAppDispatch, useAppSelector} from '../../../hooks/';


function Sorting() {
  const {sortType} = useAppSelector(({MAIN_SCREEN}) => MAIN_SCREEN);
  const [opened, setOpened] = useState(false);

  const dispatch = useAppDispatch();

  const handleSetSortType = (newSortType: SortingType) =>  {
    dispatch(setSortType(newSortType));
    setOpened(false);
  };

  const optionsClassName = classNames('places__options', 'places__options--custom', {
    'places__options--opened': opened,
  });

  const handleToggleClick = (e: MouseEvent<HTMLDivElement>) => setOpened(!opened);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by&nbsp;</span>
      <span className='places__sorting-type' tabIndex={0} onClick={handleToggleClick}>
        {sortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={optionsClassName}>
        {Object.values(SortingType).map((type) => (
          <li
            key={type}
            className={
              classNames('places__option', {
                'places__option--active': sortType === type,
              })
            }
            tabIndex={0}
            onClick={() => handleSetSortType(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
