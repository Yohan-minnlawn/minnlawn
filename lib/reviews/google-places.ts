import "server-only";
import type { CustomerReview } from "./types";

type GoogleText = {
  text?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  photoUri?: string;
};

export type GooglePlaceReview = {
  name?: string;
  rating?: number;
  text?: GoogleText;
  publishTime?: string;
  relativePublishTimeDescription?: string;
  authorAttribution?: GoogleAuthorAttribution;
};

export type GooglePlaceResponse = {
  reviews?: GooglePlaceReview[];
};

export function normalizeGoogleReviews(
  data: GooglePlaceResponse,
): CustomerReview[] {
  return (data.reviews ?? []).flatMap((review, index) => {
    const text = review.text?.text?.trim();

    if (!text) {
      return [];
    }

    const authorName =
      review.authorAttribution?.displayName?.trim() || "Google Customer";

    return [
      {
        id: review.name ?? `google-review-${index}`,
        authorName,
        authorPhotoUrl: review.authorAttribution?.photoUri,
        rating: review.rating ?? 0,
        text,
        publishedAt: review.publishTime,
        relativePublishedAt: review.relativePublishTimeDescription,
        source: "google",
      },
    ];
  });
}

const MINNLAWN_PLACE_ID = "ChIJVw9NHN4QWK8RnxA43cB0VKg";

export async function getGooglePlaceReviews(): Promise<CustomerReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    throw new Error("GOOGLE_PLACES_API_KEY is not configured.");
  }

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${MINNLAWN_PLACE_ID}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews",
      },
      next: {
        revalidate: 21600,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Google Places request failed: ${response.status}`);
  }

  const data = (await response.json()) as GooglePlaceResponse;

  return normalizeGoogleReviews(data);
}