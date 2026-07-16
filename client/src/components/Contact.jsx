import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [feedback, setFeedback] = useState({ text: '', type: '' }); // type: 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ text: '', type: '' });

    let hasError = false;
    const newErrors = { name: false, email: false, message: false };

    if (!formData.name.trim()) {
      newErrors.name = true;
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = true;
      hasError = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = true;
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      setFeedback({ text: 'Please fill out all fields correctly.', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setFeedback({ text: 'Thank you, Heritier! Your message has been sent successfully.', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setFeedback({ text: err.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Contact info panel */}
          <div className="contact-info-panel reveal active">
            <h3 className="contact-info-title">Let's build something great.</h3>
            <p className="contact-info-subtitle">
              I am currently open to internship offers, part-time collaborations, and freelance projects. Feel free to shoot a message!
            </p>
            <div className="contact-details">
              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Email Me</h4>
                  <a href="mailto:heritier.serutamba@gmail.com">heritier.serutamba@gmail.com</a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h4>Location</h4>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal active reveal-delay-2">
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    style={{ borderColor: errors.name ? '#ef4444' : '' }}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: errors.email ? '#ef4444' : '' }}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control" 
                  placeholder="Write your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  style={{ borderColor: errors.message ? '#ef4444' : '' }}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ justifyContent: 'center' }} 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7-7-7M5 12h14"/>
                </svg>
              </button>
              {feedback.text && (
                <span id="form-feedback" className={`form-message ${feedback.type}`}>
                  {feedback.text}
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
