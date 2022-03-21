import {render, screen} from '@testing-library/react';
import {makeFakeReview} from '../../../utils/mocks';

import ReviewList from './review-list';

describe('Component: ReviewList', () => {
  const reviewsMock = [makeFakeReview()];
  const [firstReview] = reviewsMock;

  it('should render correctly', () => {
    render(<ReviewList items={reviewsMock} />);

    expect(screen.getByText(firstReview.user.name)).toBeInTheDocument();
  });
});
