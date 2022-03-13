import {MouseEvent} from 'react';
import {Hotel} from '../../../types/hotel';
import PlaceCard from '../place-card/place-card';

type PlaceCardsListProps = {
  cards: Hotel[];
  onCardHover: (e: MouseEvent<HTMLDivElement>, id: number) => void;
  onCardHoverReset: (e: MouseEvent<HTMLDivElement>) => void;
}

function PlaceCardsList({cards, onCardHover, onCardHoverReset}: PlaceCardsListProps): JSX.Element {
  return (
    <>
      {cards.map((card) => (
        <PlaceCard
          key={card.id}
          onCardHover={onCardHover}
          onCardHoverReset={onCardHoverReset}
          hotel={card}
          wrapClass='cities__place-card'
          imageClass='cities__image-wrapper'
          imageSize='medium'
        />
      ))}
    </>
  );
}

export default PlaceCardsList;
