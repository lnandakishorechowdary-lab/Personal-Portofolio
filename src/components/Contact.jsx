import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactData, personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  Clock,
  MapPin,
  Phone,
  Loader2
} from 'lucide-react';

const RECIPIENT_EMAIL = 'lnandakishorechowdary@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field-level error as user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    // 1. Name is required
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    }

    // 2. Email is required and must be valid
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    // 3. Subject is required
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required.';
    }

    // 4. Message is required
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions while sending
    if (status.submitting) return;

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Please fill in all required fields with valid details.' 
      });
      return;
    }

    // Clear errors & set sending state
    setFieldErrors({ name: '', email: '', subject: '', message: '' });
    setStatus({ submitting: true, submitted: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isPlaceholder = 
      serviceId === 'your_emailjs_service_id' || 
      templateId === 'your_emailjs_template_id' || 
      publicKey === 'your_emailjs_public_key';

    // Check if EmailJS credentials are configured in environment variables
    if (!serviceId || !templateId || !publicKey || isPlaceholder) {
      console.error(
        '[EmailJS Configuration Required]\n' +
        'To send real emails to lnandakishorechowdary@gmail.com, configure EmailJS in a .env file:\n' +
        '  VITE_EMAILJS_SERVICE_ID=your_actual_service_id\n' +
        '  VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id\n' +
        '  VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key\n\n' +
        'Then restart the Vite development server so Vite loads the new .env file.'
      );
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong. Please try again.'
      });
      return;
    }

    // Capture submission timestamp
    const submissionDate = new Date();
    const formattedTimestamp = submissionDate.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // Provide parameters matching standard and custom EmailJS templates
    const templateParams = {
      // Recipient information
      to_email: RECIPIENT_EMAIL,
      to_name: personalInfo.name || 'Lavu Nandakishore Chowdary',

      // Visitor information
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      visitor_name: formData.name.trim(),

      email: formData.email.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      visitor_email: formData.email.trim(),

      // Subject and message content
      subject: formData.subject.trim(),
      message: formData.message.trim(),

      // Date and time of submission
      submission_time: formattedTimestamp,
      date_time: formattedTimestamp,
      timestamp: formattedTimestamp
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Successful submission
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('[EmailJS Send Failed]:', err);
      // Strictly show failure message on error
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  const hasSocialLinks = personalInfo.socialLinks && 
    Object.values(personalInfo.socialLinks).some(link => link && typeof link === 'string' && link.trim() !== '' && !link.includes('[YOUR'));

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>{contactData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="section-subtitle">
            {contactData.sectionSubtitle}
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              <h3 className="contact-card-title">Contact Information</h3>
              <p className="contact-card-sub">
                Feel free to reach out directly through email or submit a message using the form.
              </p>

              <div className="contact-items-list">
                {/* Verified direct notification email */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-label">Email</span>
                    <a 
                      href={`mailto:${RECIPIENT_EMAIL}`} 
                      className="contact-value-link"
                    >
                      {RECIPIENT_EMAIL}
                    </a>
                    <span className="contact-detail-sub">Direct email for academic & project inquiries</span>
                  </div>
                </div>

                {contactData.infoCards && contactData.infoCards.map((item, idx) => (
                  <div key={idx} className="contact-item">
                    <div className="contact-icon-box">
                      {item.type === 'email' && <Mail size={18} />}
                      {item.type === 'phone' && <Phone size={18} />}
                      {item.type === 'location' && <MapPin size={18} />}
                    </div>
                    <div className="contact-item-details">
                      <span className="contact-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact-value-link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                      <span className="contact-detail-sub">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability Status Banner - only if provided */}
              {personalInfo.availabilityStatus && (
                <div className="contact-availability-banner">
                  <Clock size={16} className="clock-icon" />
                  <div>
                    <div className="avail-title">Availability Status</div>
                    <div className="avail-desc">{personalInfo.availabilityStatus}</div>
                  </div>
                </div>
              )}

              {/* Social Channels / Direct Email Action */}
              <div className="contact-socials-wrap">
                <span className="socials-heading">Direct Channels:</span>
                <div className="socials-icons-row">
                  <a 
                    href={`mailto:${RECIPIENT_EMAIL}`}
                    className="social-icon-btn"
                    aria-label={`Send email to ${RECIPIENT_EMAIL}`}
                    title="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                  {hasSocialLinks && personalInfo.socialLinks.github && !personalInfo.socialLinks.github.includes('[YOUR') && (
                    <a 
                      href={personalInfo.socialLinks.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon-btn"
                      aria-label="GitHub Profile"
                      title="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {hasSocialLinks && personalInfo.socialLinks.linkedin && !personalInfo.socialLinks.linkedin.includes('[YOUR') && (
                    <a 
                      href={personalInfo.socialLinks.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon-btn"
                      aria-label="LinkedIn Profile"
                      title="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {hasSocialLinks && personalInfo.socialLinks.twitter && !personalInfo.socialLinks.twitter.includes('[YOUR') && (
                    <a 
                      href={personalInfo.socialLinks.twitter} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon-btn"
                      aria-label="Twitter Profile"
                      title="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <div className="form-header">
                <div className="form-title-wrap">
                  <MessageSquare size={20} className="form-icon" />
                  <h3 className="form-title">Send a Message</h3>
                </div>
              </div>

              {/* Success Alert */}
              {status.submitted && (
                <div className="form-alert alert-success" role="status" aria-live="polite">
                  <CheckCircle size={18} className="alert-icon" />
                  <span>Message sent successfully. I'll get back to you soon.</span>
                </div>
              )}

              {/* Error Alert */}
              {status.error && (
                <div className="form-alert alert-error" role="alert" aria-live="assertive">
                  <AlertCircle size={18} className="alert-icon" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contactData.formPlaceholders?.name || "Your Name"}
                      className={`form-input ${fieldErrors.name ? 'input-error' : ''}`}
                      disabled={status.submitting}
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    />
                    {fieldErrors.name && (
                      <span id="name-error" className="field-error-text" role="alert">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contactData.formPlaceholders?.email || "Your Email Address"}
                      className={`form-input ${fieldErrors.email ? 'input-error' : ''}`}
                      disabled={status.submitting}
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    />
                    {fieldErrors.email && (
                      <span id="email-error" className="field-error-text" role="alert">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contactData.formPlaceholders?.subject || "Subject of inquiry"}
                    className={`form-input ${fieldErrors.subject ? 'input-error' : ''}`}
                    disabled={status.submitting}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.subject}
                    aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                  />
                  {fieldErrors.subject && (
                    <span id="subject-error" className="field-error-text" role="alert">
                      {fieldErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactData.formPlaceholders?.message || "Write your message here..."}
                    className={`form-input form-textarea ${fieldErrors.message ? 'input-error' : ''}`}
                    disabled={status.submitting}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  />
                  {fieldErrors.message && (
                    <span id="message-error" className="field-error-text" role="alert">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={status.submitting} 
                  className="btn btn-primary btn-lg submit-btn"
                  aria-busy={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <Loader2 size={18} className="spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-main-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
          width: 100%;
        }

        .contact-info-col,
        .contact-form-col {
          min-width: 0;
        }

        .contact-info-card, .contact-form-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-radius: var(--radius-lg);
          box-sizing: border-box;
          width: 100%;
        }

        .contact-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .contact-card-sub {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .contact-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item-details {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 0;
          word-break: break-word;
        }

        .contact-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value, .contact-value-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          transition: color var(--transition-fast);
        }

        .contact-value-link:hover {
          color: var(--accent-primary);
          text-decoration: underline;
        }

        .contact-detail-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .contact-availability-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-sm);
        }

        .clock-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .avail-title {
          font-size: 0.78rem;
          font-weight: 600;
          color: #34d399;
          text-transform: uppercase;
        }

        .avail-desc {
          font-size: 0.88rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .contact-socials-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .socials-heading {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .socials-icons-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--accent-primary);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Form Styling */
        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .form-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .form-icon {
          color: var(--accent-primary);
        }

        .form-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.95rem 1.15rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          line-height: 1.5;
          animation: fadeIn 0.25s ease;
        }

        .alert-icon {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .alert-success {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #6ee7b7;
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          width: 100%;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          width: 100%;
          min-width: 0;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .req {
          color: var(--accent-rose);
          font-weight: 700;
        }

        .form-input {
          width: 100%;
          box-sizing: border-box;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #f8fafc;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          font-family: inherit;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .form-input.input-error {
          border-color: rgba(239, 68, 68, 0.7);
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }

        .form-input:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .field-error-text {
          color: #fca5a5;
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 1.3;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          align-self: flex-start;
          width: auto;
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        .submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 860px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .contact-info-card, .contact-form-card {
            padding: 1.75rem 1.25rem;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
