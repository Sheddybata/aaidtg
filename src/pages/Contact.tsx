import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AppProvider } from '@/contexts/AppContext';
import SiteHeader from '@/components/SiteHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email content
      const emailContent = `
New Contact Form Submission from African Ai DTG Website

Name: ${formData.name}
Company: ${formData.company || 'Not provided'}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

---
This message was sent from the African Ai DTG contact form.
      `;

      // Create mailto link with pre-filled content
      const mailtoLink = `mailto:contact@aaidtg.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailContent)}`;
      
      // Open email client
      window.open(mailtoLink);
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-3 sm:mb-4 bg-blue-600 text-white text-sm sm:text-base">
              Contact Us
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent leading-tight pb-2">
              Let's Build Together
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2">
              Reach out to discuss your project, explore partnership opportunities, or learn more about our work.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <Card className="bg-white/10 border-gray-300">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-white">Get In Touch</CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name" 
                          className="bg-white/20 border-gray-300 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-white">Company</Label>
                        <Input 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name" 
                          className="bg-white/20 border-gray-300 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com" 
                          className="bg-white/20 border-gray-300 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+234 XXX XXX XXXX" 
                          className="bg-white/20 border-gray-300 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-white">How can we help? *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, requirements, or any questions you have..." 
                        className="bg-white/20 border-gray-300 text-white placeholder:text-gray-400 min-h-[120px]"
                        required
                      />
                    </div>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <p className="text-green-300 text-sm">
                          ✓ Thank you! Your email client should open with a pre-filled message. Please send it to complete your inquiry.
                        </p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <p className="text-red-300 text-sm">
                          ✗ There was an error processing your request. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Opening Email...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                <Card className="bg-white/10 border-gray-300">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-white">Contact Information</CardTitle>
                    <CardDescription className="text-gray-400 text-sm sm:text-base">
                      Get in touch with us through any of these channels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Email</h3>
                        <p className="text-blue-400 text-sm sm:text-base break-all">contact@aaidtg.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Phone</h3>
                        <p className="text-green-400 text-sm sm:text-base">+234 81 496 49 942</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold text-sm sm:text-base">Address</h3>
                        <p className="text-purple-400 text-sm sm:text-base">Off Gombole Road, Kwajaffa Road, Maiduguri, Borno State</p>
                      </div>
                    </div>
                    
                    {/* Social Media */}
                    <div className="pt-4">
                      <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
                      <div className="flex space-x-3 sm:space-x-4">
                        <a 
                          href="https://facebook.com/africanai-dtg" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a 
                          href="https://linkedin.com/company/african-ai-dtg" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                        >
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="bg-white/10 border-gray-300">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-white">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-gray-300">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
            <img src="/Transparent African Ai DTG logo.png" alt="African Ai DTG" className="h-8" />
            <p className="text-gray-400">© 2024 African Ai DTG. A Legacy of Resilience. A Future of Innovation.</p>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
};

export default Contact;
