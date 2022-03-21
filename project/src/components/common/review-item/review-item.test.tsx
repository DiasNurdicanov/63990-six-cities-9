import {render, screen} from '@testing-library/react';
import {makeFakeReview} from '../../../utils/mocks';

import ReviewItem from './review-item';

describe('Component: ReviewItem', () => {
  const reviewMock = makeFakeReview();

  it('should render correctly', () => {
    render(<ReviewItem review={reviewMock} />);

    expect(screen.getByText(reviewMock.user.name)).toBeInTheDocument();
  });
});
