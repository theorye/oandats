import { PositionBook } from "../Instrument/PositionBook.interface";

export interface PositionBookResponse {
  //
  // The instrument’s position book
  //
  positionBook: PositionBook;
}
