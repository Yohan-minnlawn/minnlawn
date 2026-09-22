import "server-only";

import { fallbackReviews } from "./fallback";
import { getGoogleBusinessReviews } from "./google-business-profile";
import type { CustomerReview } from "./types";

export async function getCustomerReviews(): Promise<CustomerReview[]> {
  const requiredEnvironmentVariables = [
    process.env.GOOGLE_BUSINESS_CLIENT_ID,
    process.env.GOOGLE_BUSINESS_CLIENT_SECRET,
    process.env.GOOGLE_BUSINESS_REFRESH_TOKEN,
    process.env.GOOGLE_BUSINESS_ACCOUNT_ID,
    process.env.GOOGLE_BUSINESS_LOCATION_ID,
  ];

  if (requiredEnvironmentVariables.some((value) => !value)) {
    return fallbackReviews;
  }

  try {
    const reviews = await getGoogleBusinessReviews();

    if (reviews.length === 0) {
      return fallbackReviews;
    }

    return reviews.slice(0, 3);
  } catch (error) {
    console.error("Unable to load Google Business Profile reviews:", error);
    return fallbackReviews;
  }
}