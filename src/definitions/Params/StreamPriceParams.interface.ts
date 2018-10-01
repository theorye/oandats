export interface StreamPriceParams {
  instruments: string; //	List of InstrumentName (csv)	List of Instruments to stream Prices for. [required]
  snapshot?: boolean; //	Flag that enables/disables the sending of a pricing snapshot when initially connecting to the stream. [default=True]
}
