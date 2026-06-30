import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const submitData = new FormData();
    submitData.append("access_key", "832a16fa-fc9a-43bb-935c-ba69c49425d9");
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("subject", `New Inquiry: ${formData.subject || 'Website Contact'}`); // Email Subject Line
    submitData.append("Inquiry Subject", formData.subject); // Shows in the email body table
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Thanks for contacting us, we will reply soon!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // clear form
      } else {
        setStatus('An error occurred. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
      console.error("Error submitting form: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          .msl-bg-navy { background-color: #1a2a4a; }
          .msl-bg-gray { background-color: #f8fafc; }
          .msl-navy { color: #1a2a4a; }
          .msl-crimson { color: #c0001a; }
          
          .breadcrumb-link {
            color: #a0aec0;
            text-decoration: none;
            transition: color 0.2s;
          }
          .breadcrumb-link:hover {
            color: #ffffff;
          }

          .contact-info-box {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .contact-info-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            border-color: #c0001a;
          }
          .contact-info-box i {
            font-size: 32px;
            color: #c0001a;
            margin-bottom: 15px;
            background: rgba(192,0,26,0.1);
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }
          .contact-info-box h3 {
            font-size: 20px;
            font-weight: 700;
            color: #1a2a4a;
            margin-bottom: 15px;
          }
          .contact-info-box p {
            font-size: 15px;
            color: #4a5568;
            line-height: 1.6;
            margin: 0;
          }

          .contact-form-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid #e2e8f0;
          }

          .form-control {
            border: 1px solid #cbd5e1;
            padding: 12px 15px;
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            margin-bottom: 20px;
            width: 100%;
          }
          .form-control:focus {
            border-color: #c0001a;
            box-shadow: 0 0 0 3px rgba(192,0,26,0.1);
            outline: none;
          }

          .btn-submit {
            background: #c0001a;
            color: #ffffff;
            padding: 14px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 700;
            transition: all 0.3s ease;
            width: 100%;
            cursor: pointer;
          }
          .btn-submit:hover {
            background: #a00015;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(192,0,26,0.3);
          }
          .btn-submit:disabled {
            background: #94a3b8;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
          }

          .status-message {
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
            font-weight: 600;
          }
          .status-success {
            background: #dcfce7;
            color: #166534;
            border: 1px solid #bbf7d0;
          }
          .status-error {
            background: #fee2e2;
            color: #991b1b;
            border: 1px solid #fecaca;
          }
        `}
      </style>

      {/* Breadcrumb */}
      <div style={{ background: '#1a2a4a', paddingTop: '75px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <span style={{ color: '#a0aec0', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
            <Link to="/" className="breadcrumb-link">Home</Link> <span style={{ margin: '0 8px' }}>&gt;</span> 
            <span style={{ color: '#ffffff', fontWeight: '500' }}>Contact Us</span>
          </span>
        </div>
      </div>

      <main id="main" className="msl-bg-gray">
        <section style={{ padding: '60px 0' }}>
          <div className="container" data-aos="fade-up">
            
            <div className="text-center mb-5">
              <span style={{ display: 'inline-block', background: 'rgba(192,0,26,0.1)', color: '#c0001a', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '30px', marginBottom: '15px' }}>
                GET IN TOUCH
              </span>
              <h2 className="msl-navy" style={{ fontSize: '36px', fontWeight: '800', marginBottom: '15px' }}>
                Contact Us
              </h2>
              <p style={{ color: '#4a5568', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                Just send us your questions or concerns by starting a new case and we will give you the help you need.
              </p>
            </div>

            <div className="row g-5">
              {/* Left Column: Contact Info */}
              <div className="col-lg-5">
                <div className="contact-info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>
                    T-Hub, Hyderabad, Telangana, India<br />
                    HSR Layout, Bangalore, Karnataka, India 560102
                  </p>
                </div>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="contact-info-box" style={{ padding: '20px' }}>
                      <i className="bx bx-envelope" style={{ width: '45px', height: '45px', fontSize: '24px' }}></i>
                      <h3 style={{ fontSize: '18px' }}>Email Us</h3>
                      <p style={{ fontSize: '13px' }}>info@microsyslogic.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-info-box" style={{ padding: '20px' }}>
                      <i className="bx bx-phone-call" style={{ width: '45px', height: '45px', fontSize: '24px' }}></i>
                      <h3 style={{ fontSize: '18px' }}>Call Us</h3>
                      <p style={{ fontSize: '13px' }}>+91 9876543210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="col-lg-7">
                <div className="contact-form-card">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <input type="text" name="name" className="form-control" placeholder="Name *" required value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Mail *" required value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="phone" className="form-control" placeholder="Phone *" required value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="col-md-12">
                        <input type="text" name="subject" className="form-control" placeholder="Subject *" required value={formData.subject} onChange={handleChange} />
                      </div>
                      <div className="col-md-12">
                        <textarea name="message" className="form-control" placeholder="Your Message *" rows="6" required value={formData.message} onChange={handleChange}></textarea>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn-submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Submit Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  {status && (
                    <div className={`status-message ${status.includes('Thanks') ? 'status-success' : 'status-error'}`}>
                      {status}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
