import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, X } from 'lucide-react';
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
                      href="https://x.com/inspirefy_daily" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/anshthakur_ig/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://github.com/anshthakur-GH" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-xai-blue/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027 0.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
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
