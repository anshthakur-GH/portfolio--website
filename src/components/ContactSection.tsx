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
    <section id="contact" className="section-padding -mt-16 bg-xai-darkgray">
      <div className="container mx-auto px-8 pb-12">
        <div ref={ref} className={`max-w-5xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or interested in working together? Reach out below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="h-full p-6 lg:p-8 bg-xai-black rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-xai-blue/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-xai-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Drop a Message</h3>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Looking to collaborate or have questions about my services? Send me a message 
                  and I'll respond as soon as possible.
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-semibold mb-3">Connect with me</h4>
                  <div className="space-y-2 mb-4">
                    <a href="mailto:mailtoanshthakur@gmail.com" className="block text-gray-400 hover:text-xai-blue transition-colors">
                      mailtoanshthakur@gmail.com
                    </a>
                    <a href="mailto:inspirefybusiness@gmail.com" className="block text-gray-400 hover:text-xai-blue transition-colors">
                      inspirefybusiness@gmail.com
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://x.com/anshthakur_x" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <XIcon className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/anshthakur_ig/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/anshthakur-GH" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ansh-singh-431425299/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="entry.2094880993"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-xai-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-xai-blue transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="entry.727444548"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-xai-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-xai-blue transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="entry.1384737315"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-xai-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-xai-blue transition-colors resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-xai-blue to-xai-purple hover:opacity-90 transition-opacity text-white font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {status.message && (
                    <p className={`text-sm ${status.success ? 'text-green-400' : 'text-red-400'}`}>
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
