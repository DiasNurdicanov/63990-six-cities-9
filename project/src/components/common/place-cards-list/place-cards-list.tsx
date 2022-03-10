import { MouseEvent } from 'react';
import { Hotel } from '../../../types/hotel';
import PlaceCard from '../place-card/place-card';

type PlaceCardsListProps = {
  cards: Hotel[];
  onCardHover: (e: MouseEvent<HTMLDivElement>, id: number) => void;
  resetActiveCard: (e: MouseEvent<HTMLDivElement>) => void;
}

function PlaceCardsList({cards, onCardHover, resetActiveCard}: PlaceCardsListProps): JSX.Element {
  return (
    <>
      {cards.map((card) => (
        <PlaceCard
          key={card.id}
          onCardHover={onCardHover}
          onCardHoverReset={resetActiveCard}
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
