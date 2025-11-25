import React from 'react';
import { MapPin, Phone, Mail, Send, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-12">
      
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-2 uppercase italic tracking-tighter">
           Get In <span className="text-rez-purple underline decoration-4 decoration-white underline-offset-8">Touch</span>
        </h2>
        <p className="text-xl font-bold text-gray-400 font-mono mt-4">{'//'} WE ARE LISTENING</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-rez-purple text-white p-8 border-2 border-white shadow-neo-white sticker-2">
            <div className="flex items-start gap-4">
               <MapPin size={40} className="shrink-0 text-black fill-white" />
               <div>
                  <h3 className="text-2xl font-black uppercase mb-2">Location</h3>
                  <p className="font-bold leading-relaxed text-lg">
                    Medinipur College (Autonomous)<br/>
                    Dept of Computer Applications<br/>
                    Kolkata Road, Midnapore - 721101
                  </p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black p-6 border-2 border-white hover:bg-white hover:text-black transition-colors group">
              <Phone size={32} className="mb-4 text-rez-pink group-hover:text-black" />
              <h4 className="text-xl font-black uppercase">Phone</h4>
              <p className="font-mono text-sm font-bold">+91 3222 275 847</p>
            </div>

            <div className="bg-black p-6 border-2 border-white hover:bg-white hover:text-black transition-colors group">
              <Mail size={32} className="mb-4 text-rez-pink group-hover:text-black" />
              <h4 className="text-xl font-black uppercase">Email</h4>
              <p className="font-mono text-sm font-bold">bca@medinipur.ac.in</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 border-4 border-rez-purple shadow-[8px_8px_0px_#a855f7] relative">
          <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-2 font-black uppercase border-2 border-white">
             Write To Us
          </div>
          
          <form className="space-y-6 mt-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-black uppercase">Name</label>
                <input type="text" className="w-full bg-gray-100 border-2 border-black p-3 text-black focus:bg-rez-pink focus:text-white focus:placeholder-white font-bold outline-none transition-colors" placeholder="YOUR NAME" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-black uppercase">Email</label>
                <input type="email" className="w-full bg-gray-100 border-2 border-black p-3 text-black focus:bg-rez-pink focus:text-white focus:placeholder-white font-bold outline-none transition-colors" placeholder="EMAIL ADDRESS" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black text-black uppercase">Subject</label>
              <select className="w-full bg-gray-100 border-2 border-black p-3 text-black font-bold outline-none uppercase">
                <option>Admission Inquiry</option>
                <option>Student Support</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-black uppercase">Message</label>
              <textarea rows={4} className="w-full bg-gray-100 border-2 border-black p-3 text-black font-bold outline-none resize-none" placeholder="TYPE YOUR MESSAGE HERE..."></textarea>
            </div>

            <button className="w-full bg-black text-white font-black py-4 border-2 border-black hover:bg-rez-purple hover:border-rez-purple hover:shadow-[4px_4px_0px_black] transition-all flex items-center justify-center gap-2 text-xl uppercase">
              <Send size={20} strokeWidth={3} /> Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Map Placeholder */}
      <div className="mt-16 w-full h-80 border-4 border-white bg-gray-900 grayscale hover:grayscale-0 transition-all duration-500 relative group overflow-hidden">
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.584766327464!2d87.30873131533724!3d22.42777798525754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d43f076610001%3A0x63342371424d5435!2sMedinipur%20College!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{border:0, filter: 'invert(90%) contrast(120%)'}} 
             allowFullScreen 
             loading="lazy"
             title="College Map"
           ></iframe>
           <div className="absolute inset-0 bg-rez-purple/20 pointer-events-none group-hover:bg-transparent transition-colors"></div>
           <div className="absolute bottom-4 left-4 bg-white border-2 border-black px-4 py-2 font-black uppercase text-black flex items-center gap-2 shadow-[4px_4px_0px_black]">
              <Globe size={18} /> Locate_Us
           </div>
      </div>
    </div>
  );
};

export default Contact;