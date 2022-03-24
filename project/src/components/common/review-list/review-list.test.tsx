import {render, screen} from '@testing-library/react';

import ReviewList from './review-list';

import {makeFakeReview} from '../../../utils/mocks';

describe('Component: ReviewList', () => {
  const reviewsMock = [makeFakeReview()];
  const [firstReview] = reviewsMock;

  it('should render correctly', () => {
    render(<ReviewList items={reviewsMock} />);

    expect(screen.getByText(firstReview.user.name)).toBeInTheDocument();
  });
});
