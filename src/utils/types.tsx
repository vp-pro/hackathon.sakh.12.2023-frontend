export interface ISentimentArray {
  message: string;
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
    speech: number;
    skip: number;
  } | null; // Change here
}
