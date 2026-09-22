import "server-only";

import type { CustomerReview } from "./types";

type GoogleStarRating =
  | "STAR_RATING_UNSPECIFIED"
  | "ONE"
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE";

type GoogleBusinessReview = {
  name?: string;
  reviewId?: string;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
    isAnonymous?: boolean;
  };
  starRating?: GoogleStarRating;
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type GoogleBusinessReviewsResponse = {
  reviews?: GoogleBusinessReview[];
};

type GoogleTokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

const STAR_RATINGS: Record<GoogleStarRating, number> = {
  STAR_RATING_UNSPECIFIED: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

function formatReviewDate(value?: string) {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

async function getGoogleAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_BUSINESS_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_BUSINESS_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Google Business OAuth credentials are not configured.");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  const data = (await response.json()) as GoogleTokenResponse;

  if (!response.ok || !data.access_token) {
    throw new Error(
      `Unable to refresh Google access token: ${
        data.error_description ?? data.error ?? response.status
      }`,
    );
  }

  return data.access_token;
}

export async function getGoogleBusinessReviews(): Promise<CustomerReview[]> {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;

  if (!accountId || !locationId) {
    throw new Error("Google Business account or location ID is not configured.");
  }

  const accessToken = await getGoogleAccessToken();

  const response = await fetch(
    `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews?pageSize=50&orderBy=updateTime%20desc`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `Google Business Profile reviews request failed: ${response.status}`,
    );
  }

  const data = (await response.json()) as GoogleBusinessReviewsResponse;

  return (data.reviews ?? []).flatMap((review, index) => {
    const text = review.comment?.trim();

    if (!text) {
      return [];
    }

    const authorName =
      review.reviewer?.displayName?.trim() || "Google Customer";

    return [
      {
        id: review.reviewId ?? review.name ?? `google-review-${index}`,
        authorName,
        authorPhotoUrl: review.reviewer?.profilePhotoUrl,
        rating: STAR_RATINGS[review.starRating ?? "STAR_RATING_UNSPECIFIED"],
        text,
        publishedAt: review.createTime,
        relativePublishedAt: formatReviewDate(review.createTime),
        source: "google",
      },
    ];
  });
}