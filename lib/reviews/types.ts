export type CustomerReview = {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  publishedAt?: string;
  relativePublishedAt?: string;
  source: "google";
};