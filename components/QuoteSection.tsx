export default function QuoteSection() {
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
              <span>Reliable lawn, landscape, and seasonal property care</span>
            </div>
          </div>
        </div>

        <div className="quote-form-card">
          <form className="quote-form">
            <div className="quote-form__row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" />
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
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>

            <div className="quote-form__row">
              <div className="form-field">
                <label htmlFor="property-type">Property Type</label>
                <select id="property-type" name="propertyType" defaultValue="">
                  <option value="" disabled>
                    Select property type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="lawn-care">Lawn Care</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="cleanup">Spring &amp; Fall Cleanup</option>
                  <option value="snow-removal">Snow Removal</option>
                  <option value="tree-removal">Small Tree Removal</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Tell Us About Your Project</label>
              <textarea id="message" name="message" rows={5} />
            </div>

            <button className="btn btn--primary" type="button">
              Request a Free Quote
            </button>

            <p className="quote-form__note">
              Form submission will be enabled before launch.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}