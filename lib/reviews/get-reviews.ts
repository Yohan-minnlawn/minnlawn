import "server-only";

import { fallbackReviews } from "./fallback";
import { getGooglePlaceReviews } from "./google-places";
import type { CustomerReview } from "./types";

export async function getCustomerReviews(): Promise<CustomerReview[]> {
    if (!process.env.GOOGLE_PLACES_API_KEY) {
  return fallbackReviews;
}

  try {
    const reviews = await getGooglePlaceReviews();

    if (reviews.length === 0) {
      return fallbackReviews;
    }

    return reviews.slice(0, 3);
  } catch (error) {
    console.error("Unable to load Google reviews:", error);
    return fallbackReviews;
  }
}