import Section from './Section';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch." className="bg-foreground text-white">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-medium mb-6">Let's work together.</h3>
          <p className="text-gray-400 mb-12 leading-relaxed max-w-md">
            I'm currently available for freelance work or full-time roles. If you have a project that needs some creative magic, I'd love to hear about it.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">shubnegi1004@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Rishikesh, Uttarakhand</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form 
            action="https://formsubmit.co/shubnegi1004@gmail.com" 
            method="POST" 
            className="space-y-6"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows="4" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-white text-foreground font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
