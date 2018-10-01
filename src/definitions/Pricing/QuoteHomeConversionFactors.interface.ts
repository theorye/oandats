import { DecimalNumber } from "../Primitives";

// QuoteHomeConversionFactors represents the factors that can be used used to convert quantities of a Price’s Instrument’s quote currency into the Account’s home currency.
export interface QuoteHomeConversionFactors {
  //
  // The factor used to convert a positive amount of the Price’s Instrument’s
  // quote currency into a positive amount of the Account’s home currency.
  // Conversion is performed by multiplying the quote units by the conversion
  // factor.
  //
  positiveUnits: DecimalNumber;

  //
  // The factor used to convert a negative amount of the Price’s Instrument’s
  // quote currency into a negative amount of the Account’s home currency.
  // Conversion is performed by multiplying the quote units by the conversion
  // factor.
  //
  negativeUnits: DecimalNumber;
}
