import {SortingTypes} from '../../../const/sorting';
import {useAppDispatch, useAppSelector} from '../../../hooks/';
import classNames from 'classnames';
import {setSortType} from '../../../store/action';


function Sorting() {
  const {sortType} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onClick = (newSortType: string) =>  {
    dispatch(setSortType(newSortType));
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        Popular
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className='places__options places__options--custom places__options--opened'>
        {Object.keys(SortingTypes).map((type) => (
          <li
            key={type}
            className={
              classNames('places__option', {
                'places__option--active': sortType === type,
              })
            }
            tabIndex={0}
            onClick={() => onClick(type)}
          >
            {SortingTypes[type].name}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
