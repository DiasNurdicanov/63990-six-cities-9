import { useState, MouseEvent } from 'react';
import { PlaceCardProps } from '../../../types/place-card';
import PlaceCard from '../place-card/place-card';

type PlaceCardsListProps = {
  cards: PlaceCardProps[];
}

function PlaceCardsList({cards}: PlaceCardsListProps): JSX.Element {
  const [, setActiveCard] = useState(0);

  const onCardHover = (e: MouseEvent<HTMLDivElement>, id: number) => setActiveCard(id);

  return (
    <>
      {cards.map((card) => <PlaceCard key={card.id} onCardHover={onCardHover} {...card} />)}
    </>
  );
}

export default PlaceCardsList;
