import {render, screen} from '@testing-library/react';

import RatingStarItem from './rating-star-item';

describe('Component: RatingStarItem', () => {
  it('should render correctly', () => {
    render(<RatingStarItem id={1} isChecked onChangeHandler={jest.fn()} />);

    expect(screen.getByTestId('rating-item')).toBeInTheDocument();
  });
});
