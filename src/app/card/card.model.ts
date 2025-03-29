export interface Card {
  /** The current value for the card. */
  current: any;
  /** The previous value for the card. */
  previous: any;
  /** The unique identifier for the card. */
  id: string;
  /** The title of the card. */
  title: string;
  /** The image path for the card. */
  imgPath: string;
}