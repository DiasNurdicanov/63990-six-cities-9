import {MouseEvent} from 'react';
import {Hotel} from './hotel';

export type PlaceCardProps = {
  hotel: Hotel;
  wrapClass: string,
  imageClass: string,
  imageSize: 'small' | 'medium',
  infoClass?: string,
  onCardHover?: (e: MouseEvent<HTMLDivElement>, id: number) => void
}
