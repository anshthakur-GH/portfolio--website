import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, X as XIcon, Instagram, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map the Google Form entry IDs to our form state keys
    const fieldMap: { [key: string]: string } = {
      'entry.2094880993': 'name',
      'entry.727444548': 'email',
      'entry.1384737315': 'message'
    };
    setFormData(prev => ({
      ...prev,
      [fieldMap[name] || name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeoEq2WD0FwZKGEhGau1nk7uTYQlxnpzQwLL6CLIdMYLEfdCA/formResponse';

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.2094880993', formData.name);
    formDataToSubmit.append('entry.727444548', formData.email);
    formDataToSubmit.append('entry.1384737315', formData.message);

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Message sent successfully!'
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="section-padding -mt-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pb-8 sm:pb-12">
        <div ref={ref} className={`max-w-5xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Have a question or interested in working together? Reach out below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10">
            <div className="lg:col-span-2">
              <div className="h-full p-4 sm:p-6 lg:p-8 bg-card rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 sm:mr-4">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Drop a Message</h3>
                </div>

                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Looking to collaborate or have questions about my services? Send me a message
                  and I'll respond as soon as possible.
                </p>

                <div className="border-t border-white/10 pt-4 sm:pt-6">
                  <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Connect with me</h4>
                  <div className="space-y-2 mb-4">
                    <a href="mailto:mailtoanshthakur@gmail.com" className="block text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                      mailtoanshthakur@gmail.com
                    </a>
                    <a href="mailto:inspirefybusiness@gmail.com" className="block text-gray-400 hover:text-primary transition-colors text-sm sm:text-base">
                      inspirefybusiness@gmail.com
                    </a>
                  </div>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href="https://x.com/anshthakur_x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/anshthakur_ig/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://github.com/anshthakur-GH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ansh-singh-431425299/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="entry.2094880993"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="entry.727444548"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="entry.1384737315"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-card border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                    placeholder="Enter your message"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 transition-opacity text-white font-medium text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {status.message && (
                    <p className={`text-sm ${status.success ? 'text-green-400' : 'text-red-400'} text-center sm:text-left`}>
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
