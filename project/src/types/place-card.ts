import {MouseEvent} from 'react';

export type PlaceCardProps = {
  id: number,
  title: string,
  type: string,
  price: number,
  rating: number,
  image: string,
  isFavorite: boolean,
  isPremium: boolean,
  city?: string,
  wrapMod?: string,
  imageMod?: string,
  infoMod?: string,
  imageWidth?: string,
  imageHeight?: string,
  onCardHover?: (e: MouseEvent<HTMLDivElement>, id: number) => void
}
