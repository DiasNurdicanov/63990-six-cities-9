export type Hotel = {
  id: number,
  title: string,
  type: string,
  price: number,
  rating: number,
  image: string,
  isFavorite: boolean,
  isPremium: boolean,
  city: {
    name: string,
  },
}
