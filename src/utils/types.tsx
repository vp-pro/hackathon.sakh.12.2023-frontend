export interface ISentimentArray {
  message: string;
  functionalSentiment: {
    positive: number;
    neutral: number;
    negative: number;
    speech: number;
    skip: number;
  } | null; // Change here
}
