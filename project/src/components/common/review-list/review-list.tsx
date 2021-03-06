import ReviewItem from '../review-item/review-item';

import {Review} from '../../../types/review';

type ReviewListProps = {
  items: Review[];
}

function ReviewList(props: ReviewListProps): JSX.Element {
  const {items} = props;

  return (
    <ul className='reviews__list'>
      {items.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

export default ReviewList;
