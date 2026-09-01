"use client";

import { FormEvent, useState } from "react";

const MAX_PHOTO_BYTES = 7 * 1024 * 1024;

export default function QuoteSection() {
  const [photoNames, setPhotoNames] = useState(["", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const photoFiles = ["photo1", "photo2", "photo3"]
      .map((name) => formData.get(name))
      .filter(
        (value): value is File =>
          value instanceof File && value.size > 0
      );

    const totalPhotoBytes = photoFiles.reduce(
      (total, file) => total + file.size,
      0
    );

    if (totalPhotoBytes > MAX_PHOTO_BYTES) {
      setSubmitStatus("error");
      setSubmitMessage(
        "The selected photos are too large. Please keep the combined photo size under 7 MB."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setPhotoNames(["", "", ""]);
      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your quote request has been sent to Minnlawn."
      );
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "We couldn't send your request. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="quote-section" id="quote">
      <div className="container quote-section__inner">
        <div className="quote-section__intro">
          <p className="eyebrow">Get Started</p>

          <h2>Let&apos;s Talk About Your Property</h2>

          <p>
            Tell us a little about your property and the services you&apos;re
            interested in. Minnlawn will follow up to discuss your project and
            provide a quote.
          </p>

          <div className="quote-section__details">
            <div>
              <strong>Residential &amp; Commercial</strong>
              <span>Property care throughout the Rochester area</span>
            </div>

            <div>
              <strong>Local Service</strong>
              <span>
                Reliable lawn, landscape, and seasonal property care
              </span>
            </div>
          </div>
        </div>

        <div className="quote-form-card">
          <form
            className="quote-form"
            name="quote-request"
            method="POST"
            encType="multipart/form-data"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="form-name"
              value="quote-request"
            />

            <div className="quote-form__honeypot" aria-hidden="true">
              <label htmlFor="bot-field">
                Don&apos;t fill this out if you&apos;re human
              </label>
              <input
                id="bot-field"
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="quote-form__row">
              <div className="form-field">
                <label htmlFor="name">
                  Name <span aria-hidden="true">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email <span aria-hidden="true">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="address">Property Address</label>

              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                placeholder="Street, City, ZIP Code"
              />
            </div>

            <div className="quote-form__row">
              <div className="form-field">
                <label htmlFor="property-type">Property Type</label>

                <select
                  id="property-type"
                  name="propertyType"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select property type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="service">Service</label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="lawn-care">Lawn Care</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="cleanup">
                    Spring &amp; Fall Cleanup
                  </option>
                  <option value="snow-removal">Snow Removal</option>
                  <option value="tree-removal">
                    Small Tree Removal
                  </option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us what you're looking for..."
              />
            </div>

            <div className="form-field">
              <span className="form-field__label">Upload Photos</span>

              <p className="form-field__help">
                Optional — add up to 3 photos that help show the property or
                project. Please keep the combined photo size under 7 MB.
              </p>

              {[1, 2, 3].map((photoNumber, index) => (
                <div className="photo-upload" key={photoNumber}>
                  <input
                    className="photo-upload__input"
                    id={`photo-${photoNumber}`}
                    name={`photo${photoNumber}`}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(event) => {
                      const fileName =
                        event.target.files?.[0]?.name ?? "";

                      setPhotoNames((currentNames) => {
                        const updatedNames = [...currentNames];
                        updatedNames[index] = fileName;
                        return updatedNames;
                      });
                    }}
                  />

                  <label
                    htmlFor={`photo-${photoNumber}`}
                    className="photo-upload__button"
                  >
                    Add Photo {photoNumber}
                  </label>

                  <span className="photo-upload__status">
                    {photoNames[index] || "No photo selected"}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="btn btn--primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Request a Free Quote"}
            </button>

            {submitMessage && (
              <p
                className={`quote-form__status quote-form__status--${submitStatus}`}
                role="status"
                aria-live="polite"
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}