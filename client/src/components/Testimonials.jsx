import React from 'react';

const testimonials = [
  {
    quote: "Heritier transformed our complex logistics tracking workflow into a real-time, highly intuitive dashboard. His full-stack engineering expertise, attention to UI details, and clean code architecture are truly top tier.",
    author: "Olivier N.",
    role: "Fleet Operations Manager",
    company: "Logistics Dispatch Hub",
    project: "Delivery Truck System",
    avatarBg: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
    initials: "ON",
    rating: 5,
    verified: true
  },
  {
    quote: "The Medifix portal design and front-end execution exceeded our highest expectations. Heritier communicates effectively, solves architectural challenges independently, and delivers pixel-perfect React applications on time.",
    author: "Dr. A. Mukamana",
    role: "Healthcare Tech Director",
    company: "Medifix Telemedicine",
    project: "Medifix Healthcare Portal",
    avatarBg: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    initials: "AM",
    rating: 5,
    verified: true
  },
  {
    quote: "Working with Heritier on embedded C++ sensors and real-time React WebSocket dashboards was seamless. He bridges hardware telemetry and sleek modern web interfaces effortlessly.",
    author: "Eric N.",
    role: "Senior IoT Systems Architect",
    company: "Smart Home IoT Systems",
    project: "Smart IoT Telemetry Hub",
    avatarBg: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    initials: "EN",
    rating: 5,
    verified: true
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary" id="testimonials" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">Client & Peer Feedback</span>
          <h2 className="section-title">Endorsements & Recommendations</h2>
        </div>

        {/* Highlight Stats Bar */}
        <div className="testimonials-stats-bar reveal active">
          <div className="t-stat-item">
            <span className="t-stat-number gradient-text">5.0</span>
            <div className="testimonial-stars" style={{ display: 'inline-flex' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" fill="#f59e0b" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <span>Average Score</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }}></div>
          <div className="t-stat-item">
            <span className="t-stat-number gradient-text">100%</span>
            <span>On-Time Delivery</span>
          </div>
          <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }}></div>
          <div className="t-stat-item">
            <span className="t-stat-number gradient-text">Verified</span>
            <span>Project Feedback</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card reveal active">
              {/* Background Watermark Quote */}
              <div className="testimonial-watermark-quote">“</div>

              {/* Header Badge & Rating */}
              <div className="testimonial-card-header">
                <span className="testimonial-project-badge">{t.project}</span>
                <div className="testimonial-rating-wrap">
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" fill="#f59e0b" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="testimonial-quote-text">"{t.quote}"</p>

              {/* Author Footer */}
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar" style={{ background: t.avatarBg }}>
                  {t.initials}
                  {t.verified && (
                    <span className="testimonial-verified-badge" title="Verified Endorsement">
                      <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                  )}
                </div>
                <div>
                  <div className="testimonial-name-row">
                    <h4 className="testimonial-name">{t.author}</h4>
                  </div>
                  <div className="testimonial-company">{t.company}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
