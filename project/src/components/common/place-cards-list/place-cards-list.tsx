import { useState, MouseEvent } from 'react';
import { Hotel } from '../../../types/hotel';
import PlaceCard from '../place-card/place-card';

type PlaceCardsListProps = {
  cards: Hotel[];
}

function PlaceCardsList({cards}: PlaceCardsListProps): JSX.Element {
  const [, setActiveCard] = useState(0);

  const onCardHover = (e: MouseEvent<HTMLDivElement>, id: number) => setActiveCard(id);

  return (
    <>
      {cards.map((card) => (
        <PlaceCard
          key={card.id}
          onCardHover={onCardHover}
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
