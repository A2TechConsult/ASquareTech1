import { useState } from 'react';
import { FileCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner@2.0.3';
import { FadeInSection } from '../components/FadeInSection';

export function GDPRRequest() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedinUrl: '',
    requestType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.requestType) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Your GDPR request has been submitted successfully. We will respond within 30 days.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      linkedinUrl: '',
      requestType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 text-base font-light text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Privacy
            </Link>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900">
                  GDPR Data Request
                </h1>
              </div>
            </div>
            <p className="text-xl font-light text-gray-600">
              Make a request for a copy of your data, to have your data modified, or to have your 
              data removed from ASquared Technologies
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeInSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-base font-light text-gray-900 mb-3">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-base font-light text-gray-900 mb-3">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* LinkedIn Profile URL */}
              <div>
                <label htmlFor="linkedinUrl" className="block text-base font-light text-gray-900 mb-3">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Request Type */}
              <div>
                <label htmlFor="requestType" className="block text-base font-light text-gray-900 mb-3">
                  What type of GDPR request are you making? <span className="text-red-500">*</span>
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 focus:outline-none focus:border-gray-400 transition-colors bg-white"
                >
                  <option value="">Select request type</option>
                  <option value="copy">I'd like a copy of my data</option>
                  <option value="modification">I'd like to make a modification to my data</option>
                  <option value="removal">I'd like my data removed from ASquared Technologies</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-base font-light text-gray-900 mb-3">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Please provide any additional details about your request..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gray-900 text-white rounded-xl text-base font-light hover:bg-gray-800 transition-colors"
                >
                  Submit Request
                </button>
              </div>

              {/* Info Text */}
              <div className="pt-4">
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  We will process your GDPR request within 30 days in accordance with applicable data 
                  protection regulations. You will receive a confirmation email once your request has been received.
                </p>
              </div>
            </form>
          </FadeInSection>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeInSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-4">
                Your Rights Under GDPR
              </h2>
              <div className="space-y-4 text-base font-light text-gray-600">
                <p className="leading-relaxed">
                  Under the General Data Protection Regulation (GDPR), you have the right to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong className="text-gray-900">Access</strong> - Request a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong className="text-gray-900">Rectification</strong> - Request correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong className="text-gray-900">Erasure</strong> - Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong className="text-gray-900">Restriction</strong> - Request limitation of data processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong className="text-gray-900">Portability</strong> - Receive your data in a structured format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong className="text-gray-900">Objection</strong> - Object to processing of your personal data</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
