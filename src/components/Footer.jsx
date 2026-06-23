import React from 'react';
import { Instagram, Facebook, MessageSquare, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-brandText border-t border-white/5 pt-16 pb-10 relative overflow-hidden">
      {/* Cinematic grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Radial Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brandPrimary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-brandPrimary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* PREMIUM CONTACT CARDS                                                    */}
        {/* ========================================================================= */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Call Card */}
            <a
              href="tel:+919577773167"
              className="p-8 rounded-[24px] bg-[#111111]/80 border border-white/5 hover:border-brandPrimary/40 transition-all duration-500 shadow-gold-glow hover:shadow-gold-glow-hover flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brandMuted group-hover:text-brandPrimary group-hover:scale-110 transition-all duration-500 mb-4">
                <Phone className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="font-outfit text-xs font-bold uppercase tracking-wider text-brandMuted mb-2">CALL US</h3>
              <p className="font-outfit text-lg font-black text-brandText group-hover:text-brandPrimary transition-colors duration-300">
                +91 95777 73167
              </p>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919577773167"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-[24px] bg-[#111111]/80 border border-white/5 hover:border-[#25D366]/40 transition-all duration-500 shadow-gold-glow hover:shadow-[0_0_30px_rgba(37,211,102,0.15)] flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-all duration-500 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.01 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.4 1.26 4.84L2 22l5.3-1.39C8.7 21.4 10.3 22 12.01 22c5.52 0 10-4.48 10-10S17.53 2 12.01 2zm6.2 13.92c-.25.7-1.47 1.35-2.02 1.44-.48.08-1.1.15-3.2-.72-2.68-1.12-4.41-3.85-4.54-4.03-.13-.18-1.08-1.44-1.08-2.75 0-1.31.68-1.96.93-2.22.25-.26.54-.33.72-.33h.52c.17 0 .39-.01.6.5.21.52.72 1.76.78 1.89.06.13.1.28.01.46-.09.18-.13.28-.27.44-.14.16-.3.36-.43.48-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03.87.78 1.61 1.02 1.9 1.17.29.15.46.12.63-.07.17-.19.74-.86.94-1.16.2-.3.4-.25.67-.15s1.72.81 2.02.96c.3.15.5.22.58.35.08.13.08.75-.17 1.45z" />
                </svg>
              </div>
              <h3 className="font-outfit text-xs font-bold uppercase tracking-wider text-brandMuted mb-2">WHATSAPP</h3>
              <p className="font-outfit text-lg font-black text-brandText group-hover:text-[#25D366] transition-colors duration-300">
                Chat With Our Team
              </p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:karadudyog@gmail.com"
              className="p-8 rounded-[24px] bg-[#111111]/80 border border-white/5 hover:border-brandPrimary/40 transition-all duration-500 shadow-gold-glow hover:shadow-gold-glow-hover flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brandMuted group-hover:text-brandPrimary group-hover:scale-110 transition-all duration-500 mb-4">
                <Mail className="w-5 h-5 transition-transform duration-500 group-hover:translate-y-[-2px]" />
              </div>
              <h3 className="font-outfit text-xs font-bold uppercase tracking-wider text-brandMuted mb-2">EMAIL</h3>
              <p className="font-outfit text-lg font-black text-brandText group-hover:text-brandPrimary transition-colors duration-300 break-all">
                karadudyog@gmail.com
              </p>
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER LINKS                                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-t border-white/5 pt-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-4 text-left flex flex-col items-start">
            <a href="#home" className="flex items-center gap-1 mb-4 group">
              <span className="font-outfit text-xl font-extrabold tracking-wider text-brandText">
                KARAD UDYOG
              </span>
              <span className="text-brandPrimary text-xl font-black select-none animate-pulse">•</span>
            </a>
            <h4 className="font-outfit text-xs font-bold text-brandPrimary tracking-wider uppercase mb-4">
              Maharashtra's Premium Digital Growth Partner
            </h4>
            <p className="font-outfit text-xs text-brandMuted leading-relaxed max-w-sm mb-6">
              We help local businesses transform into recognizable brands through premium branding, websites, content creation, reels, AI videos, and performance marketing.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {[
                { name: 'Instagram', url: 'https://instagram.com/karadudyog', icon: Instagram },
                { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61590273634085', icon: Facebook },
                { name: 'WhatsApp', url: 'https://wa.me/919577773167', icon: (props) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                      <path d="M12.01 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.4 1.26 4.84L2 22l5.3-1.39C8.7 21.4 10.3 22 12.01 22c5.52 0 10-4.48 10-10S17.53 2 12.01 2zm6.2 13.92c-.25.7-1.47 1.35-2.02 1.44-.48.08-1.1.15-3.2-.72-2.68-1.12-4.41-3.85-4.54-4.03-.13-.18-1.08-1.44-1.08-2.75 0-1.31.68-1.96.93-2.22.25-.26.54-.33.72-.33h.52c.17 0 .39-.01.6.5.21.52.72 1.76.78 1.89.06.13.1.28.01.46-.09.18-.13.28-.27.44-.14.16-.3.36-.43.48-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03.87.78 1.61 1.02 1.9 1.17.29.15.46.12.63-.07.17-.19.74-.86.94-1.16.2-.3.4-.25.67-.15s1.72.81 2.02.96c.3.15.5.22.58.35.08.13.08.75-.17 1.45z"/>
                    </svg>
                  )
                }
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <div key={social.name} className="relative group">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/[0.08] hover:border-brandPrimary hover:text-brandPrimary flex items-center justify-center text-brandMuted transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,212,0,0.25)] cursor-pointer"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-outfit text-xs font-bold text-brandPrimary uppercase tracking-widest mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                'Branding & Identity',
                'Website Development',
                'Social Media Marketing',
                'Meta Ads',
                'Google Ads',
                'AI Video Creation',
                'Reel Production',
                'Lead Generation'
              ].map((item) => (
                <span
                  key={item}
                  className="font-outfit text-xs text-brandMuted hover:text-brandPrimary transition-colors duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-outfit text-xs font-bold text-brandPrimary uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Packages', href: '#packages' },
                { label: 'Contact', href: '#contact' },
                { label: 'FAQs', href: '#faq' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-outfit text-xs text-brandMuted hover:text-brandText transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-outfit text-xs font-bold text-brandPrimary uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-xs text-brandMuted leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brandPrimary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-brandMuted/50 uppercase">Phone</span>
                  <a href="tel:+919577773167" className="hover:text-brandText mt-0.5">+91 95777 73167</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-brandPrimary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-brandMuted/50 uppercase">WhatsApp</span>
                  <a href="https://wa.me/919577773167" target="_blank" rel="noopener noreferrer" className="hover:text-brandText mt-0.5">+91 95777 73167</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brandPrimary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-brandMuted/50 uppercase">Email</span>
                  <a href="mailto:karadudyog@gmail.com" className="hover:text-brandText mt-0.5 break-all">karadudyog@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandPrimary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-brandMuted/50 uppercase">Location</span>
                  <span className="mt-0.5">Karad, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL QUOTE PANEL                                                         */}
        {/* ========================================================================= */}
        <div className="border-t border-white/5 py-16 text-center max-w-4xl mx-auto">
          <blockquote className="font-devanagari text-lg md:text-2xl font-black text-brandText leading-relaxed mb-4 text-glow-gold">
            "मोठे ब्रँड जन्मतः मोठे नसतात. योग्य दृष्टी, सातत्यपूर्ण प्रयत्न आणि प्रभावी डिजिटल मार्केटिंग यांच्या मदतीने ते घडवले जातात."
          </blockquote>
          <cite className="font-outfit text-xs font-bold text-brandPrimary tracking-widest uppercase not-italic">
            — KARAD UDYOG
          </cite>
        </div>

        {/* ========================================================================= */}
        {/* COPYRIGHT                                                                 */}
        {/* ========================================================================= */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[10px] font-mono text-brandMuted/50">
          <span>© {currentYear} Karad Udyog • All Rights Reserved</span>
          <span className="uppercase tracking-wider">Premium Branding Agency • Maharashtra</span>
        </div>

        {/* Developer Credit Divider */}
        <div className="w-full h-[1px] bg-white/[0.08] mt-4" />

        {/* Developer Credit */}
        <div className="mt-4 text-center flex flex-col items-center gap-1 select-none">
          <p className="font-outfit text-xs md:text-sm text-white/60">
            Designed & Developed by{' '}
            <a
              href="https://digitaledgesolutions.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FFD400] font-semibold transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-brandPrimary"
            >
              Digital Edge Solutions, Karad
            </a>
          </p>
          <span className="font-outfit text-[10px] text-brandMuted/40 uppercase tracking-widest">
            Where brands grow digitally.
          </span>
        </div>

      </div>
    </footer>
  );
}
